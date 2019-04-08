<template>
<div>
  <div v-if="$route.name=='login' || $route.name=='goreg' || $route.name=='gouser'">
      <router-view/>
    </div>
     <div v-if="$route.name!='login' && $route.name!='goreg' && $route.name!='gouser'">
   <Header/>
     <section>
            <div class="ydc-content-slide ydc-body">
                <div class="ydc-flex">
                    <!-- left begin -->
                    <div class="ydc-column ydc-column-2">
                        <Menu/>
                    </div>
                    <!-- left end -->
                    <!-- right begin -->
                    <div class="ydc-column ydc-column-8">
                       <router-view/>
                    </div>
                    <!-- right end -->
                </div>
            </div>
            <Footer/>
        </section>
     </div>
</div>
  
   
</template>

<script>
import Header from '@/components/header.vue'
import Menu from '@/components/menu.vue'
import Footer from '@/components/footer.vue'
import Login from '@/page/login.vue'
export default {
  name: 'App',
  components: {
    Header,
    Menu,
    Footer,
    Login
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
