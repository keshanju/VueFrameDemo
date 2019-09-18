export interface IdataModel<T> {
    /**
     * 返回码
     */
    code: number;
    /**
     * 返回消息
     */
    msg: string;
    /**
     * json数据
     */
    data: T;
}

/**
 * data
 */
export class DataModel<T> implements IdataModel<T> {
    public code = 0;
    public msg = '';
    public data: any = null;
}

/**
 * xml data结构
 */
export class XmlDataModel {
    public code = -1;
    public dcode = -1;
    public msg = '';
    public count?: number; //
    public items?: any; //套餐详情
}

export interface YdataModel<T> {
    errorcode: number;//返回码
    msgs: string;//返回信息
    version: string;//版本号
    data: T;//主数据 json格式
}

/**
 * API data
 */
export class YuhanDataModel<T> implements YdataModel<T>{
    public errorcode: number = 0;
    public msgs: string = '';
    public version: string = '';
    public data: any;
}
