define("components/common-curd/common-curd",function(t,i,n){"use strict";function e(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(i,"__esModule",{value:!0});var a=function(){function t(t,i){var n=[],e=!0,a=!1,o=void 0;try{for(var r,s=t[Symbol.iterator]();!(e=(r=s.next()).done)&&(n.push(r.value),!i||n.length!==i);e=!0);}catch(l){a=!0,o=l}finally{try{!e&&s["return"]&&s["return"]()}finally{if(a)throw o}}return n}return function(i,n){if(Array.isArray(i))return i;if(Symbol.iterator in Object(i))return t(i,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])}return t},r=t("node_modules/avalon2/dist/avalon"),s=e(r),l=t("node_modules/ane/dist/ane");i["default"]=s["default"].component("common-curd",{template:"&nbsp;",defaults:{show:!1,loading:!1,list:[],$searchForm:l.createForm({autoAsyncChange:!1}),pagination:{current:1,pageSize:6,total:0},$dialogs:{main:null},search:function(){var t=this;this.$searchForm.validateFields().then(function(i){i&&t.fetch()})},fetch:function(){var t=this,i={start:this.pagination.pageSize*(this.pagination.current-1),limit:this.pagination.pageSize};this.loading=!0,this.$store.fetch(o({},this.$searchForm.record,i)).then(function(i){t.pagination.total=i.total,t.list=i.list,t.loading=!1},function(){t.loading=!1})},handleTableChange:function(t){this.pagination.current=t.current,this.fetch()},handle:{},_handle:{add:function(){this.$dialogs.main.beginCreate(this.$store.initialData()),this.show=!0},edit:function(t,i){this.$dialogs.main.beginUpdate(i),this.show=!0},del:function(t,i){this.$store.remove(i.region_id).then(function(t){"0"===t.code&&l.message.success({content:"删除成功"})})}},actions:function(t){for(var i=arguments.length,n=Array(i>1?i-1:0),e=1;i>e;e++)n[e-1]=arguments[e];this.handle[t]&&this.handle[t].apply(this,n)},handleOk:function(){var t=this;this.$dialogs.main.submit().then(function(i){var n=a(i,2),e=n[0],o=n[1];return"boolean"==typeof e?(t.show=!1,e?t.$store.update(o):t.$store.create(o)):void 0}).then(function(i){void 0!==i&&"0"===i.code&&t.fetch()})["catch"](function(t){s["default"].log(t)})},_initMainDialog:function(){null===this.$dialogs.main&&(this.$dialogs.main=s["default"].define({$id:this.$id+"_dialog_main",title:"新增",isEdit:!1,$form:l.createForm({record:this.$store.initialData()}),record:this.$store.initialData(),beginCreate:function(t){this.isEdit=!1,this.title="新增",this.record=t},beginUpdate:function(t){this.isEdit=!0,this.title="修改",this.record=t},submit:function(){var t=this;return this.$form.validateFields().then(function(i){return i?[t.isEdit,t.$form.record]:Promise.reject("表单验证未通过")})}}))},_disposeDialogs:function(){var t=this;Object.keys(this.$dialogs).map(function(i){var n=t.$dialogs[i];n&&(delete t.$dialogs[i],delete s["default"].vmodels[n.$id])})},onInit:function(){this.fetch(),this._initMainDialog(),this.handle=s["default"].mix(this._handle,this.handle)},onDispose:function(){this._disposeDialogs()}}}),n.exports=i["default"]});