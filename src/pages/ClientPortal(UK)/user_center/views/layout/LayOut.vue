<template>
  <el-row type="flex" justify="space-between">
    <el-col style="max-width: 200px;min-width: 100px;">
      <nav-bar></nav-bar>
    </el-col>
    <el-col>
      <tool-bar></tool-bar>
      <el-divider></el-divider>
      <div style="background-color: #eee;height: calc(100vh - 100px);padding: 24px;box-sizing: border-box;">
        <!--<p>LayOut Title</p>-->
        <transition name="fade-transform" mode="out-in">
          <router-view />
        </transition>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import Navbar from '../../core/Navbar.vue';
  import ToolBar from '../../core/ToolBar.vue';
  import {Col, Divider, Row} from "element-ui"
  import "babel-polyfill";

  @Component({
    components: {
      "nav-bar": Navbar,
      "tool-bar": ToolBar,
      "el-row": Row,
      "el-col": Col,
      "el-divider": Divider,
    }
  })
  export default class LayOut extends Vue {
    created() {
      // console.log("Hi，LayOut组件已经成功加载.......");
      // console.log(this.$children)
    }
  }
</script>

<style scoped lang="less">
  /* fade */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.28s;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }

  /* fade-transform */
  .fade-transform-leave-active,
  .fade-transform-enter-active {
    transition: all 0.5s;
  }

  .fade-transform-enter {
    opacity: 0;
    transform: translateX(-30px);
  }

  .fade-transform-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
</style>
