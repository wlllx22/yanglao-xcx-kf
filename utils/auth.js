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
const throttle = require("throttle.js");
const userApi = require("../api/user");
const sessionApi = require("../api/session");
module.exports = {
  setUserToken: function (token) {
    // 保存下服务器返回的token
    const app = getApp();
    // 设置本地缓存
    wx.setStorageSync("token", token);
    // 在globalData中标记登录状态
    app.globalData.token = token;
    app.globalData.LOGIN_FLAG = 1;
    // 设置回退刷新数据
    app.globalData.backToReload = true;
  },

  loginHandle: function (code, e, cb) {
    console.log("loginHandle:", code, e, cb);
    // 微信授权登录
    const app = getApp();
    var _this = this;
    // 注意，code 需要在getUserInfo之前获取到，否则会导致登录失败
    // 2中登录方式，api/v1 : 账号授权登录    api/v2： 手机号授权登录
    if (
      e.detail.errMsg != "getUserInfo:ok" &&
      e.detail.errMsg != "getPhoneNumber:ok"
    ) {
      wx.showModal({
        title: "操作失败",
        content: "请允许微信授权，才能正常登录账号哦",
        showCancle: false,
      });
      console.error("授权时候出错", e);
      return;
    }
    var detail = e.detail;
    if (detail.errMsg == "getPhoneNumber:ok") {
      console.log("用户同意授权");
    }
    // 换取服务器的token
    var phoneCode = detail.code;
    var encryptedData = e.detail.encryptedData;
    var iv = e.detail.iv;
    // 获取token，并刷新 user info
    var data = {
      phoneCode: phoneCode,
      code: code,
      encryptedData: encryptedData,
      iv: iv,
    };

    // 发送给服务器

    sessionApi.wechatLogin(code, encryptedData, iv, phoneCode).then((resp) => {
      console.log("wechatLogin:", resp, resp.data);
      var res = resp.data;
      if (res.code == 0) {
        // 保存下服务器返回的token
        var data = res.data;
        var token = data.accessToken;
        _this.setUserToken(token);
        // TODO 拉取用户资料
        _this.setUserInfo(cb);
      } else {
        wx.showToast({
          icon: "none",
          title: "授权失败",
        });
      }
    });
  },

  logout: function () {
    // 退出登录，清空token和缓存信息
    const app = getApp();
    wx.setStorage({
      key: "userInfo",
      data: null,
    });
    wx.setStorage({
      key: "token",
      data: null,
    });
    app.LOGIN_FLAG = 0; // 登录标志位
  },

  ensureUser: function (cb) {
    const app = getApp();
    var _this = this;
    var user = wx.getStorageSync("userInfo");

    // 去登录页面
    if (app.globalData.LOGIN_FLAG != 1) {
      console.log(
        "没有从globalData中获取到token,跳转到登录页面",
        app.globalData
      );

      throttle.throttle(function (e) {
        console.log("由截流函数执行");
        wx.hideLoading();
        wx.navigateTo({
          url: "/pkgAuth/pages/auth/index",
        });
      }, 1000)();
      return;
    }
    return typeof cb == "function" && cb(user);
  },

  setUserInfo: function (cb) {
    const app = getApp();
    /* 从服务器获取用户信息并保存到localstorage中 */
    userApi.getMyselfInfo().then((resp) => {
      console.log("2.getMyselfInfo:", resp);
      console.log("2.getMyselfInfo:", resp.data.code);
      if (resp.data.code != 0) {
        console.log("2.拉取当前登录用户信息时候出错，请检查loadUserInfo方法");
        return false;
      }
      var user = resp.data.data;
      // 存入本地
      wx.setStorageSync("userInfo", user);
      app.globalData.userInfo = user;
      typeof cb == "function" && cb(user);
    });
  },
};
