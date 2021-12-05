<template>
  <div>
    <h2>Home Message</h2>
    <li><router-link to="/home/message/detail">Home-message-detail</router-link></li>
    <li><router-link to="/home/message/new">Home-message-new</router-link></li>
<!--    <li><router-link :to="{name:'detail',params:{name:'home-message-detail-params',age:'3-1'}, query:{name:'home-message-detail-query'}}">Home-message-detail</router-link></li>-->
<!--    <li><router-link :to="{name:'new',params:{name:'home-message-new-params',age:'3-2'}, query:{name:'home-message-new-query'}}">Home-message-new</router-link></li>-->
    <div>-------------Home Message---------------</div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
name: "HomeMessage",
  beforeCreate() {
    console.log(this.$route)
  }
}
</script>

<style scoped>

</style>