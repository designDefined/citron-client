import { useState } from "react";

import { UnityInstanceContext } from "./UnityInstanceContext";

export const UnityInstanceProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [instance, setInstance] = useState<UnityInstance | null>(null);
  return (
    <UnityInstanceContext value={{ instance, setInstance }}>
      {children}
    </UnityInstanceContext>
  );
};
