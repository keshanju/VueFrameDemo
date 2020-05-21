<template>
  <el-row type="flex" justify="space-between">
    <el-col style="width: 240px;">
      <SideNavbar></SideNavbar>
    </el-col>
    <el-col style="padding: 24px;box-sizing: border-box;">
      <TopNavbar></TopNavbar>
      <el-divider></el-divider>
      <div>
        LayOut
        <transition>
          <router-view />
        </transition>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import {Vue, Component} from "vue-property-decorator";
import SideNavbar from '../../core/SideNavbar.vue';
import TopNavbar from '../../core/TopNavbar.vue';
import {Row, Col, Divider} from "element-ui"

@Component({
  components: {
    SideNavbar,
    TopNavbar,
    "el-row": Row,
    "el-col": Col,
    "el-divider": Divider,
  }
})
export default class LayOut extends Vue {
  created () {
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
