
/**
 * axiosConfig axios默认配置
 * @param {string} baseUrl 公共路由
 * @param {number} timeout 最大请求时长
 * @param {object} headers 添加默认请求头
 */
declare interface axiosConfig {
    baseURL: string;
    timeout: number;
    headers: object;
}

export declare const DELETE: (url: string, explain?: string) => (target: any, name: any, descriptor: any) => any;

export declare const GET: (url: string, explain?: string) => (target: any, name: any, descriptor: any) => any;

declare class HttpRequest {
    axiosConfig: axiosConfig;
    lqyAxiosConfig?: lqyAxiosConfig;
    private Axios;
    constructor(axiosConfig: axiosConfig, lqyAxiosConfig?: lqyAxiosConfig);
    /**
     * init 初始化方法
     */
    init(): void;
    /**
     * initInterceptorsResponse 响应器注册
     * @param {axios} axios 实例
     */
    initInterceptorsResponse(axios: any): void;
    /**
     * initInterceptorsRequest 拦截器注册
     * @param {axios} axios 实例
     */
    initInterceptorsRequest(axios: any): void;
    /**
     * initValidateStatus 拦截器注册
     * @param {axios} axios 实例
     * @param {Function} fn 自定义 HTTP 状态码判断
     * @return {boolean} true 表示 成功 ，false 表示失败
     */
    initValidateStatus(axios: any, fn: any): void;
    /**
     * lqyRequest 统一请求
     * @param {param} param 请求参数及配置
     * @return {Promise} 返回 Promise 对象
     */
    lqyRequest(param: requestParams): Promise<unknown>;
}
export default HttpRequest;

/**
 * lqyAxiosConfig axios定制化配置
 * @param {number} errorLogLevel 开启错误日志等级
 * @param {validateStatus} validateStatus 配置自定义 HTTP 错误码及错误处理
 * @param {Function} beforeInterceptorsResponseHook 响应器前 声明周期
 * @param {Function} beforeInterceptorsRequestHook 拦截器前 声明周期
 * @param {Function} afterInterceptorsResponseHook 响应器后 声明周期
 * @param {Function} afterInterceptorsRequestHook 拦截器后 声明周期
 * @param {boolean} cancelDuplicated 是否开启取消重复请求
 * @param {string} duplicatedKeyFn 生成重复标识
 */
declare interface lqyAxiosConfig {
    errorLogLevel?: number;
    validateStatus?: validateStatus;
    beforeInterceptorsResponseHook?(): void;
    beforeInterceptorsRequestHook?(): void;
    afterInterceptorsResponseHook?(): void;
    afterInterceptorsRequestHook?(): void;
    duplicatedKeyFn?(): string;
}

export declare const POST: (url: string, explain?: string) => (target: any, name: any, descriptor: any) => any;

export declare const PUT: (url: string, explain?: string) => (target: any, name: any, descriptor: any) => any;

export declare const QS: (target: any, name: any, descriptor: any) => any;

/**
 * requestParams 定义 lqy-axios 请求参数规范
 * @param {string} url 接口地址
 * @param {string} method 请求类型
 * @param {object} params GET请求参数
 * @param {object} data POST请求参数
 * @param {any} [moreParams:string] 剩余额外参数
 */
declare interface requestParams {
    url: string;
    method: string;
    params?: object;
    data?: object;
    headers?: object;
    [moreParams: string]: any;
}

export declare const UrlParam: (target: any, name: any, descriptor: any) => any;

/**
 * validateStatus 自定义 HTTP 错误码及错误处理
 * @param {object} errorStatus 响应异常错误码配置
 * @param {Function} validateStatusFn 自定义 HTTP 状态码的错误范围
 */
declare interface validateStatus {
    errorStatus: object;
    validateStatusFn(): boolean;
}

export { }
