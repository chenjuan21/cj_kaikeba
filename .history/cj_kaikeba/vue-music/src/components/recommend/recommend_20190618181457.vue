<template>
  <div class="recommend">
    <div class="recommend-content" >
      <div class="slider-wrapper" v-if="recommends.length">
        <slider>
             <div v-for="item in recommends">
               <a :href="item.linkUrl">
                 <img :src="item.picUrl"/>
               </a>
             </div>
        </slider>
      </div>
      <div class="recommend-list">
        <h1 class="list-title">热门歌单推荐</h1>
        <ul v-for="item in discList" class="item">
             <div class="icon">
               <img :src="item.imgurl" alt="" width="60" height="60">
             </div>
             <div class="text">
               <h2 class="name" v-html="item.creator.name"></h2>
               <p class="desc" v-html="item.dissname"></p>
             </div>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Slider from '@/base/slider/slider'
import {getRecommend} from '@/api/recommend.js'
import {ERR_OK} from 'api/config.js'
export default {
  data(){
    return {
      recommends:[],
       discList: []
    }
  },
  created () {
    this._getCommend();
    this._getDiscList();
  },
  methods: {
    _getCommend(){
      getRecommend().then((res)=>{
      //  console.log(res);
        if(res.code === ERR_OK){
        //  console.log(res.data.slider);
          this.recommends = res.data.slider;
        }
      })
    },
    _getDiscList() {
        getDiscList().then((res) => {
          if (res.code === ERR_OK) {
            console.log(res.data.list);
            this.discList = res.data.list
          }
        })
      },
  },
  components: {
    Slider
  }
  
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .recommend
    position: fixed
    width: 100%
    top: 135px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: $color-text
            .desc
              color: $color-text-d
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>