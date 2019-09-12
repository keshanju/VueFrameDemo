import { Component, Vue } from "vue-property-decorator";
import "babel-polyfill";
import "@/assets/less/my_flex.less";

Vue.config.productionTip = false;

@Component({})
class Test extends Vue {
    public test_str: string = "数据绑定示例";
    public tab_id: number = 0;

    public checkTabs(id: number) {
        this.tab_id = id;
        console.log(id)
    }
}
new Test().$mount("#app");
