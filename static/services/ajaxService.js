define("services/ajaxService",function(e,r,t){function a(e){return e&&e.__esModule?e:{"default":e}}function o(e){var r=e||{};return(r.start||r.limit)&&(r.page={start:r.start||0,limit:r.limit||15},delete r.start,delete r.limit),{params:JSON.stringify(r)}}function n(e){var r={};return e.rows?(r=e,r.code="0",r.list=e.rows,delete r.rows):e.error?(r.code="1",r.message=e.message||e.error):(r.code="0",r.data=e),r}var s="undefined"!=typeof s?s:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};Object.defineProperty(r,"__esModule",{value:!0});var i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e};r["default"]=function(e){var r={dataType:"json",cache:!0,jsonp:"callback"};return e.data=o(e.data),e.url=/^\w+:\/\//.test(e.url)?e.url:f.serviceUrl+e.url,f.serviceUrl&&(r.dataType="jsonp",e.data.jsonp_param_name="callback"),$.ajax(i({},r,e)).then(n)};var d=e("node_modules/avalon2/dist/avalon"),l=(a(d),e("node_modules/jquery/dist/jquery")),u=a(l),c=e("node_modules/ane/dist/ane"),f=e("services/configService");s.$=s.jQuery=u["default"],$(document).ajaxComplete(function(e,r,t){if(200===r.status){if("json"===t.dataType&&void 0!==r.responseJSON){var a=r.responseJSON;"20"===a.code||"21"===a.code?prompt("Session已经失效，请重新登录")&&(s.location.href="/login.html"):a.error&&c.notification.error({message:a.error.message})}}else void 0===r.status||c.notification.error({message:"请求错误，请联系管理员"})}),t.exports=r["default"]});