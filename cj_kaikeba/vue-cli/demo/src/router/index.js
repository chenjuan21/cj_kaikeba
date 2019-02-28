import Vue from 'vue'
import Router from 'vue-router'
// import cmp1 from '@/components/cmp1'
import login from '@/login'
import reg from '@/reg'

Vue.use(Router)

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
