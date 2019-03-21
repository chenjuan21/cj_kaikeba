<template>
  <div id="app">
    <img src="./assets/logo.png">
    num的数据:{{appShowNum}}
    <button @click="change">改变数据</button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    appShowNum(){
      return this.$store.getters.getNum;
    }
  },
  methods: {
    change(){
  //this.$store.state.xxx 也可以改值，但是不是官方推荐
  this.$store.commit('addNum',{'num':5})
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
