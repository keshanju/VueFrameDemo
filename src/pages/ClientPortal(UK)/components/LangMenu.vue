<template>
  <div>
    <el-dropdown>
      <span class="el-dropdown-link">
        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>黄金糕</el-dropdown-item>
      <el-dropdown-item>狮子头</el-dropdown-item>
      <el-dropdown-item>螺蛳粉</el-dropdown-item>
      <el-dropdown-item disabled>双皮奶</el-dropdown-item>
      <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from "vue-property-decorator";
  import {Dropdown, DropdownItem, DropdownMenu} from "element-ui"

  @Component({
    components: {
      "el-dropdown": Dropdown,
      "el-dropdown-item": DropdownItem,
      "el-dropdown-menu": DropdownMenu
    }
  })
  export default class LangMenu extends Vue {
    public defalulLang: string = "cn";

    created() {
      console.log("Hello, 我是语言选择组件")
    }
  }
</script>

<style scoped>

</style>
