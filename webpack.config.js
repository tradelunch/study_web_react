const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

console.log('ENV:: ', process.env.NODE_ENV);

module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    devtool: 'inline-source-map',
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
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(scss|css)$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
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
    devServer: {
        watchFiles: ['src/**/*', 'public/**/*', 'dist/**/*'],
        client: {
            progress: true, // Prints compilation progress in percentage in the browser.
            logging: 'error', // 'log' | 'info' | 'warn' | 'error' | 'none' | 'verbose'
            overlay: {
                errors: false,
                warnings: false,
            },
        },
        open: false, // Tells dev-server to open the browser after server had been started.
        historyApiFallback: true, // 404일때 index.html을 표시하려면 true, 복수의 경로를 적용하려면 객체
        static: [
            {
                directory: path.resolve(__dirname, 'public'),
                publicPath: '/public',
            },
            {
                directory: path.resolve(__dirname, 'assets'),
                publicPath: '/assets',
            },
        ],
        hot: 'only', // 'only', boolean = true // reload only changes
        liveReload: false, // refresh entire app
        compress: true, // gzip 압축 활성화
        https: false, // self-signed의 경우 true, 인증 기관의 경우 객체
        port: 3000,
        // publicPath: '/',
        proxy: {
            '/api': 'http://localhost:3000', // ex
        },
    },
};
