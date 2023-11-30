const path = require('path');

const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        main: './script.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    opmization:{
        minimize: true,
        minimizer: [new TerserPlugin()],
        splitChunks: {
            chunks: 'all'
        }
    }
}