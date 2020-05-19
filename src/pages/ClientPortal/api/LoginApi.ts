import BaseApi from './BaseApi'
import HttpRequest from "@/ts/net/HttpRequest";
import { toLoginRequestModel, toLoginResponseModel } from "@/ts/models/UserModel";

//   引入基类

/**
 * 登录相关api类
 */
export default class LoginApi extends BaseApi {
  protected static http: HttpRequest = new HttpRequest();
  //  接口路径
  protected static HTTP_LOG_IN = "/login"

  /**
   * 登录请求方法
   * @param params
   */
  public static async toLogin(params: toLoginRequestModel) {
    let url = this.HTTP_LOG_IN;
    let backdata = null;
    backdata = await this.http.post<toLoginResponseModel>(url, params);
    return backdata
  }
}
