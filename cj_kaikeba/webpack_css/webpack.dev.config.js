module.exports = {
  //入口
  entry:{
    //可以有多个入口,也可以有一个,如果一个就是默认这一个入口开始分析
    'main':'./main.js'
  },
  //输出
  output:{
    filename:'./build.js'
  },
  //申明模块
  //包含着各个loader
  module:{
    loaders:[{
      test:/\.css$/,loader:'style-loader!css-loader'
    },//webpack后面版本可以叫做roles
    {test:/\.(jpg|png|gif|svg)$/,loader:"url-loader?limit=2000"}
  ] 
  },
  watch:true, //监视文件发生改动,自动产出Build.js
}