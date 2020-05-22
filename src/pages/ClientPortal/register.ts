import "@/assets/less/main.less"
import {Vue, Component, Prop} from 'vue-property-decorator';
import LoginApi from './api/LoginApi'
import {Input, Form as ElForm, Form, FormItem, Select, Row, Col, Button} from "element-ui";
import "babel-polyfill"

Vue.config.productionTip = false;

export interface LoginForm {
  phone: string;
  password: string;
}


@Component({
  components: {
    'el-input': Input,
    'el-button': Button,
    'el-form': Form,
    'el-form-item': FormItem,
    'el-row': Row,
    'el-col': Col,
  }
})
export default class Login extends Vue {
  public test_str: string = "数据绑定示例";
  public tab_id: number = 0;
  public loginForm: LoginForm = {
    phone: "",
    password: "",
  }
  /**
   *验证方法
   *
   * @memberof Login
   */
  public validatePhone = (rule, value, callback) => {
    if (!value) {
      callback(new Error('请填写您的用户名！'));
    } else {
      callback();
    }
  }

  public validatePassword = (rule, value, callback) => {
    if (!value) {
      callback(new Error('请填写您的密码！'))
    } else {
      callback()
    }
  }

  public loginRules: object = {
    phone: [
      {validator: this.validatePhone, trigger: 'blur'}
    ],
    password: [
      {validator: this.validatePassword, trigger: "blur"}
    ]
  }


  /**
   *
   * @param id
   */
  public checkTabs(id: number) {
    this.tab_id = id;
    console.log(id)
  }

  public submitForm(ruleObj) {
    (this.$refs[ruleObj] as ElForm).validate((valid) => {
      if (valid) {
        alert("Submit Success!")
      }
    })
  }

  public resetForm(ruleObj) {

  }

  /**
   *
   */
  public async goToLogin() {
    let params_obj = {
      phoneAreaCode: "86",
      phoneNumber: "13410905148",
      email: "keshanju@11.io",
      password: "1231231",
      deviceId: "",
      entity: "",
      loginType: "",
      platform: ""
    };
    await LoginApi.toLogin(params_obj);
  }
}

new Login().$mount("#app");
