// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import builtins from 'rollup-plugin-node-builtins';
import globals from "rollup-plugin-node-globals";

export default {
  input: './src/index.js',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  },
  plugins: [
    globals(),
    commonjs({
      include: ["node_modules/**"]
    }),
    resolve({
      jsnext: true,
      main: true,
      preferBuiltins: true
    }),
    builtins(),
    babel({
      exclude: "node_modules/**"
    }),
  ]
};