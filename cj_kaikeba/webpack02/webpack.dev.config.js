const path = require('path');
module.exports = {
  //入口
  entry:{
    //可以有多个入口,也可以有一个,如果一个就是默认这一个入口开始分析
    'main':'./src/main.js'
  },
  //输出
  output:{
    //指定产出目录
    path:path.resolve('./dist'),//相对转绝对
    filename:'./build.js'
  },
  module:{
    loaders:[{
      test:/\.css$/,loader:'style-loader!css-loader'
    },//webpack后面版本可以叫做rules
    {test:/\.(jpg|png|gif|svg)$/,loader:"url-loader?limit=2000"},
    {
      test:/.\.less$/,loader:'style-loader!css-loader!less-loader'
    }
  ] 
  },
  watch:true, //监视文件发生改动,自动产出Build.js
}