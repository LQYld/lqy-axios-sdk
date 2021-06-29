# lqy-axios-sdk 使用说明

## 基本用法

### 安装
```shell
npm install -S lqy-axios-sdk
```

### lqy-axios 实例化

```ts
import lqyAxios from 'lqy-axios-sdk'

const request = new lqyAxios.default(axiosConfig);
```

#### 补充说明 axiosConfig

```json
{
    "baseURL":"", // 公共路由
    "timeout":"", // 请求超时设定
    "headers":{}  // 请求头设定
}
```

#### 补充说明 lqyAxiosConfig

```json
{
  "validateStatus": validateStatus,
  "beforeInterceptorsResponseHook":()=>{}, // 响应器前 声明周期
  "beforeInterceptorsRequestHook":()=>{}, // 拦截器前 声明周期
  "afterInterceptorsResponseHook":()=>{}, // 响应器后 声明周期
  "afterInterceptorsRequestHook":()=>{} // 拦截器后 声明周期
}
```

##### lqyAxiosConfig 中 validateStatus
```json
{
    "validateStatusFn":() => boolean, // 自定义 http 状态码判断，自定义是否请求成功
}
```

## 使用方法

### 基本使用
```ts

import lqyAxios from 'lqy-axios-sdk';

const request = new lqyAxios.default(axiosConfig);

async function xxx(){
    let res = await request.lqyRequest({
        url:'/xxx',
        method:'get/post'
    })
}
```

### 装饰器使用

```ts
import lqyAxios,{GET,POST} from 'lqy-axios-sdk';

const request = new lqyAxios.default(axiosConfig);

class test {
    // 装饰器会自动装配 请求格式，方便维护管理
    @GET('/xxx','接口备注')
    getTest(params){
        return request.lqyRequest(params)
    }
}

let testApi = new test();

async function xxx(){
    let res = await testApi.getTest({
        url:'/xxx',
    })
}

```

#### 目前支持的 装饰器类型

- GET
  - get 请求
- POST
  - post 请求
- PUT
  - put 请求
- DELETE
  - delete 请求
- UrlParam
  - 应对请求url /xx/xxx/{xxx} 情况
- QS
  - 请求 data 序列化

### 请求参数类型

```ts
interface requestParams{
    url:string, // 接口地址
    method:string, // 请求类型
    params?:object, // params 传参
    data?:object // data 传参
    headers?:object // 定义配置 headers 类型
    [moreParams:string]:any, // 剩余参数
}
```

### 注意

#### 使用 @UrlParam 与 @QS 时

当使用 @UrlParam 与 @QS 时，必须先使用 装饰器设置请求类型，如下

例子：

```ts
class test{
    constructor() {}

    @GET('/captchaImage')
    @QS
    @UrlParam
    getCode(params,additionalParam){
        return http.lqyRequest(params);
    }
}

let test01 = new test();

async function testFn(){
    let res = await test01.getCode({
        data:{
            name:'张三',
            age:27
        }
    },[666,'name']);
}
testFn();
```

#### 当使用 @UrlParam 时

当使用 @UrlParam 时，除了需要提供 请求用的 params ，还需要提供 额外参数（additionalParam），additionalParam为数组格式。

路由会 根据数组索引顺序进行拼接。如下

```ts
async function testFn(){
    let res = await test01.getCode({
        data:{
            name:'张三',
            age:27
        }
    },[666,'name']);
}
testFn();
```

 路由为 /captchaImage/666/name