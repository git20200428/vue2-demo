<template>
  <div id="app">
    <ul class="wrapper">
      <li><router-link to="/home">Home</router-link></li>
      <li><router-link to="/content/key">Content</router-link></li>
      <li><router-link to="/about">About</router-link></li>
<!--      name传递的params和query参数都能传成功-->
<!--      <li><router-link :to="{name:'home',params:{name:'home-params',age:'1-1'}, query:{name:'home-query'}}">Home</router-link></li>-->
<!--      path传递的params不成功，传递query参数成功-->
<!--      <li><router-link :to="{path:'/content',params:{name:'sss'},query:{name:'query-content'}}">Content</router-link></li>-->

<!--      <li><router-link to="/about/key">About</router-link></li>-->
    </ul>
    <router-view></router-view>
<!--    <button v-on:click="test">test</button>-->
<!--    <Test key="key1"  ref="test" :id="id" :name="name" :age="age" :address="address"></Test>-->
  </div>
</template>

<script>
  import Test from "@/components/Test"
  export default {
    name: 'App',
    components: {Test},
    data(){
      return {
        id:'app',name:'app',age:'app',address:'app'
      }
    },
    methods:{
      test(){
        this.id='app1';
        this.name='app1';
        this.age='app1';
        this.address='app1';
        console.log(this.$refs.test);
      }
    }

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
