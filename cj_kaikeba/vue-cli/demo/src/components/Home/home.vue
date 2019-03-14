<template>
  <div>
  <mt-swipe :auto="4000">
  <mt-swipe-item>1</mt-swipe-item>
  <mt-swipe-item>2</mt-swipe-item>
  <mt-swipe-item>3</mt-swipe-item>
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
<!-- <ul>
  <li>
    <a href="">
      <span class="cms-news"></span>
      <div>新闻资讯1</div>
    </a>
  </li>
  <li>
    <a href="">
      <span class="cms-news"></span>
      <div>新闻资讯2</div>
    </a>
  </li>
  <li>
    <a href="">
      <span class="cms-news"></span>
      <div>新闻资讯3</div>
    </a>
  </li>
  <li>
    <a href="">
      <span class="cms-news"></span>
      <div>新闻资讯4</div>
    </a>
  </li>
  <li>
    <a href="">
      <span class="cms-news"></span>
      <div>新闻资讯5</div>
    </a>
  </li>
  <li>
    <a href="">
      <span class="cms-news"></span>
      <div>新闻资讯6</div>
    </a>
  </li>
</ul> -->
  </div>
</template>
<script>
export default {
  data () {
    return {
      grids:[
        {className:'cms-news',title:'新闻资讯1',router:{name:'news'}},
        {className:'cms-news',title:'新闻资讯2',router:{name:'news'}},
        {className:'cms-news',title:'新闻资讯3',router:{name:'news'}},
        {className:'cms-news',title:'新闻资讯4',router:{name:'news'}},
        {className:'cms-news',title:'新闻资讯5',router:{name:'news'}},
        {className:'cms-news',title:'新闻资讯6',router:{name:'news'}}
      ]
    }
  },
  created() {
    // this.$axios.get('https://wd2803780772aaeyif.wilddogio.com/')
    // .then(res =>{

    // })
    // .catch(err => console.log('轮播图获取异常',err));
  },
}
</script>
<style scoped>
.mint-swipe{
  height: 200px
}


</style>