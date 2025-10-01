import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Change from GitHub Pages path
  build: {
    outDir: 'dist',
    sourcemap: false
  },
  server: {
    port: 3000,
  }
})