import babel from '@rollup/plugin-babel';
import vue from 'rollup-plugin-vue';
import nodeResolve from '@rollup/plugin-node-resolve';
import dts from 'rollup-plugin-dts';
import terser from '@rollup/plugin-terser';

export default [
  {
    input: 'src/plugins/vclsx/index.ts',

    output: {
      file: 'dist/index.js',
      globals: {
        vue: 'vue',
        'just-typeof': 'typeOf',
      },
    },
    external: ['vue', 'just-typeof'],

    plugins: [
      nodeResolve({
        extensions: ['.js', '.ts', '.tsx'],
      }),
      babel({
        extensions: ['.js', '.ts', '.tsx'],
        babelHelpers: 'bundled',
        presets: ['@babel/preset-typescript'],
        exclude: 'node_modules/**',
        minified: true,
      }),
      vue(),
      terser(),
    ],
  },
  {
    input: 'src/plugins/vclsx/index.ts',
    output: {
      format: 'es',
      sourcemap: false,
      file: `dist/index.d.ts`,
    },

    plugins: [dts()],
  },
];
