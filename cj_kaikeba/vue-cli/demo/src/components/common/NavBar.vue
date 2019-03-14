<template>
  <div class="cms-s-header">
    <h1 class="page-title"><span @click="goback">></span>{{title}}</h1>
  </div>
</template>

<script>
  export default {
    name:'nav-bar',
     props:['title'],
    methods: {
     
      goback(){
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped>

</style>