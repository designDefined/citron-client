import "./style/index.css";

import { QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { queryClient } from "./api/query.ts";
import App from "./App.tsx";
import { UnityInstanceProvider } from "./contexts/UnityInstanceProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <UnityInstanceProvider>
        <App />
      </UnityInstanceProvider>
    </QueryClientProvider>
  </StrictMode>,
);
