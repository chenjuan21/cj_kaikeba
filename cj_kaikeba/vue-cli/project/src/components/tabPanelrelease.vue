<template>                                  
  <div class="ydc-tabPanel ydc-tabPanel-release">
                                <div class="ydc-release-tab-head">
                                    <ul>
                                        <li v-for="(item,index) in tabs" :class="index==cur?'hit':''" :key="index" @click="cur=index"> {{item.title}}</li>
                                    </ul>
                                  <slot name="amount"></slot>
                                </div>
                                <div class="ydc-panes">
                                    <div v-for="(item,index) in tabs" :key="index"  class="ydc-pane" :style="{display:index==cur?'block':'none'}" >
                                      <slot :name="item.slotname"></slot>
                                    </div>
                                </div>
                            </div>  
</template>
<script>
export default {
    name:"tabPanel",
    props: ['tabs'],
    data () {
      return {
        cur:0
      }
    }
}
</script>
<style>

</style>


