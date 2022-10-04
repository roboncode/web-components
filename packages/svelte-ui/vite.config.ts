import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts';
import presetUno from '@unocss/preset-uno'
import { resolve } from 'path';
import { svelte } from '@sveltejs/vite-plugin-svelte'
import transformerDirective from '@unocss/transformer-directives'
import unocss from 'unocss/vite'

const name = 'svelteui';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        // dev: process.env.NODE_ENV !== 'production',
        customElement: true
      },
    }), 
    dts({ insertTypesEntry: true }),
    unocss({
      // presets: [
        // presetUno(),
        // presetIcons({
        //   extraProperties: {
        //     display: 'inline-block',
        //     'vertical-align': 'middle',
        //   },
        // }),
      // ],
      // transformers: [transformerDirective()],
    }),
  ],
  build: {
    // target: 'esnext',
    lib: {
      name,
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: (format) => `svelte.${format}.js`,
    },
  },
})
