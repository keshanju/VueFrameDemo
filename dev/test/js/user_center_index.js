(function(t){function e(e){for(var n,s,a=e[0],c=e[1],_=e[2],u=0,d=[];u<a.length;u++)s=a[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);h&&h(e);while(d.length)d.shift()();return r.push.apply(r,_||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],n=!0,a=1;a<i.length;a++){var c=i[a];0!==o[c]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=i[0]))}return t}var n={},o={user_center_index:0},r=[];function s(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=n,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var _=0;_<a.length;_++)e(a[_]);var h=c;r.push([2,"chunk-vendors"]),i()})({2:function(t,e,i){t.exports=i("51be")},"51be":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var n=i("a026"),o=i("8c4f");i("db4d");n["default"].use(o["a"]);var r=new o["a"]({}),s=(i("0fb7"),i("450d"),i("f529")),a=i.n(s),c=i("60a3"),_=i("323e"),h=i.n(_),u=(i("a5d8"),i("4917"),i("3b2b"),i("a481"),i("6b54"),i("28a5"),i("386d"),function(){function t(){}return t.log=function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];if(3!=t.server_type)for(var n=0;n<e.length;n++)console.log(e[n])},t.isDebug=!1,t.server_type=parseInt("1"),t}()),d=u;u.log("当前环境:"+u.server_type+"【1开发环境 2测试 3生产 4预发布】");var l=i("1157"),f=i.n(l),p=function(){function t(){}return t.checkEnv=function(){var t=f()("html").attr("domain");return t?t.indexOf("dev-api")>-1?1:t.indexOf("test-api")>-1?2:t.indexOf("vf-webapi")>-1||t.indexOf("vf-hkapi1")>-1?4:3:d.server_type},t.getBaseUrl=function(){return this.server_type=this.checkEnv(),1===this.server_type?"http://dev-api1.leigod.com":2===this.server_type?"http://test-api2.leigod.com":3===this.server_type?k.getRegionCodes()==O.REGION_CODE_0?"https://webhkapi.leigod.com":"https://webapi.leigod.com":4===this.server_type?k.getRegionCodes()==O.REGION_CODE_0?"https://vf-hkapi1.leigod.com":"https://vf-webapi.leigod.com":""},t.getImgBaseUrl=function(){return this.server_type=this.checkEnv(),1===this.server_type?"http://dev-picture.leigod.com":2===this.server_type?"http://test-picture.leigod.com":3===this.server_type?"https://picture.leigod.com":4===this.server_type?"http://vf-picture.leigod.com":""},t.getWebBaseUrl=function(){return this.server_type=this.checkEnv(),console.log("环境"+this.server_type),1===this.server_type?"http://dev-www.leigod.com":2===this.server_type?"http://test-www.leigod.com":3===this.server_type?"https://www.leigod.com":4===this.server_type?"https://vf-www.leigod.com":""},t.goTodownUrl=function(){return this.server_type=this.checkEnv(),1===this.server_type?"http://dev-xiazai.leigod.com/":2===this.server_type?"http://test-xiazai.leigod.com":3===this.server_type?"https://xiazai.leigod.com/":4===this.server_type?"https://vf-xiazai.leigod.com/":""},t.getUserBaseUrl=function(){if(this.server_type=this.checkEnv(),1===this.server_type)return"http://dev-user.leigod.com";if(2===this.server_type)return"http://test-user.leigod.com";if(3===this.server_type)return"https://user.leigod.com";if(4===this.server_type)return"https://vf-user.leigod.com";var t=window.location.origin;return t},t.getStafUrl=function(){return this.server_type=this.checkEnv(),1===this.server_type?"http://dev-api1.leigod.com":2===this.server_type?"http://test-api2.leigod.com":3===this.server_type?"https://staffapi.leigod.com":4===this.server_type?"https://vf-staffapi.leigod.com":""},t.getMobWebBaseUrl=function(){return this.server_type=this.checkEnv(),1===this.server_type?"http://dev-m.leigod.com":2===this.server_type?"http://test-m.leigod.com":3===this.server_type?"https://m.leigod.com":4===this.server_type?"https://vf-m.leigod.com":""},t.log=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(d.isDebug)for(var i=0;i<t.length;i++)console.log(t[i])},t.UC_IM_Number="2FAepT",t}(),g=p,m=function(){function t(){this.from="官网",this.browser="",this.browser_version=0,this.getBrowser()}return t.prototype.getBrowser=function(){var t,e,i,n=navigator.userAgent,o=n.indexOf("Opera")>-1;o&&(this.browser="Opera"),n.indexOf("Firefox")>-1&&(this.browser="FF"),n.indexOf("Safari")>-1&&(this.browser="Safari"),n.indexOf("Chrome")>-1&&(this.browser="Chrome"),n.indexOf("compatible")>-1&&n.indexOf("MSIE")>-1&&!o?(this.browser="IE",t=n.indexOf("MSIE"),e=n.indexOf(" Windows"),i=n.substring(t,e),this.browser_version=Math.abs(i.split(" ")[1].split(";")[0])):n.indexOf("Trident")>-1&&(this.browser="Edge")},t.prototype.isLowVersion=function(){return"IE"==this.browser&&this.browser_version<10},t}(),w=function(){function t(){}return t.backTargetPage=function(){var t=localStorage.getItem(k.STORAGES_URL_TARGET);null!=t&&""!=t?window.location.href=t:(localStorage.removeItem(k.STORAGES_URL_TARGET),window.location.href="index.html")},t.backHome=function(){window.location.href=O.getOrigin()+"/"+window.location.search},t.backLogin=function(e){void 0===e&&(e=null),null!=e&&""!=e&&localStorage.setItem(k.STORAGES_URL_TARGET,e),window.location.href=t.HTML_NAME_LOGIN},t.backRegister=function(){window.location.href=t.HTML_NAME_REGISTER},t.backAgreement=function(){window.location.href=t.HTML_NAME_PROTOCOL},t.backUser=function(){window.location.href=t.HTML_NAME_USER},t.backNews=function(){window.location.href=O.getOrigin()+"/"+t.HTML_NAME_NEWS+window.location.search},t.backNotice=function(){window.location.href=O.getOrigin()+"/"+t.HTML_NAME_NOTIFY+window.location.search},t.backActivity=function(){window.location.href=O.getOrigin()+"/"+t.HTML_NAME_ACTIVITY+window.location.search},t.backHelp=function(){window.location.href=O.getOrigin()+"/"+t.HTML_NAME_HELP+window.location.search},t.backRecharge=function(){window.location.href=O.getOrigin()+"/"+t.HTML_NAME_RECHARGE+window.location.search},t.backAbout=function(){window.location.href=O.getOrigin()+"/"+t.HTML_NAME_ABOUT},t.gotoNewsDetails=function(e){0!=e&&null!=e&&window.open(t.HTML_NAME_DETAILS_NEWS+e+".html")},t.gotoNoticeDetails=function(e){0!=e&&null!=e&&window.open(O.getOrigin()+"/"+t.HTML_NAME_DETAILS_NOTICE+e+".html")},t.gotoActivityDetails=function(e){0!=e&&null!=e&&window.open(O.getOrigin()+"/"+t.HTML_NAME_DETAILS_ACTIVITY_NEW+"?id="+e)},t.toPage=function(t,e,i){if(void 0===e&&(e=-1),void 0===i&&(i=-1),null!=t){-1==t.indexOf(".html")&&(t+=".html");var n="";-1==e||isNaN(e)||(n="page="+e,t+="?"+n);var o="";-1==i||isNaN(i)||(o="id="+i,-1==t.indexOf("?")?t+="?"+o:t+="&"+o),window.location.href=t}},t.webGotoUser=function(t,e,i){void 0===i&&(i="");var n=t+"/"+e,o=window.location.search,r="region_code="+k.getRegionCodes()+"&language="+k.getLanguage();null==o||""==o?n=n+"?"+r:""==O.getUrlParam("region_code")?n=n+o+"&"+r:n+=o,""!=i&&(n=n+"&"+i),window.location.href=n},t.mobileGotoUser=function(t,e,i){void 0===i&&(i="");var n=t+"/"+e,o="region_code="+k.getRegionCodes()+"&language="+k.getLanguage();n=n+"?"+o+"&"+i,window.location.href=n},t.wapJump=function(e,i,n){void 0===n&&(n=""),t.webGotoUser(e,i,n)},t.userGotoWeb=function(t,e,i){void 0===i&&(i="");var n=k.getRegionCodes();switch(n){case O.REGION_CODE_0:break;case O.REGION_CODE_1:break}var o=k.getLanguage();switch(o){case O.EN:break;case O.ZH_CN:break}var r=t+"/"+e,s=window.location.search;s="",null==s||""==s?""!=i&&(r=r+"?"+i):(r+=s,""!=i&&(r=r+"&"+i)),window.location.href=r},t.changeCn=function(){if(O.ZH_CN!=k.getLanguage()){var t=window.location.origin,e=window.location.pathname,i=window.location.search;if(null==i&&(i=""),-1==window.location.host.indexOf("localhost")){var n="";-1!=t.indexOf("cn.")&&-1!=e.indexOf("/en")?(n=t+e.replace("/en",""),k.addLanguage(O.CN),window.location.href=n+i):-1!=t.indexOf("www.")&&-1==e.indexOf("/cn")&&(n=t+"/cn"+e,k.addLanguage(O.CN),window.location.href=n+i)}}},t.changeEn=function(){if(O.EN!=k.getLanguage()){var t=window.location.origin,e=window.location.pathname,i=window.location.search;if(null==i&&(i=""),-1==window.location.host.indexOf("localhost")){var n="";-1!=t.indexOf("cn.")&&-1==e.indexOf("/en")?(n=t+"/en"+e,k.addLanguage(O.EN),window.location.href=n+i):-1!=t.indexOf("www.")&&-1!==e.indexOf("/cn")&&(n=t+e.replace("/cn",""),k.addLanguage(O.EN),window.location.href=n+i)}}},t.changeCn_0=function(){if(O.ZH_CN!=k.getLanguage()){var t=window.location.origin,e=window.location.pathname,i=window.location.search;null==i&&(i="");var n="";e=e.replace("/en",""),void 0!=t&&(n+=t),n+=e,k.addLanguage(O.CN),window.location.href=n+i}},t.changeEn_0=function(){if(O.EN!=k.getLanguage()){var t=window.location.origin,e=window.location.pathname,i=window.location.search;if(null==i&&(i=""),-1==window.location.host.indexOf("localhost")){var n="";-1==e.indexOf("/"+O.REGION_CODE_INTL)&&-1==e.indexOf("/"+O.REGION_CODE_0)?(void 0!=t&&(n+=t),n=n+"/en"+e):(e=e.replace("/"+O.REGION_CODE_0,""),e=e.replace("/"+O.REGION_CODE_INTL,""),void 0!=t&&(n+=t),n=n+"/"+O.REGION_CODE_INTL+"/en"+e),k.addLanguage(O.EN),window.location.href=n+i}}},t.getWebHeadUrl=function(t,e){var i=t+"/";return e.region_code==O.REGION_CODE_1&&(i=i+O.REGION_CODE_1+"/"),e.language==O.ZH_CN&&(i=i+O.CN+"/"),i},t.checkMobile=function(t){void 0===t&&(t="");var e=navigator.userAgent.toLowerCase(),i=!1;return e.match(/(ipod|iphone os|midp|ucweb|android|windows ce|windows mobile)/i)&&(i=!0,""!=t&&(window.location.href=t)),i},t.checkLowBrowser=function(t){void 0===t&&(t="");var e=new m;e.isLowVersion()&&""!=t&&(window.location.href=t)},t.isDeviceWx=function(){navigator.userAgent;var t=window.navigator.userAgent.toLowerCase();return""+t.match(/MicroMessenger/i)=="micromessenger"},t.isDeviceAndroid=function(){var t=navigator.userAgent,e=t.indexOf("Android")>-1||t.indexOf("Adr")>-1;return e},t.isDeviceIos=function(){var t=navigator.userAgent,e=!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);return e},t.HTML_NAME_INDEX="index.html",t.HTML_NAME_LOGIN="login.html",t.HTML_NAME_REGISTER="register.html",t.HTML_NAME_FORGETPWD="forgetpwd.html",t.HTML_NAME_PROTOCOL="protocol.html",t.HTML_NAME_USER="user.html",t.HTML_NAME_DOWNLOAD="https://xiazai.leigod.com",t.HTML_NAME_NEWS="news.html",t.HTML_NAME_NOTIFY="notice.html",t.HTML_NAME_ACTIVITY="activity.html",t.HTML_NAME_RECHARGE="recharge.html",t.HTML_NAME_ABOUT="about.html",t.HTML_NAME_BUSINESS="business.html",t.HTML_NAME_JOIN="join.html",t.HTML_NAME_HELP="help.html",t.HTML_NAME_WANGBA="https://netbar.leigod.com/",t.HTML_NAME_USERSERVER="userserver.html",t.HTML_NAME_SUPPORT="gamesupport.html",t.HTML_NAME_DETAILS_NEWS="news",t.HTML_NAME_DETAILS_NOTICE="notice",t.HTML_NAME_DETAILS_ACTIVITY="activity",t.HTML_NAME_DETAILS_HELPS="helps_",t.HTML_NAME_DETAILS_ACTIVITY_NEW="activdetails.html",t}(),v=w,E=function(){function t(){}return t.countDown=function(t,e,i){var n=setInterval(function(){t--,t<=0&&(t=0),i(t),0==t&&clearInterval(n)},1e3*e)},t.getUrlParam=function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),i=window.location.search.substr(1).match(e);return null!=i?unescape(i[2]):""},t.getLanguageType=function(e){switch(e){case t.ZH_CN:return t.CN;case t.EN:return t.EN;default:break}},t.getExplorerbLang=function(){var e=navigator.language;return null==e?null:(e=e.substr(0,2),"zh"==e?t.ZH_CN:t.EN)},t.formatDateTime=function(t){var e=new Date(t),i=e.getFullYear(),n=e.getMonth()+1;n=n<10?"0"+n:n;var o=e.getDate();o=o<10?"0"+o:o;var r=e.getHours();r=r<10?"0"+r:r;var s=e.getMinutes(),a=e.getSeconds();return s=s<10?"0"+s:s,a=a<10?"0"+a:a,i+"-"+n+"-"+o+" "+r+":"+s+":"+a},t.formatDataTime2=function(t,e,i){return t+"-"+e+"-"+i},t.isGuest=function(t){var e=!1,i=t.split(":");return i.length>0&&"uid"==i[0]&&(e=!0),e},t.scroll=function(){return null!==window.pageYOffset?{top:pageYOffset,left:pageXOffset}:"CSS1Compat"===document.compatMode?{top:document.documentElement.scrollTop,left:document.documentElement.scrollLeft}:{top:document.body.scrollTop,left:document.body.scrollLeft}},t.offset=function(t){var e={top:0,left:0};if(!t.getClientRects().length)return e;if("none"===window.getComputedStyle(t)["display"])return e;e=t.getBoundingClientRect();var i=t.ownerDocument.documentElement;return{top:e.top+window.pageYOffset-i.clientTop,left:e.left+window.pageXOffset-i.clientLeft}},t.getPayUserNum=function(t,e,i){var n=new Date(t),o=n.getTime(),r=new Date(e),s=r.getTime(),a=s-o;return Math.round(a*i/6e4)},t.getDomain=function(){for(var t=window.location.hostname,e=t.split("."),i="",n=1;n<e.length;n++)i=i+"."+e[n];return i},t.copyToClipboard=function(t){var e=document.createElement("textarea");e.style.position="fixed",e.style.top="0",e.style.left="0",e.style.width="2em",e.style.height="2em",e.style.padding="0",e.style.border="none",e.style.outline="none",e.style.boxShadow="none",e.style.background="transparent",e.value=t,document.body.appendChild(e),e.select();try{var i=document.execCommand("copy"),n=!!i}catch(o){}return document.body.removeChild(e),n},t.googleSatics=function(t){if(0==t){var e=document.getElementsByTagName("HEAD").item(0),i=document.createElement("script");i.type="text/javascript";var n=" (\n                function (w, d, s, l, i) {\n                    w[l] = w[l] || [];\n                    w[l].push({\n                        'gtm.start': new Date().getTime(), event: 'gtm.js'\n                    });\n                    var f = d.getElementsByTagName(s)[0];\n                    var j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';\n                    j.async = true;\n                    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;\n                    f.parentNode.insertBefore(j, f);\n                })(window, document, 'script', 'dataLayer', 'GTM-WT2CCTQ');";try{i.appendChild(document.createTextNode(n)),e.appendChild(i)}catch(o){i.text=n}}},t.minToDay=function(e,i){var n=parseInt((e/60/24).toString()),o=parseInt((e/60%24).toString()),r=parseInt((e%60).toString()),s="";return i==t.EN?(n>0&&(s=1==n?n+"Day ":n+"Days "),o>0&&(s+=1==o?o+"Hour ":o+"Hours "),r>0&&(s+=1==r?r+"Minute ":r+"Minutes ")):(n>0&&(s=n+"天 "),o>0&&(s+=o+"小时 "),r>0&&(s+=parseFloat(r.toString())+"分钟 ")),s},t.getOrigin=function(){var t=window.location.origin;return t||(t=window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"")),-1!=window.location.pathname.indexOf("/intl/")&&(t+="/intl"),-1!=window.location.pathname.indexOf("/en/")&&(t+="/en"),t},t.formateTime=function(t){null!=t&&void 0!=t||(t="");var e=t.replace(/-/g,"/");return e},t.checkIsMobile=function(){var t=window.location.href,e=window.location.search,i=t.split("/"),n=i[i.length-1].split("?")[0],o=g.getMobWebBaseUrl()+"/activitys/"+n+e;v.checkMobile(o)},t.isMobile=function(){var t=navigator.userAgent.toLowerCase(),e=!1;return t.match(/(ipod|iphone os|midp|ucweb|android|windows ce|windows mobile)/i)&&(e=!0),e},t.isSystem=function(){var t=navigator.userAgent.toLowerCase(),e=/macintosh|mac os x/i.test(navigator.userAgent);return t.indexOf("win32")>=0||t.indexOf("wow32")>=0?"win32":t.indexOf("win64")>=0||t.indexOf("wow64")>=0?"win64":e?"mac":void 0},t.randomCode=function(t,e){for(var i=0,n="";i<t;i++)n+=e.charAt(Math.floor(1e8*Math.random())%e.length);return n},t.randomPhoneNumber=function(){return[1,t.randomCode(1,"345678"),t.randomCode(9,"0123456789")].join("")},t.getPhoneNum=function(){var e=t.randomPhoneNumber(),i=/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;return i.test(e)?e.slice(0,3)+"****"+e.slice(7,11):t.getPhoneNum()},t.minuteToHours=function(t){var e=Math.floor(t/60),i=t%60;return e+"时"+i+"分"},t.ShowToast=function(t,e){void 0===e&&(e=2e3);var i=document.createElement("div");i.className="leigod_toastBox",document.body.appendChild(i);for(var n=document.getElementsByClassName("leigod_toastBox"),o='<a class="leigod_toast">'+t+"</a>",r=0;r<n.length;r++)n[r].innerHTML=o;setTimeout(function(){for(var t=document.getElementsByClassName("leigod_toastBox"),e=0;e<t.length;e++)document.body.removeChild(t[e])},e)},t.ZH_CN="zh_CN",t.EN="en",t.CN="cn",t.FROM_GUANWANG="guanwang",t.REGION_CODE_0=0,t.REGION_CODE_1=1,t.REGION_CODE_INTL="intl",t.PACKAGE_LEVEL_0=0,t.PACKAGE_LEVEL_1=1,t.PACKAGE_LEVEL_2=2,t.PACKAGE_LEVEL_100=100,t.PACKAGE_LEVEL_101=101,t.PACKAGE_LEVEL_200=200,t.PACKAGE_LEVEL_201=201,t.PACKAGE_LEVEL_202=202,t.NEWS_CHINA="国服",t.NEWS_MOBIL="手游",t.NEWS_LAST="最新",t.NEWS_HOT="热点",t.NEWS_TUIJIAN="推荐",t.NEWS_TUIGUANG="推广",t.DOWN_WINDOWS="downWindows",t.CLICK_DOWNLOAD="click_download",t.PAY="pay",t.LOGIN="login",t.WINDOWS_THREE_LOGIN="windows_three_login",t.WINDOWS_GET_PACKAGE="windows_get_package",t.WINDOWS_CLICK_PAY="windows_click_pay",t.WINDOWS_CLICK_PAY_SUCCESS="windows_click_pay_success",t.WINDOWS_CLICK_PAY_FAIL="windows_click_pay_fail",t.PLAT_FROM_WIN=0,t.PLAT_FROM_MAC=1,t.PLAT_FROM_ANDROID=2,t.PLAT_FROM_IOS=3,t.PLAT_FROM_WX=4,t}(),O=E,y=(function(){function t(){this.register_type="1",this.checkcode="",this.checkcode_key="",this.phone="",this.country_code="86",this.smscode="",this.smscode_key="",this.password="",this.package_id=0,this.price_id=0,this.refer_code="",this.nickname="",this.username="",this.os_type=4,this.src_channel=""}}(),function(){function t(){this.account_type="1",this.checkcode="",this.checkcode_key="",this.phone="",this.country_code="86",this.smscode="",this.smscode_key="",this.password=""}}(),function(){function t(){this.register_type="1",this.checkcode="",this.checkcode_key="",this.username="",this.email="",this.mailcode="",this.mailcode_key="",this.password="",this.nickname="",this.package_id=0,this.price_id=0,this.refer_code="",this.os_type=4,this.src_channel=""}}(),function(){function t(){this.account_type="2",this.checkcode="",this.checkcode_key="",this.email="",this.mailcode="",this.mailcode_key="",this.password=""}}(),function(){function t(){this.register_type="3",this.checkcode="",this.checkcode_key="",this.account_token="",this.verify_code="",this.verify_key="",this.refer_code="",this.country_code="",this.phone="",this.smscode="",this.smscode_key="",this.email="",this.mailcode="",this.mailcode_key="",this.os_type="",this.code=""}}(),function(){function t(){this.username="",this.password="",this.user_type="0",this.src_channel="",this.code=""}}(),function(){function t(){this.login_info=new S,this.user_info=new y}}(),function(){function t(){this.user_name="",this.nickname="",this.email="",this.sex="保密",this.birthday="",this.mobile="",this.avatar="",this.region_code=0,this.address="",this.is_switch_package=0,this.package_id=0,this.group_title="",this.expiry_time="",this.expiry_time_samp=0,this.package_title="",this.package_level=0,this.pause_status_id=1,this.is_set_admin_pass=0,this.mobile_contact_number="",this.billing_type=0,this.master_account=0,this.vip_level="VIP0",this.is_pay_user=0,this.wall_log_switch=0,this.experience_expiry_time="",this.experience_time=0,this.first_invoice_discount=0}return t.getUserName=function(t){var e="";return""!=t.nickname?e=t.nickname+"":t.mobile.length>0?e=t.mobile:t.email.length>0?e=t.email:""!=t.user_name&&(e=t.user_name),t.nickname=e,t.package_title=0==t.is_pay_user?"免费体验":t.package_title,t.nickname},t.getUserAvatar=function(t){return""==t.avatar_new?(t.avatar_new="/images/default_avatar.png",t.avatar=t.avatar_new):t.avatar=t.avatar_new,t},t.updateUserInfo=function(e,i,n){void 0===i&&(i=null),void 0===n&&(n=null);var o=k.getUserInfo();null!=e&&(o=new t,o.nickname=e.nickname,o.email=e.email,o.mobile=e.mobile,o.region_code=e.region_code,o.sex=e.sex,o.birthday=e.birthday,o.avatar=e.avatar,o.avatar_new=e.avatar_new,o.master_account=e.master_account,o.expiry_time=e.expiry_time,o.is_switch_package=e.is_switch_package,o.package_id=e.package_id,o.package_level=e.package_level,o.package_title=e.package_title,o.address=e.address,o.mobile_contact_number=e.mobile_contact_number,o.experience_time=e.experience_time,o.experience_expiry_time=e.experience_expiry_time,o.expiry_time_samp=e.expiry_time_samp,k.addUserInfo(o)),null!=i&&null!=o&&(o.avatar=i,k.addUserInfo(o)),null!=n&&null!=o&&(o.nickname=n,k.addUserInfo(o))},t}()),S=function(){function t(){this.account_token="",this.expiry_time=""}return t}(),T=(function(){function t(){this.billing_type=0,this.package_level=0,this.package_desc="",this.package_id=0,this.package_short_desc="",this.package_title="",this.package_is_recommend=0,this.short_desc=0,this.price=[]}}(),function(){function t(){this.id=0,this.picture_url="",this.title="",this.status="",this.discount_code="",this.discount_id=0,this.expired_time="",this.price_ids=[],this.discount_type=1,this.discount_value=0}}(),function(){function t(){this.exclude_region_codes="",this.include_region_codes="",this.price_desc="",this.price_id=0,this.price_is_recommend=0,this.price_num="",this.price_order_num=0,this.price_short_desc="",this.price_title="",this.price_type=0}}(),function(){function t(){this.account_token="",this.package_id=0,this.price_id=0,this.invoice_from=0,this.invoice_id=0,this.pay_type=0,this.src_channel="",this.os_type="1",this.refer_code="",this.qr_type="0"}t.prototype.switchFrom=function(t){switch(t){case 4:return 2;case 2:return 6;case 5:return 7}return t}}(),function(){function t(){this.account_token="",this.old_password="",this.new_password="",this.new_password_confirmation=""}}(),function(){function t(){this.account_token="",this.new_password="",this.new_password_confirmation="",this.verify_code="",this.verify_key=""}}(),function(){function t(){this.account_token="",this.invoice_id=0}}(),function(){function t(){this.status=0}}(),function(){function t(){this.amount="",this.amount_type=0,this.order_no="",this.invoice_id=0,this.package_title="",this.price_title="",this.payType=0}}(),function(){function t(){this.is_show_wx=0,this.is_show_zfb=0,this.is_show_qq=0,this.is_show_paypal=1}}(),function(){function t(){this.price_title="",this.price_num="",this.zheCodeList=[]}}(),function(){function t(){this.account_token="",this.size=15,this.page=1}}(),function(){function t(){this.account_token="",this.username="",this.prize_id=0,this.country_code="",this.phone="",this.email="",this.address="",this.is_auth_use=0,this.card_id="",this.alipay_address=""}}(),function(){function t(){this.card_no="",this.card_password="",this.is_auth_use=0}}(),function(){function t(){this.current_page=1,this.last_page=1,this.per_page=1,this.total=0,this.list=[]}}(),function(){function t(){this.id=1,this.activity_title="",this.award_type=0,this.create_time="",this.desc="",this.present_title="",this.status=0,this.status_title="",this.message="",this.discount_status="",this.discount_expired_time="",this.card_package=[]}}(),function(){function t(){this.id="",this.title=""}}(),function(){function t(){this.account_token="",this.size=15,this.page=1}}(),function(){function t(){this.current_page=1,this.last_page=1,this.per_page=1,this.total=0,this.list=[]}}(),function(){function t(){this.invoice_id=0,this.invoice_no="",this.invoice_status_title="",this.invoice_status="",this.invoice_money="",this.invoice_date="",this.package_name="",this.price_name="",this.pay_date="",this.discount_code=""}}(),function(){function t(){this.account_token="",this.filename="",this.nickname="",this.folder_name="leigod"}}(),function(){function t(){}}(),function(){function t(){this.account_token=""}}(),function(){function t(){this.verify_key="",this.code_type=""}}(),function(){function t(){this.account_token="",this.verify_key="",this.verify_code="",this.new_password="",this.new_password_confirmation=""}}(),function(){function t(){this.account_token="",this.card_no="",this.password=""}}(),function(){function t(){this.account_token="",this.cd_key=""}}(),function(){function t(){this.card_type="",this.experience_expiry_time="",this.experience_minutes=0}}(),function(){function t(){this.account_token=""}}(),function(){function t(){this.activity_info=new T,this.user_code=new N}}(),function(){function t(){this.id=0,this.type=0,this.title="",this.label=""}return t}()),N=function(){function t(){this.id=0,this.user_id=0,this.refer_code="",this.activity_id=0,this.create_time="",this.state=0,this.type=0,this.activity_type=0,this.start_time="",this.end_time=""}return t}(),A=(function(){function t(){this.activity_id=0,this.type=0,this.account_token=""}}(),function(){function t(){this.activity_id=0,this.refer_code=""}}(),function(){function t(){this.account_token="",this.client_token="",this.package_id=0}}(),function(){function t(){this.email="",this.account_token="",this.mailcode="",this.mailcode_key="",this.verify_code="",this.verify_key=""}}(),function(){function t(){this.phone="",this.account_token="",this.smscode="",this.smscode_key="",this.country_code=""}}(),function(){function t(){this.account_token=""}}(),function(){function t(){this.account_token="",this.verify_code="",this.verify_key=""}}(),function(){function t(){this.account_token="",this.verify_code="",this.verify_key="",this.email="",this.mailcode="",this.mailcode_key=""}}(),function(){function t(){this.account_token="",this.verify_code="",this.verify_key="",this.phone="",this.smscode="",this.smscode_key="",this.country_code=""}}(),function(){function t(){this.account_token="",this.type="",this.size=10}}(),function(){function t(){this.status=0,this.pause_time="",this.resume_time="",this.op_source=""}}(),function(){function t(){}}(),function(){function t(){this.account_token="",this.open_type=0}}(),function(){function t(){this.open_type=0}}(),function(){function t(){this.wechat=!1,this.QQ=!1,this.weibo=!1,this.facebook=!1,this.google=!1,this.twitter=!1}}(),function(){function t(){}}(),function(){function t(){}return t.addLanguage=function(e){localStorage.setItem(t.STORAGES_LANGUAGE_TYPE,e),t.setCookie(t.STORAGES_LANGUAGE_TYPE,e,168,!0)},t.getLanguage=function(){var e=localStorage.getItem(t.STORAGES_LANGUAGE_TYPE);return null!=e&&void 0!=e||(e=t.getCookie(t.STORAGES_LANGUAGE_TYPE)),""==e&&(e=O.ZH_CN),e},t.addRegionCode=function(e){localStorage.setItem(t.STORAGES_REGION_CODE,e+""),t.setCookie(t.STORAGES_REGION_CODE,e+"",168,!0)},t.getRegionCodes=function(){var e=localStorage.getItem(t.STORAGES_REGION_CODE);return""!=e&&null!=e||(e=t.getCookie(t.STORAGES_REGION_CODE)),""!=e&&null!=e||(e=O.REGION_CODE_0),parseInt(e)},t.addUserInfo=function(e){localStorage.setItem(t.STORAGES_USER_INFO,JSON.stringify(e)),t.setCookie(t.STORAGES_USER_INFO,JSON.stringify(e),-1,!0)},t.getUserInfo=function(){var e;if(O.isMobile()?(e=localStorage.getItem(t.STORAGES_USER_INFO),null!=e&&void 0!=e||(e=t.getCookie(t.STORAGES_USER_INFO))):e=t.getCookie(t.STORAGES_USER_INFO),""==e)return null;var i=JSON.parse(e);return y.getUserName(i),i},t.addUserToken=function(e){if(""!=e.account_token){if(null==e.account_token||void 0==e.account_token)throw new Error("保存的token错误!");var i=window.location.hostname;-1==i.indexOf("www")&&localStorage.setItem(t.STORAGES_TOKEN,JSON.stringify(e)),t.setCookie(t.STORAGES_TOKEN,JSON.stringify(e),2,!0)}},t.getUserToken=function(){var e;if(O.isMobile()?(e=localStorage.getItem(t.STORAGES_TOKEN),null!=e&&void 0!=e||(e=t.getCookie(t.STORAGES_TOKEN))):e=t.getCookie(t.STORAGES_TOKEN),""==e)return new S;var i=JSON.parse(e);return i},t.removeUserToken=function(){localStorage.getItem(t.STORAGES_TOKEN)&&localStorage.removeItem(t.STORAGES_TOKEN),t.getCookie(t.STORAGES_TOKEN)&&t.removeCookie(t.STORAGES_TOKEN,!0)},t.addSrcChannel=function(e){if(""==e)throw new Error("保存的src_channel错误!");t.setCookie(t.SRC_CHANNEL,e,-1,!0)},t.getSrcChannel=function(){var e=t.getCookie(t.SRC_CHANNEL);return e},t.addthreeBindSource=function(e){if(""==e)throw new Error("保存的第三方绑定来源页面错误!");t.setCookie(t.STORAGES_THIRDBIND_URL_TYPE,e,-1,!0)},t.getthreeBindSource=function(){var e=t.getCookie(t.STORAGES_THIRDBIND_URL_TYPE);return e},t.saveParam=function(){var t=O.getUrlParam("to"),e=parseInt(O.getUrlParam("page")),i=parseInt(O.getUrlParam("id"));""!=t&&localStorage.setItem("param_to",t),isNaN(e)||localStorage.setItem("param_page",e+""),isNaN(i)||localStorage.setItem("param_id",i+"")},t.getParam=function(t){void 0===t&&(t=!1);var e=localStorage.getItem("param_to");null==e&&(e="");var i=parseInt(localStorage.getItem("param_page")),n=parseInt(localStorage.getItem("param_id"));return t&&(localStorage.removeItem("param_to"),localStorage.removeItem("param_page"),localStorage.removeItem("param_id")),[e,i,n]},t.loginOut=function(){localStorage.removeItem(t.STORAGES_USER_INFO),localStorage.removeItem(t.STORAGES_TOKEN),t.removeCookie(t.STORAGES_USER_INFO,!0),t.removeCookie(t.STORAGES_TOKEN,!0)},t.setCookie=function(t,e,i,n){void 0===i&&(i=-1),void 0===n&&(n=!1);var o=t+"="+e;if(i>0){var r=new Date;r.setTime(r.getTime()+60*i*60*1e3);var s="; expires="+r.toUTCString();o+=s}var a=window.location.hostname,c=/^((\d)|([1-9]\d)|(1\d{2})|((2[0-4]\d)|(25[0-5])))(\.((\d)|([1-9]\d)|(1\d{2})|((2[0-4]\d)|(25[0-5])))){3}$/;if("localhost"!=a&&!c.test(a)&&n){var _=O.getDomain();o=o+"; domain="+_}o+="; path=/",document.cookie=o},t.getCookie=function(t,e){void 0===e&&(e=!1);var i,n=new RegExp("(^| )"+t+"=([^;]*)(;|$)");return(i=document.cookie.match(n))?unescape(i[2]):""},t.removeCookie=function(e,i){void 0===i&&(i=!1);var n=new Date;n.setTime(n.getTime()-1);var o=t.getCookie(e);if(null!=o&&""!=o){var r=e+"="+o+"; expires=Thu, 01 Jan 1970 00:00:01 GMT;",s=window.location.hostname,a=/^((\d)|([1-9]\d)|(1\d{2})|((2[0-4]\d)|(25[0-5])))(\.((\d)|([1-9]\d)|(1\d{2})|((2[0-4]\d)|(25[0-5])))){3}$/;if("localhost"!=s&&!a.test(s)&&i){var c=O.getDomain();r=r+"; domain="+c}r+="; path=/",document.cookie=r}},t.STORAGES_PHONE="phone",t.STORAGES_EMAIL="email",t.STORAGES_PW="password",t.STORAGES_USERNAME="username",t.STORAGES_PHONE_REGION="phonerRegion",t.STORAGES_PHONE_PW="phonePassword",t.STORAGES_EMAIL_PW="emailPassword",t.STORAGES_TOKEN="account_token",t.STORAGES_USER_INFO="user_info",t.STORAGES_URL_TARGET="url_target",t.STORAGES_LANGUAGE_TYPE="language_type",t.STORAGES_REGION_CODE="region_code",t.SRC_CHANNEL="src_channel",t.STORAGES_OS_TYPE="storages_os_type",t.STORAGES_THIRDBIND_URL_TYPE="third_bind_url_type",t.STORAGES_TIME_TIP="time_tip_show",t}()),k=A;c["b"].prototype.$message=a.a,r.beforeEach(function(t,e,i){document.title="用户中心",h.a.start();var n=k.getCookie(k.STORAGES_TOKEN);null===n||""===n?(c["b"].prototype.$message.error("登录失效，请重新登录"),setTimeout(function(){k.loginOut(),window.location.href="/"},1500)):i()}),r.afterEach(function(){h.a.done()}),n["default"].config.productionTip=!1,new n["default"]({router:r,mounted:function(){var t=this;function e(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}e()&&window.addEventListener("hashchange",function(){var e=window.location.hash.slice(1);t.$route.path!==e&&t.$router.push(e)},!1)}}).$mount("#app")}});