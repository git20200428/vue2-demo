<template>
  <div>
    <h3>Test</h3>
    <div>{{id}}</div>
    <button @click="change">change</button>
  </div>
</template>

<script>
export default {
  name: "Test",
  data(){
    return {
      id:'test1',
      msg:'msg',
      ageM:'computed'
    }
  },
  methods:{
    name(){
      // console.log(this.name);
      return 'methods'
    },
    change(){
      this.id = "test123";
      this.msg = "msg123";
      this.name = "name123";
      this.age = "age123";
    }
  },
  computed:{
    age: {
      get(){
        return this.ageM;
      },
      set(newV,oldV){
        this.ageM = newV;
      }

    }
  },
  watch:{
    address(){
      console.log('watch')
    },
    id(){
      console.log(this.id)
    },
    // msg(){
    //   console.log(this.msg);
    // },
    name(){
      console.log(this);
    },
    age(){
      console.log(this.age);
      console.log(this)
    }
  },
  created() {
    console.log(this.$props);
  },
  mounted() {
    console.log(this);
  }

}
</script>

<style scoped>

</style>