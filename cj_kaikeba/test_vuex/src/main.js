// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
Vue.prototype.$axios = Axios;
Vue.config.productionTip = false





//1.引入vuex
import Vuex from 'vuex'
//2.安装插件
Vue.use(Vuex);
//3.创建store
let store = new Vuex.Store({
  //4.配置store中的数据 存.取
  state:{
    num:30
  },
  //取数据
  getters: {
    getNum(state){
     return state.num;
    }
  },
  //操作数据
  mutations: {
    addNum(state,payload){
      Axios.get('/').then(res=>{
        state.num += payload.num
      })
       
    }
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  //将store对象关联到vue实例
  store,
  components: { App },
  template: '<App/>'
})
