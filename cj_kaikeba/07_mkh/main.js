//整个程序的入口
import Vue from './Vue.js';
import App from './App.js';

new Vue({
  el:"#app",
  components:{
    app:App
  },
  template:'<app/>'
})