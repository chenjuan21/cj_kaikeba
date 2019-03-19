var path = require('path');
    module.exports = {
    entry: path.resolve(__dirname, './src/js/app.js'),//指定webpack打包的入口是app.js
    output: {
        path: path.resolve(__dirname, './dist/js'),//指定打包后js文件放置的位置
        filename: 'bundle.js'//指定打包后的js名称，这个就是index.html最终引入的js的名称
        }
    }