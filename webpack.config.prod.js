'use strict';

var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './gui/js/app',

    output: {
        path: path.join(__dirname, 'core', 'dist'),
        filename: 'app.min.js'
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        }),
        new ExtractTextPlugin('app.min.css')
    ],

    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel?stage=0'
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader!cssnext-loader')
        }],
        postLoaders: [{
            loader: 'transform?envify'
        }]
    }
};
