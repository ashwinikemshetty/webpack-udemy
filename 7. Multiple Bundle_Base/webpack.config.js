const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        index: './src/index.js',
        products: './src/products.js'
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [new htmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html'),
        chunks: ['index'], // this index is from the index entry in the entry
        inject: true,
        filename: 'index.html'
    }), new htmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/products.html'),
        chunks: ['products'], // this index is from the index entry in the entry
        inject: true,
        filename: 'products.html'
    })]
}