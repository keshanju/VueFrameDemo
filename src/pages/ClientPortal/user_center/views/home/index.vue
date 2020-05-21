<template>
  <div>
    This is my Home!
    {{msg_str}}
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from "vue-property-decorator";

  @Component({})
  export default class Home extends Vue {
    public msg_str: string = "Dashboard Page";

    created() {
      console.log("Init Home Success!")
    }
  }
</script>

<style scoped>

</style>
