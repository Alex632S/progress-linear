import vue                    from '@vitejs/plugin-vue'
import { defineConfig }       from 'vite'
import svgLoader              from 'vite-svg-loader'
import { fileURLToPath, URL } from 'url'

export default defineConfig({
  plugins: [
    vue(),
    svgLoader({svgoConfig: {plugins: [{ name: 'prefixIds', params: { prefix: 'svg_loader_prefix_' } }] }}),
  ],
  resolve: {
    alias: [
      {
        find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url))
      },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/scss/_global.scss" as *;`
      }
    }
  }

})

