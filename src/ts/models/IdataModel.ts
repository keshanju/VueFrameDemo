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

export interface AdataModel<T> {
  data?: T,
  message: string,
  code: number
}

export class AtfxDataModel<T> implements AdataModel<T> {
  data?: T;
  message: string;
  code: number
}
