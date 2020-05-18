import "babel-polyfill"
import GlobalConfig from '../global.config'
import HttpRequest from "@/ts/net/HttpRequest"
import { YdataModel } from "@/ts/models/IdataModel";

export default class BaseApi {
    // 公共参数
    public http: HttpRequest = new HttpRequest();
    public YuhanDataModel: YdataModel<any> | undefined;

    /**
     * 设置根地址
     * @param url
     */
    protected setBaseUrl(url: string): void {
        this.http.setBaseUrl(url);
    }

    created() {
        this.setBaseUrl(GlobalConfig.getBaseUrl());
    }
}
