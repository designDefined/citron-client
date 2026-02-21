import { createContext, useContext } from "react";

export const UnityInstanceContext = createContext<{
  instance: UnityInstance | null;
  setInstance: (instance: UnityInstance) => void;
} | null>(null);

export const useUnityInstance = () => {
  const context = useContext(UnityInstanceContext);
  if (!context) {
    throw new Error(
      "useUnityInstance must be used within a UnityInstanceProvider",
    );
  }
  return context;
};
