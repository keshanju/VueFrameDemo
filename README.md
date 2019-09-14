# 项目开发规范文档
### 目录文件命名和代码书写规范

```
1. 提交代码之前必须检测tslint语法错误警告，严格遵守语法标准
   书写代码，所有文件同一采用一个tab等于4个空格的书写方式，
   提交代码前务必将代码进行格式化
```

```
2. 所有的全局ts类必须首字母大写，采用驼峰式命名，例如AppConfig.ts
```

```
3. 所有的.vue文件必须采用驼峰式命名，比如HelloWorld.vue，HeadNav.vue
   对应的逻辑代码集成在组件的<script type="ts"></script>内，
   对应的样式代码单独抽离出来，单个项目维护一个样式文件
```

```
4. 单个项目公用组件，放在当前项目的components文件夹，
   比如src/test/components
```

```
5. 所有项目公用的组件存放在src/componetns目录(自定义封装的组件，非第三方组件)
```

```
6. 在pages下新建项目时，目录结构约定如下：
    项目名称：如yunhan_website
    组件目录：components
    图片资源目录：images
    公共资源目录（必要）：public主要放置静态资源一般会有本地json资源和本地img资源
    脚本资源：scripts(备注：优化打包)
    全局配置文件：global.config.ts(备注：当前项目的独有配置项，比如接口请求地址，
                包括开发测试验证线上，图片资源服务器地址，项目上线后域名，跳转地址)
    页面文件：html+ts，根目录打包采用的多页面打包配置，必须保证每个页面的html和ts文件命名保持一致
    单页面目录：如user_center
        对应的单页面目录下的文件如下
        router：放置路由配置文件router.ts
        store：放置状态管理文件store.ts
        views：放置视图层，全部由组件.vue文件构成可视情况新建一级目录
        index.html(App.vue)：页面入口
        index.ts(main.js)：程序入口，加载组件
```

```
7. 每个页面是否采用多页还是单页开发，需开发前一起商议决定，保
   证每个独立项目的开发方式一致
```
```
8. 所有的js代码必须存放在src/ts目录，必须遵循相关接口开发，
   所有的项目统一维护一套js代码
```
```
9. 所有的第三方js库必须以npm的方式安装维护,项目中不允许私自安
   装第三方库,如需安装新的第三方库，必须通知相关负责人确认!
```

```
10. 所有的方法以及传递的参数添加注释，注释示例如下
    /**
     * 这是方法的注释，方法名前必须加public/private/protected
     * @param t1 这是参数的注释
     */
    public test(t1: string) {
        //这是单行注释
        const a = 1;
        //TODO... 这是加todo的方式（临时代码，或是未完成的功能，或是以后需要修改的代码部分都要交加todo
        //换行要空4个占位符
    }
    
    export class TestRequestModel {
        public name: string = "";// 用户姓名，这是参数注释
        public age: number = 18;//  
        .
        .
        .
    }
```

### 资源管理规范
```
1. 所有的项目资源存放在src/assets目录，项目独有的资源必须以
   项目简称作为前缀，比如bohe_logo.png，公用资源无需加前缀
```
```
2. 每个独立项目存放在pages目录中，以文件夹作为区分，然后在
   vue.config.json配置文件中配置打包路径
```
```
3. 公用的css都存放在src/css/mian.css文件中统一维护管理,页
   面独有的样式文件可以写在对应的vue文件中，但是必须加上
   scoped标签，例如<style scoped></style>，以免css样式冲突
```
```
4. 所有样式使用flex布局，确保能兼容到ie10及以上
```
```
5. css命名规则，小写字母+_，形式
```


### 版本管理规范
```
1. 所有的开发工作都在dev分支开发，由主程定期合并到main分支，
   确保main分支上的代码是无报错能正常运行的代码
```
```
2. 每次转测，相关项目负责人验证转测的功能是否都开发完毕后，新
   建一个转测的版本分支，命名规则，项目简称_+版本号,例如：
   bohe_v1.0.0，这样就可以保证dev分支上开发新的功能，同时在
   版本分支上维护转测版本的bug。修复的bug如需同步到dev分支，必
   须在相关项目负责人的指导下合并，请勿擅自操作git合并。
```

### 移动端开发规范
```
1. 移动端适配,import 'lib-flexible';，然后在html里加入
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### 版本发布步骤
```
--以薄荷项目生成环境为例
1. 修改project.js、project.config.ts 两个文件（参考注释修改)
2. cd build，进入对应的发布目录
3. npm run build
4. python py_bohe_meta.py 官网打包需要执行一个py脚本，其它项目无需此步
```

### 专题活动页规范
```
1.html标签上 写上类 specialPage，保证所有样式在这个类下。
2.body标签上以该专题页的主题命名一个类，例如绝地求生专题 <body class="juedi_special">
3.专题页图片命名 需要以该专题页主题起头,防止和之前的图片冲突，导致打包后显示错误  例如：juedi_img1.jpg

```
