<template>
  <div>
     <chead/>
     <form action="http://localhost:8081/login" method="post">
     用户:<input type="text"/><br>
     密码:<input type="password"/>
     <input type="submit" value="登录">
     <!-- <a href="#/reg">我要注册</a> -->
     <router-link to="/reg">我要注册</router-link>
     </form>
     <cfoot/>
  </div>
</template>

<script>
import chead from "@/components/chead"
import cfoot from "@/components/cfoot"
  export default {
    components:{chead,cfoot}
  }
</script>

<style scoped>

</style>