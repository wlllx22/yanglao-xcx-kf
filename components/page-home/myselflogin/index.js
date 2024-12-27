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
// components/pagemaker/myselflogin/index.js
const app = getApp()
const userApi =  require("../../../api/user")
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  ready() {
    var user = wx.getStorageSync('userInfo');
    this.setData({
      userInfo: user
    })
    var _this = this
    app.ensureConfigs(function (configs) {
      _this.setData({
        primaryColor: configs.color.primary,
      })
    })
  },

  /**
   * 组件的初始数据
   */
  data: {
    userInfo: null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    gotoLoginPage: function (e) {
      wx.navigateTo({
        url: '/pkgAuth/pages/auth/index',
      })
    },
    onShow() {
      if(app.globalData.LOGIN_FLAG != 1){
        return
      }
      var _this = this
      userApi.getMyselfInfo().then((resp) => {
        if (resp.data.code != 0) {
          console.log("1.拉取当前登录用户信息时候出错，请检查loadUserInfo方法")
          return false;
        }
        var user = resp.data.data
        // 存入本地
        wx.setStorageSync('userInfo', user);
        app.globalData.userInfo = user;
        _this.setData({
          userInfo: user
        })
      })
    }
  }
})