<template>
  <div>
     <chead/>
     <form action="http://localhost:8081/reg" method="post">
     用户:<input type="text"/><br>
     密码:<input type="password"/>
     <input type="submit" value="注册">
      <router-link to="/">我要登录</router-link>
     </form>
     <cfoot/>
  </div>
</template>

<script>
import chead from "@/components/header"
import cfoot from "@/components/footer"
  export default {
    components:{chead,cfoot}
  }
</script>

<style scoped>

</style>
