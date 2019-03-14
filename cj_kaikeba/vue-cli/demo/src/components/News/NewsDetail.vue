<template>
  <div>
    <nav-bar title="新闻详情"></nav-bar>
    新闻详情
  </div>
</template>

<script>
  export default {
    created() {
      let id = this.$route.query.id;
      this.$axios.get('getnew/'+id)
      .then(res =>{
        this.newsDetail = res.data.message;
      })
      .catch( err => {
        console.log(err)
      })
    },
  }
</script>

<style scoped>

</style>