import react from "@vitejs/plugin-react";

import { defineConfig } from "vite";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: "./build/stats.html",
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
});
