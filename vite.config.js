import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // same port CRA used
    open: true,
  },
  build: {
    outDir: "dist", // ← use the standard Vite name
  },
});
