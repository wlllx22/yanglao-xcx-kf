/**
 * +----------------------------------------------------------------------
 * | 容易养老  - 开启家政营销新纪元
 * +----------------------------------------------------------------------
 * | Copyright (c) 2024 容易科技技术支持
 * +----------------------------------------------------------------------
 * | 2024
 * +----------------------------------------------------------------------
 * | Author: www.test.com
 * +----------------------------------------------------------------------
 */
// components/pagemaker/banners/index.js
const link = require("../link");
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  observers: {},

  /**
   * 组件的初始数据
   */
  data: {
    heightValue: "150rpx",
    shareModel: {
      title: "[梁海媛]保姆|厨师|育婴师|白班阿姨，广西人，9年经验【广…",
      path: "pages/test/test",
      description:
        "梁海媛，今年48岁，有9年的保姆、厨师、育婴师、白班阿姨工作经验，籍贯广….",
      imageUrl:
        "https://yl.s2g2b2c.com/admin-api/infra/file/24/get/avatar/2410111000000004423_avatar.png",
      fromButton: "one",
      success: function (res) {
        console.log( "分享成功" );
      },
      fail: function (res) {
        console.log( "分享失败" );
      },
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    linkHandle: function (e) {
      wx.showModal({
        title: "未设置公众号",
        content: "请在关注组件中设置公众号，设置后可点击关注",
        complete: (res) => {},
      });
    },
    shareHandle: function (e) {
      console.log("shareHandle", e);
      // 调用分享功能
      this.triggerEvent("onShareAppMessage");
    },
  },
});
