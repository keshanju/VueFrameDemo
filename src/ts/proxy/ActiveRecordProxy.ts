import {Component, Vue} from "vue-property-decorator";
import {IProxy} from "@/ts/interface/IProxy";
import HttpClient from "../net/HttpClient";
import {IdataModel} from "../models/IdataModel";
import LocalStorageUtil from "../utils/LocalStorageUtil";
import {areaCodeCaptchaModel} from "@/ts/models/CaptchaModel";
import CheckUtil from "@/ts/utils/CheckUtil";
import {TipsMsgUtil} from "@/ts/utils/TipsMsgUtil";
import {
    ActiveRecordListModel,
    ActiveRecordModel,
    ActiveRecordPrizeRequestModel,
    ActiveRecordRequestModel,
    cardInfo,ActiveRecordBox
} from "../models/UserModel";
import {GetRegincodeModel} from "@/ts/models/NewsModel";
import ConfigUtil from "@/ts/utils/ConfigUtil";
// const presentType: Array<Object> = [{ id: 0, name: "充值卡" }, { id: 1, name: "现金红包" }, { id: 2, name: "实物" }, { id: 3, name: "三方充值卡" },{ id: 4, name: "折扣码" }{ id: 5, name: "大礼包" }];
// const prizeStatus: Array<Object> = [{ id: 0, name: "待兑换" }, { id: 1, name: "已申请" }, { id: 2, name: "已发出" }, { id: 3, name: "已领取" }];

@Component
export default class ActiveRecordProxy extends Vue implements IProxy {
    public ActiveRecordList: Array<ActiveRecordModel> = []; //订单列表
    public rowsPerPage: number = 10;
    public curentPage: number = 0; //索引从0开始
    public currentActiveRecordModel = new ActiveRecordModel(); //当前点击行的数据
    public areaCodeList: object = []; // 手机区号list
    public areaCodeListArr = []; // 手机区号list数组
    public countryCode = {
        code: '',
        group: "",
        ico: "",
        iso_code: "",
        name: "",
    };//手机区号
    public country_code_list = [];//手机区号
    card_id:string=''
    public payTypeDialogVisible: boolean = false;
    public total: number = 0; //订单信息总条目数
    public cardInfo = new cardInfo();
    public card_list:Array<ActiveRecordBox>=[];
    public country_code: string = "86";
    public username: string = "";
    public phone: string = "";
    public email: string = "";
    public address: string = "";
    public alipay_address: string = "";
    public is_auth_use: number = 0;
    public otherCard: string = "";
    public discount:string='';//折扣码
    public discount_title:string='';//折扣码名称
    public details: string = '';//详情
    public desc: string = '';//使用说明
    public is_miandan: boolean = false;
    //////////公共参数
    public http = new HttpClient();
    public backData: IdataModel<any> | undefined;
    //loading
    public isLoading: boolean = false;
    public loadingMsg: string = ""; // loading的说明文字
    // 继承interface
    public init(): void {
        this.getActiveRecordList();
    }

    // 继承interface
    public execute(): void {
    }

    public setBaseUrl(url: string): void {
        this.http.setBaseUrl(url);
    }

    /**
     * 获取手机区号
     */
    public async getAreaCodeList() {
        const url = HttpClient.URL_AUTH_COUNTRY;
        const param = {};
        this.areaCodeListArr=[]
        this.backData = await this.http.get<areaCodeCaptchaModel>(url, param);
        if (this.backData.code == HttpClient.HTTP_SUCCESS_NET_CODE) {
            this.areaCodeList = this.backData.data.list_country;
            this.country_code = this.backData.data.now_country;
            for (const key in this.areaCodeList) {
                this.areaCodeListArr.push(this.areaCodeList[key]);
            }
        }
    }

