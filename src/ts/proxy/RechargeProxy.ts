import {Vue,Component} from "vue-property-decorator";
import {IProxy} from "@/ts/interface/IProxy";
import HttpClient from '../net/HttpClient';
import {IdataModel} from '../models/IdataModel';
import {PayModel, PayRequestModel, PriceList, UserDiscountList, UserInfo, UserRechargeInfo} from '../models/UserModel';
import LocalStorageUtil from '../utils/LocalStorageUtil';
import Util from '../utils/Util';
import {TipsMsgUtil} from "@/ts/utils/TipsMsgUtil";

@Component
export default class RechargeProxy extends Vue implements IProxy {

    public userInfo: UserInfo = new UserInfo();
    public czTypeIndex: number = -1; //充值index
    public czTypeUserIndex: number = -1 //已选择的套餐类型
    public packageList: Array<UserRechargeInfo> = [];//套餐类型集合
    public priceList: Array<PriceList> = [];//价格类型集合
    public priceIndex: number = 3; //价格index
    public choosePrice: string = '0'; //选择的价格
    public payType: number = 1; //支付类型 1微信 2支付宝 3qq支付 5paypal  12银联支付
    public zheCode: string = ''; //折扣码
    public payObj: PayModel = new PayModel(); //
    public region_code: number = LocalStorageUtil.getRegionCodes(); //地区:1 国内 0 国际
    public isShow: number = 0;//0套餐信息 1禁用提示 2会员说明
    public package_level: number = 0; // 用户套餐的等级
    public priceHoverIndex: number = 0;//套餐hover的index
    public is_change_price: number = 0;// 是否首单特惠
    public now_time: string = '';//系统当前时间
    public userDiscountList: Array<UserDiscountList> = [];//请求回的全部折扣码列表
    public discountList = [];//页面显示的折扣码列表

    //////////公共参数
    // loading
    public isLoading: boolean = false;
    public loadingMsg: string = ''; // loading的说明文字
    //
    public http = new HttpClient();
    public backData: IdataModel<any> | undefined;
    //////////END

    public init(): void {
        this.czTypeIndex = -1;
        this.czTypeUserIndex = -1;
        this.loadingMsg = TipsMsgUtil.getTipsMsg(TipsMsgUtil.KEY_LOADING);
        this.userInfo = LocalStorageUtil.getUserInfo();
        // this.checkUserType();
        this.getUserPackage();
        this.getUserDiscount();
    }

    public execute(): void {
    }

    public setBaseUrl(url: string): void {
        this.http.setBaseUrl(url);
    }

    /**
     * TODO... 需要重写此方法
     * token过期处理
     * @param param
     */
    public tokenExpired(param: string = ''): void {
    }

    /**
     * 获取系统时间
     */
    public async getSystemTime(){
        let url = HttpClient.URL_TOOL_SYSTEM_TIME;
        let param = {};
        this.backData = await this.http.get(url, param);
        if (this.backData.code == HttpClient.HTTP_SUCCESS_NET_CODE) {
            this.now_time = this.backData.data.time;
            this.now_time = this.now_time.replace(/-/g,'/');
            this.getSystemTimeSuccess();
        }else {

        }
    }

    /**
     * 获取系统时间成功
     * TODO... 需重写此方法
     */
    public getSystemTimeSuccess(){
    }

    /**
     * 获取用户的套餐信息
     */
    public async getUserPackage() {
        this.isLoading = true;
        const token = LocalStorageUtil.getUserToken().account_token;
        let url = HttpClient.URL_USER_PACKAGE;
        let param = {
            account_token: token,
            region_code: LocalStorageUtil.getRegionCodes()
        };
        this.backData = await this.http.post<Array<UserRechargeInfo>>(url, param);
        this.isLoading = false;
        if (this.backData.code == HttpClient.HTTP_SUCCESS_NET_CODE) {
            this.packageList = this.backData.data;
            this.czTypeIndex = this.packageList.length - 1;
            this.getUserPackageSuccess();
        } else if (this.backData.code == HttpClient.HTTP_TOKEN_EXPIRE) {
            this.tokenExpired();
        } else {
            this.getUserPackageError();
        }
    }

    /**
     * 获取用户私有折扣码
     */
    public async getUserDiscount() {
        this.isLoading = true;
        const token = LocalStorageUtil.getUserToken().account_token;
        let url = HttpClient.URL_USER_DISCOUNT;
        let param = {
            account_token: token,
            region_code: LocalStorageUtil.getRegionCodes()
        };
        this.backData = await this.http.post<Array<UserDiscountList>>(url, param);
        this.isLoading = false;
        if (this.backData.code == HttpClient.HTTP_SUCCESS_NET_CODE) {
            this.userDiscountList = this.backData.data;
            // this.userDiscountList.forEach((item,index)=> {
            //     item['value'] = item.title;
            // });
            this.userDiscountList = this.userDiscountList.sort((a,b)=> {
                let value1 = a.discount_value;
                let value2 = b.discount_value;
                return value2 - value1;
            });
            this.discountList = this.userDiscountList;
            this.getUserDiscountSuccess();
        } else if (this.backData.code == HttpClient.HTTP_TOKEN_EXPIRE) {
            this.tokenExpired();
        } else {
            this.getUserDiscountError();
        }
    }

    /**
     * 获取优惠券成功
     * TODO... 需重写此方法
     */
    public getUserDiscountSuccess() {
    }

    /**
     * 获取优惠券失败
     * TODO... 需重写此方法
     */
    public getUserDiscountError() {
    }

