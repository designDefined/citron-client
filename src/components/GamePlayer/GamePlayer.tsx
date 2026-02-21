import clsx from "clsx";
import { useEffect, useRef } from "react";

import { useUnityInstance } from "../../contexts/UnityInstanceContext";
import { createUnityGame } from "../../utils/createUnityGame";
import styles from "./GamePlayer.module.scss";

export const GamePlayer = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { setInstance } = useUnityInstance();

  useEffect(() => {
    if (!canvasRef.current) return;
    createUnityGame(canvasRef.current).then(instance => {
      setInstance(instance);
    });
  }, [setInstance]);

  return (
    <div className={clsx(styles.GamePlayer)}>
      <canvas id="canvas" ref={canvasRef} />
    </div>
  );
};
