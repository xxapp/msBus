define("services/menuService",function(e,t){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function a(e,t,o){if(e)for(var i,n=0;i=e[n++];){for(var r,d=!1,l=0;r=t[l++];){if(r.code===i.name&&o[r.code]){i.uri=r.uri||i.uri||"javascript:;",i.icon=r.icon_url||i.icon,i.target=i.target||"_self",i.children=i.children||[],i.opened=!1,d=!0;break}o.all&&(d=!0)}i.show=d===!0,a(i.children,t,o)}}function i(e,t,o){for(var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,n=!1,r=0;r<e.length;r++){var d=e[r];if(o(d),d.key===t){n=!0;break}if(d.children&&i(d.children,t,o,a+1)){n=!0;break}o("",!0)}return n}function n(e){return u.then(function(t){var o=[];return i(t.toJSON?t.toJSON():t,e,function(e,t){t?o.shift():o.unshift(e)}),o})}Object.defineProperty(t,"__esModule",{value:!0}),t.menu=t.getKeyPath=void 0;var r=e("node_modules/avalon2/dist/avalon"),d=o(r),l=e("services/ajaxService"),f=o(l),c=[{key:"gf-dashboard",title:"主页",icon:"fa fa-home",uri:"/"},{key:"demo1",title:"例子一级",icon:"fa fa-home",children:[{key:"gf-demo",title:"例子",icon:"fa fa-home",uri:"/demo"},{key:"gf-demo-redux",title:"redux例子",icon:"fa fa-home",uri:"/demo-redux"},{key:"gf-demo-fast",title:"快速CURD例子",icon:"fa fa-home",uri:"/demo-fast"}]},{key:"doc-ms",title:"组件文档",icon:"fa fa-book",children:[{key:"doc-ms-table",title:"Table",uri:"/doc-ms-table"},{key:"doc-ms-form",title:"Form",uri:"/doc-ms-form"}]},{key:"rxjs-demo-page",title:"RxJS Demo Page",icon:"fa fa-circle",uri:"/pages/rxjs-demo/rxjs-demo.html",target:"_blank"}],u=new Promise(function(e,t){f["default"]({url:"/api/loged",type:"get"}).then(function(o){"0"===o.code?($("#loadImg").css("display","none"),$(".login-area").removeClass("hidden").addClass("animated flipInX"),a(c,o.data.t.functions,o.data.t.allowedFunctions),d["default"].mix(d["default"].vmodels.root,{user:o.data.t}),e(c.slice(0))):t(o)})});t.getKeyPath=n,t.menu=u});