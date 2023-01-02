var path = require('path')

const config = {
    entry: './src/framework.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'neurojs-v2.js',
        publicPath: '/build/'
    },
    mode: "development",
    devtool: false,
    devServer: {
        host: '0.0.0.0',
        port: 7860,
        disableHostCheck: true
    }
}

module.exports = config
