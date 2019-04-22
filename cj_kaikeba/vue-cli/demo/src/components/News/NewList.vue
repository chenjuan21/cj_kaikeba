<template>
  <div>
    <nav-bar title="新闻列表"></nav-bar>
     <ul>
       <li v-for="list in newlist" :key="list.id">
         <router-link :to="{name:'news.detail',query:{id:list.id}}">
           {{list.text}}{{time|convertTime('YYYY-MM-DD')}}  //时间过滤器
         </router-link>
      </li>
      
     </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        time:"20190314",
        newlist:[
          {
            "id":1,
            "text":"新闻1"
          },
           {
            "id":2,
            "text":"新闻2"
          },
           {
            "id":3,
            "text":"新闻2"
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>