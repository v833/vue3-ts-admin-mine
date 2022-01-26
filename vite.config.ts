import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VueJsx()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      components: '@/components'
    }
  },
  server: {
    open: true, // 编译完成是否打开网页
    proxy: {
      '/api': {
        target: 'http://152.136.185.210:4000', //API服务器的地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
      // http://www.web-jshtml.cn/api/vue3  /api/getCode
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/main.scss";'
      }
    }
  }
})
