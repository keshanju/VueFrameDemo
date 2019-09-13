import { Component, Vue } from "vue-property-decorator"
import "babel-polyfill"
import "@/assets/less/my_flex.less"
import GlobalConfig from './global.config'
import {ArticleListRequestModel, ArticleListResponseModel} from '@/ts/models/ArticelModel'
import HttpClient from "@/ts/net/HttpClient"
import {IdataModel} from "@/ts/models/IdataModel";

Vue.config.productionTip = false;

@Component({})
class Index extends Vue {
    public test_str: string = "数据绑定示例";
    public tab_id: number = 0;

    // 公共参数
    public http: HttpClient = new HttpClient();
    public imageHeadUrl: string = '';
    public userUrl: string = '';
    public webUrl: string = '';
    public backData: IdataModel<any> | undefined;

    created() {
        this.setBaseUrl(GlobalConfig.getBaseUrl());
        this.getArticelList();
    }

    public init() {

    }

    public setBaseUrl(url: string): void {
        this.http.setBaseUrl(url);
    }

    public async getArticelList() {
        let url = HttpClient.URL_ARTICEL_LIST;
        let params = new ArticleListRequestModel();
        params.page = 1;
        params.count = 10;
        params.article_type_id = 2;
        params.from_type = 1;
        this.backData = await this.http.post<ArticleListRequestModel>(url, params);
    }

    public checkTabs(id: number) {
        this.tab_id = id;
        console.log(id)
    }
}
new Index().$mount("#app");
