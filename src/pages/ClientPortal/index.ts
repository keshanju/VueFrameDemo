import "@/assets/less/main.less"
import {Component, Vue} from "vue-property-decorator"
import "babel-polyfill"

Vue.config.productionTip = false;

@Component({})
class Index extends Vue {
}

new Index().$mount("#app");
