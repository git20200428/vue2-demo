<template>
  <div>
    <h1>Home</h1>
<!--    <router-link to="/home/message">Home-message</router-link>-->
<!--    <router-link to="/home/about">Home-about</router-link>-->
    <li><router-link :to="{path:'/home/message' ,params:{name:'home-message-params',age:'2-1'}, query:{name:'home-message-query'}}">Home-message</router-link></li>
    <li><router-link :to="{name:'homeAbout'}">Home-about</router-link></li>
    <div>-------------Home---------------</div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  beforeCreate() {
    console.log(this.$route)
  }
}
</script>

<style scoped>

</style>