webpackJsonp([19],{"21It":function(e,t,n){"use strict";var r=n("FtD3");e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},"5VQ+":function(e,t,n){"use strict";var r=n("cGG2");e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},"7GwW":function(e,t,n){"use strict";var r=n("cGG2"),o=n("21It"),s=n("DQCr"),i=n("oJlt"),a=n("GHBc"),u=n("FtD3"),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n("thJu");e.exports=function(e){return new Promise(function(t,l){var f=e.data,p=e.headers;r.isFormData(f)&&delete p["Content-Type"];var d=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in d||a(e.url)||(d=new window.XDomainRequest,h="onload",m=!0,d.onprogress=function(){},d.ontimeout=function(){}),e.auth){var v=e.auth.username||"",g=e.auth.password||"";p.Authorization="Basic "+c(v+":"+g)}if(d.open(e.method.toUpperCase(),s(e.url,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d[h]=function(){if(d&&(4===d.readyState||m)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?i(d.getAllResponseHeaders()):null,r=e.responseType&&"text"!==e.responseType?d.response:d.responseText,s={data:r,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:n,config:e,request:d};o(t,l,s),d=null}},d.onerror=function(){l(u("Network Error",e,null,d)),d=null},d.ontimeout=function(){l(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var w=n("p1b6"),y=(e.withCredentials||a(e.url))&&e.xsrfCookieName?w.read(e.xsrfCookieName):void 0;y&&(p[e.xsrfHeaderName]=y)}if("setRequestHeader"in d&&r.forEach(p,function(e,t){void 0===f&&"content-type"===t.toLowerCase()?delete p[t]:d.setRequestHeader(t,e)}),e.withCredentials&&(d.withCredentials=!0),e.responseType)try{d.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){d&&(d.abort(),l(e),d=null)}),void 0===f&&(f=null),d.send(f)})}},DQCr:function(e,t,n){"use strict";function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n("cGG2");e.exports=function(e,t,n){if(!t)return e;var s;if(n)s=n(t);else if(o.isURLSearchParams(t))s=t.toString();else{var i=[];o.forEach(t,function(e,t){null!==e&&void 0!==e&&(o.isArray(e)&&(t+="[]"),o.isArray(e)||(e=[e]),o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),i.push(r(t)+"="+r(e))}))}),s=i.join("&")}return s&&(e+=(-1===e.indexOf("?")?"?":"&")+s),e}},FtD3:function(e,t,n){"use strict";var r=n("t8qj");e.exports=function(e,t,n,o,s){var i=new Error(e);return r(i,t,n,o,s)}},GHBc:function(e,t,n){"use strict";var r=n("cGG2");e.exports=r.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(n){var o=r.isString(n)?e(n):n;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},JCUO:function(e,t,n){"use strict";var r=n("vMJZ");t.a={data:function(){return{blackDialogVisible:!1,whiteDialogVisible:!1,queryParam:{page:1,size:20,mobile:"",realname:"",isPostman:1},editUser:{id:0,realname:""},listLoading:!0,userData:[],rowCount:0}},created:function(){this.queryUsers()},methods:{handleCurrentChange:function(e){this.queryParam.page=e,this.queryUsers()},handleSizeChange:function(e){this.queryParam.size=e,this.queryUsers()},handleWhiteClick:function(e){this.editUser=e,this.whiteDialogVisible=!0},handleBlackClick:function(e){this.editUser=e,this.blackDialogVisible=!0},blackClickHandler:function(){var e=this;n.i(r.d)(this.editUser.id).then(function(t){e.blackDialogVisible=!1,e.queryUsers()})},whiteClickHandler:function(){var e=this;n.i(r.e)(this.editUser.id).then(function(t){e.whiteDialogVisible=!1,e.queryUsers()})},queryUsers:function(){var e=this;this.listLoading=!0,n.i(r.f)(this.queryParam).then(function(t){var n=t.result;e.userData=n.records,e.rowCount=n.total,e.listLoading=!1})}}}},"JP+z":function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},KCLY:function(e,t,n){"use strict";(function(t){function r(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var o=n("cGG2"),s=n("5VQ+"),i={"Content-Type":"application/x-www-form-urlencoded"},a={adapter:function(){var e;return"undefined"!=typeof XMLHttpRequest?e=n("7GwW"):void 0!==t&&(e=n("7GwW")),e}(),transformRequest:[function(e,t){return s(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(r(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(r(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};a.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(e){a.headers[e]={}}),o.forEach(["post","put","patch"],function(e){a.headers[e]=o.merge(i)}),e.exports=a}).call(t,n("W2nU"))},Re3r:function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function r(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(n(e)||r(e)||!!e._isBuffer)}},TNV1:function(e,t,n){"use strict";var r=n("cGG2");e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},Vo7i:function(e,t,n){"use strict";var r=n("//Fk"),o=n.n(r),s=n("mtWM"),i=n.n(s),a=n("zL8q"),u=(n.n(a),n("IcnI")),c=n("TIfe"),l=i.a.create({baseURL:"http://106.15.89.3:8080/manager/",timeout:15e3});l.interceptors.request.use(function(e){return u.a.getters.token&&(e.headers["HTTP-ACCESS-TOKEN"]=n.i(c.a)()),e},function(e){console.log(e),o.a.reject(e)}),l.interceptors.response.use(function(e){var t=e.data;return 401===e.status||403===e.status?(a.MessageBox.confirm("你已被登出，可以取消继续留在该页面，或者重新登录","确定登出",{confirmButtonText:"重新登录",cancelButtonText:"取消",type:"warning"}).then(function(){u.a.dispatch("FedLogOut").then(function(){location.reload()})}),o.a.reject("error")):"success"!==t.status?(n.i(a.Message)({message:t.errorMsg,type:"error",duration:5e3}),o.a.reject("error")):t},function(e){return console.log("err"+e),n.i(a.Message)({message:e.message,type:"error",duration:5e3}),o.a.reject(e)}),t.a=l},XmWM:function(e,t,n){"use strict";function r(e){this.defaults=e,this.interceptors={request:new i,response:new i}}var o=n("KCLY"),s=n("cGG2"),i=n("fuGk"),a=n("xLtR"),u=n("dIwP"),c=n("qRfI");r.prototype.request=function(e){"string"==typeof e&&(e=s.merge({url:arguments[0]},arguments[1])),e=s.merge(o,this.defaults,{method:"get"},e),e.method=e.method.toLowerCase(),e.baseURL&&!u(e.url)&&(e.url=c(e.baseURL,e.url));var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},s.forEach(["delete","get","head","options"],function(e){r.prototype[e]=function(t,n){return this.request(s.merge(n||{},{method:e,url:t}))}}),s.forEach(["post","put","patch"],function(e){r.prototype[e]=function(t,n,r){return this.request(s.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=r},cGG2:function(e,t,n){"use strict";function r(e){return"[object Array]"===S.call(e)}function o(e){return"[object ArrayBuffer]"===S.call(e)}function s(e){return"undefined"!=typeof FormData&&e instanceof FormData}function i(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function a(e){return"string"==typeof e}function u(e){return"number"==typeof e}function c(e){return void 0===e}function l(e){return null!==e&&"object"==typeof e}function f(e){return"[object Date]"===S.call(e)}function p(e){return"[object File]"===S.call(e)}function d(e){return"[object Blob]"===S.call(e)}function h(e){return"[object Function]"===S.call(e)}function m(e){return l(e)&&h(e.pipe)}function v(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function g(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function w(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function y(e,t){if(null!==e&&void 0!==e)if("object"==typeof e||r(e)||(e=[e]),r(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.call(null,e[s],s,e)}function b(){function e(e,n){"object"==typeof t[n]&&"object"==typeof e?t[n]=b(t[n],e):t[n]=e}for(var t={},n=0,r=arguments.length;n<r;n++)y(arguments[n],e);return t}function x(e,t,n){return y(t,function(t,r){e[r]=n&&"function"==typeof t?C(t,n):t}),e}var C=n("JP+z"),_=n("Re3r"),S=Object.prototype.toString;e.exports={isArray:r,isArrayBuffer:o,isBuffer:_,isFormData:s,isArrayBufferView:i,isString:a,isNumber:u,isObject:l,isUndefined:c,isDate:f,isFile:p,isBlob:d,isFunction:h,isStream:m,isURLSearchParams:v,isStandardBrowserEnv:w,forEach:y,merge:b,extend:x,trim:g}},cWxy:function(e,t,n){"use strict";function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new o(e),t(n.reason))})}var o=n("dVOP");r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e;return{token:new r(function(t){e=t}),cancel:e}},e.exports=r},dIwP:function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},dVOP:function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},fuGk:function(e,t,n){"use strict";function r(){this.handlers=[]}var o=n("cGG2");r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},md3T:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("JCUO"),o=n("rmR2"),s=n("VU/8"),i=s(r.a,o.a,null,null,null);t.default=i.exports},mtWM:function(e,t,n){e.exports=n("tIFN")},oJlt:function(e,t,n){"use strict";var r=n("cGG2");e.exports=function(e){var t,n,o,s={};return e?(r.forEach(e.split("\n"),function(e){o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t&&(s[t]=s[t]?s[t]+", "+n:n)}),s):s}},p1b6:function(e,t,n){"use strict";var r=n("cGG2");e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,s,i){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(s)&&a.push("domain="+s),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},pBtG:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},pxG4:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},qRfI:function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},rmR2:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],staticStyle:{width:"100%"},attrs:{data:e.userData,border:""}},[n("el-table-column",{attrs:{fixed:"",prop:"id",label:"用户id",width:"150"}}),e._v(" "),n("el-table-column",{attrs:{prop:"mobile",label:"手机号",width:"120"}}),e._v(" "),n("el-table-column",{attrs:{prop:"realname",label:"真实姓名",width:"120"}}),e._v(" "),n("el-table-column",{attrs:{prop:"cash",label:"余额",width:"120"}}),e._v(" "),n("el-table-column",{attrs:{prop:"deposit",label:"押金",width:"300"}}),e._v(" "),n("el-table-column",{attrs:{label:"是否是骑手",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[0===t.row.isPostman?n("span",[n("el-tag",{attrs:{type:"success"}},[e._v("否")])],1):n("span",[n("el-tag",{attrs:{type:"danger"}},[e._v("是")])],1)]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"认证状态",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[0===t.row.postmanStatus?n("span",[n("el-tag",{attrs:{type:"success"}},[e._v("未认证")])],1):e._e(),e._v(" "),1===t.row.postmanStatus?n("span",[n("el-tag",{attrs:{type:"success"}},[e._v("审核中")])],1):e._e(),e._v(" "),2===t.row.postmanStatus?n("span",[n("el-tag",{attrs:{type:"success"}},[e._v("已认证")])],1):e._e(),e._v(" "),3===t.row.postmanStatus?n("span",[n("el-tag",{attrs:{type:"success"}},[e._v("驳回")])],1):e._e(),e._v(" "),4===t.row.postmanStatus?n("span",[n("el-tag",{attrs:{type:"success"}},[e._v("拉黑")])],1):e._e()]}}])}),e._v(" "),n("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[2===t.row.postmanStatus?n("span",[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){e.handleBlackClick(t.row)}}},[e._v("冻结")])],1):e._e(),e._v(" "),4===t.row.postmanStatus?n("span",[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){e.handleWhiteClick(t.row)}}},[e._v("解冻")])],1):e._e()]}}])})],1),e._v(" "),n("div",{staticClass:"block"},[n("el-pagination",{attrs:{"current-page":e.queryParam.page,"page-sizes":[20,50,100],"page-size":e.queryParam.size,layout:"total, sizes, prev, pager, next, jumper",total:e.rowCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),n("el-dialog",{attrs:{title:"提示",visible:e.blackDialogVisible,width:"30%"},on:{"update:visible":function(t){e.blackDialogVisible=t}}},[n("span",[e._v("确定冻结该用户嘛？")]),e._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.blackDialogVisible=!1}}},[e._v("取 消")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:e.blackClickHandler}},[e._v("确 定")])],1)]),e._v(" "),n("el-dialog",{attrs:{title:"提示",visible:e.whiteDialogVisible,width:"30%"},on:{"update:visible":function(t){e.whiteDialogVisible=t}}},[n("span",[e._v("确定解冻该用户嘛？")]),e._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.whiteDialogVisible=!1}}},[e._v("取 消")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:e.whiteClickHandler}},[e._v("确 定")])],1)])],1)},o=[],s={render:r,staticRenderFns:o};t.a=s},t8qj:function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e}},tIFN:function(e,t,n){"use strict";function r(e){var t=new i(e),n=s(i.prototype.request,t);return o.extend(n,i.prototype,t),o.extend(n,t),n}var o=n("cGG2"),s=n("JP+z"),i=n("XmWM"),a=n("KCLY"),u=r(a);u.Axios=i,u.create=function(e){return r(o.merge(a,e))},u.Cancel=n("dVOP"),u.CancelToken=n("cWxy"),u.isCancel=n("pBtG"),u.all=function(e){return Promise.all(e)},u.spread=n("pxG4"),e.exports=u,e.exports.default=u},thJu:function(e,t,n){"use strict";function r(){this.message="String contains an invalid character"}function o(e){for(var t,n,o=String(e),i="",a=0,u=s;o.charAt(0|a)||(u="=",a%1);i+=u.charAt(63&t>>8-a%1*8)){if((n=o.charCodeAt(a+=.75))>255)throw new r;t=t<<8|n}return i}var s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",e.exports=o},vMJZ:function(e,t,n){"use strict";function r(e){return n.i(c.a)({url:"/web_api/v1/users",method:"get",params:e})}function o(e){return n.i(c.a)({url:"/web_api/v1/users/white",method:"post",params:{id:e}})}function s(e){return n.i(c.a)({url:"/web_api/v1/users/black",method:"post",params:{id:e}})}function i(e){return n.i(c.a)({url:"/web_api/v1/users/auth",method:"get",params:e})}function a(e){return n.i(c.a)({url:"/web_api/v1/users/auth/audit",method:"post",data:{id:e}})}function u(e,t){return n.i(c.a)({url:"/web_api/v1/users/auth/reject",method:"post",data:{id:e,remark:t}})}t.f=r,t.e=o,t.d=s,t.c=i,t.a=a,t.b=u;var c=n("Vo7i")},xLtR:function(e,t,n){"use strict";function r(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=n("cGG2"),s=n("TNV1"),i=n("pBtG"),a=n("KCLY");e.exports=function(e){return r(e),e.headers=e.headers||{},e.data=s(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||a.adapter)(e).then(function(t){return r(e),t.data=s(t.data,t.headers,e.transformResponse),t},function(t){return i(t)||(r(e),t&&t.response&&(t.response.data=s(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}}});