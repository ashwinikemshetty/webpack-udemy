const path = require('path');

module.exports = {
    entry: './es6main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}