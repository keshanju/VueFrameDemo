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

## CSS 说明文档
  ####规范说明
````
1.基础样式：base.less（一般情况不需要修改，可以酌情添加需要的样式）

2.布局样式：

  1）float布局：bootstrap.less（集成了BT2.0中关于栅格布局这一块的代码，如引用基础组件，需要自己从线上源码copy引入该文件）
  
  2）flex布局：component.less（自定义的一些常用的flex布局类，需要去了解，然后对照注释使用到项目当中，可以在原有基础上继续添加）
  
  3）项目主样式：main.less(main根据不同项目命名，实际开发中，这个文件是我们书写样式代码的主文件，请务必维护好，标好代码注释，每写一个模块或者页面的样式，请在开头和结尾添加对应模块的注释，如/**  start 主页导航*/ 代码部分 /**  end 主页导航*/)

3.CSS类名约定：选用"BEM"命名规范，类名最多采用三级连接，统一使用_作为连接符，不局限于”BEM“传统的定义，根据我们自身项目实际情况对“BEM”进行理解
  
  1) 对于B的命名约定：一般通过页面上的功能模块进行第一段类名的选择，.upload_box；也可以选用该页面的特征，比如有登录页，注册页，那么B这一段就可以用.login_xxx_xxx.
  
  2) 对于E的命名约定：建议是用描述性的，第一眼就能明白是页面的哪一个部分，界定某一元素的特征。比如，desc描述(.upload_desc_box)，title标题(.upload_title_font)，optimize优化(.pubg_opt_icon).
  
  3) 对于M的命名约定：一般指代页面上的基本元素或者小组件，如字体font，图片img，盒子box，子盒子cell，按钮btn，输入框ipt，图标icon，列表list等等
  
4.LESS代码书写

  1) 全局主题色变量，整个项目的UI色彩风格保持与设计稿一致，相关的颜色变量可以多设置几个，主题色，副主题色，主题附加色等等。
  
  2) 嵌套规则限制，原则上不允许嵌套超过三级，这样不利于修改样式，一旦在类名重复的情况下，修改样式会非常费劲。对于全局可复用单位组件的样式可以采用内联样式书写。
  
  3) 类名同级地位，在项目主样式文件中，每一个类名都应当保持同级位置排列，也就是全局的，搜索即唯一，这样的好处是在修改样式时可以提高效率，并且不会影响到其他样式，唯一修改，唯一改变。
  
  4) 代码格式约定为一个tab等于4个空格，尽量使用缩写属性（margin,padding），0后面不加单位，去掉小数点前面的0，每一个类之间隔一行，每个选择器独占一行。
  
  5）不写ID样式，一律用class类来表示样式，禁止在全局写标签样式，建议使用子选择器，少使用或不适用后代选择器，
  
5.第三方UI样式

  1）如果需要全局修改某些元素样式，请在base.less中进行相关样式覆盖，（原则上应当禁止在main.less中直接覆盖第三方UI样式），如主题色，包括文字颜色，hover、focus效果，选中效果等等可视化强的页面样式，配合自身项目的主题色进行全局覆盖修改；
  
  2）对于只在某一个页面或者页面模块的组件元素的样式修改，为保证不影响该组件的全局样式，需要自定义一个类名添加在该组件外层，在该类名嵌套下进行组件样式的局部自定义修改；
  
  3）一些常见的组件的样式，如input框、下拉列表，进度条、table表格，翻页器等，建议与UI协商，在保证设计美观的前提下，遵循组件样式的合规性（尽量不去修改第三方组件核心样式，宽高大小可以调整，细节样式不做大改），
     如我们目前项目中的element以及vant，官方文档中也有对应的设计原稿模型，设计可以参考（对应可以提高设计效率），这样既可以提高页面的开发效率，也可以保证设计与开发之间的协调性；


````
  ####flex布局
  
