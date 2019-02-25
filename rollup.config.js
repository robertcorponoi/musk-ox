import pkg from './package.json';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

const extensions = [
  '.js', '.jsx', '.ts', '.tsx',
];

export default {

  // Entry point of the module.
  input: './src/index.ts',

  // External modules to not include in the bundle.
  external: [],

  plugins: [

    // File types to compile.
    resolve({ extensions }),

    // Allow bundling cjs modules. Rollup doesn't understand cjs.
    commonjs(),

    // Compile TypeScript/JavaScript files
    babel({ extensions, include: ['src/**/*'] }),
  ],

  output: [{
    file: pkg.module,
    format: 'esm',
  }],
  
};