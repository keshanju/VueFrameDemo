import "@/assets/less/main.less"
import {Component, Vue} from "vue-property-decorator"
import { Link, Row, Col } from "element-ui"
import "babel-polyfill"

Vue.config.productionTip = false;

@Component({
    components: {
        "el-link": Link,
        "el-row": Row,
        "el-col": Col
    }
})
class Index extends Vue {
}

new Index().$mount("#app");
