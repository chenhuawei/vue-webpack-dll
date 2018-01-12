const webpack = require('webpack');
const path = require('path');

const vendors = [
    'vue', 
    'element-ui',
    'vue-baidu-map'
];

module.exports = {
    context: __dirname,
    output: {
        path: path.join(__dirname, '../static'),
        filename: '[name].dll.js',
        library: '[name]_[hash]',
    },
    entry: {
        "vendor": vendors,
    },
    plugins: [
        new webpack.DllPlugin({
            path:  path.join(__dirname, '../static', '[name]-manifest.json'),
            name: '[name]_[hash]',
        })
    ]
};