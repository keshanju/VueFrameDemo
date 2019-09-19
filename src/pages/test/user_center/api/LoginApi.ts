import BaseApi from './BaseApi'
import HttpRequest from "@/ts/net/HttpRequest";
import {toLoginRequestModel, toLoginResponseModel} from "@/ts/models/UserModel";
import {YdataModel} from "@/ts/models/IdataModel";

//   引入基类

/**
 * 登录相关api类
 */
export default class LoginApi extends BaseApi {
    protected backData: any = null;
    public static http: HttpRequest = new HttpRequest();

    /**
     * 登录请求方法
     * @param params
     */
    public static async toLogin(params: toLoginRequestModel) {
        let url = HttpRequest.HTTP_LOG_IN;
        let backdata = null;
        backdata = await this.http.post<toLoginResponseModel>(url, params);
        return backdata
    }
}
