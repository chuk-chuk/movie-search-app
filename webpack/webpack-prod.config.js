const base = require('./webpack-dev.config');
const webpack = require('webpack');

module.exports = base.merge({
    mode: 'production',
    output: {
        filename: 'bundle.js'
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
});