    /**
     * 获取手机区号
     * @param webUrl 官网路径
     */
    public async getAreaCodeInfoList(webUrl:string) {
        let regionInfos:GetRegincodeModel =await ConfigUtil.getInstance().getRegincode(webUrl);
        this.backData = await ConfigUtil.getInstance().getCounteyCode(webUrl);
        if (this.backData.code == HttpClient.HTTP_SUCCESS_NET_CODE) {
            this.areaCodeListArr=[]
            this.countryCode = this.backData.data.list_country.filter((item)=>{
                return item.code == regionInfos.mobile_code;
            })[0];
            let country_code = localStorage.getItem(LocalStorageUtil.STORAGES_PHONE_REGION);
            if (country_code != null && country_code != 'undefined') {
                this.countryCode = this.backData.data.list_country.filter((item)=>{
                    return item.code == country_code;
                })[0];
            };
            //将list_country里面存在的Top里的数据；从list_country过滤掉
            this.backData.data.list_country.map(item=>{
                let find=false
                for(let qq=0;qq<this.backData.data.top_country.length;qq++){
                    if(item.code==this.backData.data.top_country[qq].code){
                        find=true
                    }
                }
                if(!find){
                    this.areaCodeListArr.push(item)
                }
            })
            let n = 0;
            let list = [];
            let arr = {
                label:"",
                options:[]
            };
            for(let i=0; i< this.areaCodeListArr.length ; i++){
                if(i == this.areaCodeListArr.length - 1) {
                    let arr = {
                        label:"",
                        options:[]
                    };
                    arr.label = this.areaCodeListArr[i].group;
                    arr.options = this.areaCodeListArr.slice(n,i+1);
                    list.push(arr);
                } else if(this.areaCodeListArr[i].group != this.areaCodeListArr[i+1].group){
                    let arr = {
                        label:"",
                        options:[]
                    };
                    arr.label = this.areaCodeListArr[i].group;
                    arr.options = this.areaCodeListArr.slice(n,i+1);
                    list.push(arr);
                    n = i+1;
                }
            }
            arr.options = this.backData.data.top_country;
            list.unshift(arr);
            this.country_code_list = list;
        }
    }

    /**
     * 用户活动 - 奖品列表
     * page-当前的页面，size每页多少调数据
     *  @param page  @param size
     */
    public async getActiveRecordList(page: number = 1, size: number = 10) {
        this.isLoading = true;
        if (page == null) page = 1
        const url = HttpClient.URL_USER_PRIZE_LIST;
        this.curentPage = page;
        const token = LocalStorageUtil.getUserToken().account_token;
        let param = new ActiveRecordRequestModel();
        param.account_token = token;
        param.page = page;
        param.size = size;
        this.backData = await this.http.post<ActiveRecordListModel>(url, param);
        // this.backData = require("./tempData.json");
        this.isLoading = false;
        if (this.backData.code == HttpClient.HTTP_SUCCESS_NET_CODE) {
            this.ActiveRecordList = this.backData.data.list;
            this.total = this.backData.data.total;
            this.getActiveRecordListSuccess();
        } else if (this.backData.code == HttpClient.HTTP_TOKEN_EXPIRE) {
            this.tokenExpired();
        } else {
            this.getActiveRecordListFail();
        }
    }

