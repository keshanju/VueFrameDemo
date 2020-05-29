import "@/assets/less/main.less";
import {Component, Vue} from "vue-property-decorator";
import "babel-polyfill";
import HttpRequest from "@/ts/net/HttpRequest";
import LoginApi from "./api/LoginApi"
import CommonApi from "./api/CommonApi"

import {TdappModel} from "@/ts/models/TdappModel";

import JumpWebUtil from "@/ts/utils/JumpWebUtil";
import {LsLanguage} from "@/pages/ClientPortal/util/LsLanguage";

import router from "./user_center/router/index";// 用法同vuex

import store from './user_center/store/index';// 引入状态管理库，并在当前实例下进行注册

import {toLoginRequestModel} from "@/ts/models/UserModel";

import {Input, Option, Radio, Select, Button, Row, Col, Message} from "element-ui";
import LangMenu from "./components/LangMenu.vue"

import VueI18n from "vue-i18n";
//语言包 ，用法同vuex和vue-router
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
    "el-row": Row,
    "el-col": Col,
    "lang-menu": LangMenu
  }
})
// ...mapState([''])


class Test extends Vue {
  public test_str: string = "数据绑定示例";

  public browserModel = new TdappModel();
  public isDeviceWx = JumpWebUtil.isDeviceWx();
  public isDeviceAndroid = JumpWebUtil.isDeviceAndroid();
  public isDeviceIos = JumpWebUtil.isDeviceIos();

  public Lang: string = "EN";

  //element-ui 数据选项
  public radio = "1";

  public value = "";
  public getData = null;
  public postData = null;

  // 公共参数
  public http: HttpRequest = new HttpRequest();

  // 接口地址
  public HTTP_LOG_IN: string = '/login';
  public COMMON_COUNTRY_LIST: string = '/commonCountryList';
  public countryListArr: object[] = [{
    "ISO": "CHN",
    "name": "China"
  }];

  async created() {
    // await this.init();
    console.log(this.$store.state.total)
  }

  /**
   * 初始化加载的方法和接口
   */
  private async init() {
    this.countryListArr = await CommonApi.getCountryList({});
    console.log(this.countryListArr);
  }

  private async gotoLogin() {
    /*登录前置逻辑：
    1.表单验证
    2.登录类型判断
    3.判断地区
    ......
    */

    // 备注：此处的接口传参字段严格按照接口的传参格式进行约束，若少写了一个参数，变回提前提示
    let params: toLoginRequestModel = {
      phoneAreaCode: "", /** 国家区号 */
      phoneNumber: "", /** 電話號碼 */
      email: "", /** 電子信箱 */
      password: "", /** 會員帳戶密碼 */
      deviceId: "", /** 裝置識別碼 */
      entity: "", /** 簡訊subject */
      loginType: "", /** 登入方式，value: phone,email */
      platform: "string", /** 登入平台，vlaue: web, app */
    };
    let loginData = await LoginApi.toLogin(params);// api的请求方法单独拎出来凡在每个模块的文件里面定义，而页面的登录点击操作的逻辑则在当前的页面定义方法进行操作
    console.log(loginData)
  }

  public async testGet() {
    let url = this.COMMON_COUNTRY_LIST;
    let param = {};
    this.getData = await this.http.get(url, param);
  }

  public async testPost() {
    let url = this.HTTP_LOG_IN;
    let param = {};
    let data = await this.http.post(url, param);
    if(data.code === HttpRequest.HTTP_SUCCESS_NET_CODE) {
      alert("Post Successful!")
    } else if(data.code === HttpRequest.HTTP_TOKEN_EXPIRE ) {
      alert("Token Expirt!")
    } else {
      Message.error("Post Failed...")
    }
  }

  public jumpLogin() {
    window.location.href = "/login";
  }

  public addSync() {
    this.$store.commit('addCount');
    console.log(this.$store.state.total)
  }

  public addAsync(num: any) {
    this.$store.dispatch('asyncAdd', {num});
    console.log(this.$store.state.total)
  }

  get total(): void {
    return this.$store.state.total;
  }

  public changeLang(arg: string) {
    console.log(arg)
  }
}

new Test({
  router,
  i18n,
  store
}).$mount("#app");
