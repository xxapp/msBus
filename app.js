;define("components/common-header/common-header.ts",function(n,a){var e="undefined"!=typeof e?e:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},l=n("node_modules/avalon2/dist/avalon");a.name="common-header",l.component(a.name,{template:'\n<div class="navbar-inner">\n    <div class="navbar-container">\n        <!-- Navbar Barnd -->\n        <div class="navbar-header pull-left">\n            <a href="#" class="navbar-brand">\n                <small>\n                    <img style="height: 45px;width: 162px;" src="/static/beyond/img/logo-inverted.png" alt="" />\n                </small>\n            </a>\n        </div>\n        <!-- /Navbar Barnd -->\n\n        <!-- Sidebar Collapse -->\n        <div class="sidebar-collapse" id="sidebar-collapse">\n            <i class="collapse-icon fa fa-bars"></i>\n        </div>\n        <!-- /Sidebar Collapse -->\n        <!-- Account Area and Settings -->\n        <div class="navbar-header pull-right">\n            <div class="navbar-account">\n                <ul class="account-area">\n                   <li>\n                        <a class="login-area dropdown-toggle hidden" data-toggle="dropdown">\n                            <div class="avatar" title="View your public profile">\n                                <img src="/static/beyond/img/avatars/adam-jansen.jpg">\n                            </div>\n                            <section>\n                                <h2><span class="profile"><span></span></span></h2>\n                            </section>\n                        </a>\n                        <!--Login Area Dropdown-->\n                        <ul class="pull-right dropdown-menu dropdown-arrow dropdown-login-area">\n                            <li class="username"><a>David Stevenson</a></li>\n                            <!--<li class="email"><a>David.Stevenson@live.com</a></li>-->\n                            <li class="edit">\n                                <a href="javascript:;" class="pull-left" ms-click="logout">\n                                    退出登录\n                                </a>\n                                <!--<a href="javascript:;" class="pull-left">Profile</a>\n                                <a href="#" class="pull-right">Setting</a>-->\n                            </li>\n                            <!--<li class="dropdown-footer">\n                                <a href="javascript:;" ms-click="logout">\n                                    退出登录\n                                </a>\n                            </li>-->\n                        </ul>\n                        <!--/Login Area Dropdown-->\n                    </li>\n                    <!-- /Account Area -->\n                    <!--Note: notice that setting div must start right after account area list.\n                    no space must be between these elements-->\n                </ul>\n            </div>\n        </div>\n        <!-- /Account Area and Settings -->\n    </div>\n</div>\n',defaults:{currentUserName:"",logout:function(){e.sessionStorage.removeItem("adminSession"),e.location.href="/login.html"}}})});
;define("services/configService.ts",function(e,c){"use strict";c.pageSize=10,c.domain="/ms-bus",c.serviceUrl="https://www.easy-mock.com/mock/58ff1b7c5e43ae5dbea5eff3"});
;define("services/ajaxService.ts",function(e,r){function t(e){var r={dataType:"json",cache:!0,jsonp:"callback"};return e.data=a(e.data),e.url=/^\w+:\/\//.test(e.url)?e.url:c.serviceUrl+e.url,c.serviceUrl&&(r.dataType="jsonp",e.data.jsonp_param_name="callback"),$.ajax(o({},r,e)).then(s)}function a(e){var r=e||{};return(r.start||r.limit)&&(r.page={start:r.start||0,limit:r.limit||15},delete r.start,delete r.limit),{params:JSON.stringify(r)}}function s(e){var r={};return e.rows?(r=e,r.code="0",r.list=e.rows,delete r.rows):e.error?(r.code="1",r.message=e.message||e.error):(r.code="0",r.data=e),r}var n="undefined"!=typeof n?n:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},o=this&&this.__assign||Object.assign||function(e){for(var r,t=1,a=arguments.length;a>t;t++){r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},i=e("node_modules/jquery/dist/jquery");n.$=n.jQuery=i;var d=e("vendor/ane/index.ts"),c=e("services/configService.ts");$(document).ajaxComplete(function(e,r,t){if(200===r.status){if("json"===t.dataType&&void 0!==r.responseJSON){var a=r.responseJSON;"20"===a.code||"21"===a.code?prompt("Session已经失效，请重新登录")&&(n.location.href="/login.html"):a.error&&d.notification.error({message:a.error.message})}}else void 0===r.status||d.notification.error({message:"请求错误，请联系管理员"})}),r.__esModule=!0,r["default"]=t});
;define("services/menuService.ts",function(e,i){"use strict";function a(e,i,o){if(e)for(var t=0,d=void 0;d=e[t++];){for(var r=!1,n=0,l=void 0;l=i[n++];)if(l.code===d.name&&o[l.code]||o.all){d.uri=l.uri||d.uri||"javascript:;",d.icon=l.icon_url||d.icon,d.target=d.target||"_self",d.children=d.children||[],d.opened=!1,r=!0;break}d.show=r===!0,a(d.children,i,o)}}function o(e,i,a,t){void 0===a&&(a=1),void 0===t&&(t=r.slice(0));for(var d=!1,n=0,l=void 0;l=t[n++];){if(l.name===e||l.stateName===e){i&&i(l,a),d=!0;break}if(l.childStates&&~l.childStates.indexOf(e)){i&&i(l,a),d=!0;break}if(l.children&&o(e,i,a+1,l.children)){i&&i(l,a),d=!0;break}}return d}var t=e("node_modules/avalon2/dist/avalon"),d=e("services/ajaxService.ts"),r=[{key:"dashboard",title:"主页",icon:"fa fa-home",uri:"/"},{key:"demo1",title:"例子一级",icon:"fa fa-home",children:[{key:"demo",title:"例子",icon:"fa fa-home",uri:"/demo"},{key:"demo-redux",title:"redux例子",icon:"fa fa-home",uri:"/demo-redux"},{key:"demo-fast",title:"快速CURD例子",icon:"fa fa-home",uri:"/demo-fast"}]},{key:"doc-ms",title:"组件文档",icon:"fa fa-book",children:[{key:"doc-ms-table",title:"Table",uri:"/doc-ms-table"},{key:"doc-ms-form",title:"Form",uri:"/doc-ms-form"}]},{key:"rxjs-demo-page",title:"RxJS Demo Page",icon:"fa fa-page",uri:"/pages/rxjs-demo/rxjs-demo.html",target:"_blank"}],n=new Promise(function(e,i){d["default"]({url:"/api/loged",type:"get"}).then(function(o){"0"===o.code?($("#loadImg").css("display","none"),$(".login-area").removeClass("hidden").addClass("animated flipInX"),a(r,o.data.t.functions,o.data.t.allowedFunctions),t.mix(t.vmodels.root,{user:o.data.t}),e(r.slice(0))):i(o)})});i.menu=n,i.walkMenu=o});
;define("components/common-sidebar/common-sidebar.ts",function(e,n){"use strict";var o=e("node_modules/avalon2/dist/avalon"),s=e("services/menuService.ts");e("vendor/ane/components/ms-menu/index.ts"),o.effect("collapse",{enter:function(e,n){$(e).slideDown(200,n)},leave:function(e,n){$(e).slideUp(200,n)}}),n.name="common-sidebar",o.component(n.name,{template:'\n<ms-menu :widget="{menu:@menu,openKeys:@openKeys,selectedKeys:@selectedKeys,onClick:@handleMenuClick}"></ms-menu>\n',defaults:{menu:[],selectedKeys:["dashboard"],openKeys:[],handleMenuClick:function(e){o.router.navigate(e.uri,2)},onInit:function(){var e=this;s.menu.then(function(n){e.menu=n})}}})});
;define("services/routerService.ts",function(o){"use strict";function n(o){var n='<xmp is="'+o+'" :widget="{id:\''+o.replace(/\-/g,"_")+"',expire:"+Date.now()+'}"></xmp>';return n}function e(o,e,m){void 0===m&&(m=""),o.map(function(o){var a={};o.component&&(a.currentPage=o.component),o.components&&(a=o.components),t.router.add(m+o.path,function(){Object.keys(a).map(function(o){var m=a[o];"function"==typeof m?m(function(m){t.vmodels[e.name][o]=n(m.name)}):t.vmodels[e.name][o]=n(m.name)})})})}var t=o("node_modules/avalon2/dist/avalon");o("node_modules/mmRouter/dist/mmRouter"),o("components/common-header/common-header.ts"),o("components/common-sidebar/common-sidebar.ts");var m=[{path:"/",component:function(n){o.async(["components/gf-dashboard/gf-dashboard.ts"],n)}},{path:"/aaa",component:function(n){o.async(["components/gf-aaa/gf-aaa.ts"],n)}},{path:"/demo",component:function(n){o.async(["components/gf-demo/gf-demo.ts"],n)}},{path:"/demo-redux",component:function(n){o.async(["components/gf-demo-redux/gf-demo-redux.ts"],n)}},{path:"/demo-fast",component:function(n){o.async(["components/gf-demo-fast/gf-demo-fast.ts"],n)}},{path:"/doc-ms-table",component:function(n){o.async(["components/doc-ms-table/doc-ms-table.ts"],n)}},{path:"/doc-ms-form",component:function(n){o.async(["components/doc-ms-form/doc-ms-form.ts"],n)}}];e(m,{name:"root"})});
;define("vendor/ane/components/ms-layout/ms-layout.ts",function(s){"use strict";var e=s("node_modules/avalon2/dist/avalon"),a=e.component("ms-layout",{template:'<div class="ane-layout" :css="@style" :class="@className"><slot /></div>',soleSlot:"slot",defaults:{style:{},className:""}});a.extend({displayName:"ms-layout-sider",template:'<div class="ane-layout-sider" :css="@style" :class="@className" :class-1="[@fixed?\'ane-layout-fixed-sider\':\'\']"><div class="ane-layout-sider-inner"><slot /></div></div>',soleSlot:"slot",defaults:{fixed:!1,width:"300px"}}),a.extend({displayName:"ms-layout-header",template:'<div class="ane-layout-header" :css="@style" :class="@className" :class-1="[@fixed?\'ane-layout-fixed-header\':\'\']"><slot /></div>',soleSlot:"slot",defaults:{fixed:!1,width:"60px"}}),a.extend({displayName:"ms-layout-content",template:'<div class="ane-layout-content" :css="@style" :class="@className">\n                    <ol class="breadcrumb">\n                        <li><a href="#">Home</a></li>\n                        <li><a href="#">Library</a></li>\n                        <li class="active">Data</li>\n                    </ol>\n                    <div class="ane-layout-content-wrapper">\n                        <div class="container-fluid">\n                            <slot />\n                        </div>\n                    </div>\n                </div>',soleSlot:"slot",defaults:{fixed:!1}}),a.extend({displayName:"ms-layout-footer",template:'<div class="ane-layout-footer" :css="@style" :class="@className" :class-1="[@fixed?\'ane-layout-fixed-footer\':\'\']"><slot /></div>',soleSlot:"slot",defaults:{fixed:!1,width:"60px"}})});
;define("vendor/ane/components/ms-layout/index.ts",function(n){"use strict";"";n("vendor/ane/components/ms-layout/ms-layout.ts")});
;define("index.ts",function(e){function o(){var e=-1;if("Microsoft Internet Explorer"===navigator.appName){var o=navigator.userAgent,n=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");null!==n.exec(o)&&(e=parseFloat(RegExp.$1))}return e}var n="undefined"!=typeof n?n:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};e("node_modules/es5-shim/es5-shim"),8===o()&&(Object.defineProperty=function(e,o,n){e[o]=n.value}),e("node_modules/es5-shim/es5-sham"),e("node_modules/es6-promise/dist/es6-promise.auto");var s=e("node_modules/jquery/dist/jquery");n.$=n.jQuery=s,e("node_modules/bootstrap/dist/js/bootstrap");var t=e("node_modules/avalon2/dist/avalon");e("services/routerService.ts"),e("vendor/ane/components/ms-layout/index.ts"),t.define({$id:"root",currentPage:""}),t.history.start({fireAnchor:!1}),/#!/.test(n.location.hash)||t.router.navigate("/",2),t.scan(document.body)});