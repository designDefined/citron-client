import clsx from "clsx";

import styles from "./App.module.scss";
import { GamePlayer } from "./components/GamePlayer/GamePlayer";

function App() {
  return (
    <div className={clsx(styles.App)}>
      <GamePlayer />
    </div>
  );
}

export default App;