    /**
     * 用户活动 - 获取充值卡
     * row-当前的点击行的数据
     *  @param row
     */
    public async getDiscount(row) {
        this.isLoading = true;
        const url = HttpClient.URL_USER_RECEIVE;
        const token = LocalStorageUtil.getUserToken().account_token;
        let param = new ActiveRecordPrizeRequestModel();
        param.account_token = token;
        param.prize_id = row.id;
        let backData = await this.http.post(url, param);
        this.isLoading = false;
        if (backData.code == HttpClient.HTTP_SUCCESS_NET_CODE) {
            this.discount = backData.data.card_no;
            this.getDiscountSuccess(backData.msg,row);
        } else if (backData.code == HttpClient.HTTP_TOKEN_EXPIRE) {
            this.tokenExpired();
        } else {
            // @ts-ignore
            this.getDiscountFail(backData.msg);
        }
    }
    /**
     * 用户活动 - 获取充值卡
     * row-当前的点击行的数据
     *  @param row
     */
    public async chargeCard(row,card_id?:string) {
        this.isLoading = true;
        const url = HttpClient.URL_USER_RECEIVE;
        const token = LocalStorageUtil.getUserToken().account_token;
        let param = new ActiveRecordPrizeRequestModel();
        param.account_token = token;
        param.prize_id = row.id;
        param.is_auth_use = 1;
        if(card_id){
            param.card_id=card_id
        }
        let backData = await this.http.post(url, param);
        this.isLoading = false;
        if (backData.code == HttpClient.HTTP_SUCCESS_NET_CODE) {
            this.cardInfo.card_no = backData.data.card_no;
            this.cardInfo.card_password = backData.data.card_password;
            if(card_id){
                this.desc= backData.data.remarks
            }
            if (backData.data.is_auth_use != undefined) {
                if (backData.data.is_auth_use === 1) {
                    // @ts-ignore
                    this.chargeCardSuccess(backData.msg,row);
                }
            } else {
                //如果存在card_id就是大礼包
                // @ts-ignore
                this.getOtherCardSuccess(backData.msg,row,(card_id?true:false));
            }
        } else if (backData.code == HttpClient.HTTP_TOKEN_EXPIRE) {
            this.tokenExpired();
        } else {
            // @ts-ignore
            this.chargeCardFail(backData.msg);
        }
    }
    /**
     * 当提交用户信息领取实物的，发送相关数据请求
     */
    public async sendCustomInfo() {
        this.isLoading = true;
        const url = HttpClient.URL_USER_RECEIVE;
        const token = LocalStorageUtil.getUserToken().account_token;
        let param = new ActiveRecordPrizeRequestModel();
        param.account_token = token;
        param.prize_id = this.currentActiveRecordModel.id;
        param.country_code = this.country_code.toString();
        param.username = this.username;
        param.phone = this.phone;
        param.email = this.email;
        param.address = this.address;
        param.alipay_address = this.alipay_address;
        let backData = await this.http.post(url, param);
        this.isLoading = false;
        if (backData.code == HttpClient.HTTP_SUCCESS_NET_CODE) {
            // @ts-ignore
            this.confirmUserInfoSuccess(backData.msg,this.currentActiveRecordModel.id);
        } else if (backData.code == HttpClient.HTTP_TOKEN_EXPIRE) {
            this.tokenExpired();
        } else {
            // @ts-ignore
            this.confirmUserInfoFail(backData.msg);
        }
    }

