// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
 import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '@/assets/css/global.css'
import MyUl from '@/components/common/MyUl'
import MyLi from '@/components/common/MyLi'
import NavBar from '@/components/common/NavBar'
//开发和生产环境的配置
Vue.config.productionTip = false 


Vue.component(MyUl.name,MyUl);
Vue.component(MyLi.name,MyLi);
Vue.component(NavBar.name,NavBar);

//定义moment全局日历过滤器
import Moment from 'moment';
Vue.filter('convertTime',function(data,formatStr){
  return Moment(data).format(formatStr);
})




//安装插件 注册全局组件及挂载属性
Vue.use(MintUI)
//配置axios
import Axios from 'axios'
//配置公共URL
Axios.defaults.baseURL = 'https://www.sinya.online/api/'
Vue.prototype.$axios = Axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
