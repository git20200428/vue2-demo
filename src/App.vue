<template>
  <div id="app">
    <img src="@/assets/logo.png" alt="">
<!--    <ul class="wrapper">-->
<!--      <li><router-link to="/home">Home</router-link></li>-->
<!--      <li><router-link to="/content/key">Content</router-link></li>-->
<!--      <li><router-link to="/about">About</router-link></li>-->
<!--      name传递的params和query参数都能传成功-->
<!--      <li><router-link :to="{name:'home',params:{name:'home-params',age:'1-1'}, query:{name:'home-query'}}">Home</router-link></li>-->
<!--      path传递的params不成功，传递query参数成功-->
<!--      <li><router-link :to="{path:'/content',params:{name:'sss'},query:{name:'query-content'}}">Content</router-link></li>-->

<!--      <li><router-link :to="{name:'/about2'}">About</router-link></li>-->
<!--    </ul>-->
<!--    <router-view></router-view>-->
<!--    <Child arg="arg" msg="msg"></Child>-->
    <h4>{{id}}</h4>
    <h6>{{$store.state.index.num}}</h6>
    <button v-on:click="add1">add</button>
    <button v-on:click="sub1">sub</button>
    <br/>
    <h6>{{$store.state.condition.name}}</h6>
    <h6>{{$store.state.condition.age}}</h6>
    <span>{{$store.state.condition.num}}</span> <button v-on:click="add2">add</button> <button v-on:click="sub2">sub</button><br/>
    name:<input  v-model="userName"><button  v-on:click="changeName">changeName</button>
    <br/>
    age:<input  v-model="userAge"><button v-on:click="changeAge">changeAge</button>
<!--    <Test key="key1"  ref="test" :id="id" :name="name" :age="age" :addressInfo="address"></Test>-->
  </div>
</template>

<script>
  // import Child from "@/components/Child"
  // import Test from "@/components/Test"
  export default {
    name: 'App',
    // components: {Child,Test},
    data(){
      return {
        id:'app',
        userName:this.$store.state.condition.name,
        userAge: this.$store.state.condition.age
      }
    },
    methods:{
      add1(){
        this.$store.dispatch('index/addNum',1)
        console.log("add1 is clicked");
      },
      sub1(){
        this.$store.dispatch('index/subNum',1)
        console.log("sub1 is clicked");
      },
      add2(){
        this.$store.dispatch('addNum',1)
        console.log("add2 is clicked");
      },
      sub2(){
        this.$store.dispatch('subNum',1)
        console.log("sub2 is clicked");
      },
      changeName(){
        this.$store.dispatch('changeName',this.userName)
      },
      changeAge(){
        this.$store.dispatch('changeAge',this.userAge)
      }
    },
    mounted() {
      console.log(this.$store.state)
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
