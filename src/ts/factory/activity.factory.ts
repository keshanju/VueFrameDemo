export default class ActivityFactory {
    public static instace: ActivityFactory;
    public endtime = "2019-02-21 15:30:00";
    public activity_type = 8;
    public choujiang_type: number = 0;//0 播放动画 1 老虎机  2 转盘  3 翻卡牌
    public joinLeft: boolean = false;//是否显示登录分享模块
    public guizejilutype: number = 0;//活动规则显示方式 0 tab栏切换 1 弹窗
    public cj_success_type: boolean = false;//抽奖成功是否弹窗提示
    public sina_link = 'https://weibo.com/p/1006066443936086/manage?from=page_100606&mod=TAB#place'; //新浪微博

    public banner_bg_top: string = '';//顶部banner1
    public banner_bg_bottom: string = '';//顶部banner2
    public banner_bg_foot: string = '';//顶部banner3
    public banner_title: string = '';//顶部banner处的文字
    public package_bg: string = '';//套餐推荐背景
    public package_one: string = '';//套餐一
    public package_two: string = '';//套餐二
    public draw_img_normal: string = '';// 砸蛋区背景
    public draw_img_win: string = '';//  砸蛋gif动画
    public present_list_bg: string = '';// 奖品列表背景
    public activity_time: string = '';//活动时间
    public time_down_bg: string = '';//活动倒计时背景
    public choujiang_bg: string = '';//抽奖模块背景
    public prize_default: string = '';//奖品展示图
    public prize_list = [];//奖品图片列表
    public prize_active_img = [];//抽奖时奖品的焦点图片
    public choujiang_success_bg: string = '';//抽奖成功背景
    public zhongjiang_list_bg: string = '';//中奖列表背景
    public activity_info_bg: string = '';//活动规则背景(抽奖模块中的)
    public dialog_award_bg: string = '';//中奖纪录弹窗背景
    public dialog_guize_bg: string = '';//活动规则弹窗背景
    public activity_info_content: string = '';//活动规则详情
    public activity_info_ewm: string = '';//活动规则中的二维码图片
    public user_prize_bg: string = '';//用户中奖纪录背景
    public weibo_model_bg: string = '';//微博转发活动背景
    public weibo_model_logo: string = '';//微博转发logo
    public weibo_model_title: string = '';//微博转发标题
    public weibo_model_content: string = '';//微博转发详情
    public tuijian_model_bg: string = '';//推荐好友注册购买背景
    public weixin_model_bg: string = '';//关注微信模块背景
    public shouyou_model_bg: string = '';//手游加速推广模块背景
    public dialog_notice_bg: string = '';//弹窗背景
    public dialog_title_bg: string = '';//弹窗标题背景
    public dialog_close_bg: string = '';//弹窗关闭图标背景
    public activity_share_bg: string = '';//登录分享模块

    public static getInstace(type: string = 'pc',id: number = 174) {
        if(ActivityFactory.instace == null) ActivityFactory.instace = new ActivityFactory(type,id);

        return ActivityFactory.instace;
    }

    constructor(type: string,id: number) {
        this.getActivityModel(type,id);
    }

    public getActivityModel(type: string,id: number){
        switch(id){
            case 174:
                this.joinLeft = false;
                this.guizejilutype = 0;
                this.banner_bg_top = './images/chunjie/chunjie_banner01.jpg';
                this.banner_bg_bottom = './images/chunjie/chunjie_banner02.jpg';
                this.package_bg = './images/chunjie/chunjie_banner03.jpg';
                this.package_one = './images/chunjie/chunjie_45.png';
                this.package_two = './images/chunjie/chunjie_188.png';
                this.choujiang_bg = './images/chunjie/chunjie_bg_main01.png';
                this.weixin_model_bg = './images/chunjie/chunjie_screen02.png';
                this.dialog_notice_bg = './images/chunjie/bg_tips.png';
                this.dialog_title_bg = './images/chunjie/tips_tit.png';
                this.dialog_close_bg = './images/chunjie/x.png';
                this.activity_info_content = `<b>活动时间：</b><br>
                            2019年1月29日15:30~2019年2月21日15:30<br>
                            <b>活动规则：</b><br>
                            1.购买188套餐可获得9个点亮福袋，购买其他任意套餐获得7个点亮福袋。集齐点亮10个福袋就可以开启福袋奖励<br>
                            2.邀请新人注册点亮：对方注册新账户使用您的推荐码，你可以获得一个点亮福袋，邀请好友注册最多获得3次点亮机会。新注册账户如使用了推荐码会自动获得3个福袋奖励。<br>
                            3.邀请成功如果未显示点亮福袋，请退出登录刷新页面。<br>
                            4.活动期间，抽中实物奖品，现金红包，请您根据中奖提示添加发奖客服微信 （微信号： service6000）领取奖品<br />
                            5.官网页面抽中时长卡用户，直接在官网"个人中心-活动记录"页面进行兑换。<br>
                            6.App和微信公众号中活动页面抽中时长卡用户，请访问雷神加速器PC官网(www.leigod.com )"个人中心--活动记录“页面进行兑换。<br>
                            7.活动积分抽奖机会截止时间为本次活动结束时间（2019年2月21日15：30），逾期清空作废；<br>
                            8.时长卡兑换截止时间为2019年2月25日18：00；<br>
                            9.本次活动的最终解释权归上海雷神网络科技有限公司所有。<br>`;
                if(type != 'pc') {
                    this.banner_bg_top = './images/chunjie/chunjie_mbanner.jpg';
                    this.package_bg = './images/chunjie/chunjie_mrecharge.jpg';
                    this.package_one = './images/chunjie/chunjie_m45.png';
                    this.package_two = './images/chunjie/chunjie_m188.png';
                    this.choujiang_bg = './images/chunjie/chunjie_m188.png';
                    this.tuijian_model_bg = './images/chunjie/chunjie_mfriend.jpg';
                    this.activity_info_content = `<b>活动时间：</b><br>
                            2019年1月29日15:30~2019年2月21日15:30<br>
                            <b>活动规则：</b><br>
                            1.购买188套餐可获得9个点亮福袋，购买其他任意套餐获得7个点亮福袋。集齐点亮10个福袋就可以开启福袋奖励<br>
                            2.邀请新人注册点亮：对方注册新账户使用您的推荐码，你可以获得一个点亮福袋，邀请好友注册最多获得3次点亮机会。新注册账户如使用了推荐码会自动获得3个福袋奖励。<br>
                            3.邀请成功如果未显示点亮福袋，请退出登录刷新页面。<br>
                            4.活动期间，抽中实物奖品，现金红包，请您根据中奖提示添加发奖客服微信 （微信号： service6000）领取奖品<br />
                            5.官网页面抽中时长卡用户，直接在官网"个人中心-活动记录"页面进行兑换。<br>
                            6.App和微信公众号中活动页面抽中时长卡用户，请访问雷神加速器PC官网(www.leigod.com )"个人中心--活动记录“页面进行兑换。<br>
                            7.活动积分抽奖机会截止时间为本次活动结束时间（2019年2月21日15：30），逾期清空作废；<br>
                            8.时长卡兑换截止时间为2019年2月25日18：00；<br>
                            9.本次活动的最终解释权归上海雷神网络科技有限公司所有。<br>`;
                }
                break;
            case 177:
                this.joinLeft = true;
                this.endtime = '2019-03-11 15:30:00';
                this.guizejilutype = 1;
                this.choujiang_type = 1;
                this.cj_success_type = true;
                this.banner_bg_top = './images/kaixue/banner01.jpg';
                this.package_bg = './images/kaixue/banner02.jpg';
                this.package_one = './images/kaixue/45.png';
                this.package_two = './images/kaixue/188.png';
                this.choujiang_bg = './images/kaixue/screen01.png';
                // this.weibo_model_bg = './images/kaixue/hj_weibo_bg.png';
                this.tuijian_model_bg = './images/kaixue/screen02.png';
                this.weixin_model_bg = './images/kaixue/screen04.png';
                this.shouyou_model_bg = './images/kaixue/screen03.png';
                this.activity_info_bg = './images/kaixue/screen05.png';
                this.activity_info_ewm = './images/kaixue/code.png';
                this.dialog_guize_bg = './images/kaixue/tips_02.png';
                this.dialog_award_bg = './images/kaixue/tips_02.png';
                this.dialog_notice_bg = './images/kaixue/tips_01.png';
                this.dialog_title_bg = './images/kaixue/tips_tit.png';
                this.dialog_close_bg = './images/kaixue/x.png';
                this.prize_list = [
                    './images/kaixue/01.png',
                    './images/kaixue/02.png',
                    './images/kaixue/03.png',
                    './images/kaixue/04.png',
                    './images/kaixue/05.png',
                    './images/kaixue/06.png'
                ];
                this.prize_active_img = ['./images/kaixue/boder_on.png','./images/kaixue/boder_on01.png'];
                this.choujiang_success_bg = './images/kaixue/tips_02.png';
                this.activity_share_bg = './images/kaixue/right_side.png';
                if(type != 'pc'){
                    this.joinLeft = false;
                    this.banner_bg_top = '';
                    this.package_bg = './images/kaixue/banner.jpg';
                    this.weixin_model_bg = '';
                    this.shouyou_model_bg = '';
                    this.prize_active_img = ['./images/kaixue/border.png'];
                    this.choujiang_success_bg = './images/kaixue/tips_01.png';
                }

                break;
            case 181:
                this.joinLeft = true;
                this.endtime = '2019-03-11 15:30:00';
                this.guizejilutype = 1;
                this.choujiang_type = 0;
                this.cj_success_type = true;
                this.banner_bg_top = './images/zhishu/banner_bg01.jpg';
                this.package_bg = './images/zhishu/banner_bg02.jpg';
                this.banner_bg_bottom = './images/zhishu/banner_bg03.jpg';
                // this.package_one = './images/zhishu/45.png';
                // this.package_two = './images/zhishu/188.png';
                this.choujiang_bg = './images/zhishu/draw_bg01.png';
                this.draw_img_normal = './images/zhishu/draw_bg02.png';
                this.draw_img_win = './images/zhishu/draw_bg03.gif';
                // this.weibo_model_bg = './images/zhishu/hj_weibo_bg.png';
                this.tuijian_model_bg = './images/zhishu/screen01.png';
                this.weixin_model_bg = './images/zhishu/screen02.png';
                // this.shouyou_model_bg = './images/zhishu/screen03.png';
                this.activity_info_bg = './images/zhishu/screen03.png';
                // this.activity_info_ewm = 'images/zhishu/code.png';
                this.dialog_guize_bg = './images/zhishu/model_guize.png';
                this.dialog_award_bg = './images/zhishu/model_no_gift.png';
                this.dialog_notice_bg = './images/zhishu/model_tips.png';
                // this.dialog_title_bg = './images/zhishu/tips_tit.png';
                this.dialog_close_bg = './images/zhishu/close.png';
                this.prize_list = [
                    './images/zhishu/01.png',
                    './images/zhishu/02.png',
                    './images/zhishu/03.png'
                ];
                // this.prize_active_img = ['./images/zhishu/boder_on.png','./images/zhishu/boder_on01.png'];
                this.choujiang_success_bg = './images/zhishu/model_have_gift.png';
                this.activity_share_bg = './images/zhishu/share_bg.png';
                if(type != 'pc'){
                    this.joinLeft = false;
                    this.package_bg = './images/zhishu/banner.png';
                    this.present_list_bg = './images/zhishu/screen01.png'
                    this.tuijian_model_bg = './images/zhishu/screen02.png';
                }

                break;
            case 193:
                this.joinLeft = true;
                this.endtime = '2019/05/22 15:30:00';
                this.guizejilutype = 1;
                this.choujiang_type = 2;
                this.cj_success_type = true;
                this.banner_bg_top = './images/wuyi/banner01.jpg';
                this.banner_bg_bottom = './images/wuyi/banner02.jpg';
                this.package_bg = './images/wuyi/banner03.jpg';
                this.choujiang_bg = './images/wuyi/screen01.png';
                // this.weibo_model_bg = './images/kaixue/hj_weibo_bg.png';
                this.tuijian_model_bg = './images/wuyi/screen02.png';
                this.weixin_model_bg = './images/wuyi/screen04.png';
                this.shouyou_model_bg = './images/wuyi/screen03.png';
                this.dialog_guize_bg = './images/kaixue/tips_02.png';
                this.dialog_award_bg = './images/kaixue/tips_02.png';
                this.dialog_notice_bg = './images/wuyi/dialog_bg.png';
                this.dialog_close_bg = './images/wuyi/close.png';
                this.prize_list = [
                    './images/kaixue/01.png',
                    './images/kaixue/02.png',
                    './images/kaixue/03.png',
                    './images/kaixue/04.png',
                    './images/kaixue/05.png',
                    './images/kaixue/06.png'
                ];
                this.prize_active_img = ['./images/kaixue/boder_on.png','./images/kaixue/boder_on01.png'];
                this.choujiang_success_bg = './images/wuyi/dialog_bg.png';
                this.activity_share_bg = './images/wuyi/maodian.png';
                if(type != 'pc'){
                    this.joinLeft = false;
                    this.banner_bg_top = '/images/wuyi/banner01.png';
                    this.package_bg = '/images/kaixue/banner.jpg';
                    this.weixin_model_bg = '';
                    this.shouyou_model_bg = '';
                    this.prize_active_img = ['/images/kaixue/border.png'];
                    this.choujiang_success_bg = '/images/wuyi/dialog_bg.png';
                    this.dialog_close_bg = '/images/wuyi/x.png';
                    this.dialog_guize_bg = '/images/wuyi/wuyi_guize_bg.png';
                    this.choujiang_bg = '/images/wuyi/screen01.png';
                    // this.weibo_model_bg = './images/kaixue/hj_weibo_bg.png';
                    this.tuijian_model_bg = '/images/wuyi/screen02.png';
                    this.weixin_model_bg = '/images/wuyi/screen04.png';
                    this.shouyou_model_bg = '/images/wuyi/screen03.png';
                    this.dialog_guize_bg = '/images/kaixue/tips_02.png';
                    this.dialog_award_bg = '/images/kaixue/tips_02.png';
                    this.dialog_notice_bg = '/images/wuyi/dialog_bg.png';
                    this.dialog_close_bg = '/images/wuyi/close.png';
                }

                break;
            case 195:
                this.endtime = '2019-05-29 15:30:00';
                this.guizejilutype = 1;
                this.choujiang_type = 1;
                this.cj_success_type = true;
                this.banner_bg_top = './images/preferential/banner01.png';
                this.package_bg = './images/preferential/banner02.png';
                this.dialog_close_bg = './images/preferential/closed_normal.png';
                this.prize_list = [
                    './images/preferential/01.png',
                    './images/preferential/02.png',
                    './images/preferential/03.png',
                    './images/preferential/04.png',
                    './images/preferential/05.png',
                    './images/preferential/06.png',
                    './images/preferential/07.png',
                    './images/preferential/08.png'
                ];
                this.prize_active_img = [
                    './images/preferential/active_01.png',
                    './images/preferential/active_02.png',
                    './images/preferential/active_03.png',
                    './images/preferential/active_04.png',
                    './images/preferential/active_05.png',
                    './images/preferential/active_06.png',
                    './images/preferential/active_07.png',
                    './images/preferential/active_08.png',
                ];
                if(type != 'pc'){
                    this.package_bg = '/images/preferential/banner02.png';
                    this.weibo_model_bg = '/images/preferential/weibo_bg.png';
                    this.dialog_notice_bg = '/images/preferential/dialog_bg.png';
                    this.dialog_close_bg = '/images/preferential/closed_normal.png';
                    this.prize_list = [
                        '/images/preferential/01.png',
                        '/images/preferential/02.png',
                        '/images/preferential/03.png',
                        '/images/preferential/04.png',
                        '/images/preferential/05.png',
                        '/images/preferential/06.png',
                        '/images/preferential/07.png',
                        '/images/preferential/08.png'
                    ];
                    this.prize_active_img = [
                        '/images/preferential/active_01.png',
                        '/images/preferential/active_02.png',
                        '/images/preferential/active_03.png',
                        '/images/preferential/active_04.png',
                        '/images/preferential/active_05.png',
                        '/images/preferential/active_06.png',
                        '/images/preferential/active_07.png',
                        '/images/preferential/active_08.png',
                    ];
                }
                break;
            case 200:
                this.joinLeft = true;
                this.endtime = '2019/06/18 15:30:00';
                this.guizejilutype = 1;
                this.choujiang_type = 3;
                this.cj_success_type = true;
                this.banner_bg_top = './images/kapai/kp_banner01.png';
                this.banner_bg_bottom = './images/kapai/kp_banner02.png';
                this.package_bg = './images/kapai/kp_1.png';
                this.choujiang_bg = './images/kapai/kp_2.png';
                this.weixin_model_bg = './images/kapai/kp_3.png';
                this.shouyou_model_bg = './images/kapai/kp_4.png';
                this.tuijian_model_bg = './images/kapai/kp_5.png';
                this.choujiang_success_bg = './images/kapai/kp_dialog_bg.png';
                this.dialog_notice_bg = './images/kapai/kp_dialog_bg.png';//弹窗背景
                this.dialog_close_bg = './images/kapai/kp_dialog_close.png';
                this.activity_share_bg = './images/kapai/fudong.png';
                this.prize_list = [
                    './images/preferential/01.png',
                    './images/preferential/02.png',
                    './images/preferential/03.png',
                    './images/preferential/04.png',
                    './images/preferential/05.png',
                    './images/preferential/06.png',
                    './images/preferential/07.png',
                    './images/preferential/08.png'
                ];
                this.prize_active_img = [
                    './images/preferential/active_01.png',
                    './images/preferential/active_02.png',
                    './images/preferential/active_03.png',
                    './images/preferential/active_04.png',
                    './images/preferential/active_05.png',
                    './images/preferential/active_06.png',
                    './images/preferential/active_07.png',
                    './images/preferential/active_08.png',
                ];
                if(type != 'pc'){
                    this.banner_bg_top = '/images/kapai/banner01.png';
                    this.package_bg = '/images/kapai/recharge_bg.png';
                    this.package_one = '/images/kapai/pack_buy_bg.png';
                    this.choujiang_bg = '/images/kapai/kp_screen01.png';
                    this.present_list_bg = '/images/kapai/kp_screen02.png';
                    this.shouyou_model_bg = '/images/kapai/kp_screen03.png';
                    this.weibo_model_bg = '/images/kapai/kp_screen04.png';
                    this.dialog_notice_bg = '/images/kapai/dialog_bg.png';
                    this.dialog_close_bg = '/images/kapai/kp_closed_normal.png';
                    this.prize_list = [
                        '/images/kapai/kp_01.png',
                        '/images/kapai/kp_02.png',
                        '/images/kapai/kp_03.png',
                        '/images/kapai/kp_04.png',
                        '/images/kapai/kp_05.png',
                        '/images/kapai/kp_06.png'
                    ];
                    this.prize_active_img = [
                        '/images/kapai/kp_active.png'
                    ];
                }
                break;
            case 203:
                this.joinLeft = true;
                this.endtime = '2019/06/18 15:30:00';
                this.guizejilutype = 1;
                this.choujiang_type = 2;
                this.cj_success_type = true;
                this.banner_bg_top = './images/leishen618/618_banner01.jpg';
                this.banner_bg_bottom = './images/leishen618/618_banner02.jpg';
                this.banner_bg_foot = './images/leishen618/618_banner03.jpg';
                this.banner_title = './images/leishen618/618_banner_title.png';
                this.package_bg = './images/leishen618/618_bg1.png';
                this.choujiang_bg = './images/leishen618/618_bg2.png';
                this.weixin_model_bg = './images/leishen618/618_bg3.png';
                this.shouyou_model_bg = './images/leishen618/618_bg4.png';
                this.choujiang_success_bg = './images/leishen618/618_dialogbg.png';
                this.dialog_notice_bg = './images/leishen618/618_dialogbg.png';//弹窗背景
                this.dialog_close_bg = './images/leishen618/618_dialog_close.png';
                if(type != 'pc'){
                    this.banner_bg_top = '/images/leishen618/ls618_banner_main.jpg';
                    this.package_bg = '/images/leishen618/ls618_screen01.png';
                    this.draw_img_normal = '/images/leishen618/ls618_screen02.png';
                    this.choujiang_bg = '/images/leishen618/ls618_choujiang_bg.png';
                    this.present_list_bg = '/images/leishen618/ls618_screen03.png';
                    this.activity_info_bg = '/images/leishen618/ls618_screen04.png';
                    this.dialog_notice_bg = '/images/leishen618/ls618_dialog_bg.png';
                    this.dialog_close_bg = '/images/leishen618/ls618_dialog_close.png';
                }
                break;
            case 213:
                this.joinLeft = false;
                this.endtime = '2019/07/23 15:30:00';
                this.guizejilutype = 1;
                this.choujiang_type = 1;
                this.cj_success_type = true;
                this.banner_bg_top = './images/summer/summer_banner.png';
                this.choujiang_bg = './images/summer/summer_choujiang_bg.png';
                this.weixin_model_bg = './images/summer/summer_model_bg.png';
                this.shouyou_model_bg = './images/summer/summer_model_bg.png';
                this.choujiang_success_bg = './images/summer/summer_dialog_bg.png';
                this.dialog_notice_bg = './images/summer/summer_dialog_bg.png';//弹窗背景
                this.dialog_close_bg = './images/leishen618/618_dialog_close.png';
                if(type != 'pc'){
                    this.banner_bg_top = '/images/summer/summer_banner.png';
                    this.package_bg = '/images/summer/summer_choujiang_bg.png';
                    this.draw_img_normal = '/images/summer/summer_screem_01.png';
                    this.present_list_bg = '/images/summer/summer_screem_02.png';
                    this.activity_info_bg = '/images/summer/summer_screem_03.png';
                    this.dialog_notice_bg = '/images/summer/summer_dialog_bg.png';
                    this.dialog_close_bg = '/images/leishen618/ls618_dialog_close.png';
                }
                break;

            case 216:
                this.endtime = '2019-07-29 15:30:00';
                this.guizejilutype = 1;
                this.choujiang_type = 1;
                this.cj_success_type = true;
                this.banner_bg_top = './images/shujia/1.jpg';
                this.banner_bg_bottom = './images/shujia/2.jpg';
                this.banner_title = './images/shujia/title.png';
                this.prize_list = [
                    './images/shujia/prize6.jpg', //通行证等级50级
                    './images/shujia/prize1.jpg',//AK枪
                    './images/shujia/prize2.jpg',//高级版生存通行证
                    './images/shujia/prize5.jpg',//夏日套装
                    './images/shujia/prize4.jpg',//88充值卡
                    './images/shujia/prize3.jpg'//188充值卡
                ];
                if(type != 'pc'){
                    this.banner_bg_top = '/images/shujia/shujia_banner.jpg';
                    this.package_bg = '/images/shujia/banner02.png';
                    this.weibo_model_bg = '/images/shujia/weibo_bg.png';
                    this.dialog_notice_bg = '/images/preferential/dialog_bg.png';
                    this.dialog_close_bg = '/images/preferential/closed_normal.png';
                    this.prize_list = [
                        '/images/shujia/01.jpg',
                        '/images/shujia/02.jpg',
                        '/images/shujia/03.jpg',
                        '/images/shujia/04.jpg',
                        '/images/shujia/05.jpg',
                        '/images/shujia/06.jpg',
                    ];
                    this.prize_active_img = [
                        '/images/shujia/active.png'
                    ];
                }
                break;
        }
    }
}
