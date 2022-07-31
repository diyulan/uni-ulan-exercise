"use strict";
var common_vendor = require("../../common/vendor.js");
var _imports_0 = "/static/images/me/header.jpg";
const _sfc_main = {
  data() {
    return {};
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: _imports_0,
    b: common_vendor.p({
      type: "info",
      size: "30",
      color: "#5E6D82"
    }),
    c: common_vendor.p({
      type: "person-filled",
      size: "30",
      color: "#5E6D82"
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/ulan/Documents/HBuilderProjects/ulan-uni-cms/pages/me/me.vue"]]);
wx.createPage(MiniProgramPage);
