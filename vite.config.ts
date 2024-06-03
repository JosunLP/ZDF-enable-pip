import { defineConfig } from "vite";
import path from "path";
import pkg from "./package.json";

export default defineConfig({
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "./src/index.ts",
      output: {
        entryFileNames: `${pkg.name}.user.js`,
        format: "es",
        dir: path.resolve(__dirname, "dist"),
      },
    },
    sourcemap: "inline",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".tsx", ".ts", ".js"],
  },
});
