// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
 import App from './App'
import router from './router'
import "@/assets/css/core.css";
import "@/assets/css/icon.css";
import "@/assets/css/home1.css";
//开发和生产环境的配置
Vue.config.productionTip = false 




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
