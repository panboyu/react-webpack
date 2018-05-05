const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

const port = 9000
const host = '0.0.0.0'
module.exports = {
    mode: 'development',
    entry: {
        index: [
            'react-hot-loader/patch',
            `webpack-dev-server/client?http://${host}:${port}`,
            path.resolve(__dirname, 'src/index.jsx'),
        ]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new ExtractTextWebpackPlugin('bundle.css')
    ],
    devServer: {
        port: port,
        host: host,
        hot: true,
        inline: true,
        contentBase: path.resolve(__dirname, 'build'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(less)$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: { importLoaders: 1 },
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                ident: 'postcss',
                                plugins: [
                                    require('autoprefixer')(),
                                ]
                            }
                        },
                        {
                            loader: 'less-loader',
                        }
                    ],
                })
            },
            {
                test: /\.(jpg|jpeg|gif|png)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                }
            }
        ]
    }
}