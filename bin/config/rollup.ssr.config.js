import svelte from 'rollup-plugin-svelte'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'

const production = !process.env.ROLLUP_WATCH

export default {
  input: 'src/svelte/App.svelte',
  output: {
    sourcemap: false,
    format: 'cjs',
    file: 'src/svelte/generated/ssr.js',
  },
  plugins: [
    svelte({
      // enable run-time checks when not in production
      dev: !production,
      generate: 'ssr',
      css: false,
    }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration —
    // consult the documentation for details:
    // https://github.com/rollup/rollup-plugin-commonjs
    resolve({
      browser: true,
      dedupe: (importee) =>
        importee === 'svelte' || importee.startsWith('svelte/'),
    }),
    commonjs(),
    production && terser(),
  ],
}
