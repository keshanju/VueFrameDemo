<template>
  <el-menu
      :default-active="activeLink"
      :router="true"
      class="el-menu-vertical-demo"
      @select="jumpLink"
      @open="handleOpen"
      @close="handleClose">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/home">Dashboard</el-menu-item>
        <el-menu-item index="/setting">Setting</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <el-menu-item index="/deposit">Deposit</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">导航二</span>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <i class="el-icon-document"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator"
  import {Menu, MenuItem, MenuItemGroup, Submenu} from "element-ui"
  import "babel-polyfill";

  @Component({
    components: {
      "el-menu": Menu,
      "el-menu-item": MenuItem,
      "el-submenu": Submenu,
      "el-menu-item-group": MenuItemGroup
    }
  })
  export default class Navbar extends Vue {
    public activeLink: string = "";

    created() {
      console.log(this.$router);
      this.setLink(this.$router.currentRoute.path)
      this.$router.afterEach((to, from) => {
        this.setLink(this.$router.currentRoute.path)
      })
    }

    jumpLink(index, indexPath) {
      if (index.charAt(0) === '/') {
        this.$router.push(index)
      }
    }

    setLink(path) {
      this.activeLink = path
    }

    public handleOpen() {

    }

    public handleClose() {

    }
  }
</script>

<style scoped>

</style>
