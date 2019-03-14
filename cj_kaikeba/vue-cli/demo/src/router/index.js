import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/home'
import Member from '@/components/Member/menber'
import Search from '@/components/Search/search'
import Shopcar from '@/components/Shopcar/shopcar'


Vue.use(Router)  

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/member',
      name: 'member',
      component: Member
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      component: Shopcar
    }
  ]
})
