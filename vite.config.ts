import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/productCards/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@icons': path.resolve(__dirname, 'src/assets/icons'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@ui': path.resolve(__dirname, 'src/shared/ui'),
      '@api': path.resolve(__dirname, 'src/shared/api'),
      '@store': path.resolve(__dirname, 'src/store'),
    },
  },
  build: {
    outDir: 'dist',
  },
})
