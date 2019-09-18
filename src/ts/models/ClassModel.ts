/**
 * 班级列表请求参数模型
 */
export class ClassListRequestModel {
    public access_token: string = "";
    public attend_type: number = 1;
    public class_status: number = 0;
    public guid: number = 1;
    public is_one_to_one: number = 1;
    public page: number = 1;
    public serach: string = "";
    public size: number = 10;
    public subject: string = "";
    public term: string = "";
    public user_id: number = 0;
    public signature: string = ""
}

/**
 * 班级列表响应参数模型
 */
export class ClassListResponseModel {
    public list: Array<object> = [{}];
    public count: number = 0;
}
