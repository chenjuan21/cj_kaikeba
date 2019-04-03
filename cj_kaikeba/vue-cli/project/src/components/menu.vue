<template>
    <div class="ydc-menu">
                            <ul>
                                <li class="ydc-menu-item" v-for="(menu,index) in menus" :key="index">
                                    <router-link v-if="menu.type=='link'" :to="menu.to.name">
                                      <i :class="['ydc-icon',menu.icon,'fl']"></i>
                                        {{menu.title}}
                                    </router-link>
                                    <div v-else>
                                      <span class="ydc-menu-sub-title"   @click="cur=index">
                                        <i :class="['ydc-icon',menu.icon,'fl']"></i>
                                        {{menu.title}}
                                    </span>
                                    <ul :class="cur==index?'show':'hide'">
                                        <li v-for="(item,index) in menu.children" :key="index">
                                            <router-link :to="item.to.name">{{item.title}}</router-link>
                                        </li>
                                    </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
</template>
<script>
export default {
    data () {
        return {
            menus:[
               {type:'link',to:{name:'index',params:{}},icon:'ydc-icon-home','title':'首页'},
               {type:'link',to:{name:'release',params:{}},icon:'ydc-icon-find','title':'发布'},
               {type:'sub',icon:'ydc-icon-file','title':'管理',children:[
                  { to:{name:'content',params:{}},title:'内容管理'},
                  { to:{name:'related',params:{}},title:'内容同步'},
                  { to:{name:'asset',params:{}},title:'内容管理'},
               ]},
               {type:'sub',icon:'ydc-icon-record','title':'数据',children:[
                   {to:{name:'subscribe',params:{}},title:'订阅数据'},
                   {to:{name:'contentData',params:{}},title:'内容数据'},
                   {to:{name:'starLevel',params:{}},title:'指数星级'},
               ]
               },
               {type:'sub',icon:'ydc-icon-set','title':'设置',children:[
                     {to:{name:'info',params:{}},title:'账号信息'},
                     {to:{name:'account',params:{}},title:'账号状态'},
               ]},
                {type:'sub',icon:'ydc-icon-customer','title':'客服',children:[
                      {to:{name:'line',params:{}},title:'在线咨询'},
                ]},
            ],
            cur:0,
          
        }
    },
      methods: {
                show(index){
                    this.flag[index] = !this.flag[index]
                //    this.$set(this.flag,index,this.flag);
                   console.log(this.flag);
                }
            }
}
</script>
<style lang="css" scoped>
.ydc-menu .ydc-menu-item .router-link-active {
    background: #ff6565;
    color: #fff;
}
.show{
    display: block;
}
.hide{
    display:none;
}
    
</style>


