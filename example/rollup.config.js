import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import html from 'rollup-plugin-html';
import commonjs from 'rollup-plugin-commonjs';
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';
import sveltePreprocess from "svelte-preprocess";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: './example/main.js',
  output: {
    name: 'app',
    format: 'iife',
    sourcemap: true,
    file: './example/public/main.js',
  },
  plugins: [
    replace({
      process: JSON.stringify({
        env: {
          isProd: production,
          NODE_ENV: process.env.NODE_ENV
        }
      }),
    }),
    svelte({
      dev: !production,
      preprocess: sveltePreprocess({
        sourceMap: !production,
        postcss: true,
      }),
      css: css => {
        css.write('example/public/bundle.css');
      }
    }),
    resolve(),
    html(),
    commonjs(),
    production && terser()
  ],

  watch: {
    clearScreen: false
  }
};
