<template>
  <div>
    <h3>Child</h3>
    <GrandSon class="wwww" style="background: red;" age="18" ></GrandSon>
    <div>--------</div>
  </div>

</template>

<script>
import GrandSon from "./GrandSon"
export default {
  name: "Child",
  components: {GrandSon},
  inheritAttrs: false
}
</script>

<style scoped>

</style>