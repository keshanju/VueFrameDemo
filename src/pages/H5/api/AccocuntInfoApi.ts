import BaseApi from './BaseApi'; // 引入基类
import HttpRequest from "@/ts/net/HttpRequest";
import {toLoginRequestModel, toLoginResponseModel} from "@/ts/models/UserModel"; //引入登录请求model和请求返回model

/**
 * AccocuntInfoApi
 */
export default class AccocuntInfoApi extends BaseApi {
  protected static http: HttpRequest = new HttpRequest();
  //  接口路径
  public static COMMON_COUNTRY_LIST: string =  '/commonCountryList';

  /**
   * 获取国家列表
   * @param params
   */
  public static async getCountryList(params) {
    const url = this.COMMON_COUNTRY_LIST;
    let backdata = null;
    backdata = await this.http.get(url, params);
    return backdata.data
  }
}
