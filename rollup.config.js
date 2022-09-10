import vue from 'rollup-plugin-vue';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'src/plugins/vclsx/index.ts',
    output: [
      {
        format: 'es',
        file: 'build/index.js',
      },
    ],
    plugins: [typescript(), vue(), terser()],
  },
  {
    input: 'src/plugins/vclsx/index.ts',
    output: [
      {
        format: 'es',
        sourcemap: false,
        file: `build/index.d.ts`,
      },
    ],
    plugins: [dts()],
  },
];
