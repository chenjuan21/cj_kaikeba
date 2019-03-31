<template>                                  
  <div class="ydc-tabPanel ydc-tabPanel-release">
                                <div class="ydc-release-tab-head">
                                    <ul>
                                        <li class="hit" v-for ="(item,index) in tabs" :class="in                                                        "，，，， > {{item}}</li>
                                      

                                    </ul>
                                  <slot name="amount"></slot>
                                </div>
                                <div class="ydc-panes">
                                    <div class="ydc-pane" style="display:block;">
                                      <slot name="tab1"></slot>
                                    </div>
                                    <div class="ydc-pane">
                                       <slot name="tab2"></slot>
                                    </div>
                                </div>
                            </div>  
</template>
<script>
export default {
    name:"tabPanel",
    props: ['tabs']
}
</script>
<style>

</style>


