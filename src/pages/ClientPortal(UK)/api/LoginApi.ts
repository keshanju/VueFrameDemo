import BaseApi from './BaseApi'; // 引入基类
import HttpRequest from "@/ts/net/HttpRequest";
import {toLoginRequestModel, toLoginResponseModel} from "@/ts/models/UserModel"; //引入登录请求model和请求返回model

/**
 * 登录相关API类
 */
export default class LoginApi extends BaseApi {
  protected static http: HttpRequest = new HttpRequest();
  //  接口路径
  public static HTTP_LOG_IN: string = '/login';
  public static COMMON_COUNTRY_LIST: string =  '/commonCountryList';

  /**
   * 登录请求api
   * @param toLoginRequestModel
   */
  public static async toLogin(params: toLoginRequestModel) {
    let url = this.HTTP_LOG_IN;
    let backdata = null;
    backdata = await this.http.post<toLoginResponseModel>(url, params);
    return backdata
  }
}
