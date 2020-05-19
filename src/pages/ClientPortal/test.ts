import "@/assets/less/main.less";
import { Component, Vue } from "vue-property-decorator";
import "babel-polyfill";
import GlobalConfig from "./global.config";
import HttpRequest from "@/ts/net/HttpRequest";
import { IdataModel } from "@/ts/models/IdataModel";
import WebParamModel from "@/ts/models/WebModel";
import { TdappModel } from "@/ts/models/TdappModel";
import JumpWebUtil from "@/ts/utils/JumpWebUtil";
import { Input, Option, Radio, Select, Button } from "element-ui";
import router from "./user_center/router";
import VueI18n from "vue-i18n";
import { LsLanguage } from "@/pages/ClientPortal/util/LsLanguage";

//语言包
Vue.use(VueI18n);
let lang = LsLanguage.getInstance();
lang.init();
const i18n = new VueI18n(lang);
Vue.config.productionTip = false;

@Component({
    components: {
        "el-radio": Radio,
        "el-input": Input,
        "el-select": Select,
        "el-option": Option,
        "el-button": Button,
    },
})
class Test extends Vue {
    public test_str: string = "数据绑定示例";
    public tab_id: number = 0;

    public webParam = WebParamModel.getInstace();
    public browserModel = new TdappModel();
    public isDeviceWx = JumpWebUtil.isDeviceWx();
    public isDeviceAndroid = JumpWebUtil.isDeviceAndroid();
    public isDeviceIos = JumpWebUtil.isDeviceIos();

    //element
    public radio = "1";
    public options = [
        {
            value: "选项1",
            label: "黄金糕",
        },
        {
            value: "选项2",
            label: "双皮奶",
        },
    ];
    public value = "";
    public getData = null;
    public postData = null;

    // 公共参数
    public http: HttpRequest = new HttpRequest();

    public backData: IdataModel<any> | undefined;
    public imageHeadUrl: string = "";
    public userUrl: string = "";
    public webUrl: string = "";

    created() {
        this.setBaseUrl(GlobalConfig.getBaseUrl());
        this.init();
    }

    public init() {}

    public setBaseUrl(url: string): void {
        this.http.setBaseUrl(url);
    }

    public jumpLogin() {
        window.location.href = "/login";
        // this.$router.push({ path: "/user_center/#/login" });
    }

    public async testGet() {
        // let url = HttpRequest.HTTP_LOG_IN;
        // let param = new NewRequestModel();
        // param.size = 1;
        // param.page = 1;
        // param.region_code = this.webParam.region_code;
        // this.getData = await this.http.get<ActivityDetailRequestModel>(url, param);
    }

    /**
     *
     */
    public async testPost() {
        // let url = HttpRequest.URL_ARTICEL_LIST;
        // let param = {
        //     activity_id: 140,
        //     present_type: 0,
        //     size: 1,
        //     page: 1,
        // };
        // this.postData = await this.http.post(url, param);
    }
}

new Test({
    router,
    i18n,
}).$mount("#app");
