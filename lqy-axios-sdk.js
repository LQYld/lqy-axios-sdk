function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=e(require("axios"));function o(e,t){return function(o,n,r){var s=r.value;return r.value=function(o,n){void 0===n&&(n={}),o.method=t,o.url=e;try{return s.apply(this,[o,n])}catch(e){console.log(e),console.error(t+" 装饰器报错")}},r}}var n=require("qs"),r=function(){function e(e,t){this.axiosConfig=void 0,this.lqyAxiosConfig=void 0,this.Axios=null,this.axiosConfig=e,this.lqyAxiosConfig=t,this.lqyAxiosConfig=t,this.axiosConfig=e,this.init()}var o=e.prototype;return o.init=function(){var e,o,n,r,s;this.Axios=t.default.create({baseURL:this.axiosConfig.baseURL,timeout:this.axiosConfig.timeout,headers:this.axiosConfig.headers}),this.initInterceptorsResponse(this.Axios),this.initInterceptorsRequest(this.Axios),(null==(e=this.lqyAxiosConfig)?void 0:e.validateStatus)&&this.initValidateStatus(this.Axios,this.lqyAxiosConfig.validateStatus.validateStatusFn),(null==(o=this.lqyAxiosConfig)?void 0:o.beforeInterceptorsRequestHook)&&(this.Axios.defaults.beforeInterceptorsRequestHook=this.lqyAxiosConfig.beforeInterceptorsRequestHook),(null==(n=this.lqyAxiosConfig)?void 0:n.beforeInterceptorsResponseHook)&&(this.Axios.defaults.beforeInterceptorsResponseHook=this.lqyAxiosConfig.beforeInterceptorsResponseHook),(null==(r=this.lqyAxiosConfig)?void 0:r.afterInterceptorsRequestHook)&&(this.Axios.defaults.afterInterceptorsRequestHook=this.lqyAxiosConfig.afterInterceptorsRequestHook),(null==(s=this.lqyAxiosConfig)?void 0:s.afterInterceptorsResponseHook)&&(this.Axios.defaults.afterInterceptorsResponseHook=this.lqyAxiosConfig.afterInterceptorsResponseHook)},o.initInterceptorsResponse=function(e){e.interceptors.response.use(function(t){try{var o=function(){var o;return null!=e&&null!=(o=e.defaults)&&o.afterInterceptorsRequestHook&&Promise.resolve().then(function(){var o;null==e||null==(o=e.defaults)||o.afterInterceptorsResponseHook(t)}),t},n=function(){var o,n;if(null!=e&&null!=(o=e.defaults)&&o.beforeInterceptorsRequestHook)return Promise.resolve(null==e||null==(n=e.defaults)?void 0:n.beforeInterceptorsResponseHook(t)).then(function(){})}();return Promise.resolve(n&&n.then?n.then(o):o())}catch(e){return Promise.reject(e)}},function(e){Promise.reject(e)})},o.initInterceptorsRequest=function(e){e.interceptors.request.use(function(t){try{var o=function(){var o;return null!=e&&null!=(o=e.defaults)&&o.afterInterceptorsRequestHook&&Promise.resolve().then(function(){var o;null==e||null==(o=e.defaults)||o.afterInterceptorsRequestHook(t)}),t},n=function(){var o,n;if(null!=e&&null!=(o=e.defaults)&&o.beforeInterceptorsResponseHook)return Promise.resolve(null==e||null==(n=e.defaults)?void 0:n.beforeInterceptorsRequestHook(t)).then(function(){})}();return Promise.resolve(n&&n.then?n.then(o):o())}catch(e){return Promise.reject(e)}},function(e){Promise.reject(e)})},o.initValidateStatus=function(e,t){e.defaults.validateStatus=function(e){return function(e){return t()}}},o.lqyRequest=function(e){var t=this;return new Promise(function(o,n){t.Axios(e).then(function(e){o(e)}).catch(function(e){n(e)})})},e}();exports.DELETE=function(e,t){return o(e,"delete")},exports.GET=function(e,t){return o(e,"get")},exports.POST=function(e,t){return o(e,"post")},exports.PUT=function(e,t){return o(e,"put")},exports.QS=function(e,t,o){var r=o.value;return o.value=function(){var e=[].slice.call(arguments);try{return e[0].data=n.stringify(e[0].data),r.apply(this,[].concat(e))}catch(e){console.error("QS 装饰器报错",e,n)}},o},exports.UrlParam=function(e,t,o){var n=o.value;return o.value=function(){var e=[].slice.call(arguments);try{return e[0].url=e[0].url+"/"+e[1].join("/"),n.apply(this,[].concat(e))}catch(t){console.error("requestUrlParam-"+e[1].join("/")+" 装饰器报错")}},o},exports.default=r;
//# sourceMappingURL=lqy-axios-sdk.js.map
