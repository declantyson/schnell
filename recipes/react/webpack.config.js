/*
 *
 *	Webpack Config
 *	v0.3.0
 *	26/01/2018
 *
 */

const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: ['./renderer/renderer.js', 'webpack-hot-middleware/client'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
};