import "@/assets/less/my_flex.less"
import { Component, Vue } from "vue-property-decorator"
import "babel-polyfill"
import GlobalConfig from './global.config'
import {ArticleListRequestModel, ArticleListResponseModel} from '@/ts/models/ArticelModel'
import {ClassListRequestModel, ClassListResponseModel} from '@/ts/models/ClassModel'
import {DegnLuRequestModel} from '@/ts/models/UserModel'
import HttpRequest from "@/ts/net/HttpRequest"
import {IdataModel} from "@/ts/models/IdataModel";
import WebParamModel from "@/ts/models/WebModel";
import {TdappModel} from "@/ts/models/TdappModel";
import JumpWebUtil from "@/ts/utils/JumpWebUtil";
import {Input, Option, Radio, Select, Button} from "element-ui";

Vue.config.productionTip = false;

@Component({
    components: {
        'el-radio': Radio,
        'el-input': Input,
        'el-select': Select,
        'el-option': Option,
        'el-button': Button
    }
})
class Index extends Vue {
    public test_str: string = "数据绑定示例";
    public tab_id: number = 0;

    public webParam = WebParamModel.getInstace();
    public browserModel = new TdappModel();
    public isDeviceWx = JumpWebUtil.isDeviceWx();
    public isDeviceAndroid = JumpWebUtil.isDeviceAndroid();
    public isDeviceIos = JumpWebUtil.isDeviceIos();

    //element
    public radio = '1';
    public options = [{
        value: '选项1',
        label: '黄金糕'
    }, {
        value: '选项2',
        label: '双皮奶'
    }];
    public value = '';
    public postData = null;
    public postData1 = null;

    // 公共参数
    public http: HttpRequest = new HttpRequest();

    public backData: IdataModel<any> | undefined;
    public imageHeadUrl: string = '';
    public userUrl: string = '';
    public webUrl: string = '';

    created() {
        this.setBaseUrl(GlobalConfig.getBaseUrl());
        this.init();
    }

    public init() {
    }

    public setBaseUrl(url: string): void {
        this.http.setBaseUrl(url);
    }

    /**
     * 云翰接口
     */
    public async toLogin() {
        let url = HttpRequest.HTTP_LOG_IN;
        let params = new DegnLuRequestModel();
        params.guid = 2965059139;
        params.password = 905148;
        params.username = "13410905148";
        params.signature = "cab6baebae7ecb97b46a57b90cce4c964317f710";
        this.postData = await this.http.post(url, params);
        console.log(this.postData);
    }

    public checkTabs(id: number) {
        this.tab_id = id;
    }
}
new Index().$mount("#app");
