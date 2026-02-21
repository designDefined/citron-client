import { useMutation } from "@tanstack/react-query";
import clsx from "clsx";
import { useEffect } from "react";

import { api } from "./api";
import { postUsersMutation } from "./api/user";
import styles from "./App.module.scss";
import { GamePlayer } from "./components/GamePlayer/GamePlayer";
import { useUnityInstance } from "./contexts/UnityInstanceContext";

function App() {
  const { instance } = useUnityInstance();

  const { mutateAsync: register } = useMutation(postUsersMutation);

  useEffect(() => {
    if (!instance) return;

    const onlineInterval = () => {
      api
        .get("")
        .then(() => {
          instance.SendMessage("WebBridge", "OnOnline");
        })
        .catch(() => {
          instance.SendMessage("WebBridge", "OnOffline");
        });
    };

    const intervalId = window.setInterval(onlineInterval, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [instance, register]);

  return (
    <div className={clsx(styles.App)}>
      <GamePlayer />
    </div>
  );
}

export default App;
