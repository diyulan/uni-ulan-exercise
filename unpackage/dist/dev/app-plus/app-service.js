if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then((value) => promise.resolve(callback()).then(() => value), (reason) => promise.resolve(callback()).then(() => {
      throw reason;
    }));
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  var _imports_0$6 = "/static/images/index/banner.jpg";
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$c = {
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
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "banner" }, [
      vue.createElementVNode("swiper", {
        class: "swiper",
        circular: "",
        "indicator-dots": $data.indicatorDots,
        "indicator-color": "#FFFFFF",
        "indicator-active-color": "#3fc1c9",
        autoplay: $data.autoplay,
        interval: $data.interval,
        duration: $data.duration
      }, [
        vue.createElementVNode("swiper-item", null, [
          vue.createElementVNode("view", { class: "swiper-item uni-bg-red" }, [
            vue.createElementVNode("image", {
              src: _imports_0$6,
              class: "banner-item",
              mode: "widthFix"
            })
          ])
        ]),
        vue.createElementVNode("swiper-item", null, [
          vue.createElementVNode("view", { class: "swiper-item uni-bg-green" }, [
            vue.createElementVNode("image", {
              src: _imports_0$6,
              class: "banner-item",
              mode: "widthFix"
            })
          ])
        ]),
        vue.createElementVNode("swiper-item", null, [
          vue.createElementVNode("view", { class: "swiper-item uni-bg-blue" }, [
            vue.createElementVNode("image", {
              src: _imports_0$6,
              class: "banner-item",
              mode: "widthFix"
            })
          ])
        ])
      ], 8, ["indicator-dots", "autoplay", "interval", "duration"])
    ]);
  }
  var __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__scopeId", "data-v-6f413278"], ["__file", "/Users/ulan/Documents/HBuilderProjects/ulan-uni-cms/components/banner/banner.vue"]]);
  function isDebugMode() {
    return typeof __channelId__ === "string" && __channelId__;
  }
  function jsonStringifyReplacer(k, p) {
    switch (shared.toRawType(p)) {
      case "Function":
        return "function() { [native code] }";
      default:
        return p;
    }
  }
  function normalizeLog(type, filename, args) {
    if (isDebugMode()) {
      args.push(filename.replace("at ", "uni-app:///"));
      return console[type].apply(console, args);
    }
    const msgs = args.map(function(v) {
      const type2 = shared.toTypeString(v).toLowerCase();
      if (["[object object]", "[object array]", "[object module]"].indexOf(type2) !== -1) {
        try {
          v = "---BEGIN:JSON---" + JSON.stringify(v, jsonStringifyReplacer) + "---END:JSON---";
        } catch (e) {
          v = type2;
        }
      } else {
        if (v === null) {
          v = "---NULL---";
        } else if (v === void 0) {
          v = "---UNDEFINED---";
        } else {
          const vType = shared.toRawType(v).toUpperCase();
          if (vType === "NUMBER" || vType === "BOOLEAN") {
            v = "---BEGIN:" + vType + "---" + v + "---END:" + vType + "---";
          } else {
            v = String(v);
          }
        }
      }
      return v;
    });
    return msgs.join("---COMMA---") + " " + filename;
  }
  function formatAppLog(type, filename, ...args) {
    const res = normalizeLog(type, filename, args);
    res && console[type](res);
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  var _imports_0$5 = "/static/images/index/about.png";
  var _imports_1 = "/static/images/index/case.png";
  var _imports_2 = "/static/images/index/news.png";
  var _imports_3 = "/static/images/index/service.png";
  var _imports_4 = "/static/images/index/photo.png";
  var _imports_5 = "/static/images/index/video.png";
  var _imports_6 = "/static/images/index/message.png";
  var _imports_7 = "/static/images/index/telphone.png";
  const _sfc_main$b = {
    name: "nav-icon",
    data() {
      return {};
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "nav-wrap" }, [
      vue.createElementVNode("view", { class: "nav-item" }, [
        vue.createElementVNode("image", {
          class: "nav-icon",
          src: _imports_0$5
        }),
        vue.createElementVNode("text", null, "\u516C\u53F8\u7B80\u4ECB")
      ]),
      vue.createElementVNode("view", { class: "nav-item" }, [
        vue.createElementVNode("image", {
          class: "nav-icon nav-case-size",
          src: _imports_1
        }),
        vue.createElementVNode("text", null, "\u516C\u53F8\u6848\u4F8B")
      ]),
      vue.createElementVNode("view", { class: "nav-item" }, [
        vue.createElementVNode("image", {
          class: "nav-icon",
          src: _imports_2
        }),
        vue.createElementVNode("text", null, "\u65B0\u95FB\u4E2D\u5FC3")
      ]),
      vue.createElementVNode("view", { class: "nav-item" }, [
        vue.createElementVNode("image", {
          class: "nav-icon",
          src: _imports_3
        }),
        vue.createElementVNode("text", null, "\u670D\u52A1\u8303\u56F4")
      ]),
      vue.createElementVNode("view", { class: "nav-item" }, [
        vue.createElementVNode("image", {
          class: "nav-icon",
          src: _imports_4
        }),
        vue.createElementVNode("text", null, "\u76F8\u518C\u5C55\u793A")
      ]),
      vue.createElementVNode("view", { class: "nav-item" }, [
        vue.createElementVNode("image", {
          class: "nav-icon nav-video-size",
          src: _imports_5
        }),
        vue.createElementVNode("text", null, "\u89C6\u9891\u5C55\u793A")
      ]),
      vue.createElementVNode("view", { class: "nav-item" }, [
        vue.createElementVNode("image", {
          class: "nav-icon",
          src: _imports_6
        }),
        vue.createElementVNode("text", null, "\u5728\u7EBF\u7559\u8A00")
      ]),
      vue.createElementVNode("view", { class: "nav-item" }, [
        vue.createElementVNode("image", {
          class: "nav-icon nav-phone-size",
          src: _imports_7
        }),
        vue.createElementVNode("text", null, "\u7535\u8BDD\u54A8\u8BE2")
      ])
    ]);
  }
  var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__scopeId", "data-v-7437a964"], ["__file", "/Users/ulan/Documents/HBuilderProjects/ulan-uni-cms/components/nav-icon/nav-icon.vue"]]);
  var _imports_0$4 = "/static/images/index/case-demo.jpg";
  const _sfc_main$a = {
    name: "case-exhibit",
    data() {
      return {};
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "index-block" }, [
      vue.createElementVNode("view", { class: "index-block-title" }, [
        vue.createElementVNode("view", { class: "index-title-left" }, "\u6210\u529F\u6848\u4F8B"),
        vue.createElementVNode("view", { class: "index-title-right" }, [
          vue.createElementVNode("text")
        ])
      ]),
      vue.createElementVNode("view", { class: "index-content" }, [
        vue.createElementVNode("view", { class: "case-item" }, [
          vue.createElementVNode("image", {
            class: "case-thumb",
            src: _imports_0$4
          }),
          vue.createElementVNode("text", { class: "case-title" }, "\u6848\u4F8B\u5C55\u793A\u4E00")
        ]),
        vue.createElementVNode("view", { class: "case-item" }, [
          vue.createElementVNode("image", {
            class: "case-thumb",
            src: _imports_0$4
          }),
          vue.createElementVNode("text", { class: "case-title" }, "\u6848\u4F8B\u5C55\u793A\u4E8C")
        ]),
        vue.createElementVNode("view", { class: "case-item" }, [
          vue.createElementVNode("image", {
            class: "case-thumb",
            src: _imports_0$4
          }),
          vue.createElementVNode("text", { class: "case-title" }, "\u6848\u4F8B\u5C55\u793A\u4E09")
        ]),
        vue.createElementVNode("view", { class: "case-item" }, [
          vue.createElementVNode("image", {
            class: "case-thumb",
            src: _imports_0$4
          }),
          vue.createElementVNode("text", { class: "case-title" }, "\u6848\u4F8B\u5C55\u793A\u56DB")
        ])
      ])
    ]);
  }
  var __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__scopeId", "data-v-882bb1f8"], ["__file", "/Users/ulan/Documents/HBuilderProjects/ulan-uni-cms/components/case-exhibit/case-exhibit.vue"]]);
  var _imports_0$3 = "/static/images/index/news-demo.jpg";
  const _sfc_main$9 = {
    name: "news-centre",
    data() {
      return {};
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "index-block" }, [
      vue.createElementVNode("view", { class: "index-block-title" }, [
        vue.createElementVNode("text", { class: "index-title-left" }, "\u65B0\u95FB\u4E2D\u5FC3"),
        vue.createElementVNode("view", { class: "index-title-right" })
      ]),
      vue.createElementVNode("view", { class: "index-content" }, [
        vue.createElementVNode("view", { class: "news-item" }, [
          vue.createElementVNode("view", { class: "news-thumb" }, [
            vue.createElementVNode("image", {
              class: "news-img",
              src: _imports_0$3
            })
          ]),
          vue.createElementVNode("view", { class: "news-info" }, [
            vue.createElementVNode("text", { class: "news-title" }, "\u6D4B\u8BD5\u65B0\u95FB\u6D4B\u8BD5\u65B0\u95FB\u6D4B\u8BD5\u65B0"),
            vue.createElementVNode("view", { class: "news-more" }, [
              vue.createElementVNode("text", { class: "news-datetime" }, "2021-2-1 10:25"),
              vue.createElementVNode("text", { class: "news-view" }, "30")
            ])
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "index-content" }, [
        vue.createElementVNode("view", { class: "news-item" }, [
          vue.createElementVNode("view", { class: "news-thumb" }, [
            vue.createElementVNode("image", {
              class: "news-img",
              src: _imports_0$3
            })
          ]),
          vue.createElementVNode("view", { class: "news-info" }, [
            vue.createElementVNode("text", { class: "news-title" }, "\u6D4B\u8BD5\u65B0\u95FB\u6D4B\u8BD5\u65B0\u95FB\u6D4B\u8BD5\u65B0\u95FB\u6D4B\u8BD5\u65B0\u95FB\u6D4B\u8BD5\u65B0\u95FB\u6D4B\u8BD5\u65B0\u95FB\u6D4B\u8BD5\u65B0\u95FB\u6D4B\u8BD5\u65B0\u95FB\u6D4B\u8BD5\u65B0\u95FB\u6D4B\u8BD5\u65B0\u95FB\u6D4B\u8BD5\u65B0\u95FB"),
            vue.createElementVNode("view", { class: "news-more" }, [
              vue.createElementVNode("text", { class: "news-datetime" }, "2021-2-1 10:25"),
              vue.createElementVNode("text", { class: "news-view" }, "30")
            ])
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "index-content" }, [
        vue.createElementVNode("view", { class: "news-item" }, [
          vue.createElementVNode("view", { class: "news-thumb" }, [
            vue.createElementVNode("image", {
              class: "news-img",
              src: _imports_0$3
            })
          ]),
          vue.createElementVNode("view", { class: "news-info" }, [
            vue.createElementVNode("text", { class: "news-title" }, "\u6D4B\u8BD5\u65B0\u95FB\u6D4B\u8BD5\u65B0\u95FB\u6D4B\u8BD5\u65B0\u95FB\u6D4B\u8BD5\u65B0\u95FB\u6D4B\u8BD5\u65B0\u95FB\u6D4B\u8BD5\u65B0\u95FB\u6D4B\u8BD5\u65B0\u95FB\u6D4B\u8BD5\u65B0\u95FB\u6D4B\u8BD5\u65B0\u95FB\u6D4B\u8BD5\u65B0\u95FB\u6D4B\u8BD5\u65B0\u95FB"),
            vue.createElementVNode("view", { class: "news-more" }, [
              vue.createElementVNode("text", { class: "news-datetime" }, "2021-2-1 10:25"),
              vue.createElementVNode("text", { class: "news-view" }, "30")
            ])
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "index-content" }, [
        vue.createElementVNode("view", { class: "news-item" }, [
          vue.createElementVNode("view", { class: "news-thumb" }, [
            vue.createElementVNode("image", {
              class: "news-img",
              src: _imports_0$3
            })
          ]),
          vue.createElementVNode("view", { class: "news-info" }, [
            vue.createElementVNode("text", { class: "news-title" }, "\u6D4B\u8BD5\u65B0\u95FB\u6D4B\u8BD5\u65B0\u95FB\u6D4B\u8BD5\u65B0\u95FB\u6D4B\u8BD5\u65B0\u95FB\u6D4B\u8BD5\u65B0\u95FB\u6D4B\u8BD5\u65B0\u95FB\u6D4B\u8BD5\u65B0\u95FB\u6D4B\u8BD5\u65B0\u95FB\u6D4B\u8BD5\u65B0\u95FB\u6D4B\u8BD5\u65B0\u95FB\u6D4B\u8BD5\u65B0\u95FB"),
            vue.createElementVNode("view", { class: "news-more" }, [
              vue.createElementVNode("text", { class: "news-datetime" }, "2021-2-1 10:25"),
              vue.createElementVNode("text", { class: "news-view" }, "30")
            ])
          ])
        ])
      ])
    ]);
  }
  var __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__scopeId", "data-v-c39d6ba0"], ["__file", "/Users/ulan/Documents/HBuilderProjects/ulan-uni-cms/components/news-centre/news-centre.vue"]]);
  const _sfc_main$8 = {
    name: "video-exhibit",
    data() {
      return {};
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "index-block" }, [
      vue.createElementVNode("view", { class: "index-block-title" }, [
        vue.createElementVNode("view", { class: "index-title-left" }, "\u89C6\u9891\u5C55\u793A"),
        vue.createElementVNode("view", { class: "index-title-right" }, [
          vue.createElementVNode("text")
        ])
      ]),
      vue.createElementVNode("view", { class: "index-content" }, [
        vue.createElementVNode("view", { class: "video-item" }, [
          vue.createElementVNode("video", {
            id: "myVideo",
            class: "video-size",
            src: "https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4",
            "enable-danmu": "",
            "danmu-btn": "",
            controls: ""
          })
        ])
      ])
    ]);
  }
  var __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-1deb6d14"], ["__file", "/Users/ulan/Documents/HBuilderProjects/ulan-uni-cms/components/video-exhibit/video-exhibit.vue"]]);
  var _imports_0$2 = "/static/images/index/photo-demo.jpg";
  const _sfc_main$7 = {
    name: "photo-exhibit",
    data() {
      return {};
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "index-block" }, [
      vue.createElementVNode("view", { class: "index-block-title" }, [
        vue.createElementVNode("view", { class: "index-title-left" }, "\u76F8\u518C\u5C55\u793A"),
        vue.createElementVNode("view", { class: "index-title-right" }, [
          vue.createElementVNode("text")
        ])
      ]),
      vue.createElementVNode("scroll-view", { "scroll-x": "" }, [
        vue.createElementVNode("view", { class: "photo-wrap" }, [
          vue.createElementVNode("view", { class: "photo-item" }, [
            vue.createElementVNode("image", {
              class: "photo-size",
              src: _imports_0$2
            }),
            vue.createElementVNode("text", { class: "photo-title" }, "\u76F8\u518C\u5C55\u793A")
          ]),
          vue.createElementVNode("view", { class: "photo-item" }, [
            vue.createElementVNode("image", {
              class: "photo-size",
              src: _imports_0$2
            }),
            vue.createElementVNode("text", { class: "photo-title" }, "\u76F8\u518C\u5C55\u793A")
          ]),
          vue.createElementVNode("view", { class: "photo-item" }, [
            vue.createElementVNode("image", {
              class: "photo-size",
              src: _imports_0$2
            }),
            vue.createElementVNode("text", { class: "photo-title" }, "\u76F8\u518C\u5C55\u793A")
          ]),
          vue.createElementVNode("view", { class: "photo-item" }, [
            vue.createElementVNode("image", {
              class: "photo-size",
              src: _imports_0$2
            }),
            vue.createElementVNode("text", { class: "photo-title" }, "\u76F8\u518C\u5C55\u793A")
          ])
        ])
      ])
    ]);
  }
  var __easycom_5 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-5550c17c"], ["__file", "/Users/ulan/Documents/HBuilderProjects/ulan-uni-cms/components/photo-exhibit/photo-exhibit.vue"]]);
  const _sfc_main$6 = {
    data() {
      return {};
    },
    onLoad() {
    },
    methods: {}
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_banner = resolveEasycom(vue.resolveDynamicComponent("banner"), __easycom_0$1);
    const _component_nav_icon = resolveEasycom(vue.resolveDynamicComponent("nav-icon"), __easycom_1);
    const _component_case_exhibit = resolveEasycom(vue.resolveDynamicComponent("case-exhibit"), __easycom_2);
    const _component_news_centre = resolveEasycom(vue.resolveDynamicComponent("news-centre"), __easycom_3);
    const _component_video_exhibit = resolveEasycom(vue.resolveDynamicComponent("video-exhibit"), __easycom_4);
    const _component_photo_exhibit = resolveEasycom(vue.resolveDynamicComponent("photo-exhibit"), __easycom_5);
    return vue.openBlock(), vue.createElementBlock("view", { class: "page" }, [
      vue.createCommentVNode(" \u8F6E\u64AD\u56FE "),
      vue.createVNode(_component_banner),
      vue.createCommentVNode(" \u5BFC\u822A\u56FE\u6807 "),
      vue.createVNode(_component_nav_icon),
      vue.createCommentVNode(" \u6210\u529F\u6848\u4F8B "),
      vue.createVNode(_component_case_exhibit),
      vue.createCommentVNode(" \u65B0\u95FB\u4E2D\u5FC3 "),
      vue.createVNode(_component_news_centre),
      vue.createCommentVNode(" \u89C6\u9891\u5C55\u793A "),
      vue.createVNode(_component_video_exhibit),
      vue.createCommentVNode(" \u76F8\u518C\u5C55\u793A "),
      vue.createVNode(_component_photo_exhibit),
      vue.createCommentVNode(" \u9632\u6B62tabBar\u6321\u4F4F\u9875\u9762\u5185\u5BB9 "),
      vue.createElementVNode("view", { class: "h5-tabbar-bottom" })
    ]);
  }
  var PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__file", "/Users/ulan/Documents/HBuilderProjects/ulan-uni-cms/pages/index/index.vue"]]);
  var _imports_0$1 = "/static/images/message/banner.jpg";
  const _sfc_main$5 = {
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
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "page" }, [
      vue.createElementVNode("view", { class: "banner" }, [
        vue.createElementVNode("image", {
          class: "banner-size",
          src: _imports_0$1,
          mode: "widthFix"
        })
      ]),
      vue.createElementVNode("view", { class: "form-container" }, [
        vue.createElementVNode("form", {
          onSubmit: _cache[3] || (_cache[3] = (...args) => $options.formSubmit && $options.formSubmit(...args))
        }, [
          vue.createCommentVNode(" \u59D3\u540D\u8F93\u5165\u6846 "),
          vue.createElementVNode("view", { class: "form-item" }, [
            vue.createElementVNode("text", { class: "form-left" }, "\u59D3\u540D"),
            vue.createElementVNode("view", { class: "form-right" }, [
              vue.createElementVNode("input", {
                class: "uni-input",
                name: "name",
                placeholder: "\u8BF7\u8F93\u5165\u59D3\u540D"
              })
            ])
          ]),
          vue.createCommentVNode(" \u7535\u8BDD\u8F93\u5165\u6846 "),
          vue.createElementVNode("view", { class: "form-item" }, [
            vue.createElementVNode("text", { class: "form-left" }, "\u7535\u8BDD"),
            vue.createElementVNode("view", { class: "form-right" }, [
              vue.createElementVNode("input", {
                class: "uni-input",
                name: "phone",
                placeholder: "\u8BF7\u8F93\u5165\u7535\u8BDD"
              })
            ])
          ]),
          vue.createCommentVNode(" \u884C\u4E1A\u4E0B\u62C9\u9009\u9879 "),
          vue.createElementVNode("view", { class: "form-item" }, [
            vue.createElementVNode("text", { class: "form-left" }, "\u884C\u4E1A"),
            vue.createElementVNode("view", { class: "form-right" }, [
              vue.createElementVNode("picker", {
                onChange: _cache[0] || (_cache[0] = (...args) => $options.bindPickerChange && $options.bindPickerChange(...args)),
                value: $data.index,
                range: $data.array
              }, [
                vue.createElementVNode("view", { class: "uni-input" }, vue.toDisplayString($data.array[$data.index]), 1)
              ], 40, ["value", "range"])
            ])
          ]),
          vue.createCommentVNode(" \u6027\u522B\u5355\u9009 "),
          vue.createElementVNode("view", { class: "form-item form-item-radio" }, [
            vue.createElementVNode("text", { class: "form-left" }, "\u6027\u522B"),
            vue.createElementVNode("view", { class: "form-right" }, [
              vue.createElementVNode("radio-group", {
                class: "radio-container",
                onChange: _cache[1] || (_cache[1] = (...args) => $options.changeSex && $options.changeSex(...args))
              }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.sex, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("label", {
                    class: "uni-list-cell uni-list-cell-pd radio-list",
                    key: item.value
                  }, [
                    vue.createElementVNode("view", null, [
                      vue.createElementVNode("radio", {
                        value: item.value,
                        checked: index === $data.current
                      }, null, 8, ["value", "checked"])
                    ]),
                    vue.createElementVNode("view", null, vue.toDisplayString(item.name), 1)
                  ]);
                }), 128))
              ], 32)
            ])
          ]),
          vue.createCommentVNode(" \u5E73\u53F0\u591A\u9009 "),
          vue.createElementVNode("view", { class: "form-item form-item-radio" }, [
            vue.createElementVNode("text", { class: "form-left" }, "\u5E73\u53F0"),
            vue.createElementVNode("view", { class: "form-right" }, [
              vue.createElementVNode("checkbox-group", {
                class: "radio-container",
                onChange: _cache[2] || (_cache[2] = (...args) => $options.checkboxChange && $options.checkboxChange(...args))
              }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.platform, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("label", {
                    class: "uni-list-cell uni-list-cell-pd radio-list",
                    key: item.value
                  }, [
                    vue.createElementVNode("view", null, [
                      vue.createElementVNode("checkbox", {
                        value: item.value,
                        checked: item.checked
                      }, null, 8, ["value", "checked"])
                    ]),
                    vue.createElementVNode("view", null, vue.toDisplayString(item.name), 1)
                  ]);
                }), 128))
              ], 32)
            ])
          ]),
          vue.createCommentVNode(" \u7559\u8A00 "),
          vue.createElementVNode("view", { class: "form-item form-item-radio" }, [
            vue.createElementVNode("text", { class: "form-left" }, "\u7559\u8A00"),
            vue.createElementVNode("view", { class: "form-right" }, [
              vue.createElementVNode("textarea", {
                name: "",
                id: "textarea",
                class: "textarea",
                rows: "10",
                placeholder: "\u7ED9\u6211\u7559\u8A00..."
              })
            ])
          ]),
          vue.createCommentVNode(" \u63D0\u4EA4 "),
          vue.createElementVNode("button", {
            "form-type": "submit",
            type: "primary"
          }, "\u63D0\u4EA4\u7559\u8A00"),
          vue.createCommentVNode(" \u9632\u6B62tabBar\u6321\u4F4F\u9875\u9762\u5185\u5BB9 "),
          vue.createElementVNode("view", { class: "h5-tabbar-bottom" })
        ], 32)
      ])
    ]);
  }
  var PagesConsultConsult = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "/Users/ulan/Documents/HBuilderProjects/ulan-uni-cms/pages/consult/consult.vue"]]);
  var icons = {
    "id": "2852637",
    "name": "uniui\u56FE\u6807\u5E93",
    "font_family": "uniicons",
    "css_prefix_text": "uniui-",
    "description": "",
    "glyphs": [
      {
        "icon_id": "25027049",
        "name": "yanse",
        "font_class": "color",
        "unicode": "e6cf",
        "unicode_decimal": 59087
      },
      {
        "icon_id": "25027048",
        "name": "wallet",
        "font_class": "wallet",
        "unicode": "e6b1",
        "unicode_decimal": 59057
      },
      {
        "icon_id": "25015720",
        "name": "settings-filled",
        "font_class": "settings-filled",
        "unicode": "e6ce",
        "unicode_decimal": 59086
      },
      {
        "icon_id": "25015434",
        "name": "shimingrenzheng-filled",
        "font_class": "auth-filled",
        "unicode": "e6cc",
        "unicode_decimal": 59084
      },
      {
        "icon_id": "24934246",
        "name": "shop-filled",
        "font_class": "shop-filled",
        "unicode": "e6cd",
        "unicode_decimal": 59085
      },
      {
        "icon_id": "24934159",
        "name": "staff-filled-01",
        "font_class": "staff-filled",
        "unicode": "e6cb",
        "unicode_decimal": 59083
      },
      {
        "icon_id": "24932461",
        "name": "VIP-filled",
        "font_class": "vip-filled",
        "unicode": "e6c6",
        "unicode_decimal": 59078
      },
      {
        "icon_id": "24932462",
        "name": "plus_circle_fill",
        "font_class": "plus-filled",
        "unicode": "e6c7",
        "unicode_decimal": 59079
      },
      {
        "icon_id": "24932463",
        "name": "folder_add-filled",
        "font_class": "folder-add-filled",
        "unicode": "e6c8",
        "unicode_decimal": 59080
      },
      {
        "icon_id": "24932464",
        "name": "yanse-filled",
        "font_class": "color-filled",
        "unicode": "e6c9",
        "unicode_decimal": 59081
      },
      {
        "icon_id": "24932465",
        "name": "tune-filled",
        "font_class": "tune-filled",
        "unicode": "e6ca",
        "unicode_decimal": 59082
      },
      {
        "icon_id": "24932455",
        "name": "a-rilidaka-filled",
        "font_class": "calendar-filled",
        "unicode": "e6c0",
        "unicode_decimal": 59072
      },
      {
        "icon_id": "24932456",
        "name": "notification-filled",
        "font_class": "notification-filled",
        "unicode": "e6c1",
        "unicode_decimal": 59073
      },
      {
        "icon_id": "24932457",
        "name": "wallet-filled",
        "font_class": "wallet-filled",
        "unicode": "e6c2",
        "unicode_decimal": 59074
      },
      {
        "icon_id": "24932458",
        "name": "paihangbang-filled",
        "font_class": "medal-filled",
        "unicode": "e6c3",
        "unicode_decimal": 59075
      },
      {
        "icon_id": "24932459",
        "name": "gift-filled",
        "font_class": "gift-filled",
        "unicode": "e6c4",
        "unicode_decimal": 59076
      },
      {
        "icon_id": "24932460",
        "name": "fire-filled",
        "font_class": "fire-filled",
        "unicode": "e6c5",
        "unicode_decimal": 59077
      },
      {
        "icon_id": "24928001",
        "name": "refreshempty",
        "font_class": "refreshempty",
        "unicode": "e6bf",
        "unicode_decimal": 59071
      },
      {
        "icon_id": "24926853",
        "name": "location-ellipse",
        "font_class": "location-filled",
        "unicode": "e6af",
        "unicode_decimal": 59055
      },
      {
        "icon_id": "24926735",
        "name": "person-filled",
        "font_class": "person-filled",
        "unicode": "e69d",
        "unicode_decimal": 59037
      },
      {
        "icon_id": "24926703",
        "name": "personadd-filled",
        "font_class": "personadd-filled",
        "unicode": "e698",
        "unicode_decimal": 59032
      },
      {
        "icon_id": "24923351",
        "name": "back",
        "font_class": "back",
        "unicode": "e6b9",
        "unicode_decimal": 59065
      },
      {
        "icon_id": "24923352",
        "name": "forward",
        "font_class": "forward",
        "unicode": "e6ba",
        "unicode_decimal": 59066
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrow-right",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrowthinright",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrow-left",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrowthinleft",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrow-up",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrowthinup",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrow-down",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrowthindown",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "bottom",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "arrowdown",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "right",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "arrowright",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "top",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "arrowup",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "left",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "arrowleft",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923334",
        "name": "eye",
        "font_class": "eye",
        "unicode": "e651",
        "unicode_decimal": 58961
      },
      {
        "icon_id": "24923335",
        "name": "eye-filled",
        "font_class": "eye-filled",
        "unicode": "e66a",
        "unicode_decimal": 58986
      },
      {
        "icon_id": "24923336",
        "name": "eye-slash",
        "font_class": "eye-slash",
        "unicode": "e6b3",
        "unicode_decimal": 59059
      },
      {
        "icon_id": "24923337",
        "name": "eye-slash-filled",
        "font_class": "eye-slash-filled",
        "unicode": "e6b4",
        "unicode_decimal": 59060
      },
      {
        "icon_id": "24923305",
        "name": "info-filled",
        "font_class": "info-filled",
        "unicode": "e649",
        "unicode_decimal": 58953
      },
      {
        "icon_id": "24923299",
        "name": "reload-01",
        "font_class": "reload",
        "unicode": "e6b2",
        "unicode_decimal": 59058
      },
      {
        "icon_id": "24923195",
        "name": "mic_slash_fill",
        "font_class": "micoff-filled",
        "unicode": "e6b0",
        "unicode_decimal": 59056
      },
      {
        "icon_id": "24923165",
        "name": "map-pin-ellipse",
        "font_class": "map-pin-ellipse",
        "unicode": "e6ac",
        "unicode_decimal": 59052
      },
      {
        "icon_id": "24923166",
        "name": "map-pin",
        "font_class": "map-pin",
        "unicode": "e6ad",
        "unicode_decimal": 59053
      },
      {
        "icon_id": "24923167",
        "name": "location",
        "font_class": "location",
        "unicode": "e6ae",
        "unicode_decimal": 59054
      },
      {
        "icon_id": "24923064",
        "name": "starhalf",
        "font_class": "starhalf",
        "unicode": "e683",
        "unicode_decimal": 59011
      },
      {
        "icon_id": "24923065",
        "name": "star",
        "font_class": "star",
        "unicode": "e688",
        "unicode_decimal": 59016
      },
      {
        "icon_id": "24923066",
        "name": "star-filled",
        "font_class": "star-filled",
        "unicode": "e68f",
        "unicode_decimal": 59023
      },
      {
        "icon_id": "24899646",
        "name": "a-rilidaka",
        "font_class": "calendar",
        "unicode": "e6a0",
        "unicode_decimal": 59040
      },
      {
        "icon_id": "24899647",
        "name": "fire",
        "font_class": "fire",
        "unicode": "e6a1",
        "unicode_decimal": 59041
      },
      {
        "icon_id": "24899648",
        "name": "paihangbang",
        "font_class": "medal",
        "unicode": "e6a2",
        "unicode_decimal": 59042
      },
      {
        "icon_id": "24899649",
        "name": "font",
        "font_class": "font",
        "unicode": "e6a3",
        "unicode_decimal": 59043
      },
      {
        "icon_id": "24899650",
        "name": "gift",
        "font_class": "gift",
        "unicode": "e6a4",
        "unicode_decimal": 59044
      },
      {
        "icon_id": "24899651",
        "name": "link",
        "font_class": "link",
        "unicode": "e6a5",
        "unicode_decimal": 59045
      },
      {
        "icon_id": "24899652",
        "name": "notification",
        "font_class": "notification",
        "unicode": "e6a6",
        "unicode_decimal": 59046
      },
      {
        "icon_id": "24899653",
        "name": "staff",
        "font_class": "staff",
        "unicode": "e6a7",
        "unicode_decimal": 59047
      },
      {
        "icon_id": "24899654",
        "name": "VIP",
        "font_class": "vip",
        "unicode": "e6a8",
        "unicode_decimal": 59048
      },
      {
        "icon_id": "24899655",
        "name": "folder_add",
        "font_class": "folder-add",
        "unicode": "e6a9",
        "unicode_decimal": 59049
      },
      {
        "icon_id": "24899656",
        "name": "tune",
        "font_class": "tune",
        "unicode": "e6aa",
        "unicode_decimal": 59050
      },
      {
        "icon_id": "24899657",
        "name": "shimingrenzheng",
        "font_class": "auth",
        "unicode": "e6ab",
        "unicode_decimal": 59051
      },
      {
        "icon_id": "24899565",
        "name": "person",
        "font_class": "person",
        "unicode": "e699",
        "unicode_decimal": 59033
      },
      {
        "icon_id": "24899566",
        "name": "email-filled",
        "font_class": "email-filled",
        "unicode": "e69a",
        "unicode_decimal": 59034
      },
      {
        "icon_id": "24899567",
        "name": "phone-filled",
        "font_class": "phone-filled",
        "unicode": "e69b",
        "unicode_decimal": 59035
      },
      {
        "icon_id": "24899568",
        "name": "phone",
        "font_class": "phone",
        "unicode": "e69c",
        "unicode_decimal": 59036
      },
      {
        "icon_id": "24899570",
        "name": "email",
        "font_class": "email",
        "unicode": "e69e",
        "unicode_decimal": 59038
      },
      {
        "icon_id": "24899571",
        "name": "personadd",
        "font_class": "personadd",
        "unicode": "e69f",
        "unicode_decimal": 59039
      },
      {
        "icon_id": "24899558",
        "name": "chatboxes-filled",
        "font_class": "chatboxes-filled",
        "unicode": "e692",
        "unicode_decimal": 59026
      },
      {
        "icon_id": "24899559",
        "name": "contact",
        "font_class": "contact",
        "unicode": "e693",
        "unicode_decimal": 59027
      },
      {
        "icon_id": "24899560",
        "name": "chatbubble-filled",
        "font_class": "chatbubble-filled",
        "unicode": "e694",
        "unicode_decimal": 59028
      },
      {
        "icon_id": "24899561",
        "name": "contact-filled",
        "font_class": "contact-filled",
        "unicode": "e695",
        "unicode_decimal": 59029
      },
      {
        "icon_id": "24899562",
        "name": "chatboxes",
        "font_class": "chatboxes",
        "unicode": "e696",
        "unicode_decimal": 59030
      },
      {
        "icon_id": "24899563",
        "name": "chatbubble",
        "font_class": "chatbubble",
        "unicode": "e697",
        "unicode_decimal": 59031
      },
      {
        "icon_id": "24881290",
        "name": "upload-filled",
        "font_class": "upload-filled",
        "unicode": "e68e",
        "unicode_decimal": 59022
      },
      {
        "icon_id": "24881292",
        "name": "upload",
        "font_class": "upload",
        "unicode": "e690",
        "unicode_decimal": 59024
      },
      {
        "icon_id": "24881293",
        "name": "weixin",
        "font_class": "weixin",
        "unicode": "e691",
        "unicode_decimal": 59025
      },
      {
        "icon_id": "24881274",
        "name": "compose",
        "font_class": "compose",
        "unicode": "e67f",
        "unicode_decimal": 59007
      },
      {
        "icon_id": "24881275",
        "name": "qq",
        "font_class": "qq",
        "unicode": "e680",
        "unicode_decimal": 59008
      },
      {
        "icon_id": "24881276",
        "name": "download-filled",
        "font_class": "download-filled",
        "unicode": "e681",
        "unicode_decimal": 59009
      },
      {
        "icon_id": "24881277",
        "name": "pengyouquan",
        "font_class": "pyq",
        "unicode": "e682",
        "unicode_decimal": 59010
      },
      {
        "icon_id": "24881279",
        "name": "sound",
        "font_class": "sound",
        "unicode": "e684",
        "unicode_decimal": 59012
      },
      {
        "icon_id": "24881280",
        "name": "trash-filled",
        "font_class": "trash-filled",
        "unicode": "e685",
        "unicode_decimal": 59013
      },
      {
        "icon_id": "24881281",
        "name": "sound-filled",
        "font_class": "sound-filled",
        "unicode": "e686",
        "unicode_decimal": 59014
      },
      {
        "icon_id": "24881282",
        "name": "trash",
        "font_class": "trash",
        "unicode": "e687",
        "unicode_decimal": 59015
      },
      {
        "icon_id": "24881284",
        "name": "videocam-filled",
        "font_class": "videocam-filled",
        "unicode": "e689",
        "unicode_decimal": 59017
      },
      {
        "icon_id": "24881285",
        "name": "spinner-cycle",
        "font_class": "spinner-cycle",
        "unicode": "e68a",
        "unicode_decimal": 59018
      },
      {
        "icon_id": "24881286",
        "name": "weibo",
        "font_class": "weibo",
        "unicode": "e68b",
        "unicode_decimal": 59019
      },
      {
        "icon_id": "24881288",
        "name": "videocam",
        "font_class": "videocam",
        "unicode": "e68c",
        "unicode_decimal": 59020
      },
      {
        "icon_id": "24881289",
        "name": "download",
        "font_class": "download",
        "unicode": "e68d",
        "unicode_decimal": 59021
      },
      {
        "icon_id": "24879601",
        "name": "help",
        "font_class": "help",
        "unicode": "e679",
        "unicode_decimal": 59001
      },
      {
        "icon_id": "24879602",
        "name": "navigate-filled",
        "font_class": "navigate-filled",
        "unicode": "e67a",
        "unicode_decimal": 59002
      },
      {
        "icon_id": "24879603",
        "name": "plusempty",
        "font_class": "plusempty",
        "unicode": "e67b",
        "unicode_decimal": 59003
      },
      {
        "icon_id": "24879604",
        "name": "smallcircle",
        "font_class": "smallcircle",
        "unicode": "e67c",
        "unicode_decimal": 59004
      },
      {
        "icon_id": "24879605",
        "name": "minus-filled",
        "font_class": "minus-filled",
        "unicode": "e67d",
        "unicode_decimal": 59005
      },
      {
        "icon_id": "24879606",
        "name": "micoff",
        "font_class": "micoff",
        "unicode": "e67e",
        "unicode_decimal": 59006
      },
      {
        "icon_id": "24879588",
        "name": "closeempty",
        "font_class": "closeempty",
        "unicode": "e66c",
        "unicode_decimal": 58988
      },
      {
        "icon_id": "24879589",
        "name": "clear",
        "font_class": "clear",
        "unicode": "e66d",
        "unicode_decimal": 58989
      },
      {
        "icon_id": "24879590",
        "name": "navigate",
        "font_class": "navigate",
        "unicode": "e66e",
        "unicode_decimal": 58990
      },
      {
        "icon_id": "24879591",
        "name": "minus",
        "font_class": "minus",
        "unicode": "e66f",
        "unicode_decimal": 58991
      },
      {
        "icon_id": "24879592",
        "name": "image",
        "font_class": "image",
        "unicode": "e670",
        "unicode_decimal": 58992
      },
      {
        "icon_id": "24879593",
        "name": "mic",
        "font_class": "mic",
        "unicode": "e671",
        "unicode_decimal": 58993
      },
      {
        "icon_id": "24879594",
        "name": "paperplane",
        "font_class": "paperplane",
        "unicode": "e672",
        "unicode_decimal": 58994
      },
      {
        "icon_id": "24879595",
        "name": "close",
        "font_class": "close",
        "unicode": "e673",
        "unicode_decimal": 58995
      },
      {
        "icon_id": "24879596",
        "name": "help-filled",
        "font_class": "help-filled",
        "unicode": "e674",
        "unicode_decimal": 58996
      },
      {
        "icon_id": "24879597",
        "name": "plus-filled",
        "font_class": "paperplane-filled",
        "unicode": "e675",
        "unicode_decimal": 58997
      },
      {
        "icon_id": "24879598",
        "name": "plus",
        "font_class": "plus",
        "unicode": "e676",
        "unicode_decimal": 58998
      },
      {
        "icon_id": "24879599",
        "name": "mic-filled",
        "font_class": "mic-filled",
        "unicode": "e677",
        "unicode_decimal": 58999
      },
      {
        "icon_id": "24879600",
        "name": "image-filled",
        "font_class": "image-filled",
        "unicode": "e678",
        "unicode_decimal": 59e3
      },
      {
        "icon_id": "24855900",
        "name": "locked-filled",
        "font_class": "locked-filled",
        "unicode": "e668",
        "unicode_decimal": 58984
      },
      {
        "icon_id": "24855901",
        "name": "info",
        "font_class": "info",
        "unicode": "e669",
        "unicode_decimal": 58985
      },
      {
        "icon_id": "24855903",
        "name": "locked",
        "font_class": "locked",
        "unicode": "e66b",
        "unicode_decimal": 58987
      },
      {
        "icon_id": "24855884",
        "name": "camera-filled",
        "font_class": "camera-filled",
        "unicode": "e658",
        "unicode_decimal": 58968
      },
      {
        "icon_id": "24855885",
        "name": "chat-filled",
        "font_class": "chat-filled",
        "unicode": "e659",
        "unicode_decimal": 58969
      },
      {
        "icon_id": "24855886",
        "name": "camera",
        "font_class": "camera",
        "unicode": "e65a",
        "unicode_decimal": 58970
      },
      {
        "icon_id": "24855887",
        "name": "circle",
        "font_class": "circle",
        "unicode": "e65b",
        "unicode_decimal": 58971
      },
      {
        "icon_id": "24855888",
        "name": "checkmarkempty",
        "font_class": "checkmarkempty",
        "unicode": "e65c",
        "unicode_decimal": 58972
      },
      {
        "icon_id": "24855889",
        "name": "chat",
        "font_class": "chat",
        "unicode": "e65d",
        "unicode_decimal": 58973
      },
      {
        "icon_id": "24855890",
        "name": "circle-filled",
        "font_class": "circle-filled",
        "unicode": "e65e",
        "unicode_decimal": 58974
      },
      {
        "icon_id": "24855891",
        "name": "flag",
        "font_class": "flag",
        "unicode": "e65f",
        "unicode_decimal": 58975
      },
      {
        "icon_id": "24855892",
        "name": "flag-filled",
        "font_class": "flag-filled",
        "unicode": "e660",
        "unicode_decimal": 58976
      },
      {
        "icon_id": "24855893",
        "name": "gear-filled",
        "font_class": "gear-filled",
        "unicode": "e661",
        "unicode_decimal": 58977
      },
      {
        "icon_id": "24855894",
        "name": "home",
        "font_class": "home",
        "unicode": "e662",
        "unicode_decimal": 58978
      },
      {
        "icon_id": "24855895",
        "name": "home-filled",
        "font_class": "home-filled",
        "unicode": "e663",
        "unicode_decimal": 58979
      },
      {
        "icon_id": "24855896",
        "name": "gear",
        "font_class": "gear",
        "unicode": "e664",
        "unicode_decimal": 58980
      },
      {
        "icon_id": "24855897",
        "name": "smallcircle-filled",
        "font_class": "smallcircle-filled",
        "unicode": "e665",
        "unicode_decimal": 58981
      },
      {
        "icon_id": "24855898",
        "name": "map-filled",
        "font_class": "map-filled",
        "unicode": "e666",
        "unicode_decimal": 58982
      },
      {
        "icon_id": "24855899",
        "name": "map",
        "font_class": "map",
        "unicode": "e667",
        "unicode_decimal": 58983
      },
      {
        "icon_id": "24855825",
        "name": "refresh-filled",
        "font_class": "refresh-filled",
        "unicode": "e656",
        "unicode_decimal": 58966
      },
      {
        "icon_id": "24855826",
        "name": "refresh",
        "font_class": "refresh",
        "unicode": "e657",
        "unicode_decimal": 58967
      },
      {
        "icon_id": "24855808",
        "name": "cloud-upload",
        "font_class": "cloud-upload",
        "unicode": "e645",
        "unicode_decimal": 58949
      },
      {
        "icon_id": "24855809",
        "name": "cloud-download-filled",
        "font_class": "cloud-download-filled",
        "unicode": "e646",
        "unicode_decimal": 58950
      },
      {
        "icon_id": "24855810",
        "name": "cloud-download",
        "font_class": "cloud-download",
        "unicode": "e647",
        "unicode_decimal": 58951
      },
      {
        "icon_id": "24855811",
        "name": "cloud-upload-filled",
        "font_class": "cloud-upload-filled",
        "unicode": "e648",
        "unicode_decimal": 58952
      },
      {
        "icon_id": "24855813",
        "name": "redo",
        "font_class": "redo",
        "unicode": "e64a",
        "unicode_decimal": 58954
      },
      {
        "icon_id": "24855814",
        "name": "images-filled",
        "font_class": "images-filled",
        "unicode": "e64b",
        "unicode_decimal": 58955
      },
      {
        "icon_id": "24855815",
        "name": "undo-filled",
        "font_class": "undo-filled",
        "unicode": "e64c",
        "unicode_decimal": 58956
      },
      {
        "icon_id": "24855816",
        "name": "more",
        "font_class": "more",
        "unicode": "e64d",
        "unicode_decimal": 58957
      },
      {
        "icon_id": "24855817",
        "name": "more-filled",
        "font_class": "more-filled",
        "unicode": "e64e",
        "unicode_decimal": 58958
      },
      {
        "icon_id": "24855818",
        "name": "undo",
        "font_class": "undo",
        "unicode": "e64f",
        "unicode_decimal": 58959
      },
      {
        "icon_id": "24855819",
        "name": "images",
        "font_class": "images",
        "unicode": "e650",
        "unicode_decimal": 58960
      },
      {
        "icon_id": "24855821",
        "name": "paperclip",
        "font_class": "paperclip",
        "unicode": "e652",
        "unicode_decimal": 58962
      },
      {
        "icon_id": "24855822",
        "name": "settings",
        "font_class": "settings",
        "unicode": "e653",
        "unicode_decimal": 58963
      },
      {
        "icon_id": "24855823",
        "name": "search",
        "font_class": "search",
        "unicode": "e654",
        "unicode_decimal": 58964
      },
      {
        "icon_id": "24855824",
        "name": "redo-filled",
        "font_class": "redo-filled",
        "unicode": "e655",
        "unicode_decimal": 58965
      },
      {
        "icon_id": "24841702",
        "name": "list",
        "font_class": "list",
        "unicode": "e644",
        "unicode_decimal": 58948
      },
      {
        "icon_id": "24841489",
        "name": "mail-open-filled",
        "font_class": "mail-open-filled",
        "unicode": "e63a",
        "unicode_decimal": 58938
      },
      {
        "icon_id": "24841491",
        "name": "hand-thumbsdown-filled",
        "font_class": "hand-down-filled",
        "unicode": "e63c",
        "unicode_decimal": 58940
      },
      {
        "icon_id": "24841492",
        "name": "hand-thumbsdown",
        "font_class": "hand-down",
        "unicode": "e63d",
        "unicode_decimal": 58941
      },
      {
        "icon_id": "24841493",
        "name": "hand-thumbsup-filled",
        "font_class": "hand-up-filled",
        "unicode": "e63e",
        "unicode_decimal": 58942
      },
      {
        "icon_id": "24841494",
        "name": "hand-thumbsup",
        "font_class": "hand-up",
        "unicode": "e63f",
        "unicode_decimal": 58943
      },
      {
        "icon_id": "24841496",
        "name": "heart-filled",
        "font_class": "heart-filled",
        "unicode": "e641",
        "unicode_decimal": 58945
      },
      {
        "icon_id": "24841498",
        "name": "mail-open",
        "font_class": "mail-open",
        "unicode": "e643",
        "unicode_decimal": 58947
      },
      {
        "icon_id": "24841488",
        "name": "heart",
        "font_class": "heart",
        "unicode": "e639",
        "unicode_decimal": 58937
      },
      {
        "icon_id": "24839963",
        "name": "loop",
        "font_class": "loop",
        "unicode": "e633",
        "unicode_decimal": 58931
      },
      {
        "icon_id": "24839866",
        "name": "pulldown",
        "font_class": "pulldown",
        "unicode": "e632",
        "unicode_decimal": 58930
      },
      {
        "icon_id": "24813798",
        "name": "scan",
        "font_class": "scan",
        "unicode": "e62a",
        "unicode_decimal": 58922
      },
      {
        "icon_id": "24813786",
        "name": "bars",
        "font_class": "bars",
        "unicode": "e627",
        "unicode_decimal": 58919
      },
      {
        "icon_id": "24813788",
        "name": "cart-filled",
        "font_class": "cart-filled",
        "unicode": "e629",
        "unicode_decimal": 58921
      },
      {
        "icon_id": "24813790",
        "name": "checkbox",
        "font_class": "checkbox",
        "unicode": "e62b",
        "unicode_decimal": 58923
      },
      {
        "icon_id": "24813791",
        "name": "checkbox-filled",
        "font_class": "checkbox-filled",
        "unicode": "e62c",
        "unicode_decimal": 58924
      },
      {
        "icon_id": "24813794",
        "name": "shop",
        "font_class": "shop",
        "unicode": "e62f",
        "unicode_decimal": 58927
      },
      {
        "icon_id": "24813795",
        "name": "headphones",
        "font_class": "headphones",
        "unicode": "e630",
        "unicode_decimal": 58928
      },
      {
        "icon_id": "24813796",
        "name": "cart",
        "font_class": "cart",
        "unicode": "e631",
        "unicode_decimal": 58929
      }
    ]
  };
  const getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$4 = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: icons.glyphs
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v) => v.font_class === this.type);
        if (code) {
          return unescape(`%u${code.unicode}`);
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("text", {
      style: vue.normalizeStyle({ color: $props.color, "font-size": $options.iconSize }),
      class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
      onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
    }, null, 6);
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-a2e81f6e"], ["__file", "/Users/ulan/Documents/HBuilderProjects/ulan-uni-cms/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  const _sfc_main$3 = {
    data() {
      return {};
    },
    methods: {
      callPhone() {
        uni.makePhoneCall({
          phoneNumber: "12345678910"
        });
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "page" }, [
      vue.createElementVNode("view", { class: "banner" }, [
        vue.createElementVNode("image", {
          class: "banner-size",
          src: "/static/images/connect/banner.jpg",
          mode: "widthFix"
        })
      ]),
      vue.createElementVNode("view", { class: "connect-wrap" }, [
        vue.createCommentVNode(" \u7535\u8BDD "),
        vue.createElementVNode("view", { class: "connect-item" }, [
          vue.createElementVNode("view", { class: "connect-left" }, [
            vue.createVNode(_component_uni_icons, {
              class: "connect-icon",
              type: "phone-filled",
              size: "24",
              color: "#5E6D82"
            }),
            vue.createElementVNode("text", null, "12345678910")
          ]),
          vue.createElementVNode("text", {
            class: "connect-right-color",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.callPhone && $options.callPhone(...args))
          }, "\u62E8\u6253\u7535\u8BDD")
        ]),
        vue.createCommentVNode(" qq "),
        vue.createElementVNode("view", { class: "connect-item" }, [
          vue.createElementVNode("view", { class: "connect-left" }, [
            vue.createVNode(_component_uni_icons, {
              class: "connect-icon",
              type: "qq",
              size: "24",
              color: "#5E6D82"
            }),
            vue.createElementVNode("text", null, "123456")
          ])
        ]),
        vue.createCommentVNode(" \u90AE\u7BB1 "),
        vue.createElementVNode("view", { class: "connect-item" }, [
          vue.createElementVNode("view", { class: "connect-left" }, [
            vue.createVNode(_component_uni_icons, {
              class: "connect-icon",
              type: "email-filled",
              size: "24",
              color: "#5E6D82"
            }),
            vue.createElementVNode("text", null, "123456@qq.com")
          ])
        ]),
        vue.createCommentVNode(" \u4F4D\u7F6E "),
        vue.createElementVNode("view", { class: "connect-item" }, [
          vue.createElementVNode("view", { class: "connect-left" }, [
            vue.createVNode(_component_uni_icons, {
              class: "connect-icon",
              type: "location-filled",
              size: "24",
              color: "#5E6D82"
            }),
            vue.createElementVNode("text", null, "\u5E7F\u4E1C\u6DF1\u5733")
          ]),
          vue.createElementVNode("text", null, "\u5730\u56FE")
        ])
      ])
    ]);
  }
  var PagesConnectConnect = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "/Users/ulan/Documents/HBuilderProjects/ulan-uni-cms/pages/connect/connect.vue"]]);
  var _imports_0 = "/static/images/me/header.jpg";
  const _sfc_main$2 = {
    data() {
      return {};
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "page" }, [
      vue.createElementVNode("view", { class: "header" }, [
        vue.createElementVNode("view", { class: "header-img" }, [
          vue.createElementVNode("image", {
            class: "header-img-size",
            src: _imports_0,
            mode: ""
          })
        ]),
        vue.createElementVNode("text", { class: "nickname" }, "\u5E7D\u84DD")
      ]),
      vue.createElementVNode("view", { class: "cells" }, [
        vue.createElementVNode("navigator", {
          url: "/pages/web/web?url=https://diyulan.me",
          class: "cell"
        }, [
          vue.createVNode(_component_uni_icons, {
            class: "header-icon",
            type: "info",
            size: "30",
            color: "#5E6D82"
          }),
          vue.createElementVNode("text", { class: "title" }, "\u5173\u4E8E\u6211\u4EEC")
        ]),
        vue.createElementVNode("view", { class: "cell" }, [
          vue.createVNode(_component_uni_icons, {
            class: "header-icon",
            type: "person-filled",
            size: "30",
            color: "#5E6D82"
          }),
          vue.createElementVNode("text", { class: "title" }, "\u5BA2\u670D\u5E2E\u52A9")
        ])
      ])
    ]);
  }
  var PagesMeMe = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "/Users/ulan/Documents/HBuilderProjects/ulan-uni-cms/pages/me/me.vue"]]);
  const _sfc_main$1 = {
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
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("web-view", { src: $data.url }, null, 8, ["src"])
    ]);
  }
  var PagesWebWeb = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "/Users/ulan/Documents/HBuilderProjects/ulan-uni-cms/pages/web/web.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/consult/consult", PagesConsultConsult);
  __definePage("pages/connect/connect", PagesConnectConnect);
  __definePage("pages/me/me", PagesMeMe);
  __definePage("pages/web/web", PagesWebWeb);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  var App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/ulan/Documents/HBuilderProjects/ulan-uni-cms/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
