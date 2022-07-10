import vue from "rollup-plugin-vue";
// import scss from "rollup-plugin-scss";
import commonjs from "@rollup/plugin-commonjs";
import typescript from 'rollup-plugin-typescript2';
import buble from "@rollup/plugin-buble";
import { terser } from "@chiogen/rollup-plugin-terser";

export default [
  {
    input: "src/plugins/vclsx/index.ts",
    output: [
      {
        format: "esm",
        file: "dist/index.mjs",
      },
      {
        format: "cjs",
        file: "dist/index.js",
      },
      {
        format: "es",
        file: "dist/index.ts",
      }
    ],
    plugins: [
      typescript(),
      vue(),
      // scss(),
      commonjs(),
      buble({
        transforms: { forOf: false },
      }),
      terser()
    ],
  },
];
