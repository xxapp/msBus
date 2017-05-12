define('components/gf-demo-fast/gf-demo-fast.ts', function(require, exports, module) {

  "use strict";
  require("vendor/ane-component/index.ts");
  var common_curd_1 = require("components/common-curd/common-curd.ts");
  var storeService_1 = require("services/storeService.ts");
  exports.name = 'gf-demo-fast';
  common_curd_1["default"].extend({
      displayName: exports.name,
      template: "\n<div class=\"row \">\n    <div class=\"col-xs-12 col-md-12 \">\n        <ms-dialog :widget=\"{$innerVm: $id + '_dialog_main', show: @show, onOk: @handleOk, onCancel: function () { @show = false; }}\">\n            <div slot=\"body\" ms-skip>\n                <xmp is=\"ms-form\" :widget=\"{$form: @$form}\">\n                    <ms-form-item :widget=\"{label: 'ID'}\">\n                        <ms-input :widget=\"{value:@record.region_id,col: 'region_id', $rules: { required: true, message: '地区ID不能为空' }}\"></ms-input>\n                    </ms-form-item>\n                    <ms-form-item :widget=\"{label: '名称'}\">\n                        <ms-input :widget=\"{value:@record.region_name,col: 'region_name', $rules: { required: true, message: '地区名称不能为空' }}\"></ms-input>\n                    </ms-form-item>\n                    <ms-form-item :widget=\"{label: 'PID'}\">\n                        <ms-input :widget=\"{value:@record.region_parent_id,col: 'region_parent_id', $rules: { required: true, message: '地区PID不能为空' }}\"></ms-input>\n                    </ms-form-item>\n                    <ms-form-item :widget=\"{label: '套餐'}\" :for=\"($index, el) in @record.suites\">\n                        <ms-input :widget=\"{value:el.name,col: 'suites[' + $index + '].name'}\"></ms-input>\n                    </ms-form-item>\n                </xmp>\n            </div>\n        </ms-dialog>\n        <div class=\"widget \">\n            <div class=\"widget-header bg-red \">\n                <span class=\"widget-caption \">地区列表-快速-CURD</span>\n            </div>\n            <div class=\"widget-body \">\n                <ms-form :widget=\"{$form:@$searchForm,type:'search',inline:true}\">\n                    <ms-form-item :widget=\"{label: 'ID'}\">\n                        <ms-input :widget=\"{col: 'region_id'}\"></ms-input>\n                    </ms-form-item>\n                    <ms-form-item :widget=\"{label: '名称'}\">\n                        <ms-input :widget=\"{col: 'region_name.firstName'}\"></ms-input>\n                    </ms-form-item>\n                    <ms-form-item :widget=\"{label: '开始日期'}\">\n                        <ms-input :widget=\"{col: 'startDate', $rules: { pattern: @pattern, message: '日期格式不正确' }}\"></ms-input>\n                    </ms-form-item>\n                    <ms-form-item :widget=\"{label: '结束日期'}\">\n                        <ms-input :widget=\"{col: 'endDate'}\"></ms-input>\n                    </ms-form-item>\n                    <button type=\"button\" class=\"btn btn-info \" :click=\"@search\">\n                        <span class=\"fa fa-search \"></span>搜索\n                    </button>\n                </ms-form>\n                <div class=\"table-toolbar \">\n                    <button class=\"btn btn-info \" :click=\"actions('add')\">\n                        <span class=\"fa fa-plus \">\n                        </span>新增地区\n                    </button>\n                </div>\n                <ms-table :widget=\"{data:@list,loading:@loading,actions:@actions,pagination:@pagination,onChange:@handleTableChange}\">\n                    <ms-table-header :widget=\"{dataIndex:'region_id',type:'selection'}\"></ms-table-header>\n                    <ms-table-header :widget=\"{title:'地区',dataIndex:'region_name'}\"></ms-table-header>\n                    <ms-table-header :widget=\"{title:'PID',dataIndex:'region_parent_id'}\"></ms-table-header>\n                    <ms-table-header :widget=\"{title:'操作',dataIndex:'region_id'}\">\n                        <button type=\"button\" class=\"btn btn-link btn-xs \" :click=\"handle('edit')\"><i class=\"fa fa-edit \"></i> 编辑</button>\n                        <button type=\"button\" class=\"btn btn-link btn-xs \" :click=\"handle('del')\"><i class=\"fa fa-trash-o \"></i> 删除</button>\n                    </ms-table-header>\n                </ms-table>\n            </div>\n        </div>\n    </div>\n</div>\n",
      defaults: {
          $store: storeService_1.demo,
          pattern: /^\d+-\d+-\d+( \d+:\d+:\d+)?$/
      }
  });
  //# sourceMappingURL=/ms-bus/static/components/gf-demo-fast/gf-demo-fast.js.map
  

});
