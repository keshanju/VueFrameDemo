import {Vue} from 'vue-property-decorator';
import router from './router'
import { Route } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import LocalStorageUtil from '@/ts/utils/LocalStorageUtil'
import "babel-polyfill"
import { Message } from 'element-ui'
Vue.prototype.$message = Message
router.beforeEach((to: Route, from: Route, next: any) => {
  document.title = "用户中心";//解决IE浏览器title不出现问题
  NProgress.start()
  let token = LocalStorageUtil.getCookie(LocalStorageUtil.STORAGES_TOKEN);
  if (token === null || token === '') {
    Vue.prototype.$message.error('登录失效，请重新登录');
    // 登录失效去首页
    setTimeout(() => {
      LocalStorageUtil.loginOut();//清除缓存
      window.location.href =  "/";
    }, 1500);
  } else {
    next()
  }
});

router.afterEach(() => {
  NProgress.done()
});
