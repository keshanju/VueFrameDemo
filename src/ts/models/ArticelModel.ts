/**
 * 文章列表请求参数模型
 */
export class ArticleListRequestModel {
    public page: number = 0;
    public count: number = 0;
    public article_type_id: number = 0;
    public from_type: number = 1;
}

/**
 * 文章列表响应参数模型
 */
export class ArticleListResponseModel {
    public list: Array<object> = [{}];
    public count: number = 0;
}