    /**
     * 获取套餐成功
     * TODO... 需重写此方法
     */
    public getUserPackageSuccess() {
    }

    /**
     * 获取套餐成功
     * TODO... 需重写此方法
     */
    public getUserPackageError() {
    }

    /**
     * 用户套餐级别
     */
    public checkUserType() {
        this.package_level = LocalStorageUtil.getUserInfo().package_level;
    }

    /**
     * 选择套餐类型
     */
    public onChoosePackageType(type:any) {
        if (type == null) {
            type = this.czTypeIndex;
            for (let i = 0; i < this.packageList.length; i++) {
                if (this.packageList[i].package_id == this.userInfo.package_id) {
                    type = i;
                    this.czTypeUserIndex = i;
                    this.czTypeIndex = i;
                    this.isShow = 0;
                    break;
                }
            }
        }else {
            this.czTypeIndex = type;
            this.isShow = 0;
        }
        //需要判断用户购买的套餐，屏蔽其它套餐的购买is_switch_package = 1可以都购买
        if (this.userInfo.is_switch_package == 0) {
            this.czTypeIndex = type;
            if (this.czTypeUserIndex == type){
                this.isShow = 0;
            }else{
                this.isShow = 1;
            }
        }
        //
        this.priceList = this.packageList[this.czTypeIndex].price;
        this.priceList.sort((itemA,itemB)=>{
            return itemB.price_is_recommend-itemA.price_is_recommend
        })
        this.is_change_price = this.packageList[this.czTypeIndex].is_change_price;
        //
        for(let i=0;i<this.priceList.length;i++){
            if(this.priceList[i].price_is_recommend == 1) {
                this.priceIndex = i;
                this.priceHoverIndex = i;//套餐hover的index
                break;
            }
        };
        let package_index = Util.getUrlParam("package_index");
        if(package_index != '') {
            this.priceIndex = parseInt(package_index);
        }
        this.onChoosePrice();
    }

    /**
     * 选择套餐
     * @param type
     */
    public onChoosePrice(type: any = null) {
        if (type == null) type = this.priceIndex;
        this.priceIndex = type;
        this.choosePrice = this.priceList[this.priceIndex].price_num;
        // this.discountList = this.userDiscountList.filter((item)=> {
        //     return item.price_ids.indexOf(this.priceList[this.priceIndex].price_id) != -1;
        // });
        this.discountList =[]
        for(let qq=0;qq<this.userDiscountList.length;qq++){
            if(this.userDiscountList[qq].price_ids.indexOf(this.priceList[this.priceIndex].price_id) != -1){
                this.discountList.push({label:this.userDiscountList[qq].discount_code,value:this.userDiscountList[qq].title})
            }
        }
       this.processZhekou()
    }

    /**
     * 根据选择的套餐自动加载，优惠力度最大的优惠劵
     * 此方法需要重载
     */
    public processZhekou() {

    }
    /**
     * 选择支付类型
     */
    public onChoosePayType(type: number) {
        if (type == null) type = this.payType;
        this.payType = type;
    }

    /**
     * plan 支付返回的二维码显示方式 1官网二维码 2移动端需要的二维码 3官网pc端支付宝打开的控制台页面
     * 请求支付
     */
    public async onPay(from: number = 0,plan: number = 1) {
        if (this.packageList == null || this.packageList.length <= 0) return;
        this.isLoading = true;
        let packageObj = this.packageList[this.czTypeIndex];
        let priceObj = this.priceList[this.priceIndex];
        let refer_code = Util.getUrlParam('refer_code');
        const url = HttpClient.URL_USER_PACKAGE_BUY;
        const token = LocalStorageUtil.getUserToken().account_token;
        let param = new PayRequestModel();
        param.account_token = token;
        param.invoice_from = param.switchFrom(from);
        param.package_id = packageObj.package_id;
        param.pay_type = this.payType;
        if(this.payType==2){
            //如果是支付宝支付
            param.qr_type='ali_qr'
        }
        param.price_id = priceObj.price_id;
        param.pay_plat = plan;
        param.src_channel = LocalStorageUtil.getSrcChannel();
        param.os_type = localStorage.getItem(LocalStorageUtil.STORAGES_OS_TYPE);
        if(refer_code){
            param.refer_code = refer_code;
        }

        if (this.zheCode != "" && this.zheCode != null) {
            param.discount_code = this.zheCode;
        }
        //
        this.backData = await this.http.post<PayModel>(url, param);
        this.isLoading = false;
        this.payObj.pay_url = '';
        //
        if (this.backData.code == HttpClient.HTTP_SUCCESS_NET_CODE) {
            this.payObj = this.backData.data;
            this.onBeginpaySuccess(this.backData.data);
        } else if (this.backData.code == HttpClient.HTTP_TOKEN_EXPIRE) {
            this.payLogout()
            this.tokenExpired()
        } else {
            this.onBeginpayError(this.backData.msg);
        }
    }
    /**
     * 请求支付的时候token过期
     * TODO... 此方法可以重写，处理请求支付成功后的ui逻辑
     */
    payLogout(){

    }
    /**
     * 请求支付成功
     * TODO... 此方法可以重写，处理请求支付成功后的ui逻辑
     */
    onBeginpaySuccess(data: any) {
    }

    /**
     * 请求支付失败
     * TODO... 此方法可以重写，处理请求支付成功后的ui逻辑
     */
    onBeginpayError(msg: string) {
    }
}
