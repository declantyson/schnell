const webpack = require('webpack'),
      path = require('path');

module.exports = {
    entry: ['./src/main.js'],
    output: {
        filename: 'game.js',
        path: path.resolve(__dirname, 'game'),
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};