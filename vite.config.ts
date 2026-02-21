import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // dev server 설정
    mimeTypes: {
      ".wasm": "application/wasm",
    },
  },
});
