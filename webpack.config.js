const path = require( 'path' )
const CopyWebpackPlugin = require( 'copy-webpack-plugin' )
const ForkTsCheckerWebpackPlugin = require( 'fork-ts-checker-webpack-plugin' )
const HtmlWebpackPlugin = require( 'html-webpack-plugin' )
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' )

module.exports = {
    mode: process.env.WEBPACK_MODE || 'development',
    entry: './src/index',
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: '[name].[contenthash].js'
    },
    resolve: {
        extensions: [ '.js', '.jsx', '.ts', '.tsx' ],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
            },
            {
                test: /\.(s(a|c)ss)$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin( {
            patterns: [
                {
                    from: path.resolve( __dirname, './src/assets/favicon.ico' ),
                    to: path.resolve( __dirname, './dist' )
                }
            ]
        } ),
        new HtmlWebpackPlugin( {
            template: path.resolve( __dirname, './src/index.html' )
        } ),
        new CleanWebpackPlugin(),
        new ForkTsCheckerWebpackPlugin()
    ],
    devServer: {
        port: 3001,
        static: './dist/main.js'
    }
}
