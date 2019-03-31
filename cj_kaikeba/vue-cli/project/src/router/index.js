import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index.vue'
import release from '@/page/release.vue'

Vue.use(Router)  

export default new Router({
  routes: [
    {
      path:'/',
      name:'index',
      component:Index
      
    },
    {
      path:'/release',
      name:'release',
      component:release
      
    },
    
  ]
})