````
横向flex布局类说明
  1. flex_sbe：横向-主轴对齐方式space-between，交叉轴对齐方式 center，不自动换行（横向两端对齐，纵向居中，不换行）
  
  2. flex_sbe_wrap：横向-主轴对齐方式space-between，交叉轴对齐方式 center，自动换行（横向两端对齐，纵向居中，换行）
  
  3. flex_al_start：横向-主轴对齐方式 center，交叉轴对齐方式 flex-start，不自动换行（横向居中对齐，纵向顶部对齐，不换行）
  
  4. flex_row_center_top：横向-主轴对齐方式 space-between，交叉轴对齐方式flex-start，不自动换行（横向两端对齐，纵向顶部对齐，不换行）
  
  5. flex_al_end：横向-主轴对齐方式 center，交叉轴对齐方式 flex-end，不自动换行（横向居中对齐，纵向底部对齐，不换行）
  
  6. flex_al_center：横向-主轴对齐方式 center，交叉轴对齐方式 center，不自动换行（横向居中对齐，纵向居中对齐，不换行）
  
  7. flex_al_baseline：横向-主轴对齐方式 center，交叉轴对齐方式 baseline，不自动换行（横向居中对齐，纵向内容基线对齐，不换行）
  
  8. flex_col_item_left：横向-主轴对齐方式 space-between，交叉轴对齐方式flex-start，不自动换行（横向两端对齐，纵向顶部对齐，不换行）
  
  9. flex_row_item_right：横向-主轴对齐方式 flex-start，交叉轴对齐方式flex-end，不自动换行（横向靠左对齐，纵向顶部对齐，不换行）
  
  10. flex_row_center：横向-主轴对齐方式 center，交叉轴对齐方式center，不自动换行（横向居中对齐，纵向居中对齐，不换行）
  
  11. flex_row_start：横向-主轴对齐方式 flex-start，交叉轴对齐方式center，不自动换行（横向靠左对齐，纵向居中对齐，不换行）
  
  12. flex_row_top：横向-主轴对齐方式 flex-start，交叉轴对齐方式 flex-start，不自动换行（横向靠左对齐，纵向顶部对齐，不换行）
  
  13. flex_row_start_wrap：横向-主轴对齐方式 flex-start，交叉轴对齐方式 center，自动换行（横向靠左对齐，纵向居中对齐，不换行）
  
  14. flex_row_top_wrap：横向-主轴对齐方式 flex-start，交叉轴对齐方式 center，自动换行（横向靠左对齐，纵向居中对齐，换行）
  
  15. flex_row_top_start：横向-主轴对齐方式 flex-start，交叉轴对齐方式 flex-start，不自动换行（横向靠左对齐，纵向顶部对齐，不换行）
  
  16. flex_row_end：横向-主轴对齐方式 flex-end，交叉轴对齐方式 center，不自动换行（横向靠右对齐，纵向居中对齐，不换行）
  
  17. flex_row_between：横向-主轴对齐方式 flex-end，交叉轴对齐方式 center，不自动换行（横向靠右对齐，纵向居中对齐，不换行）
  
  18. flex_row_around：横向-主轴对齐方式 space-around，交叉轴对齐方式 center，不自动换行（横向均匀环绕对齐，纵向居中对齐，不换行）
  
  19. flex_wrap_row_start：横向-主轴对齐方式 center，交叉轴对齐方式 center，自动换行（横向居中对齐，纵向居中对齐，换行）
  
  20. flex_wrap_row_between：横向-主轴对齐方式 space-between，交叉轴对齐方式 center，自动换行（横向两端对齐，纵向居中对齐，换行）
  
  21. flex_wrap_row_around：横向-主轴对齐方式 space-around，交叉轴对齐方式 center，自动换行（横向均匀环绕对齐，纵向居中对齐，换行）
  
  22. flex_cen_start_top：横向-主轴对齐方式 flex-start，交叉轴对齐方式 flex-start，不自动换行（横向靠左对齐，纵向顶部对齐，换行）
  
  
