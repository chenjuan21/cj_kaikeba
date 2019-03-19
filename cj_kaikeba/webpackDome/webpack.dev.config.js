var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var cleanWebpackPlugin = require('clean-webpack-plugin');

    module.exports = {
    entry: path.resolve(__dirname, './src/js/app.js'),//指定webpack打包的入口是app.js
    output: {
        path: path.resolve(__dirname, './dist'),//指定打包后js文件放置的位置
        filename: 'js/bundle-[hash].js'
        },
        module: { 
          rules: [ {
              test: /\.css$/,//匹配所有css文件
              use: [
                  { loader: "style-loader" },
                  { loader: "css-loader",options: { importLoaders: 1 } },//importLoaders解决由于css-loader处理文件导入的方式导致postcss-loader不能正常使用的问题
                  { loader: "postcss-loader" }//指定postcss加载器
               ],//指定加载器
              exclude: /node_modules///排除对node_module文件夹下面的所有资源的匹配
          }]
      },
         //初始化插件
         plugins:[
          new htmlWebpackPlugin({
              template:'index.html',//定义插件读取的模板文件是根目录下的index.html
             // filename:'index.html'//定义通过模板文件新生成的页面名称
          }),
           //初始化插件配置项
           new cleanWebpackPlugin(
            ['dist'], //匹配要删除的文件，这里则指定每次对dist文件夹进行清理
            {
              root: __dirname,//指定插件根目录位置
              verbose: true, //开启在控制台输出信息
              dry: false //启用删除文件
          }
           
        )
      ]
 
    }