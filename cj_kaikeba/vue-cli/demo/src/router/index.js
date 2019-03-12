import Vue from 'vue'
import Router from 'vue-router'
// import cmp1 from '@/components/cmp1'
import login from '@/login'
import reg from '@/reg'

Vue.use(Router)  //注册全局组件router-view router-linke  挂载在Vue.prototype.$router || $route 未来所有组件中的this对象，就具备该属性，所有的this其实就是Vue的子类对象

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/reg',
      name: 'reg',
      component: reg
    }
  ]
})
