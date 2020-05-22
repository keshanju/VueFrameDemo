<template>
  <div>
    this is {{msg_str}}
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from "vue-property-decorator"

  @Component({})
  export default class Deposit extends Vue {
    public msg_str: string = "Deposit Page!"
  }
</script>

<style scoped>

</style>
