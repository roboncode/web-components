import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'
import react from '@vitejs/plugin-react'
import transformerDirective from '@unocss/transformer-directives'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unocss({
      presets: [
        presetUno(),
        presetIcons({
          extraProperties: {
            display: 'inline-block',
            'vertical-align': 'middle',
          },
        }),
      ],
      transformers: [transformerDirective()],
    }),
  ],
})
