import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import html from '@rollup/plugin-html';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import sveltePreprocess from "svelte-preprocess";

import pkg from './package.json';

const production = !process.env.ROLLUP_WATCH;

const name = pkg.name
.replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
.replace(/^\w/, m => m.toUpperCase())
.replace(/-\w/g, m => m[1].toUpperCase());

export default {
  input: 'src/DevTools.svelte',
  output: [
    { file: pkg.module, 'format': 'es'},
    { file: pkg.main, 'format': 'umd', name}
  ],
  plugins: [
    svelte({
      preprocess: sveltePreprocess({
        sourceMap: !production,
        postcss: true,
      }),
    }),
    commonjs(),
    resolve(),
    html(),
    //production && terser()
  ],
  watch: {
    clearScreen: false
  }
};
