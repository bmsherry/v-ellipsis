import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import { eslint } from "rollup-plugin-eslint";
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: './src/index.js',
    output: {
        file: 'dist/ellipsis.umd.js',
        name: 'ellipsis',
        format: 'umd'
    },
    plugins: [
        eslint({
            fix: true,
            include: 'src',
            exclude: 'node_modules/**'
        }),
        babel({
            include: 'src',
            exclude: 'node_modules/**'
        }),
        resolve(),
        commonjs(),
        terser(),
    ]
};