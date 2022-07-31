"use strict";
var common_vendor = require("../../common/vendor.js");
var _imports_0 = "/static/images/index/banner.jpg";
const _sfc_main = {
  name: "banner",
  data() {
    return {
      indicatorDots: true,
      autoplay: true,
      interval: 3e3,
      duration: 400
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: _imports_0,
    b: _imports_0,
    c: _imports_0,
    d: $data.indicatorDots,
    e: $data.autoplay,
    f: $data.interval,
    g: $data.duration
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6f413278"], ["__file", "/Users/ulan/Documents/HBuilderProjects/ulan-uni-cms/components/banner/banner.vue"]]);
wx.createComponent(Component);
