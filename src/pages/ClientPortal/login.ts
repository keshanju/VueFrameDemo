import {Vue, Component, Prop} from 'vue-property-decorator';
import LoginApi from './api/LoginApi'
import {Input, Form, FormItem, Select, Button} from "element-ui";
import "babel-polyfill"

Vue.config.productionTip = false;

export interface UserForm {
  name: string;
  age: number;
  sex: boolean
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
  public userForm: UserForm = {
    name: "keshanju",
    age: 0,
    sex: false
  }
  public userModel: object = {}

  /**
   *
   * @param id
   */
  public checkTabs(id: number) {
    this.tab_id = id;
    console.log(id)
  }

  /**
   *
   */
  public async goLogin() {
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
