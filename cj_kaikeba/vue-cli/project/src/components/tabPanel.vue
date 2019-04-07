<template>
    <div class="ydc-tabPanel">
									<div>
										<ul>
											<li :class="index==cur?'hit':''" @click="cur=index" v-for="(data,index) in datas" :key="index">{{data.title}}</li>
										</ul>

									</div>
									<div class="ydc-panes">
										<div class="ydc-pane" v-for="(data,index) in datas" :key="index" :style="{display:index==cur?'block':'none'}">
											<ol class="ydc-pane-list">
												<li v-for="(news,index) in data.data" :key="index"> 
													<router-link :to="{name:'release'}">{{news.title}}<i v-if="news.isNew==true"> new</i></router-link>
													<span>{{news.time}}</span>
												</li>
											</ol>
									<pagination/>
										</div>
										
									</div>
								</div>
</template>
<script>
import pagination from '@/components/pagination.vue'
export default {
	name:"tabPanel",
	data () {
		return {
			cur: 0,
      datas: [
        {title: '公告栏', data: [
          {id: 2, title: '一点车关于封禁通知（4月13日-4月20日）', isNew: true, href: 'http://www.bing.com', time: 1544537222},
          {id: 4, title: '一点车关于封禁通知（4月13日-4月21日）', isNew: false, href: 'http://www.bing.com', time: 1544537002},
          {id: 8, title: '一点车关于封禁通知（4月13日-4月23日）', isNew: false, href: 'http://www.bing.com', time: 1543537222},
          {id: 15, title: '一点车关于封禁通知（4月13日-4月20日）', isNew: false, href: 'http://www.bing.com', time: 1544536222},
        ]},
        {title: '一点车资讯', data: [
          {id: 2, title: 'asdfadfgfghfgh', isNew: true, href: 'http://www.bing.com', time: 1544537222},
          {id: 4, title: 'ewyrthdfh-4月20日）', isNew: true, href: 'http://www.bing.com', time: 1544537222},
          {id: 8, title: 'rthdfhdf-4月20日）', isNew: false, href: 'http://www.bing.com', time: 1544537222},
          {id: 15, title: 'fghdfghdf-4月20日）', isNew: false, href: 'http://www.bing.com', time: 1544537222},
        ]}
      ]
		}
	},
     components: {
        pagination
    }
}
</script>
<style>

</style>