    /**
     * 当提交用户信息领取实物的时候，先验证数据，在发送请求
     */
    public confirmUserInfo() {
        let flag = true;
        let tipMsg = "";
        if (this.country_code == "86") {
            //验证手机号
            if (!CheckUtil.checkPhone(this.phone) && flag) {
                tipMsg = TipsMsgUtil.getTipsMsg(TipsMsgUtil.KEY_NOTIF_PHONE_ERROR);
                flag = false;
                if (this.phone == "") {
                    tipMsg = TipsMsgUtil.getTipsMsg(TipsMsgUtil.KEY_NOTIF_PHONE_EMPTY);
                    flag = false;
                }
            }
        }
        //验证邮箱
        if (!CheckUtil.checkEmail(this.email) && flag) {
            tipMsg = TipsMsgUtil.getTipsMsg(TipsMsgUtil.KEY_NOTIF_EMAIL_ERROR);
            flag = false;
            if (this.email == "") {
                tipMsg = TipsMsgUtil.getTipsMsg(TipsMsgUtil.KEY_NOTIF_EMAIL_EMPTY);
                flag = false;
            }
        }
        //验证姓名
        let isUserEmpty = this.username.trim() === "";
        if (isUserEmpty) {
            tipMsg = this.$t("user.b124").toString();
            flag = false;
        }
        //验证地址/支付宝账号
        if(!this.is_miandan) {
            let isAddressEmpty = this.address.trim() === "";
            if (isAddressEmpty) {
                tipMsg = this.$t("user.b125_0").toString();
                flag = false;
            }
        }else {
            let isAlipayAddressEmpty = this.alipay_address.trim() === "";
            if (isAlipayAddressEmpty) {
                tipMsg = this.$t("user.b125").toString();
                flag = false;
            }
        }


        //验证邮箱
        if (!CheckUtil.checkEmail(this.email) && flag) {
            tipMsg = TipsMsgUtil.getTipsMsg(TipsMsgUtil.KEY_NOTIF_EMAIL_ERROR);
            flag = false;
            if (this.email == "") {
                tipMsg = TipsMsgUtil.getTipsMsg(TipsMsgUtil.KEY_NOTIF_EMAIL_EMPTY);
                flag = false;
            }
        }

        if (!flag) {
            this.validateInfoFaild(TipsMsgUtil.getTipsMsg(TipsMsgUtil.KEY_NOTIF_ERROR_TITLE),tipMsg)
            return;
        }
        this.sendCustomInfo();
    }
    //当验证用户输入信息错误的时候
    validateInfoFaild(title:string,msg:string){

    }
    /**
     * TODO... 根据返回列表中的message字段，返回cardInfo的信息
     * 返回card_no: string = "";card_password: string = "";
     * msg格式"card_no:02018121817014966741396<br/>card_password:rnUV2nuc"
     * @param msg
     */
    public processMsg(msg: string) {
        this.cardInfo.card_no = msg.split(" <br />")[0].replace('卡号：','').replace('Card no：','');
        if(msg.split(" <br />")[1]){
            this.cardInfo.card_password=msg.split(" <br />")[1].replace('密码：','').replace('Password：','').trim();
        }else{
            this.cardInfo.card_password=''
        }
    }

    /**
     * 获取用户活动 - 奖品列表成功
     */
    public getActiveRecordListSuccess() {
    }

    /**
     * 提交用户信息成功
     */
    public confirmUserInfoSuccess(msg:string,id:number) {
        this.payTypeDialogVisible = false;
        this.userInfoOk(TipsMsgUtil.getTipsMsg(TipsMsgUtil.KEY_NOTIF_SUCCESS_TITLE),TipsMsgUtil.getTipsMsg(TipsMsgUtil.KEY_NOTIF_MSG_SEND_SUCCESS))
        this.UpdateCurentData(id)
    }
    /**
     * 如果是实物或者是红包更新当前行数据
     */
    UpdateCurentData(id:number){

    }
    /**
     * 提交用户信息成功提示
     */
    userInfoOk(title:string,msg:string){

    }
    /**
     * 充值卡自动充值成功
     * @param msg
     */
    public chargeCardSuccess(msg: string,row:any) {
    }

    /**
     * 第三方卡领取成功
     * @param msg
     */
    getOtherCardSuccess(msg: string,row:any,isKabao:boolean) {
    }

    /**
     * TODO... 需要重写此方法
     * token过期处理
     * @param param
     */
    public tokenExpired(param: string = ""): void {
    }

    /**
     * 获取用户活动 - 奖品列表失败
     */
    public getActiveRecordListFail() {
    }

    /**
     * 获取用户折扣码或优惠券成功
     */
    public getDiscountSuccess(msg: string, row?: any){

    }
    /**
     * 获取用户折扣码或优惠券失败
     */
    public getDiscountFail(msg: string){

    }
    /**
     * 充值卡自动充值失败
     * @param msg
     */
    public chargeCardFail(msg: string) {
    }

    /**
     * 提交用户快递信息失败
     * @param msg
     */
    public confirmUserInfoFail(msg: string) {
    }
}
