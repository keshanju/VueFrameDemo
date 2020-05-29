// console.log(process.env);
var dist = 'dev/';
var dir = 'ClientPortal';
var base_url = '/';
//解析命令参数
var configParam = process.env.npm_lifecycle_event;

var configParamArr = configParam.split('-');
console.log(configParamArr);
if (configParamArr.length >= 2) {
  dir = configParamArr[0];
  dist = configParamArr[1] + '/';
  // 可根据不同项目读取相对目录
  if (dir === 'leishen_pc' || dir === 'leishen' || dir === 'leishen_wangba_pc') {
    base_url = './';
  }
  if (dist === 'debug/') {
    dist = 'dev/';
    /**
     * 1开发环境 2测试 3生产 4预发布
     */
    process.env.VUE_APP_SERVER_TYPE = 1; //注意：debug可以随意改，但是不允许提交
  } else if (dist === 'dev/') {
    //不允许修改
    process.env.VUE_APP_SERVER_TYPE = 1;
  } else if (dist === 'test/') {
    //不允许修改
    process.env.VUE_APP_SERVER_TYPE = 2;
  } else if (dist === 'vfbuild/') {
    //不允许修改
    process.env.VUE_APP_SERVER_TYPE = 4;
  } else if (dist === 'tbuild/') {
    //不允许修改
    process.env.VUE_APP_SERVER_TYPE = 3;
  }
}
console.log('【当前命令】' + configParam + "【当前环境:】" + process.env.VUE_APP_SERVER_TYPE + "（1开发环境 2测试 3生产 4预发布）");
console.log('【当前项目:】' + dir + " 【打包目录:】" + dist + ' 【base_url:】' + base_url);

/**
 * 主要参考
 * html 图片解析 包含文件 html-withimg-loader
 * html 中vue中SEO优化 预编译 prerender-spa-plugin
 */
let path = require('path');
let glob = require('glob');
const debug = process.env.NODE_ENV !== 'production';

/**
 * 配置pages多页面获取当前文件夹下的html和js
 * @param globPath
 * @param pathDir
 */
function getEntry(globPath = './src/pages/**/*.html', pathDir = "./src/pages/") {
  let entries = {}, basename, pathname;
  glob.sync(globPath).forEach(function (entry) {
    let full_path = entry.replace(path.extname(entry), "");
    //排除public文件夹
    if (full_path.indexOf('/public') === -1) {
      pathname = entry.substring(pathDir.length);
      basename = pathname.replace("/", "_").replace(".html", "");
      entries[basename] = {
        entry: full_path + '.ts',
        template: entry,
        filename: pathname,
      };
    }
  });
  return entries;
}

let pages = getEntry('./src/pages/' + dir + '/**/!(_*).html', "./src/pages_" + dir + "/");

const cdn = {
  // 忽略打包的第三方库
  externals: {
    'vue': 'Vue',
    'vuex': 'Vuex',
    'vue-router': 'VueRouter',
    'axios': 'axios'
  },

  // 通过cdn方式使用
  js: [
    'https://cdn.bootcss.com/vue/2.6.11/vue.runtime.min.js',
    'https://cdn.bootcss.com/vue-router/3.1.2/vue-router.min.js',
    'https://cdn.bootcss.com/vuex/3.1.2/vuex.min.js',
    'https://cdn.bootcss.com/axios/0.19.2/axios.min.js',
    // 'https://cdn.bootcss.com/moment.js/2.24.0/moment.min.js',
    // 'https://cdn.bootcss.com/echarts/3.7.1/echarts.min.js'
  ],

  css: []
};
const CompressionWebpackPlugin = require("compression-webpack-plugin");

// 定义压缩文件类型
const productionGzipExtensions = ['js', 'css'];

module.exports = {
  publicPath: base_url,
  pages,
  productionSourceMap: false,
  devServer: {
    // index: 'index.html',
    // hot: true,
    // host: 'localhost',
    // port: '3000',
    // proxy: {
    //     '/api': {
    //         target: 'http://dev-dengbo.xiaomingkeji.com/api/index.php?r=',  // 接口域名
    //         ws: true,
    //         secure: false,  // 如果是https接口，需要配置这个参数
    //         changeOrigin: true,  //是否跨域
    //         pathRewrite: {
    //             '^/api': 'localhost:3000' //这里理解成用'/api'代替target里面的地址,比如我要调用'http://40.00.100.100:3002/user/add'，直接写'/api/user/add'即可
    //         }
    //     }
    // }
  },
  filenameHashing: debug,
  runtimeCompiler: true,
  outputDir: dist + "/" + dir,

  /**
   * webpack配置
   * @param config
   */
  chainWebpack: config => {
    // 移除prefetch插件，避免加载多余的资源
    config.plugins.delete('prefetch');

    // 配置cdn引入
    // for (const key in pages) {
    //   config
    //     .plugin('html-' + key)
    //     .tap(args => {
    //       args[0].cdn = cdn;
    //       return args
    //     });
    // }
    // 压缩html
    for (const key in pages) {
      config
        .plugin('html-' + key)
        .tap(args => {
          //是否最小化html 压缩html
          args[0].minify = true;
          return args
        });
    }
    // 注册插件
    config.module
      .rule('html')
      .test(/\.(htm|html)$/i)
      .use('html-withimg-loader')
      .loader('html-withimg-loader');
    // 打包分析
    config.plugin('webpack-bundle-analyzer').use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin);
    // copy
    config
      .plugin('copy')
      .tap(args => {
        args[0][0].from = './src/pages/' + dir + '/public';
        args[0][0].to = './';
        // console.log(args);
        return args;
      });
    // image
    config.module
      .rule("images")
      .use("url-loader")
      .loader("url-loader")
      .tap(options => Object.assign(options, {limit: 1}));
  },

  configureWebpack: config => {
    // 忽略打包配置
    // config.externals = cdn.externals;
    config.plugins.push(
      new CompressionWebpackPlugin({
        filename: "[path].gz[query]",
        algorithm: "gzip",
        test: new RegExp(
          `\\.(${productionGzipExtensions.join("|")})$`
        ),
        threshold: 10240,
        minRatio: 0.8
      })
    );
  }
};
