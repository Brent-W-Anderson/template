const path = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { TypedCssModulesPlugin } = require('typed-css-modules-webpack-plugin')

module.exports = {
    mode: process.env.WEBPACK_MODE || 'development',
    devtool: process.env.WEBPACK_MODE === 'development' ? 'source-map' : false,
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
            },
            {
                test: /\.module\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName:
                                    '[name]__[local]___[hash:base64:5]',
                            },
                            importLoaders: 1,
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.scss$/,
                exclude: /\.module\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
        ],
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, './src/assets/favicon.ico'),
                    to: path.resolve(__dirname, './dist'),
                },
            ],
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
        }),
        new TypedCssModulesPlugin({
            globPattern: 'src/**/*.scss',
        }),
        new CleanWebpackPlugin(),
        new ForkTsCheckerWebpackPlugin(),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false,
            }),
        ],
    },
    devServer: {
        port: 3001,
        static: './dist/main.js',
    },
}
