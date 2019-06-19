<template>
  <div>歌手页面</div>
</template>
<style>

</style>
<script>
 import {getSingerList} from 'api/singer'
  import {ERR_OK} from 'api/config'
  const HOT_SINGER_LEN = 10
  const HOT_NAME = '热门'
export default {
    data() {
      return {
        singers: []
      }
    },
      created() {
      this._getSingerList()
    },
    methods: {
       _getSingerList() {
        getSingerList().then((res) => {
          if (res.code === ERR_OK) {
            this.singers = res.data.list;
            console.log(this.singers);
            // this.singers = this._normalizeSinger(res.data.list)
          }
        })
      },
      _normalizeSinger(list) {
        let map = {
          hot:{
             title: HOT_NAME,
            items: []
          }
        }
      }
    }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .singer
    position: fixed
    top: 88px
    bottom: 0
    width: 100%
</style>