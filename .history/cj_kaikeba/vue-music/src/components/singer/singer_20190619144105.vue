<template>
  <div>歌手页面</div>
</template>
<style>

</style>
<script>
 import ListView from '@/base/listview/listview'
 import {getSingerList} from 'api/singer'
  import {ERR_OK} from 'api/config'
    import Singer from 'common/js/singer'
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
         //  console.log(this.singers);
            this.singers = this._normalizeSinger(res.data.list)
            console.log(this.singers);
           //  this._normalizeSinger(res.data.list)
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
        list.forEach((item, index) => {
          if (index < HOT_SINGER_LEN) {
            map.hot.items.push(new Singer({
              name: item.Fsinger_name,
              id: item.Fsinger_mid
            }))
          }
          const key = item.Findex
         // console.log(map);
          if (!map[key]) {
            map[key] = {
              title: key,
              items: []
            }
          }
          map[key].items.push(new Singer({
            name: item.Fsinger_name,
            id: item.Fsinger_mid
          }))
        })
        // 为了得到有序列表，我们需要处理 map
        let ret = []
        let hot = []
      //  console.log(map);
        for (let key in map) {
          let val = map[key]
          if (val.title.match(/[a-zA-Z]/)) {
            ret.push(val)
          } else if (val.title === HOT_NAME) {
            hot.push(val)
          }
        }
        //console.log(ret);
        ret.sort((a, b) => {
          return a.title.charCodeAt(0) - b.title.charCodeAt(0)
        })
        return hot.concat(ret)
      },
      
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