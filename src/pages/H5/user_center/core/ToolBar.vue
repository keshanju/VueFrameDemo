<template>
  <el-row type="flex" justify="space-between" style="padding: 24px 24px 0;">
    <el-col :span="12" :xs="0">
      <span>Client Portal</span>
    </el-col>
    <el-col :span="12" :xs="24" style="text-align: right">
      <!--<el-cascader
          v-model="value"
          :options="topNavData"
          :props="{ expandTrigger: 'hover' }"
          @change="handleChange">
      </el-cascader>-->
      <el-dropdown @command="handelCommand">
        <span class="el-dropdown-link">
          Who are you<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item disabled>双皮奶</el-dropdown-item>
          <el-dropdown-item divided command="logout">LogOut</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator"
  import {Cascader, Col, Dropdown, DropdownItem, DropdownMenu, Row} from "element-ui"
  import "babel-polyfill"
  import JumpWebUtil from "@/ts/utils/JumpWebUtil";

  @Component({
    components: {
      "el-cascader": Cascader,
      "el-dropdown": Dropdown,
      "el-dropdown-item": DropdownItem,
      "el-dropdown-menu": DropdownMenu,
      "el-row": Row,
      "el-col": Col,
    }
  })
  export default class ToolBar extends Vue {
    public value: string = "";

    public handelCommand(command) {
      if(command === "logout") {
        JumpWebUtil.backLogin()
      }
    }

    public handleChange() {

    }
  }
</script>

<style scoped>

</style>
