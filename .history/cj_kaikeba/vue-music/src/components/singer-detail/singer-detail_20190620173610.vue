<template>
<transition name="slide">
  <div class="singer-detail"></div>
</transition>
</template>

<script type="text/ecmascript-6">
   import {mapGetters} from 'vuex'
    import {getSingerDetail} from 'api/singer'
      import {ERR_OK} from 'api/config'
        import {createSong} from 'common/js/song'
   export default {
     data(){
       return{
         song:[]
       }
     },
    computed: {
        ...mapGetters([
        'singer'
      ])
    },
    created () {
    //  console.log(this.singer);
    this._getDetail()
    },
    methods:{
        _getDetail() {
        if (!this.singer.id) {
          this.$router.push('/singer')
          return
        }
        getSingerDetail(this.singer.id).then((res) => {
          if (res.code === ERR_OK) {
            console.log(res.data.list)
          //  this.songs = this._normalizeSongs(res.data.list)
          }
        })
      },
          _normalizeSongs(list) {
        let ret = []
        list.forEach((item) => {
          let {musicData} = item //解构赋值
          if (musicData.songid && musicData.albummid) {
            ret.push(createSong(musicData))
          }
        })
        return ret
      }
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