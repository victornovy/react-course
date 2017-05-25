var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'build/bundle.js'
    },
    module: {
        loaders: [{
            exclude: /(node_modules|bower_components|index.html)/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            filename: 'build/index.html',
            template: './index.html'
        })
    ]
}