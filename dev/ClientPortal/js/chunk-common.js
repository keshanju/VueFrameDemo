(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{"06b3":function(t,e,i){"use strict";var n=i("a026"),o=i("8c4f"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-row",{attrs:{type:"flex",justify:"space-between"}},[i("el-col",{staticStyle:{"max-width":"200px","min-width":"100px","margin-right":"24px"}},[i("nav-bar")],1),i("el-col",[i("tool-bar"),i("el-divider"),i("div",{staticStyle:{"background-color":"#eee",height:"calc(100vh - 118px)",padding:"24px","box-sizing":"border-box"}},[i("transition",{attrs:{name:"fade-transform",mode:"out-in"}},[i("router-view")],1)],1)],1)],1)},s=[],r=(i("e3ea"),i("450d"),i("7bc3")),c=i.n(r),u=(i("f4f9"),i("c2cc")),h=i.n(u),l=(i("7a0f"),i("0f6c")),_=i.n(l),d=i("9ab4"),f=i("60a3"),p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":t.activeLink,router:!0},on:{select:t.jumpLink,open:t.handleOpen,close:t.handleClose}},[i("el-submenu",{attrs:{index:"1"}},[i("template",{slot:"title"},[i("i",{staticClass:"el-icon-location"}),i("span",[t._v("Dashboard")])]),i("el-menu-item-group",[i("el-menu-item",{attrs:{index:"/dashboard"}},[t._v("Dashboard")]),i("el-menu-item",{attrs:{index:"/setting"}},[t._v("Setting")]),i("el-menu-item",{attrs:{index:"/deposit"}},[t._v("Deposit")])],1)],2),i("el-menu-item",{attrs:{index:"/tradingAccount"}},[i("i",{staticClass:"el-icon-menu"}),i("span",{attrs:{slot:"title"},slot:"title"},[t._v("Trading Account")])]),i("el-submenu",{attrs:{index:"3"}},[i("template",{slot:"title"},[i("i",{staticClass:"el-icon-document"}),i("span",{attrs:{slot:"title"},slot:"title"},[t._v("IB")])]),i("el-menu-item-group",[i("el-menu-item",{attrs:{index:"/iblink"}},[t._v("IBlink")]),i("el-menu-item",{attrs:{index:"/clientList"}},[t._v("ClientList")]),i("el-menu-item",{attrs:{index:"/ibList"}},[t._v("IBList")])],1)],2),i("el-menu-item",{attrs:{index:"/marketoutlook"}},[i("i",{staticClass:"el-icon-setting"}),i("span",{attrs:{slot:"title"},slot:"title"},[t._v("MarketoutLook")])]),i("el-menu-item",{attrs:{index:"/download"}},[i("i",{staticClass:"el-icon-setting"}),i("span",{attrs:{slot:"title"},slot:"title"},[t._v("Download")])])],1)},m=[],g=(i("34db"),i("3803")),w=i.n(g),v=(i("ce18"),i("f58e")),E=i.n(v),O=(i("8bd8"),i("4cb2")),y=i.n(O),T=(i("4ca3"),i("443e")),S=i.n(T),N=(i("db4d"),function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.activeLink="",e}return Object(d["c"])(e,t),e.prototype.created=function(){var t=this;console.log(this.$router),this.setLink(this.$router.currentRoute.path),this.$router.afterEach(function(e,i){t.setLink(t.$router.currentRoute.path)})},e.prototype.jumpLink=function(t,e){"/"===t.charAt(0)&&this.$router.push(t)},e.prototype.setLink=function(t){this.activeLink=t},e.prototype.handleOpen=function(){},e.prototype.handleClose=function(){},e=Object(d["b"])([Object(f["a"])({components:{"el-menu":S.a,"el-menu-item":y.a,"el-submenu":E.a,"el-menu-item-group":w.a}})],e),e}(f["c"])),k=N,A=k,b=i("2877"),L=Object(b["a"])(A,p,m,!1,null,"488cbb28",null),C=L.exports,I=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-row",{staticStyle:{padding:"24px 24px 0"},attrs:{type:"flex",justify:"space-between"}},[i("el-col",{attrs:{span:12,xs:0}},[i("span",[t._v("Client Portal")])]),i("el-col",{staticStyle:{"text-align":"right"},attrs:{span:12,xs:24}},[i("el-dropdown",{on:{command:t.handelCommand}},[i("span",{staticClass:"el-dropdown-link"},[t._v("\n        Who are you"),i("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-dropdown-item",[t._v("黄金糕")]),i("el-dropdown-item",[t._v("狮子头")]),i("el-dropdown-item",[t._v("螺蛳粉")]),i("el-dropdown-item",{attrs:{disabled:""}},[t._v("双皮奶")]),i("el-dropdown-item",{attrs:{divided:"",command:"logout"}},[t._v("LogOut")])],1)],1)],1)],1)},R=[],x=(i("960d"),i("defb")),M=i.n(x),G=(i("bd49"),i("18ff")),D=i.n(G),U=(i("cb70"),i("b370")),H=i.n(U),P=(i("28b2"),i("c7ad")),W=i.n(P),B=i("d939"),j=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.value="",e}return Object(d["c"])(e,t),e.prototype.handelCommand=function(t){"logout"===t&&B["a"].backLogin()},e.prototype.handleChange=function(){},e=Object(d["b"])([Object(f["a"])({components:{"el-cascader":W.a,"el-dropdown":H.a,"el-dropdown-item":D.a,"el-dropdown-menu":M.a,"el-row":_.a,"el-col":h.a}})],e),e}(f["c"]),K=j,Y=K,F=Object(b["a"])(Y,I,R,!1,null,"eec619b0",null),V=F.exports,z=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(d["c"])(e,t),e.prototype.created=function(){},e=Object(d["b"])([Object(f["a"])({components:{"nav-bar":C,"tool-bar":V,"el-row":_.a,"el-col":h.a,"el-divider":c.a}})],e),e}(f["c"]),$=z,J=$,Z=(i("c878"),Object(b["a"])(J,a,s,!1,null,"2bac1694",null)),X=Z.exports;n["default"].use(o["a"]);var q=[{name:"Test",path:"/test",component:X},{name:"Dashboard",path:"/",redirect:"/dashboard",component:X,children:[{name:"Dashboard",path:"dashboard",component:function(){return i.e("chunk-32f02ecd").then(i.bind(null,"e3a1"))}},{name:"Setting",path:"setting",component:function(){return i.e("chunk-2d22d0a1").then(i.bind(null,"f694"))}},{name:"Deposit",path:"deposit",component:function(){return i.e("chunk-2d0f0491").then(i.bind(null,"9c5f"))}},{name:"MarketOutlook",path:"marketoutlook",component:function(){return i.e("chunk-5e25e1c9").then(i.bind(null,"72f6"))}}]}],Q=new o["a"]({routes:q});Q.beforeEach(function(t,e,i){i()}),Q.afterEach(function(){});e["a"]=Q},1156:function(t,e,i){"use strict";var n=i("9ab4"),o=i("bc3a"),a=i.n(o),s=(function(){function t(){this.code=0,this.msg="",this.data=null}}(),function(){function t(){this.code=-1,this.dcode=-1,this.msg=""}}(),function(){function t(){}return t}()),r=i("7d83"),c=function(){function t(){this.BASE_URL="https://at-client-portal-api-develop.ntdev.be/"}return t.prototype.setBaseUrl=function(t){this.BASE_URL=t},t.prototype.get=function(e,i){return Object(n["a"])(this,void 0,void 0,function(){var o,c,u;return Object(n["d"])(this,function(n){switch(n.label){case 0:e=this.BASE_URL+e,i["lang"]=r["a"].getLanguage(),i={params:i},n.label=1;case 1:return n.trys.push([1,3,,4]),[4,a.a.get(e,i)];case 2:return o=n.sent(),c=o.data,[2,c];case 3:return n.sent(),u=new s,u.code=t.HTTP_ERROR_NEW_CODE,u.message="网络错误!",[2,u];case 4:return[2]}})})},t.prototype.post=function(e,i){return Object(n["a"])(this,void 0,void 0,function(){var o,c,u;return Object(n["d"])(this,function(n){switch(n.label){case 0:e=this.BASE_URL+e,i["lang"]=r["a"].getLanguage(),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,a.a.post(e,i)];case 2:return o=n.sent(),c=o.data,[2,c];case 3:return n.sent(),u=new s,u.code=t.HTTP_ERROR_NEW_CODE,u.message="网络错误!",[2,u];case 4:return[2]}})})},t.HTTP_SUCCESS_NET_CODE=1004,t.HTTP_ERROR_NEW_CODE=2019,t.HTTP_TOKEN_EXPIRE=2021,t}();e["a"]=c},"40ce":function(t,e,i){},"7d83":function(t,e,i){"use strict";i("4917"),i("3b2b");var n=i("9347"),o=(function(){function t(){this.register_type="1",this.checkcode="",this.checkcode_key="",this.phone="",this.country_code="86",this.smscode="",this.smscode_key="",this.password="",this.package_id=0,this.price_id=0,this.refer_code="",this.nickname="",this.username="",this.os_type=4,this.src_channel=""}}(),function(){function t(){this.account_type="1",this.checkcode="",this.checkcode_key="",this.phone="",this.country_code="86",this.smscode="",this.smscode_key="",this.password=""}}(),function(){function t(){this.register_type="1",this.checkcode="",this.checkcode_key="",this.username="",this.email="",this.mailcode="",this.mailcode_key="",this.password="",this.nickname="",this.package_id=0,this.price_id=0,this.refer_code="",this.os_type=4,this.src_channel=""}}(),function(){function t(){this.account_type="2",this.checkcode="",this.checkcode_key="",this.email="",this.mailcode="",this.mailcode_key="",this.password=""}}(),function(){function t(){this.register_type="3",this.checkcode="",this.checkcode_key="",this.account_token="",this.verify_code="",this.verify_key="",this.refer_code="",this.country_code="",this.phone="",this.smscode="",this.smscode_key="",this.email="",this.mailcode="",this.mailcode_key="",this.os_type="",this.code=""}}(),function(){function t(){this.username="",this.password="",this.user_type="0",this.src_channel="",this.code=""}}(),function(){function t(){this.login_info=new a,this.user_info=new o}}(),function(){function t(){this.user_name="",this.nickname="",this.email="",this.sex="保密",this.birthday="",this.mobile="",this.avatar="",this.region_code=0,this.address="",this.is_switch_package=0,this.package_id=0,this.group_title="",this.expiry_time="",this.expiry_time_samp=0,this.package_title="",this.package_level=0,this.pause_status_id=1,this.is_set_admin_pass=0,this.mobile_contact_number="",this.billing_type=0,this.master_account=0,this.vip_level="VIP0",this.is_pay_user=0,this.wall_log_switch=0,this.experience_expiry_time="",this.experience_time=0,this.first_invoice_discount=0}return t.getUserName=function(t){var e="";return""!=t.nickname?e=t.nickname+"":t.mobile.length>0?e=t.mobile:t.email.length>0?e=t.email:""!=t.user_name&&(e=t.user_name),t.nickname=e,t.package_title=0==t.is_pay_user?"免费体验":t.package_title,t.nickname},t.getUserAvatar=function(t){return""==t.avatar_new?(t.avatar_new="/images/default_avatar.png",t.avatar=t.avatar_new):t.avatar=t.avatar_new,t},t.updateUserInfo=function(e,i,n){void 0===i&&(i=null),void 0===n&&(n=null);var o=u.getUserInfo();null!=e&&(o=new t,o.nickname=e.nickname,o.email=e.email,o.mobile=e.mobile,o.region_code=e.region_code,o.sex=e.sex,o.birthday=e.birthday,o.avatar=e.avatar,o.avatar_new=e.avatar_new,o.master_account=e.master_account,o.expiry_time=e.expiry_time,o.is_switch_package=e.is_switch_package,o.package_id=e.package_id,o.package_level=e.package_level,o.package_title=e.package_title,o.address=e.address,o.mobile_contact_number=e.mobile_contact_number,o.experience_time=e.experience_time,o.experience_expiry_time=e.experience_expiry_time,o.expiry_time_samp=e.expiry_time_samp,u.addUserInfo(o)),null!=i&&null!=o&&(o.avatar=i,u.addUserInfo(o)),null!=n&&null!=o&&(o.nickname=n,u.addUserInfo(o))},t}()),a=function(){function t(){this.account_token="",this.expiry_time=""}return t}(),s=(function(){function t(){this.billing_type=0,this.package_level=0,this.package_desc="",this.package_id=0,this.package_short_desc="",this.package_title="",this.package_is_recommend=0,this.short_desc=0,this.price=[]}}(),function(){function t(){this.id=0,this.picture_url="",this.title="",this.status="",this.discount_code="",this.discount_id=0,this.expired_time="",this.price_ids=[],this.discount_type=1,this.discount_value=0}}(),function(){function t(){this.exclude_region_codes="",this.include_region_codes="",this.price_desc="",this.price_id=0,this.price_is_recommend=0,this.price_num="",this.price_order_num=0,this.price_short_desc="",this.price_title="",this.price_type=0}}(),function(){function t(){this.account_token="",this.package_id=0,this.price_id=0,this.invoice_from=0,this.invoice_id=0,this.pay_type=0,this.src_channel="",this.os_type="1",this.refer_code="",this.qr_type="0"}t.prototype.switchFrom=function(t){switch(t){case 4:return 2;case 2:return 6;case 5:return 7}return t}}(),function(){function t(){this.account_token="",this.old_password="",this.new_password="",this.new_password_confirmation=""}}(),function(){function t(){this.account_token="",this.new_password="",this.new_password_confirmation="",this.verify_code="",this.verify_key=""}}(),function(){function t(){this.account_token="",this.invoice_id=0}}(),function(){function t(){this.status=0}}(),function(){function t(){this.amount="",this.amount_type=0,this.order_no="",this.invoice_id=0,this.package_title="",this.price_title="",this.payType=0}}(),function(){function t(){this.is_show_wx=0,this.is_show_zfb=0,this.is_show_qq=0,this.is_show_paypal=1}}(),function(){function t(){this.price_title="",this.price_num="",this.zheCodeList=[]}}(),function(){function t(){this.account_token="",this.size=15,this.page=1}}(),function(){function t(){this.account_token="",this.username="",this.prize_id=0,this.country_code="",this.phone="",this.email="",this.address="",this.is_auth_use=0,this.card_id="",this.alipay_address=""}}(),function(){function t(){this.card_no="",this.card_password="",this.is_auth_use=0}}(),function(){function t(){this.current_page=1,this.last_page=1,this.per_page=1,this.total=0,this.list=[]}}(),function(){function t(){this.id=1,this.activity_title="",this.award_type=0,this.create_time="",this.desc="",this.present_title="",this.status=0,this.status_title="",this.message="",this.discount_status="",this.discount_expired_time="",this.card_package=[]}}(),function(){function t(){this.id="",this.title=""}}(),function(){function t(){this.account_token="",this.size=15,this.page=1}}(),function(){function t(){this.current_page=1,this.last_page=1,this.per_page=1,this.total=0,this.list=[]}}(),function(){function t(){this.invoice_id=0,this.invoice_no="",this.invoice_status_title="",this.invoice_status="",this.invoice_money="",this.invoice_date="",this.package_name="",this.price_name="",this.pay_date="",this.discount_code=""}}(),function(){function t(){this.account_token="",this.filename="",this.nickname="",this.folder_name="leigod"}}(),function(){function t(){}}(),function(){function t(){this.account_token=""}}(),function(){function t(){this.verify_key="",this.code_type=""}}(),function(){function t(){this.account_token="",this.verify_key="",this.verify_code="",this.new_password="",this.new_password_confirmation=""}}(),function(){function t(){this.account_token="",this.card_no="",this.password=""}}(),function(){function t(){this.account_token="",this.cd_key=""}}(),function(){function t(){this.card_type="",this.experience_expiry_time="",this.experience_minutes=0}}(),function(){function t(){this.account_token=""}}(),function(){function t(){this.activity_info=new s,this.user_code=new r}}(),function(){function t(){this.id=0,this.type=0,this.title="",this.label=""}return t}()),r=function(){function t(){this.id=0,this.user_id=0,this.refer_code="",this.activity_id=0,this.create_time="",this.state=0,this.type=0,this.activity_type=0,this.start_time="",this.end_time=""}return t}(),c=(function(){function t(){this.activity_id=0,this.type=0,this.account_token=""}}(),function(){function t(){this.activity_id=0,this.refer_code=""}}(),function(){function t(){this.account_token="",this.client_token="",this.package_id=0}}(),function(){function t(){this.email="",this.account_token="",this.mailcode="",this.mailcode_key="",this.verify_code="",this.verify_key=""}}(),function(){function t(){this.phone="",this.account_token="",this.smscode="",this.smscode_key="",this.country_code=""}}(),function(){function t(){this.account_token=""}}(),function(){function t(){this.account_token="",this.verify_code="",this.verify_key=""}}(),function(){function t(){this.account_token="",this.verify_code="",this.verify_key="",this.email="",this.mailcode="",this.mailcode_key=""}}(),function(){function t(){this.account_token="",this.verify_code="",this.verify_key="",this.phone="",this.smscode="",this.smscode_key="",this.country_code=""}}(),function(){function t(){this.account_token="",this.type="",this.size=10}}(),function(){function t(){this.status=0,this.pause_time="",this.resume_time="",this.op_source=""}}(),function(){function t(){}}(),function(){function t(){this.account_token="",this.open_type=0}}(),function(){function t(){this.open_type=0}}(),function(){function t(){this.wechat=!1,this.QQ=!1,this.weibo=!1,this.facebook=!1,this.google=!1,this.twitter=!1}}(),function(){function t(){}}(),function(){function t(){}}(),function(){function t(){this.errorcode=0,this.msgs="",this.version=""}}(),function(){function t(){}return t.addLanguage=function(e){localStorage.setItem(t.STORAGES_LANGUAGE_TYPE,e),t.setCookie(t.STORAGES_LANGUAGE_TYPE,e,168,!0)},t.getLanguage=function(){var e=localStorage.getItem(t.STORAGES_LANGUAGE_TYPE);return null!=e&&void 0!=e||(e=t.getCookie(t.STORAGES_LANGUAGE_TYPE)),""==e&&(e=n["a"].ZH_CN),e},t.addRegionCode=function(e){localStorage.setItem(t.STORAGES_REGION_CODE,e+""),t.setCookie(t.STORAGES_REGION_CODE,e+"",168,!0)},t.getRegionCodes=function(){var e=localStorage.getItem(t.STORAGES_REGION_CODE);return""!=e&&null!=e||(e=t.getCookie(t.STORAGES_REGION_CODE)),""!=e&&null!=e||(e=n["a"].REGION_CODE_0),parseInt(e)},t.addUserInfo=function(e){localStorage.setItem(t.STORAGES_USER_INFO,JSON.stringify(e)),t.setCookie(t.STORAGES_USER_INFO,JSON.stringify(e),-1,!0)},t.getUserInfo=function(){var e;if(n["a"].isMobile()?(e=localStorage.getItem(t.STORAGES_USER_INFO),null!=e&&void 0!=e||(e=t.getCookie(t.STORAGES_USER_INFO))):e=t.getCookie(t.STORAGES_USER_INFO),""==e)return null;var i=JSON.parse(e);return o.getUserName(i),i},t.addUserToken=function(e){if(""!=e.account_token){if(null==e.account_token||void 0==e.account_token)throw new Error("保存的token错误!");var i=window.location.hostname;-1==i.indexOf("www")&&localStorage.setItem(t.STORAGES_TOKEN,JSON.stringify(e)),t.setCookie(t.STORAGES_TOKEN,JSON.stringify(e),2,!0)}},t.getUserToken=function(){var e;if(n["a"].isMobile()?(e=localStorage.getItem(t.STORAGES_TOKEN),null!=e&&void 0!=e||(e=t.getCookie(t.STORAGES_TOKEN))):e=t.getCookie(t.STORAGES_TOKEN),""==e)return new a;var i=JSON.parse(e);return i},t.removeUserToken=function(){localStorage.getItem(t.STORAGES_TOKEN)&&localStorage.removeItem(t.STORAGES_TOKEN),t.getCookie(t.STORAGES_TOKEN)&&t.removeCookie(t.STORAGES_TOKEN,!0)},t.addSrcChannel=function(e){if(""==e)throw new Error("保存的src_channel错误!");t.setCookie(t.SRC_CHANNEL,e,-1,!0)},t.getSrcChannel=function(){var e=t.getCookie(t.SRC_CHANNEL);return e},t.addthreeBindSource=function(e){if(""==e)throw new Error("保存的第三方绑定来源页面错误!");t.setCookie(t.STORAGES_THIRDBIND_URL_TYPE,e,-1,!0)},t.getthreeBindSource=function(){var e=t.getCookie(t.STORAGES_THIRDBIND_URL_TYPE);return e},t.saveParam=function(){var t=n["a"].getUrlParam("to"),e=parseInt(n["a"].getUrlParam("page")),i=parseInt(n["a"].getUrlParam("id"));""!=t&&localStorage.setItem("param_to",t),isNaN(e)||localStorage.setItem("param_page",e+""),isNaN(i)||localStorage.setItem("param_id",i+"")},t.getParam=function(t){void 0===t&&(t=!1);var e=localStorage.getItem("param_to");null==e&&(e="");var i=parseInt(localStorage.getItem("param_page")),n=parseInt(localStorage.getItem("param_id"));return t&&(localStorage.removeItem("param_to"),localStorage.removeItem("param_page"),localStorage.removeItem("param_id")),[e,i,n]},t.loginOut=function(){localStorage.removeItem(t.STORAGES_USER_INFO),localStorage.removeItem(t.STORAGES_TOKEN),t.removeCookie(t.STORAGES_USER_INFO,!0),t.removeCookie(t.STORAGES_TOKEN,!0)},t.setCookie=function(t,e,i,o){void 0===i&&(i=-1),void 0===o&&(o=!1);var a=t+"="+e;if(i>0){var s=new Date;s.setTime(s.getTime()+60*i*60*1e3);var r="; expires="+s.toUTCString();a+=r}var c=window.location.hostname,u=/^((\d)|([1-9]\d)|(1\d{2})|((2[0-4]\d)|(25[0-5])))(\.((\d)|([1-9]\d)|(1\d{2})|((2[0-4]\d)|(25[0-5])))){3}$/;if("localhost"!=c&&!u.test(c)&&o){var h=n["a"].getDomain();a=a+"; domain="+h}a+="; path=/",document.cookie=a},t.getCookie=function(t,e){void 0===e&&(e=!1);var i,n=new RegExp("(^| )"+t+"=([^;]*)(;|$)");return(i=document.cookie.match(n))?unescape(i[2]):""},t.removeCookie=function(e,i){void 0===i&&(i=!1);var o=new Date;o.setTime(o.getTime()-1);var a=t.getCookie(e);if(null!=a&&""!=a){var s=e+"="+a+"; expires=Thu, 01 Jan 1970 00:00:01 GMT;",r=window.location.hostname,c=/^((\d)|([1-9]\d)|(1\d{2})|((2[0-4]\d)|(25[0-5])))(\.((\d)|([1-9]\d)|(1\d{2})|((2[0-4]\d)|(25[0-5])))){3}$/;if("localhost"!=r&&!c.test(r)&&i){var u=n["a"].getDomain();s=s+"; domain="+u}s+="; path=/",document.cookie=s}},t.STORAGES_PHONE="phone",t.STORAGES_EMAIL="email",t.STORAGES_PW="password",t.STORAGES_USERNAME="username",t.STORAGES_PHONE_REGION="phonerRegion",t.STORAGES_PHONE_PW="phonePassword",t.STORAGES_EMAIL_PW="emailPassword",t.STORAGES_TOKEN="account_token",t.STORAGES_USER_INFO="user_info",t.STORAGES_URL_TARGET="url_target",t.STORAGES_LANGUAGE_TYPE="language_type",t.STORAGES_REGION_CODE="region_code",t.SRC_CHANNEL="src_channel",t.STORAGES_OS_TYPE="storages_os_type",t.STORAGES_THIRDBIND_URL_TYPE="third_bind_url_type",t.STORAGES_TIME_TIP="time_tip_show",t}()),u=e["a"]=c},9347:function(t,e,i){"use strict";i("a481"),i("6b54"),i("28a5"),i("386d"),i("4917"),i("3b2b");var n=i("c4a1"),o=i("d939"),a=function(){function t(){}return t.countDown=function(t,e,i){var n=setInterval(function(){t--,t<=0&&(t=0),i(t),0==t&&clearInterval(n)},1e3*e)},t.getUrlParam=function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),i=window.location.search.substr(1).match(e);return null!=i?unescape(i[2]):""},t.getLanguageType=function(e){switch(e){case t.ZH_CN:return t.CN;case t.EN:return t.EN;default:break}},t.getExplorerbLang=function(){var e=navigator.language;return null==e?null:(e=e.substr(0,2),"zh"==e?t.ZH_CN:t.EN)},t.formatDateTime=function(t){var e=new Date(t),i=e.getFullYear(),n=e.getMonth()+1;n=n<10?"0"+n:n;var o=e.getDate();o=o<10?"0"+o:o;var a=e.getHours();a=a<10?"0"+a:a;var s=e.getMinutes(),r=e.getSeconds();return s=s<10?"0"+s:s,r=r<10?"0"+r:r,i+"-"+n+"-"+o+" "+a+":"+s+":"+r},t.formatDataTime2=function(t,e,i){return t+"-"+e+"-"+i},t.isGuest=function(t){var e=!1,i=t.split(":");return i.length>0&&"uid"==i[0]&&(e=!0),e},t.scroll=function(){return null!==window.pageYOffset?{top:pageYOffset,left:pageXOffset}:"CSS1Compat"===document.compatMode?{top:document.documentElement.scrollTop,left:document.documentElement.scrollLeft}:{top:document.body.scrollTop,left:document.body.scrollLeft}},t.offset=function(t){var e={top:0,left:0};if(!t.getClientRects().length)return e;if("none"===window.getComputedStyle(t)["display"])return e;e=t.getBoundingClientRect();var i=t.ownerDocument.documentElement;return{top:e.top+window.pageYOffset-i.clientTop,left:e.left+window.pageXOffset-i.clientLeft}},t.getPayUserNum=function(t,e,i){var n=new Date(t),o=n.getTime(),a=new Date(e),s=a.getTime(),r=s-o;return Math.round(r*i/6e4)},t.getDomain=function(){for(var t=window.location.hostname,e=t.split("."),i="",n=1;n<e.length;n++)i=i+"."+e[n];return i},t.copyToClipboard=function(t){var e=document.createElement("textarea");e.style.position="fixed",e.style.top="0",e.style.left="0",e.style.width="2em",e.style.height="2em",e.style.padding="0",e.style.border="none",e.style.outline="none",e.style.boxShadow="none",e.style.background="transparent",e.value=t,document.body.appendChild(e),e.select();try{var i=document.execCommand("copy"),n=!!i}catch(o){}return document.body.removeChild(e),n},t.googleSatics=function(t){if(0==t){var e=document.getElementsByTagName("HEAD").item(0),i=document.createElement("script");i.type="text/javascript";var n=" (\n                function (w, d, s, l, i) {\n                    w[l] = w[l] || [];\n                    w[l].push({\n                        'gtm.start': new Date().getTime(), event: 'gtm.js'\n                    });\n                    var f = d.getElementsByTagName(s)[0];\n                    var j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';\n                    j.async = true;\n                    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;\n                    f.parentNode.insertBefore(j, f);\n                })(window, document, 'script', 'dataLayer', 'GTM-WT2CCTQ');";try{i.appendChild(document.createTextNode(n)),e.appendChild(i)}catch(o){i.text=n}}},t.minToDay=function(e,i){var n=parseInt((e/60/24).toString()),o=parseInt((e/60%24).toString()),a=parseInt((e%60).toString()),s="";return i==t.EN?(n>0&&(s=1==n?n+"Day ":n+"Days "),o>0&&(s+=1==o?o+"Hour ":o+"Hours "),a>0&&(s+=1==a?a+"Minute ":a+"Minutes ")):(n>0&&(s=n+"天 "),o>0&&(s+=o+"小时 "),a>0&&(s+=parseFloat(a.toString())+"分钟 ")),s},t.getOrigin=function(){var t=window.location.origin;return t||(t=window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"")),-1!=window.location.pathname.indexOf("/intl/")&&(t+="/intl"),-1!=window.location.pathname.indexOf("/en/")&&(t+="/en"),t},t.formateTime=function(t){null!=t&&void 0!=t||(t="");var e=t.replace(/-/g,"/");return e},t.checkIsMobile=function(){var t=window.location.href,e=window.location.search,i=t.split("/"),a=i[i.length-1].split("?")[0],s=n["a"].getMobWebBaseUrl()+"/activitys/"+a+e;o["a"].checkMobile(s)},t.isMobile=function(){var t=navigator.userAgent.toLowerCase(),e=!1;return t.match(/(ipod|iphone os|midp|ucweb|android|windows ce|windows mobile)/i)&&(e=!0),e},t.isSystem=function(){var t=navigator.userAgent.toLowerCase(),e=/macintosh|mac os x/i.test(navigator.userAgent);return t.indexOf("win32")>=0||t.indexOf("wow32")>=0?"win32":t.indexOf("win64")>=0||t.indexOf("wow64")>=0?"win64":e?"mac":void 0},t.randomCode=function(t,e){for(var i=0,n="";i<t;i++)n+=e.charAt(Math.floor(1e8*Math.random())%e.length);return n},t.randomPhoneNumber=function(){return[1,t.randomCode(1,"345678"),t.randomCode(9,"0123456789")].join("")},t.getPhoneNum=function(){var e=t.randomPhoneNumber(),i=/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;return i.test(e)?e.slice(0,3)+"****"+e.slice(7,11):t.getPhoneNum()},t.minuteToHours=function(t){var e=Math.floor(t/60),i=t%60;return e+"时"+i+"分"},t.ShowToast=function(t,e){void 0===e&&(e=2e3);var i=document.createElement("div");i.className="leigod_toastBox",document.body.appendChild(i);for(var n=document.getElementsByClassName("leigod_toastBox"),o='<a class="leigod_toast">'+t+"</a>",a=0;a<n.length;a++)n[a].innerHTML=o;setTimeout(function(){for(var t=document.getElementsByClassName("leigod_toastBox"),e=0;e<t.length;e++)document.body.removeChild(t[e])},e)},t.ZH_CN="zh_CN",t.EN="en",t.CN="cn",t.FROM_GUANWANG="guanwang",t.REGION_CODE_0=0,t.REGION_CODE_1=1,t.REGION_CODE_INTL="intl",t.PACKAGE_LEVEL_0=0,t.PACKAGE_LEVEL_1=1,t.PACKAGE_LEVEL_2=2,t.PACKAGE_LEVEL_100=100,t.PACKAGE_LEVEL_101=101,t.PACKAGE_LEVEL_200=200,t.PACKAGE_LEVEL_201=201,t.PACKAGE_LEVEL_202=202,t.NEWS_CHINA="国服",t.NEWS_MOBIL="手游",t.NEWS_LAST="最新",t.NEWS_HOT="热点",t.NEWS_TUIJIAN="推荐",t.NEWS_TUIGUANG="推广",t.DOWN_WINDOWS="downWindows",t.CLICK_DOWNLOAD="click_download",t.PAY="pay",t.LOGIN="login",t.WINDOWS_THREE_LOGIN="windows_three_login",t.WINDOWS_GET_PACKAGE="windows_get_package",t.WINDOWS_CLICK_PAY="windows_click_pay",t.WINDOWS_CLICK_PAY_SUCCESS="windows_click_pay_success",t.WINDOWS_CLICK_PAY_FAIL="windows_click_pay_fail",t.PLAT_FROM_WIN=0,t.PLAT_FROM_MAC=1,t.PLAT_FROM_ANDROID=2,t.PLAT_FROM_IOS=3,t.PLAT_FROM_WX=4,t}();e["a"]=a},c1e6:function(t,e,i){"use strict";i.d(e,"a",function(){return n});i("28a5");var n=function(){function t(){this.from="官网",this.browser="",this.browser_version=0,this.getBrowser()}return t.prototype.getBrowser=function(){var t,e,i,n=navigator.userAgent,o=n.indexOf("Opera")>-1;o&&(this.browser="Opera"),n.indexOf("Firefox")>-1&&(this.browser="FF"),n.indexOf("Safari")>-1&&(this.browser="Safari"),n.indexOf("Chrome")>-1&&(this.browser="Chrome"),n.indexOf("compatible")>-1&&n.indexOf("MSIE")>-1&&!o?(this.browser="IE",t=n.indexOf("MSIE"),e=n.indexOf(" Windows"),i=n.substring(t,e),this.browser_version=Math.abs(i.split(" ")[1].split(";")[0])):n.indexOf("Trident")>-1&&(this.browser="Edge")},t.prototype.isLowVersion=function(){return"IE"==this.browser&&this.browser_version<10},t}()},c4a1:function(t,e,i){"use strict";var n=function(){function t(){}return t.log=function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];if(3!=t.server_type)for(var n=0;n<e.length;n++)console.log(e[n])},t.isDebug=!1,t.server_type=parseInt("3"),t}(),o=n;n.log("当前环境:"+n.server_type+"【1开发环境 2测试 3生产 4预发布】");var a=i("1157"),s=i.n(a),r=function(){function t(){}return t.checkEnv=function(){var t=s()("html").attr("domain");return t?t.indexOf("dev-dengbo.xiaomingkeji")>-1?1:t.indexOf("test.xiaomingkeji")>-1?2:t.indexOf("bbb.yunhan100")>-1?4:3:o.server_type},t.getBaseUrl=function(){return this.server_type=this.checkEnv(),1===this.server_type?"http://localhost:3001":2===this.server_type?"http://localhost:3001":3===this.server_type?"http://localhost:3001":4===this.server_type?"http://localhost:3001":""},t.getImgBaseUrl=function(){return this.server_type=this.checkEnv(),1===this.server_type?"http://dev-picture.leigod.com":2===this.server_type?"http://test-picture.leigod.com":3===this.server_type?"https://picture.leigod.com":4===this.server_type?"http://vf-picture.leigod.com":""},t.getWebBaseUrl=function(){return this.server_type=this.checkEnv(),console.log("环境"+this.server_type),1===this.server_type?"http://dev-www.leigod.com":2===this.server_type?"http://test-www.leigod.com":3===this.server_type?"https://www.leigod.com":4===this.server_type?"https://vf-www.leigod.com":""},t.goTodownUrl=function(){return this.server_type=this.checkEnv(),1===this.server_type?"http://dev-xiazai.leigod.com/":2===this.server_type?"http://test-xiazai.leigod.com":3===this.server_type?"https://xiazai.leigod.com/":4===this.server_type?"https://vf-xiazai.leigod.com/":""},t.getUserBaseUrl=function(){if(this.server_type=this.checkEnv(),1===this.server_type)return"http://dev-user.leigod.com";if(2===this.server_type)return"http://test-user.leigod.com";if(3===this.server_type)return"https://user.leigod.com";if(4===this.server_type)return"https://vf-user.leigod.com";var t=window.location.origin;return t},t.getStafUrl=function(){return this.server_type=this.checkEnv(),1===this.server_type?"http://dev-api1.leigod.com":2===this.server_type?"http://test-api2.leigod.com":3===this.server_type?"https://staffapi.leigod.com":4===this.server_type?"https://vf-staffapi.leigod.com":""},t.getMobWebBaseUrl=function(){return this.server_type=this.checkEnv(),1===this.server_type?"http://dev-m.leigod.com":2===this.server_type?"http://test-m.leigod.com":3===this.server_type?"https://m.leigod.com":4===this.server_type?"https://vf-m.leigod.com":""},t.log=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(o.isDebug)for(var i=0;i<t.length;i++)console.log(t[i])},t}();e["a"]=r},c70c:function(t,e,i){"use strict";var n=i("9ab4"),o=i("ede8"),a=i("1156"),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(n["c"])(e,t),e.toLogin=function(t){return Object(n["a"])(this,void 0,void 0,function(){var e,i;return Object(n["d"])(this,function(n){switch(n.label){case 0:return e=this.HTTP_LOG_IN,i=null,[4,this.http.post(e,t)];case 1:return i=n.sent(),[2,i]}})})},e.http=new a["a"],e.HTTP_LOG_IN="/login",e.COMMON_COUNTRY_LIST="/commonCountryList",e}(o["a"]);e["a"]=s},c878:function(t,e,i){"use strict";var n=i("e0d6"),o=i.n(n);o.a},c91b:function(t,e,i){"use strict";var n=i("06b3");n["a"].beforeEach(function(t,e,i){i()}),n["a"].afterEach(function(){})},d939:function(t,e,i){"use strict";i("4917"),i("a481"),i("386d");var n=i("7d83"),o=i("9347"),a=i("c1e6"),s=function(){function t(){}return t.backTargetPage=function(){var t=localStorage.getItem(n["a"].STORAGES_URL_TARGET);null!=t&&""!=t?window.location.href=t:(localStorage.removeItem(n["a"].STORAGES_URL_TARGET),window.location.href="index.html")},t.backHome=function(){window.location.href=o["a"].getOrigin()+"/"+window.location.search},t.backLogin=function(e){void 0===e&&(e=null),null!=e&&""!=e&&localStorage.setItem(n["a"].STORAGES_URL_TARGET,e),window.location.href=t.HTML_NAME_LOGIN},t.backRegister=function(){window.location.href=t.HTML_NAME_REGISTER},t.backAgreement=function(){window.location.href=t.HTML_NAME_PROTOCOL},t.backUser=function(){window.location.href=t.HTML_NAME_USER},t.backNews=function(){window.location.href=o["a"].getOrigin()+"/"+t.HTML_NAME_NEWS+window.location.search},t.backNotice=function(){window.location.href=o["a"].getOrigin()+"/"+t.HTML_NAME_NOTIFY+window.location.search},t.backActivity=function(){window.location.href=o["a"].getOrigin()+"/"+t.HTML_NAME_ACTIVITY+window.location.search},t.backHelp=function(){window.location.href=o["a"].getOrigin()+"/"+t.HTML_NAME_HELP+window.location.search},t.backRecharge=function(){window.location.href=o["a"].getOrigin()+"/"+t.HTML_NAME_RECHARGE+window.location.search},t.backAbout=function(){window.location.href=o["a"].getOrigin()+"/"+t.HTML_NAME_ABOUT},t.gotoNewsDetails=function(e){0!=e&&null!=e&&window.open(t.HTML_NAME_DETAILS_NEWS+e+".html")},t.gotoNoticeDetails=function(e){0!=e&&null!=e&&window.open(o["a"].getOrigin()+"/"+t.HTML_NAME_DETAILS_NOTICE+e+".html")},t.gotoActivityDetails=function(e){0!=e&&null!=e&&window.open(o["a"].getOrigin()+"/"+t.HTML_NAME_DETAILS_ACTIVITY_NEW+"?id="+e)},t.toPage=function(t,e,i){if(void 0===e&&(e=-1),void 0===i&&(i=-1),null!=t){-1==t.indexOf(".html")&&(t+=".html");var n="";-1==e||isNaN(e)||(n="page="+e,t+="?"+n);var o="";-1==i||isNaN(i)||(o="id="+i,-1==t.indexOf("?")?t+="?"+o:t+="&"+o),window.location.href=t}},t.webGotoUser=function(t,e,i){void 0===i&&(i="");var a=t+"/"+e,s=window.location.search,r="region_code="+n["a"].getRegionCodes()+"&language="+n["a"].getLanguage();null==s||""==s?a=a+"?"+r:""==o["a"].getUrlParam("region_code")?a=a+s+"&"+r:a+=s,""!=i&&(a=a+"&"+i),window.location.href=a},t.mobileGotoUser=function(t,e,i){void 0===i&&(i="");var o=t+"/"+e,a="region_code="+n["a"].getRegionCodes()+"&language="+n["a"].getLanguage();o=o+"?"+a+"&"+i,window.location.href=o},t.wapJump=function(e,i,n){void 0===n&&(n=""),t.webGotoUser(e,i,n)},t.userGotoWeb=function(t,e,i){void 0===i&&(i="");var a=n["a"].getRegionCodes();switch(a){case o["a"].REGION_CODE_0:break;case o["a"].REGION_CODE_1:break}var s=n["a"].getLanguage();switch(s){case o["a"].EN:break;case o["a"].ZH_CN:break}var r=t+"/"+e,c=window.location.search;c="",null==c||""==c?""!=i&&(r=r+"?"+i):(r+=c,""!=i&&(r=r+"&"+i)),window.location.href=r},t.changeCn=function(){if(o["a"].ZH_CN!=n["a"].getLanguage()){var t=window.location.origin,e=window.location.pathname,i=window.location.search;if(null==i&&(i=""),-1==window.location.host.indexOf("localhost")){var a="";-1!=t.indexOf("cn.")&&-1!=e.indexOf("/en")?(a=t+e.replace("/en",""),n["a"].addLanguage(o["a"].CN),window.location.href=a+i):-1!=t.indexOf("www.")&&-1==e.indexOf("/cn")&&(a=t+"/cn"+e,n["a"].addLanguage(o["a"].CN),window.location.href=a+i)}}},t.changeEn=function(){if(o["a"].EN!=n["a"].getLanguage()){var t=window.location.origin,e=window.location.pathname,i=window.location.search;if(null==i&&(i=""),-1==window.location.host.indexOf("localhost")){var a="";-1!=t.indexOf("cn.")&&-1==e.indexOf("/en")?(a=t+"/en"+e,n["a"].addLanguage(o["a"].EN),window.location.href=a+i):-1!=t.indexOf("www.")&&-1!==e.indexOf("/cn")&&(a=t+e.replace("/cn",""),n["a"].addLanguage(o["a"].EN),window.location.href=a+i)}}},t.changeCn_0=function(){if(o["a"].ZH_CN!=n["a"].getLanguage()){var t=window.location.origin,e=window.location.pathname,i=window.location.search;null==i&&(i="");var a="";e=e.replace("/en",""),void 0!=t&&(a+=t),a+=e,n["a"].addLanguage(o["a"].CN),window.location.href=a+i}},t.changeEn_0=function(){if(o["a"].EN!=n["a"].getLanguage()){var t=window.location.origin,e=window.location.pathname,i=window.location.search;if(null==i&&(i=""),-1==window.location.host.indexOf("localhost")){var a="";-1==e.indexOf("/"+o["a"].REGION_CODE_INTL)&&-1==e.indexOf("/"+o["a"].REGION_CODE_0)?(void 0!=t&&(a+=t),a=a+"/en"+e):(e=e.replace("/"+o["a"].REGION_CODE_0,""),e=e.replace("/"+o["a"].REGION_CODE_INTL,""),void 0!=t&&(a+=t),a=a+"/"+o["a"].REGION_CODE_INTL+"/en"+e),n["a"].addLanguage(o["a"].EN),window.location.href=a+i}}},t.getWebHeadUrl=function(t,e){var i=t+"/";return e.region_code==o["a"].REGION_CODE_1&&(i=i+o["a"].REGION_CODE_1+"/"),e.language==o["a"].ZH_CN&&(i=i+o["a"].CN+"/"),i},t.checkMobile=function(t){void 0===t&&(t="");var e=navigator.userAgent.toLowerCase(),i=!1;return e.match(/(ipod|iphone os|midp|ucweb|android|windows ce|windows mobile)/i)&&(i=!0,""!=t&&(window.location.href=t)),i},t.checkLowBrowser=function(t){void 0===t&&(t="");var e=new a["a"];e.isLowVersion()&&""!=t&&(window.location.href=t)},t.isDeviceWx=function(){navigator.userAgent;var t=window.navigator.userAgent.toLowerCase();return""+t.match(/MicroMessenger/i)=="micromessenger"},t.isDeviceAndroid=function(){var t=navigator.userAgent,e=t.indexOf("Android")>-1||t.indexOf("Adr")>-1;return e},t.isDeviceIos=function(){var t=navigator.userAgent,e=!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);return e},t.HTML_NAME_INDEX="index.html",t.HTML_NAME_LOGIN="login.html",t.HTML_NAME_REGISTER="register.html",t.HTML_NAME_FORGETPWD="forgetpwd.html",t.HTML_NAME_PROTOCOL="protocol.html",t.HTML_NAME_USER="/user_center",t.HTML_NAME_DOWNLOAD="https://xiazai.leigod.com",t.HTML_NAME_NEWS="news.html",t.HTML_NAME_NOTIFY="notice.html",t.HTML_NAME_ACTIVITY="activity.html",t.HTML_NAME_RECHARGE="recharge.html",t.HTML_NAME_ABOUT="about.html",t.HTML_NAME_BUSINESS="business.html",t.HTML_NAME_JOIN="join.html",t.HTML_NAME_HELP="help.html",t.HTML_NAME_WANGBA="https://netbar.leigod.com/",t.HTML_NAME_USERSERVER="userserver.html",t.HTML_NAME_SUPPORT="gamesupport.html",t.HTML_NAME_DETAILS_NEWS="news",t.HTML_NAME_DETAILS_NOTICE="notice",t.HTML_NAME_DETAILS_ACTIVITY="activity",t.HTML_NAME_DETAILS_HELPS="helps_",t.HTML_NAME_DETAILS_ACTIVITY_NEW="activdetails.html",t}();e["a"]=s},e0d6:function(t,e,i){},ede8:function(t,e,i){"use strict";i("db4d");var n=i("c4a1"),o=i("1156"),a=function(){function t(){this.http=new o["a"]}return t.prototype.setBaseUrl=function(t){this.http.setBaseUrl(t)},t.prototype.created=function(){this.setBaseUrl(n["a"].getBaseUrl())},t}();e["a"]=a}}]);