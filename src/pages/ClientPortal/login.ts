import {Vue, Component, Prop} from 'vue-property-decorator';
import LoginApi from './api/LoginApi'
import {Input, Form, FormItem, Select, Button} from "element-ui";
import "babel-polyfill"

Vue.config.productionTip = false;

export interface LoginForm {
  phone: string;
  password: string;
}

const validatePhone = (rule, value, callback) => {
  if(!value) {
    callback(new Error('请输入手机号'));
  } else {
    callback();
  }
}

const validatePassword = (rule, value, callback) => {
  if(!value) {
    callback(new Error('请输入密码'))
  } else {
    callback()
  }
}

@Component({
  components: {
    'el-input': Input,
    'el-button': Button,
    'el-form': Form,
    'el-form-item': FormItem

  }
})
class Login extends Vue {
  public test_str: string = "数据绑定示例";
  public tab_id: number = 0;
  public loginForm: LoginForm = {
    phone: "",
    password: "",
  }
  public loginRules: object = {
    phone: [
      { validator: validatePhone, trigger: 'blur' }
    ],
    password: [
      { validator: validatePassword, trigger: "blur" }
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
    this.$refs[ruleObj].validate((valid) => {
      if(valid) {
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
