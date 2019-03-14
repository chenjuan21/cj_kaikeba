import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/home'
import Member from '@/components/Member/menber'
import Search from '@/components/Search/search'
import Shopcar from '@/components/Shopcar/shopcar'
import NewList from '@/components/News/NewList'
import NewsDetail from '@/components/News/NewsDetail'


Vue.use(Router)  

export default new Router({
  routes: [
    {
      path:'/',
      redirect:{name:'home'},
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[

      ]
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
    },{
      name:'news',
      path:'/news/list',
      component:NewList
    },{
      name:'news.detail',
      path:'/news/detail',
      component:NewsDetail
    }
  ]
})
