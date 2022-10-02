import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import presetUno from '@unocss/preset-uno'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Unocss({
      presets: [
        presetUno(),
      ],
    }),
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => !!tag?.match(/lit|solid|svelte/gi),
        },
      },
    }),
  ],
})
