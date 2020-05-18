<template>
  <div>
    LayOut
    <SideNavbar></SideNavbar>
    <TopNavbar></TopNavbar>
    <router-view />
  </div>
</template>

<script lang="ts">
import {Vue, Component} from "vue-property-decorator";
import SideNavbar from './components/SideNavbar.vue';
import TopNavbar from './components/TopNavbar.vue';

@Component({
  components: {
    SideNavbar,
    TopNavbar
  }
})
export default class LayOut extends Vue {
  created() {
    console.log("123")
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