纵向flex布局类说明
   
  1.flex_content_left：纵向-主轴对齐方式 center，交叉轴对齐方式 flex-start，无自动换行效果（垂直居中对齐，水平靠左，不换行）
  
  2.flex_column_center：纵向-主轴对齐方式 center，交叉轴对齐方式 center，不自动换行（垂直居中对齐，水平居中，不换行）
  
  3.flex_column_start：纵向-主轴对齐方式 flex-start，交叉轴对齐方式 center，不自动换行（垂直靠左对齐，水平居中，不换行）
  
  4.flex_column_end：纵向-主轴对齐方式 flex-end，交叉轴对齐方式 center，不自动换行（垂直靠右对齐，水平居中，不换行）
  
  5.flex_column_between：纵向-主轴对齐方式 space-between，交叉轴对齐方式 center，不自动换行（垂直两端对齐，水平居中，不换行）
  
  6.flex_column_around：纵向-主轴对齐方式 space-around，交叉轴对齐方式 默认，不自动换行（垂直均匀环绕，水平auto，不换行）
  
 ````
 ###常用类
    ####布局类###
    1. f_left:左浮动，float: left
    2. f_right:右浮动，float: right
    3. clear_fix:清除浮动
    
    ####距离类###
    1. mar_t5 :margin-top: 5px; 
       mar_b5 :margin-bottom: 5px; 
       mar_l5 :margin-left: 5px; 
       mar_r5 :margin-right: 5px; 
       
    2. mar_t10 :margin-top: 10px; 
       mar_b10 :margin-bottom: 10px; 
       mar_l10 :margin-left: 10px; 
       mar_r10 :margin-right: 10px; 
       
    3. mar_t15 :margin-top: 15px; 
       mar_b15 :margin-bottom: 15px; 
       mar_l15 :margin-left: 15px; 
       mar_r15 :margin-right: 15px; 
       
    4. mar_t20 :margin-top: 20px; 
       mar_b20 :margin-bottom: 20px; 
       mar_l20 :margin-left: 20px; 
       mar_r20 :margin-right: 20px; 
       
    5. mar_t25 :margin-top: 25px;
       mar_b25 :margin-bottom: 25px; 
       mar_l25 :margin-left: 25px;
       mar_r25 :margin-right: 25px;
       
    6. mar_t30 :margin-top: 30px; 
       mar_b30 :margin-bottom: 30px;
       mar_l30 :margin-left: 30px;
       mar_r30 :margin-right: 30px;
       
    7. mar_t35 :margin-top: 35px;
       mar_b35 :margin-bottom: 35px; 
       mar_l35 :margin-left: 35px;
       mar_r40 :margin-right: 40px;
       
    8. mar_t40 :margin-top: 40px;
       mar_b40 :margin-bottom: 40px;
       mar_l40 :margin-left: 40px;
       mar_r40 :margin-rigth: 40px;
       
    9. mar_t45 :margin-top: 45px; 
       mar_b45 :margin-bottom: 45px;
       mar_l45 :margin-left: 45px;
       mar_r45 :margin-rigth: 45px;
       
    10. mar_t50 :margin-top: 50px;
        mar_b50 :margin-bottom: 50px;
        mar_l50 :margin-left: 50px;
        mar_r50 :margin-right: 50px;
        
    11. pad_t5 :padding-top: 5px;
        pad_b5 :padding-bottom: 5px;
        pad_l5 :padding-left: 5px;
        pod_r5 :padding-right: 5px;
        
    12. pad_t10 :padding-top: 10px;
        pad_b10 :padding-bottom: 10px;
        pad_l10 :padding-left: 10px;
        pod_r10 :padding-right: 10px;
        
    13. pad_t15 :padding-top: 15px;
        pad_b15 :padding-bottom: 15px;
        pad_l15 :padding-left: 15px;
        pod_r15 :padding-right: 15px;
        
    14. pad_t20 :padding-top: 20px;
        pad_b20 :padding-bottom: 20px;
        pad_l20 :padding-left: 20px;
        pod_r20 :padding-right: 20px;
    
    15. pad_t25 :padding-top: 25px;
        pad_b25 :padding-bottom: 25px;
        pad_l25 :padding-left: 25px;
        pod_r25 :padding-right: 25px;
    
    16. pad_t30 :padding-top: 30px;
        pad_b30 :padding-bottom: 30px;
        pad_l30 :padding-left: 30px;
        pod_r30 :padding-right: 30px;
    
    17. pad_t35 :padding-top: 35px;
        pad_b35 :padding-bottom: 35px;
        pad_l35 :padding-left: 35px;
        pod_r35 :padding-right: 35px;
    
    18. pad_t40 :padding-top: 40px;
        pad_b40 :padding-bottom: 40px;
        pad_l40 :padding-left: 40px;
        pod_r40 :padding-right: 40px;
    
    19. pad_t45 :padding-top: 45px;
        pad_b45 :padding-bottom: 45px;
        pad_l45 :padding-left: 45px;
        pod_r45 :padding-right: 45px;
    
    20. pad_t50 :padding-top: 50px;
        pad_b50 :padding-bottom: 50px;
        pad_l50 :padding-left: 50px;
        pod_r50 :padding-right: 50px;
            
    
    ####显示隐藏####
    1. hide :隐藏 display:none;
    2. show :显示 display:block;
    3. hidden :隐藏 visibility: hidden;
    4. visible :显示 visibility: visible;
    5. overflow :溢出隐藏 overflow: hidden;
    
    ####文字内容排列、缩进、省略号####
    1. text_center :文字居中 text-align: center;
    2. text_left :文字靠左 text-align: left;
    3. text_right :文字靠右 text-align: right;
    4. text_indent :缩进两个汉字 text-indent：2em;
    5. words_flow/ellipsis :溢出显示省略号
    6. line_limit_2 :仅显示两排文字
    
    ####是否手型####
    1. cursor :鼠标手型cursor： pointer;
    2. no_cursor :鼠标手型cursor： none;
    
    ####盒子、图片呈现圆形####
    1. img_circle/round_box： 圆形border-ridus: 50%;
    2. b_ridus5： 圆角border-ridus: 5px;
    3. b_ridus8： 圆角border-ridus: 8px;
    4. b_ridus15： 圆角border-ridus: 15px;
    5. b_ridus20： 圆角border-ridus: 20px;
  

