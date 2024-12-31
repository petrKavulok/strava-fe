import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Replace 3000 with your preferred port number
    proxy: {
      '/api': {
        target: 'http://localhost:3001', // Your API server port
        changeOrigin: true,
      },
    },
  },
})
