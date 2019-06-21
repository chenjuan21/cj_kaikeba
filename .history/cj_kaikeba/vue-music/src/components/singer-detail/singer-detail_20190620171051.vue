<template>
<transition name="slide">
  <div class="singer-detail"></div>
</transition>
</template>

<script type="text/ecmascript-6">
   import {mapGetters} from 'vuex'
    import {getSingerDetail} from 'api/singer'
   export default {
     data(){
       return{

       }
     },
    computed: {
        ...mapGetters([
        'singer'
      ])
    },
    created () {
      console.log(this.singer);
    },
    methods:{
         getSingerDetail(this.singer.id).then((res) => {
          if (res.code === ERR_OK) {
            this.songs = this._normalizeSongs(res.data.list)
          }
        })
    }
   }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
 @import "~common/stylus/variable"
.singer-detail
    position: fixed
    z-index: 100
    top:0
    left:0
    right:0
    bottom:0
    background:$color-background

  // .slide-enter-active, .slide-leave-active
  //   transition: all 0.3s

  // .slide-enter, .slide-leave-tozform: translate3d(100%, 0, 0)
</style>