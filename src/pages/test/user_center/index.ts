import router from './router/index'
import "@/assets/less/test.less"
import Vue from 'vue'
import "babel-polyfill";

Vue.config.productionTip = false;

new Vue({
    router
}).$mount('#app');
