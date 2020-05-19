import { IHttp } from "@/ts/interface/IHttp";
import axios from "axios";
import { DataModel, AtfxDataModel} from "@/ts/models/IdataModel";
import LocalStorageUtil from "@/ts/utils/LocalStorageUtil";

export default class HttpRequest implements IHttp {
  //  项目接口根地址
  private BASE_URL = process.env.VUE_APP_CLIENT_PORTAL_API_K8S_URL;

  // 成功code
  public static HTTP_SUCCESS_NET_CODE = 0; // 成功的请求
  // 错误code、其他code
  public static HTTP_ERROR_NEW_CODE = -50000; // 网络错误
  public static HTTP_TOKEN_EXPIRE = 400006; // token过期
  public static HTTP_ERROR_NOT_PAY = 400877; //
  public static HTTP_ERROR_WX_NOBIND = 400617; //

  /**
   * 设置请求根地址
   * @param url
   */
  public setBaseUrl(url: string): void {
    this.BASE_URL = url;
  }

  /**
   * get请求
   * @param url
   * @param params
   */
  public async get<T>(url: string, params: any) {
    url = this.BASE_URL + url;
    params["lang"] = LocalStorageUtil.getLanguage();
    params = { params };
    try {
      let backData = await axios.get(url, params);
      let backData1 = backData.data as AtfxDataModel<T>;
      return backData1;
    } catch (e) {
      const errorData = new AtfxDataModel();
      errorData.code = HttpRequest.HTTP_ERROR_NEW_CODE;
      errorData.message = "网络错误!";
      return errorData;
    }
  }

  /**
   * post请求
   * @param url
   * @param params
   */
  public async post<T>(url: string, params: any) {
    url = this.BASE_URL + url;
    params["lang"] = LocalStorageUtil.getLanguage();
    try {
      let backData = await axios.post(url, params);
      let backData1 = backData.data as AtfxDataModel<T>;
      return backData1;
    } catch (e) {
      const errorData = new AtfxDataModel();
      errorData.code = HttpRequest.HTTP_ERROR_NEW_CODE;
      errorData.message = "网络错误!";
      return errorData;
    }
  }
}
