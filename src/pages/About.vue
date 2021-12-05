<template>
  <div>
    <h1>About</h1>
    <li><router-link :to="{path:'/home/message/detail',params:{from:'about'},query:{from:'about'} }">Home-message-detail</router-link></li>
    <li><router-link :to="{name:'detail',params:{from:'about'},query:{from:'about'} }">Home-message-detail</router-link></li>

  </div>
</template>

<script>
export default {
name: "About",
  beforeCreate() {
    console.log(this.$route)
  }
}
</script>

<style scoped>

</style>