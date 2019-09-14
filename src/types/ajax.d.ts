declare namespace Ajax {
    export interface AxiosResponse {
        data: AjaxResponse
    }

    /**
     * 接口请求返回数据
     */
    export interface AjaxResponse {
        code: number,
        data: any,
        message: string
    }
}
