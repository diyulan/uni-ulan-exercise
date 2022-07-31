"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    callPhone() {
      common_vendor.index.makePhoneCall({
        phoneNumber: "12345678910"
      });
    }
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
    a: common_vendor.p({
      type: "phone-filled",
      size: "24",
      color: "#5E6D82"
    }),
    b: common_vendor.o((...args) => $options.callPhone && $options.callPhone(...args)),
    c: common_vendor.p({
      type: "qq",
      size: "24",
      color: "#5E6D82"
    }),
    d: common_vendor.p({
      type: "email-filled",
      size: "24",
      color: "#5E6D82"
    }),
    e: common_vendor.p({
      type: "location-filled",
      size: "24",
      color: "#5E6D82"
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/ulan/Documents/HBuilderProjects/ulan-uni-cms/pages/connect/connect.vue"]]);
wx.createPage(MiniProgramPage);
