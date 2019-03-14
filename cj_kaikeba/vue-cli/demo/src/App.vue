<template>
  <div id="app"> 
   <mt-header fixed title="固定在顶部"></mt-header>
     <router-view></router-view>
   <mt-tabbar v-model="selected">
  <mt-tab-item id="home">
    <img slot="icon" src="./assets/logo.png">
       首页
  </mt-tab-item>
  <mt-tab-item id="member">
    <img slot="icon" src="./assets/logo.png">
    会员
  </mt-tab-item>
  <mt-tab-item id="shopcar">
    <img slot="icon" src="./assets/logo.png">
    购物车
  </mt-tab-item>
  <mt-tab-item id="search">
    <img slot="icon" src="./assets/logo.png">
    查找
  </mt-tab-item>
</mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      selected:''
    }
  },
  watch: {
    selected(newV,oldV){
      this.$router.push(newV);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
