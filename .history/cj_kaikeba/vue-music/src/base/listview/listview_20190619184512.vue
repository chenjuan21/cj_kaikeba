<template>
  <Scroll :data="data"
          class="listview"
          ref="listview">
          <ul>
          <li v-for="group in data" class="list-group">
            <h2 class="list-group-title">{{group.title}}</h2>
            <ul>
              <li v-for="item in group.items" class="list-group-item">
                <img v-lazy="item.avatar" class="avatar"/>
                <span class="name">{{item.name}}</span>
              </li>
            </ul>
          </li>
      </ul>
       <div class="list-shortcut" @touchstart="onShortcutTouchStart" >
         <ul>
           <li v-for="(item, index) in shortcutList" class="item" :data-index="index">{{item}}</li>
         </ul>
       </div>
  </Scroll>
</template>

<script type="text/ecmascript-6">
  import Scroll from '@/base/scroll/scroll'
    import {getData} from 'common/js/dom'

  const TITLE_HEIGHT = 30
  const ANCHOR_HEIGHT = 18

  export default {
    props: {
      data: {
        type: Array,
        default: []
      }
    },
    computed: {
      shortcutList() {
        return this.data.map((group) => {
          return group.title.substr(0, 1)
        })
      },
    },
    data() {
      return {
        scrollY: -1,
        currentIndex: 0,
        diff: -1
      }
    },
   created() {
      this.probeType = 3
      this.listenScroll = true
      this.touch = {}
      this.listHeight = []
    },
    methods: {
   onShortcutTouchStart(e){
      let anchorIndex = getData(e.target, 'index')
      console.log(anchorIndex);
        this.$refs.listview.scrollToElement(this.$refs.listGroup[index], 0)
        // let firstTouch = e.touches[0]
        // this.touch.y1 = firstTouch.pageY
        // this.touch.anchorIndex = anchorIndex

     //   this._scrollTo(anchorIndex)
      
   },
   onShortcutTouchMove(e){
        let firstTouch = e.touches[0]
        this.touch.y2 = firstTouch.pageY
        let delta = (this.touch.y2 - this.touch.y1) / ANCHOR_HEIGHT | 0
        let anchorIndex = parseInt(this.touch.anchorIndex) + delta

        this._scrollTo(anchorIndex)
   },
       _scrollTo(index) {
        // if (!index && index !== 0) {
        //   return
        // }
        // if (index < 0) {
        //   index = 0
        // } else if (index > this.listHeight.length - 2) {
        //   index = this.listHeight.length - 2
        // }
        // this.scrollY = -this.listHeight[index]
        this.$refs.listview.scrollToElement(this.$refs.listGroup[index], 0)
      }
   
 
    },
  
    components: {
      Scroll
    
    }
  }

</script>
<style>

</style>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .listview
    position: relative
    width: 100%
    height: 100%
    overflow: hidden
    background: $color-background
    .list-group
      padding-bottom: 30px
      .list-group-title
        height: 30px
        line-height: 30px
        padding-left: 20px
        font-size: $font-size-small
        color: $color-text-l
        background: $color-highlight-background
      .list-group-item
        display: flex
        align-items: center
        padding: 20px 0 0 30px
        .avatar
          width: 50px
          height: 50px
          border-radius: 50%
        .name
          margin-left: 20px
          color: $color-text-l
          font-size: $font-size-medium
    .list-shortcut
      position: absolute
      z-index: 30
      right: 0
      top: 50%
      transform: translateY(-50%)
      width: 20px
      padding: 20px 0
      border-radius: 10px
      text-align: center
      background: $color-background-d
      font-family: Helvetica
      .item
        padding: 3px
        line-height: 1
        color: $color-text-l
        font-size: $font-size-small
        &.current
          color: $color-theme
    .list-fixed
      position: absolute
      top: 0
      left: 0
      width: 100%
      .fixed-title
        height: 30px
        line-height: 30px
        padding-left: 20px
        font-size: $font-size-small
        color: $color-text-l
        background: $color-highlight-background
    .loading-container
      position: absolute
      width: 100%
      top: 50%
      transform: translateY(-50%)
</style>
