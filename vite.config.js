import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    include: [
      '@apollo/client/core',
      '@apollo/client/cache'
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  },
})