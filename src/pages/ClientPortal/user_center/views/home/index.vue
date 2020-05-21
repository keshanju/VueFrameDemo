<template>
  <div>
    This is my Home!
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from "vue-property-decorator";

  @Component({})
  export default class Home extends Vue {

    created() {
      console.log("home 初始化")
    }
  }
</script>

<style scoped>

</style>
