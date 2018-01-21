define("components/gf-demo/gf-demo",function(e,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.name=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=e("node_modules/avalon2/dist/avalon"),s=n(a),o=e("node_modules/ane/dist/ane"),d=e("services/storeService"),r=t.name="gf-demo";s["default"].component(r,{template:'\n<div class="row">\n    <div class="col-xs-12 col-md-12">\n        <ms-dialog :widget="{$innerVm: \'demo_form\', show: @show, onOk: @handleOk, title: @isEdit ? \'修改\' : \'新增\', onCancel: function () { @show = false; }}">\n            <div slot="body" ms-skip>\n                <xmp is="ms-form" :widget="{$form: @$form}">\n                    <ms-form-item :widget="{label: \'ID\'}">\n                        <ms-input :widget="{value:@record.region_id,col: \'region_id\', $rules: { required: true, message: \'地区ID不能为空\' }}"></ms-input>\n                    </ms-form-item>\n                    <ms-form-item :widget="{label: \'名称\'}">\n                        <ms-input :widget="{value:@record.region_name,col: \'region_name\', $rules: { required: true, message: \'地区名称不能为空\' }}"></ms-input>\n                    </ms-form-item>\n                    <ms-form-item :widget="{label: \'PID\'}">\n                        <ms-input :widget="{value:@record.region_parent_id,col: \'region_parent_id\', $rules: { required: true, message: \'地区PID不能为空\' }}"></ms-input>\n                    </ms-form-item>\n                    <ms-form-item :widget="{label: \'套餐\'}" :for="($index, el) in @record.suites">\n                        <ms-input :widget="{value:el.name,col: \'suites[\' + $index + \'].name\'}"></ms-input>\n                    </ms-form-item>\n                </xmp>\n            </div>\n        </ms-dialog>\n        <ms-form :widget="{$form:@$searchForm,type:\'search\',inline:true}">\n            <div class="row">\n                <div class="col-md-2">\n                    <ms-form-item :widget="{label: \'ID：\'}">\n                        <ms-input :widget="{col: \'region_id\', width: \'75%\'}"></ms-input>\n                    </ms-form-item>\n                </div>\n                <div class="col-md-2">\n                    <ms-form-item :widget="{label: \'名称：\'}">\n                        <ms-input :widget="{col: \'region_name.firstName\', width: \'75%\'}"></ms-input>\n                    </ms-form-item>\n                </div>\n                <div class="col-md-3">\n                    <ms-form-item :widget="{label: \'开始日期：\'}">\n                        <ms-datepicker :widget="{\n                            col:\'startDate\',\n                            placeholder:\'请选择开始日期\',\n                            width: \'70%\'\n                        }"></ms-datepicker>\n                    </ms-form-item>\n                </div>\n                <div class="col-md-3">\n                    <ms-form-item :widget="{label: \'结束日期：\'}">\n                        <ms-datepicker :widget="{\n                            col:\'endDate\',\n                            placeholder:\'请选择结束日期\',\n                            width: \'70%\'\n                        }"></ms-datepicker>\n                    </ms-form-item>\n                </div>\n                <div class="col-md-2">\n                    <button type="button" class="btn btn-primary" :click="@search">\n                        <span class="fa fa-search"></span>搜索\n                    </button>\n                    <button type="button" class="btn btn-success pull-right" :click="actions(\'add\')">\n                        <span class="fa fa-plus">\n                        </span>新增地区\n                    </button>\n                </div>\n            </div>\n        </ms-form>\n        <ms-table :widget="{data:@list,actions:@actions,pagination:@pagination,onChange:@handleTableChange}">\n            <ms-table-header :widget="{dataIndex:\'region_id\',type:\'selection\'}"></ms-table-header>\n            <ms-table-header :widget="{title:\'地区\',dataIndex:\'region_name\'}"></ms-table-header>\n            <ms-table-header :widget="{title:\'PID\',dataIndex:\'region_parent_id\'}"></ms-table-header>\n            <ms-table-header :widget="{title:\'操作\',dataIndex:\'region_id\'}">\n                <button type="button" class="btn btn-default btn-xs" :click="handle(\'edit\')"><i class="fa fa-edit"></i> 编辑</button>\n                <button type="button" class="btn btn-danger btn-xs" :click="handle(\'delete\')"><i class="fa fa-trash-o"></i> 删除</button>\n            </ms-table-header>\n        </ms-table>\n    </div>\n</div>\n',defaults:{show:!1,list:[],$searchForm:o.createForm({autoAsyncChange:!1}),pagination:{current:1,pageSize:6,total:0},pattern:/^\d+-\d+-\d+( \d+:\d+:\d+)?$/,search:function(){var e=this;this.$searchForm.validateFields().then(function(t){t&&e.fetch()})},fetch:function(){var e=this,t={start:this.pagination.pageSize*(this.pagination.current-1),limit:this.pagination.pageSize};d.demo.fetch(i({},this.$searchForm.record,t)).then(function(t){e.pagination.total=t.total,e.list=t.list})},actions:function(e,t,n){"add"===e?(m.isEdit=!1,m.title="新增",m.record=d.demo.initialData(),this.show=!0):"edit"===e?(m.isEdit=!0,m.title="修改",m.record=n,this.show=!0):"delete"===e&&d.demo.remove(n.region_id).then(function(e){"0"===e.code&&o.message.success({content:"删除成功"})})},handleOk:function(){var e=this;m.$form.validateFields().then(function(t){t&&(m.isEdit?d.demo.update(m.$form.record).then(function(){e.fetch()}):d.demo.create(m.$form.record).then(function(){e.fetch()}),e.show=!1)})},handleTableChange:function(e){this.pagination.current=e.current,this.fetch()},onInit:function(){this.fetch()}}});var m=s["default"].define({$id:"demo_form",title:"",isEdit:!1,$form:o.createForm({record:d.demo.initialData(),onFieldsChange:function(){}}),record:d.demo.initialData()})});