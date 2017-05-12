define('vendor/ane-component/components/ms-form/utils.ts', function(require, exports, module) {

  "use strict";
  var ane_util_1 = require("vendor/ane-component/ane-util.ts");
  function emitToFormItem(vmodel) {
      vmodel.$formItem = ane_util_1.findParentComponent(vmodel, 'ms-form-item');
      if (vmodel.$formItem === null) {
          return;
      }
      vmodel.$formItem.onFieldChange({
          name: vmodel.col, rules: vmodel.$rules, value: vmodel.value, denyValidate: true
      });
  }
  exports.emitToFormItem = emitToFormItem;
  //# sourceMappingURL=/static/vendor/ane-component/components/ms-form/utils.js.map
  

});
