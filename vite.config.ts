import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  base: '/Cloudlyme/',
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@features':   path.resolve(__dirname, 'src/features'),
      '@hooks':      path.resolve(__dirname, 'src/hooks'),
      '@utils':      path.resolve(__dirname, 'src/utils'),
      '@store':      path.resolve(__dirname, 'src/store'),
      '@types':      path.resolve(__dirname, 'src/types'),
      '@assets':     path.resolve(__dirname, 'src/assets'),
      '@api':        path.resolve(__dirname, 'src/api'),
    },
  },
})
