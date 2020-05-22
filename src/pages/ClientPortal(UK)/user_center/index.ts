import "@/assets/less/main.less"
import Vue from 'vue'
import "babel-polyfill";
import './permission'
import router from './router/index'

Vue.config.productionTip = false;

class User extends Vue {  }

new User({router}).$mount('#app');
