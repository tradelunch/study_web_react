const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

console.log('::: process.env.NODE_ENV: ', process.env.NODE_ENV);

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        filename: 'bundle.[id]_[name]_[contenthash].js',
        path: path.join(__dirname, '/dist'),
        publicPath: '/',
    },
    target: 'web',
    // TODO: check
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    resolve: {
        alias: {
            '@': [
                path.resolve(process.cwd(), '.'),
                path.resolve(process.cwd(), 'src'),
            ],
            '@env': '.env',
        },
        extensions: ['.ts', '.tsx', '.js', '.json'],
        fallback: { https: false },
    },
    module: {
        rules: [
            // jsLoader config
            {
                test: /\.(js|ts)$/,
                exclude:
                    /node_modules[/\\](?!react-native-vector-icons|react-native-calendars|react-native-swipe-gestures|react-native-reanimated|react-native-drawer)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-react',
                            '@babel/preset-typescript',
                        ],
                    },
                },
            },
            // imageLoader config
            {
                test: /\.(gif|jpe?g|png|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]',
                        esModule: false,
                    },
                },
            },
            // classLoader config
            {
                test: /\.(sa|sc|c)ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            // fontLoader config
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            // title: 'adriel',
            template: path.resolve(__dirname, './public/index.html'),
            filename: 'index.html',
            inject: 'body',
        }),
        new FaviconsWebpackPlugin(path.join(__dirname, 'adriel.svg')),
    ].filter(Boolean),
};
