var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')

module.exports = {
    entry: './src/public/js/main.js',
    output: {
        path: '/build/js/',
        filename: 'bundle.js'
    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules'),
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: "style!css"
        }, {
            test: /\.(eot|woff|woff2|ttf)([\?]?.*)$/,
            loader: "file"
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file',
            query: {
                name: '[name].[ext]?[hash]'
            }
        }]
    },
    resolve: {
        alias: { vue: 'vue/dist/vue.js' }
    }
}

