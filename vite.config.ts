import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // 👇 this injects a mock `process.env` object at build time
    'process.env': {}
  }
})
