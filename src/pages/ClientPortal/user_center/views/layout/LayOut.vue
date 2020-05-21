<template>
  <div>
    LayOut
    <SideNavbar></SideNavbar>
    <TopNavbar></TopNavbar>
    <transition>
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from "vue-property-decorator";
import SideNavbar from '../../core/SideNavbar.vue';
import TopNavbar from '../../core/TopNavbar.vue';

@Component({
  components: {
    SideNavbar,
    TopNavbar
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
