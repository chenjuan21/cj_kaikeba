<template>
  <div>歌手页面</div>
</template>
<style>

</style>
<script>
 import {getSingerList} from 'api/singer'
  import {ERR_OK} from 'api/config'
export default {
    data() {
      return {
        singers: []
      }
    },
      created() {
      this._getSingerList()
    },
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .singer
    position: fixed
    top: 88px
    bottom: 0
    width: 100%
</style>