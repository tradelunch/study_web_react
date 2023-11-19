const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log('::: process.env.NODE_ENV: ', process.env.NODE_ENV);

module.exports = {
    target: 'web',
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        filename: '[name].bundle.[contenthash].js',
        path: path.join(__dirname, '/dist'),
        publicPath: '/',
    },

    module: {
        rules: [
            {
                test: /\.(?:js|mjs|cjs|jsx|ts|tsx)$/i,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                    { loader: 'postcss-loader' },
                    { loader: 'sass-loader' },
                ],
                // [
                //     'style-loader',
                //     'css-loader',
                //     'postcss-loader',
                //     'sass-loader',
                // ],
            },
            {
                test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        alias: {
            '@': [
                path.resolve(process.cwd(), '.'),
                path.resolve(process.cwd(), 'src'),
            ],
        },
        extensions: ['.js', '.ts', '.jsx', '.tsx'],
        fallback: { https: false },
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack Boilerplate',
            template: path.resolve(__dirname, './public/index.html'),
            filename: 'index.html',
            inject: 'body',
            favicon: 'favicon/favicon.ico',
        }),
        new CleanWebpackPlugin(),
    ],
};
