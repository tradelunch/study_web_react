const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'production',
    devtool: false,
    plugins: [
        new webpack.DefinePlugin({
            process: {
                env: {
                    __DEV__: false,
                    __PROD__: true,
                    __STAGING__: false,
                },
            },
        }),
    ].filter(Boolean),
    optimization: {
        minimize: true,
    },
});
