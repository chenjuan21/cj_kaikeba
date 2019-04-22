<template>
  <div>
  <mt-swipe :auto="4000">
  <mt-swipe-item v-for="(img,index) in imgs" :key="index"><img :src="img.img" width="100%"/></mt-swipe-item>
</mt-swipe>
<div class="grid">
  <my-ul>
    <my-li v-for="(grid,index) in grids" :key="index">
        <router-link :to="grid.router">
         <span :class="grid.className"></span>
         <div>{{grid.title}}</div>
       </router-link>
    </my-li>
  </my-ul>
</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgs:[],
      grids:[
        {className:'cms-news',title:'新闻资讯1',router:{name:'news'}},
        {className:'cms-news',title:'图文分享',router:{name:'photo.list',params:{categoryId:0}}},
        {className:'cms-news',title:'新闻资讯3',router:{name:'news'}},
        {className:'cms-news',title:'新闻资讯4',router:{name:'news'}},
        {className:'cms-news',title:'新闻资讯5',router:{name:'news'}},
        {className:'cms-news',title:'新闻资讯6',router:{name:'news'}}
      ]
    }
  },
  created() {
    this.$axios.get('http://localhost:3000/list')
    .then(res =>{
      this.imgs = res.data 
    })
    .catch(err => console.log('轮播图获取异常',err));
  },
}
</script>
<style scoped>
*{
  margin: 0; padding: 0;
}
.grid{
  margin-top: 20px;
}
.mint-swipe{
  height: 200px
}


</style>