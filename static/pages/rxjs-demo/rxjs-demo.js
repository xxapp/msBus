define("pages/rxjs-demo/rxjs-demo",function(e){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function n(e){return console.log(e.toString()),r.toString()===e.toString()}e("node_modules/es5-shim/es5-shim"),e("node_modules/es6-promise/dist/es6-promise.auto"),e("node_modules/addeventlistener-with-dispatch/src/addeventlistener-with-dispatch");var o=e("node_modules/avalon2/dist/avalon"),i=t(o),d=e("node_modules/rx/dist/rx.all"),s=t(d);8===i["default"].msie&&(Object.defineProperty=function(e,t,n){e[t]=n.value}),i["default"].define({$id:"demo",text:"Click Me",click:function(){}});{var r=[38,38,40,40,37,39,37,39,66,65];s["default"].Observable.fromEvent(document,"keyup").map(function(e){return e.keyCode}).bufferWithCount(10,1).filter(n).subscribeOnNext(function(){return console.log("KONAMI!")})}});