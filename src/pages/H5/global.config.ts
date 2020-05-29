import ProjectConfig from "../../../project.config";
import $ from 'jquery';


/**
 * 全局的config
 */
export default class GlobalConfig {
  public static server_type;

  /**
   * 检测系统环境
   */
  public static checkEnv() {
    let nowUrl = $('html').attr('domain');
    if (nowUrl) {
      if (nowUrl.indexOf('dev-dengbo.xiaomingkeji') > -1) {
        return 1;
      } else if (nowUrl.indexOf('test.xiaomingkeji') > -1) {
        return 2;
      } else if (nowUrl.indexOf('bbb.yunhan100') > -1) {
        return 4;
      } else {
        return 3;
      }
    } else {
      return ProjectConfig.server_type;//默认为本地开发环境
    }
  }

  /**
   * api服务器url
   */
  public static getBaseUrl() {
    this.server_type = this.checkEnv();
    if (this.server_type === 1) {
      // 开发环境
      return "http://localhost:3001";
    } else if (this.server_type === 2) {
      // 测试环境
      return "http://localhost:3001";
    } else if (this.server_type === 3) {
      // 生产环境
      return "http://localhost:3001";
    } else if (this.server_type === 4) {
      // 验证环境
      return "http://localhost:3001";
    } else {
      return '';
    }
  }

  /**
   *  图片服务器路径imgurl
   */
  public static getImgBaseUrl() {
    this.server_type = this.checkEnv();
    if (this.server_type === 1) {
      // 开发环境
      return "http://localhost:3003";
    } else if (this.server_type === 2) {
      // 测试环境
      return "http://localhost:3003";
    } else if (this.server_type === 3) {
      // 生产环境
      return "http://localhost:3003";
    } else if (this.server_type === 4) {
      // 验证环境
      return "http://localhost:3003";
    } else {
      return '';
    }
  }

  /**
   *  不同环境的项目域名地址
   */
  public static getWebBaseUrl() {
    this.server_type = this.checkEnv();
    console.log('环境' + this.server_type)
    if (this.server_type === 1) {
      // 开发环境
      return 'http://localhost:8080';
    } else if (this.server_type === 2) {
      // 测试环境
      return 'http://localhost:8081';
    } else if (this.server_type === 3) {
      // 生产环境
      return 'http://localhost:8082';
    } else if (this.server_type === 4) {
      // 验证环境
      return 'http://localhost:8083';
    } else {
      return '';
    }
  }

  /**
   *  跳转去下载站
   */
  public static goTodownUrl() {
    this.server_type = this.checkEnv();
    if (this.server_type === 1) {
      // 开发环境
      return "http://dev-xiazai.atfx.com/";
      // return 'http://localhost:8080';
    } else if (this.server_type === 2) {
      // 测试环境
      return "http://test-xiazai.atfx.com";
    } else if (this.server_type === 3) {
      // 生产环境
      return "https://xiazai.atfx.com/";
    } else if (this.server_type === 4) {
      // 验证环境
      return "https://vf-xiazai.atfx.com/";
    } else {
      return '';
    }
  }

  /**
   * 用户中心路径
   */
  public static getUserBaseUrl() {
    this.server_type = this.checkEnv();
    if (this.server_type === 1) {
      // 开发环境
      return "http://dev-user.atfx.com";
    } else if (this.server_type === 2) {
      // 测试环境
      return "http://test-user.atfx.com";
    } else if (this.server_type === 3) {
      // 生产环境
      return "https://user.atfx.com";
    } else if (this.server_type === 4) {
      // 验证环境
      return "https://vf-user.atfx.com";
    } else {
      const origin = window.location.origin;
      return origin;
    }
  }

  /**
   * config地址
   */
  public static getStafUrl() {
    this.server_type = this.checkEnv();
    if (this.server_type === 1) {
      // 开发环境
      return "http://dev-api1.leigod.com";
    } else if (this.server_type === 2) {
      // 测试环境
      return "http://test-api2.leigod.com";
    } else if (this.server_type === 3) {
      // 生产环境
      return "https://staffapi.leigod.com";
    } else if (this.server_type === 4) {
      // 验证环境
      return "https://vf-staffapi.leigod.com";
    } else {
      return '';
    }
  }

  /**
   * m路径
   */
  public static getMobWebBaseUrl() {
    this.server_type = this.checkEnv();
    if (this.server_type === 1) {
      // 开发环境
      return "http://dev-m.leigod.com";
    } else if (this.server_type === 2) {
      // 测试环境
      return 'http://test-m.leigod.com';

    } else if (this.server_type === 3) {
      // 生产环境
      return 'https://m.leigod.com';
    } else if (this.server_type === 4) {
      // 验证环境
      return 'https://vf-m.leigod.com';

    } else {
      return '';
    }
  }

  /**
   * 输出
   */
  public static log(...args: any[]) {
    if (ProjectConfig.isDebug) {
      for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
      }
    }
  }
}
