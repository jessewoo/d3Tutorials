import serve from '../5-load-data-in-react/node_modules/rollup-plugin-serve/dist/index.cjs';
import livereload from '../5-load-data-in-react/node_modules/rollup-plugin-livereload';
import babel from '../5-load-data-in-react/node_modules/@rollup/plugin-babel/types';

// https://www.reddit.com/r/reactjs/comments/k28wof/bundle_your_react_app_with_rollupjs/

export default {
    input: 'index.js',
    plugins: [
        babel({
            presets: ['@babel/preset-react']
        }),
        serve({
            open: true,
            verbose: true,
            contentBase: ['', 'dist'],
            historyApiFallback: true,
            host: 'localhost',
            port: 3000,
        }),
        livereload({ watch: ['', 'dist'] }),
    ],
    output: {
        file: 'bundle.js',
        format: 'iife',
        sourcemap: true,
    },
};