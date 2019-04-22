<template>
  <div>
    <nav-bar title="图文列表"></nav-bar>
    <div class="photo-header">
      <ul>
        <li>
          <router-link>标题1</router-link>
        </li>
        <li>
           <router-link>标题2</router-link>
        </li>
        <li>
           <router-link>标题3</router-link>
        </li>
      </ul>
    </div>
    <div class="photo-list">
      <ul>
        <li v-for="(item,index) in imgSrc" :key="index">
          <a href="">
            <img  v-lazy="item.img" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
   data() {
     return {
       imgSrc:[
       {"img": "./../../../static/img/1.jpg"},
       {"img": "./../../../static/img/2.jpg"},
       {"img": "./../../../static/img/3.jpg"},
       {"img": "./../../../static/img/4.jpg"},
       {"img": "./../../../static/img/1.jpg"},
       {"img": "./../../../static/img/2.jpg"},
       {"img": "./../../../static/img/3.jpg"},
       {"img": "./../../../static/img/4.jpg"} 
       ]
     }
   },
    created() {
      let categoryID = this.$route.params.categoryId;
      console.log(categoryID);
    },
    methods: {
      loadImgsByCategoryId(){

      }
    }
  }
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
.photo-header ul li {
  list-style: none;
  float: left;
  margin-left: 15px;
}
.photo-list img{
  width: 100%
}

/*图片懒加载样式*/
image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>