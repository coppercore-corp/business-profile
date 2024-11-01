import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-pau-[hash].js',
        chunkFileNames: 'assets/[name]-pau-[hash].js',
        assetFileNames: 'assets/[name]-pau-[hash][extname]'
      }
    }
  }
})
