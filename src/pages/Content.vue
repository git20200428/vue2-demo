<template>
  <h1>Content</h1>
</template>

<script>
export default {
name: "Content",
  props:['name','keyword','keyp'],
  mounted() {
    console.log(this.$route);
    console.log(this.$props)
  }
}
</script>

<style scoped>

</style>