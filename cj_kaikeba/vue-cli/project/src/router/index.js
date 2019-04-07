import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index.vue'
import release from '@/page/release.vue'
import Login from '@/page/login';
import Reg from '@/page/reg';

Vue.use(Router)  

export default new Router({
  routes: [
    {
      path:'/index',
      name:'index',
      component:Index
      
    },
    {
      path:'/release',
      name:'release',
      component:release
      
    },
    {
      path:'/content',
      name:'content',
      component:release
      
    },
    {
      path:'/related',
      name:'related',
      component:release
      
    },
    {
      path:'/asset',
      name:'asset',
      component:release
      
    },
    {
      path:'/subscribe',
      name:'subscribe',
      component:release
      
    },
    {
      path:'/contentData',
      name:'contentData',
      component:release
      
    },
    {
      path:'/starLevel',
      name:'starLevel',
      component:release
      
    },
    {
      path:'/info',
      name:'info',
      component:release
      
    },
    {
      path:'/account',
      name:'account',
      component:release
      
    },
    {
      path:'/line',
      name:'line',
      component:release
      
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/reg',
      name: 'reg',
      component: Reg
    }
    
  ]
})
