"use strict";
var common_vendor = require("../../common/vendor.js");
var _imports_0 = "/static/images/message/banner.jpg";
const _sfc_main = {
  data() {
    return {
      array: ["\u91D1\u878D", "\u8BA1\u7B97\u673A", "\u533B\u7597", "\u4E2A\u4F53\u7ECF\u8425", "\u653F\u5E9C\u90E8\u95E8", "\u5176\u4ED6"],
      index: 0,
      current: 0,
      sex: [{
        value: "man",
        name: "\u7537",
        checked: true
      }, {
        value: "woman",
        name: "\u5973"
      }],
      platform: [{
        value: "H5",
        name: "H5",
        checked: true
      }, {
        value: "MiniProgram",
        name: "\u5C0F\u7A0B\u5E8F"
      }, {
        value: "APP",
        name: "APP"
      }]
    };
  },
  methods: {
    formSubmit() {
    },
    bindPickerChange(e) {
      this.index = e.detail.value;
    },
    changeSex() {
    },
    checkboxChange() {
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: _imports_0,
    b: common_vendor.t($data.array[$data.index]),
    c: common_vendor.o((...args) => $options.bindPickerChange && $options.bindPickerChange(...args)),
    d: $data.index,
    e: $data.array,
    f: common_vendor.f($data.sex, (item, index, i0) => {
      return {
        a: item.value,
        b: index === $data.current,
        c: common_vendor.t(item.name),
        d: item.value
      };
    }),
    g: common_vendor.o((...args) => $options.changeSex && $options.changeSex(...args)),
    h: common_vendor.f($data.platform, (item, index, i0) => {
      return {
        a: item.value,
        b: item.checked,
        c: common_vendor.t(item.name),
        d: item.value
      };
    }),
    i: common_vendor.o((...args) => $options.checkboxChange && $options.checkboxChange(...args)),
    j: common_vendor.o((...args) => $options.formSubmit && $options.formSubmit(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/ulan/Documents/HBuilderProjects/ulan-uni-cms/pages/consult/consult.vue"]]);
wx.createPage(MiniProgramPage);
