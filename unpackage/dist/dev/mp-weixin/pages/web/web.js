"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      url: ""
    };
  },
  onLoad(option) {
    this.url = option.url || "";
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.url
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/ulan/Documents/HBuilderProjects/ulan-uni-cms/pages/web/web.vue"]]);
wx.createPage(MiniProgramPage);
