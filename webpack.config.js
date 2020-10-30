const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')


module.exports = {
    mode: process.env.NODE_ENV,
    devtool: 'source-map',
    entry: ['@babel/polyfill', './client/src/index.js'],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'server/public/')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './client/public/index.html',
            favicon: './client/public/post-it.png',
            inject: true
        })
    ],
    
    optimization: {
        minimize: true,
        minimizer: [
<<<<<<< HEAD
            new TerserPlugin({})
=======
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            })
>>>>>>> 75be7b1940cf842de25a14a4f1d6fa7dbdcfb7da
        ]
    },
    
    resolve: {
        extensions: ['.jsx', '.js']
    },

    devServer:{
        historyApiFallback: true,
        publicPath: '/'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },

            {
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },

            {
                test: /\.html$/,
                use: ['html-loader']
            },

            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: 'assets/images'
                    }
                }
            }
        ]
    }
}