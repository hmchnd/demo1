import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
  // Add these specific settings for GCS deployment
  base: "/", // Critical for correct asset paths
  build: {
    outDir: "dist",
    sourcemap: true,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name].[hash].[ext]",
        chunkFileNames: "assets/[name].[hash].js",
        entryFileNames: "assets/[name].[hash].js"
      }
    }
  },
  server:{

    port: parseInt(process.env.PORT) || 8080,
    host: true, // This allows it to accept external requests (important for Cloud Run)
    strictPort: true,
    allowedHosts: [
      "framsys-react-frontend-530349298365.asia-south2.run.app", // 👈 Add your Cloud Run domain here
    ],
  }
});