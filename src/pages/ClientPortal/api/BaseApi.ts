import "babel-polyfill"
import GlobalConfig from '../global.config'
import HttpRequest from "@/ts/net/HttpRequest"

export default class BaseApi {
    // 公共参数
    public http: HttpRequest = new HttpRequest();

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
