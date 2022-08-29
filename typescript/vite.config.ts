import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@helpers": path.resolve(__dirname, "./src/helpers"),
      "@composables": path.resolve(__dirname, "./vue/composables"),
      "@router": path.resolve(__dirname, "./src/router"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@public": path.resolve(__dirname, "./public"),
      "@views": path.resolve(__dirname, "./src/views"),
    },
  },
  plugins: [vue()],
})
