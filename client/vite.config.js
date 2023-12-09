import dotenv from 'dotenv';
dotenv.config();

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const { PORT = 8081 } = process.env;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: `http://localhost:${PORT}`,
        changeOrigin: true,
      },
    },
  },
  build: {
    manifest: true,
    rollupOptions: {
      input: "./src/main.jsx",
    },
  }
})
