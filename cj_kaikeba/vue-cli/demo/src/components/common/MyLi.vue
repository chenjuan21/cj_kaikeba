<template>
  <li>
    <slot></slot>
  </li>
</template>

<script>
  export default {
    name:"my-li"
  }
</script>

<style scoped>
li{
 width: 32%;
  height: 100px;
  background: #000;
  margin: 0;
  padding: 0;
  list-style: none;
  margin-right:0.5%;
  margin-top: 3px;
  float: left;
}
</style>