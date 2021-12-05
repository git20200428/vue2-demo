<template>
  <div id="app">
    <ul class="wrapper">
      <li><router-link to="/home">Home</router-link></li>
      <li><router-link to="/content">Content</router-link></li>
      <li><router-link to="/about">About</router-link></li>
<!--      name传递的params和query参数都能传成功-->
<!--      <li><router-link :to="{name:'home',params:{name:'home-params',age:'1-1'}, query:{name:'home-query'}}">Home</router-link></li>-->
<!--      path传递的params不成功，传递query参数成功-->
<!--      <li><router-link :to="{name:'content',params:{name:''||undefined},query:{name:'query-content'}}">Content</router-link></li>-->

<!--      <li><router-link to="/about/key">About</router-link></li>-->
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="less">
  .wrapper{
    display: flex;

    li{
      flex: 1 1 auto;
    }
  }
</style>
