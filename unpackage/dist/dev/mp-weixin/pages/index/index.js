"use strict";
var common_vendor = require("../../common/vendor.js");
var common_js_helper = require("../../common/js/helper.js");
const _sfc_main = {
  data() {
    return {};
  },
  onLoad() {
    let people = common_js_helper.helper.ulan("\u5E7D\u84DD", 18);
    console.log(people);
    common_vendor.index.request({
      url: "http://cms/tpframe.com/api/index/test",
      method: "POST",
      header: { "content-type": "application/x-www-form-urlencoded" },
      dataType: "json",
      success(res) {
        console.log(res);
      },
      fail(err) {
        console.log(JSON.stringify(err));
      }
    });
  },
  methods: {}
};
if (!Array) {
  const _easycom_banner2 = common_vendor.resolveComponent("banner");
  const _easycom_nav_icon2 = common_vendor.resolveComponent("nav-icon");
  const _easycom_case_exhibit2 = common_vendor.resolveComponent("case-exhibit");
  const _easycom_news_centre2 = common_vendor.resolveComponent("news-centre");
  const _easycom_video_exhibit2 = common_vendor.resolveComponent("video-exhibit");
  const _easycom_photo_exhibit2 = common_vendor.resolveComponent("photo-exhibit");
  (_easycom_banner2 + _easycom_nav_icon2 + _easycom_case_exhibit2 + _easycom_news_centre2 + _easycom_video_exhibit2 + _easycom_photo_exhibit2)();
}
const _easycom_banner = () => "../../components/banner/banner.js";
const _easycom_nav_icon = () => "../../components/nav-icon/nav-icon.js";
const _easycom_case_exhibit = () => "../../components/case-exhibit/case-exhibit.js";
const _easycom_news_centre = () => "../../components/news-centre/news-centre.js";
const _easycom_video_exhibit = () => "../../components/video-exhibit/video-exhibit.js";
const _easycom_photo_exhibit = () => "../../components/photo-exhibit/photo-exhibit.js";
if (!Math) {
  (_easycom_banner + _easycom_nav_icon + _easycom_case_exhibit + _easycom_news_centre + _easycom_video_exhibit + _easycom_photo_exhibit)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/ulan/Documents/HBuilderProjects/ulan-uni-cms/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
