import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '@/components/recommend/recommend.vue'
import Singer from '@/components/singer/singer.vue'
import Search from '@/components/search/search.vue'
import Rank from '@/components/rank/rank.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/recommend'
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    },
    {
      path: '/singer',
      name: 'singer',
      component: Singer
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/rank',
      name: 'rank',
      component: Rank
    },
  ]
})
