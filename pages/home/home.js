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
// pages/home/home.js
const app = getApp();
const request = require("../../utils/request");
const shareApi = require("../../api/share");

Page({
  /**
   * 页面的初始数据
   */

  data: {
    loading: true,
    shareTitle: "容易养老小程序",
    shareCover: "",
    btns: [
      {
        size: 100,
        public: true,
        innerText: "月",
        link: '{"cat":"page","opentype":"","path":"/pkgPost/pages/index/index?district_id=1","appid":"","apppath":"","function":"","url":"","customPath":true}',
        name: "月嫂",
        iconUrl: "https://tcdn.udeve.net/udyk/65bb629ee4b0bee2ad943894.png",
        id: 1712153796698,
      },
      {
        size: 100,
        public: true,
        innerText: "育",
        link: '{"cat":"page","opentype":"","path":"/pkgPost/pages/index/index?district_id=4","appid":"","apppath":"","function":"","url":"","customPath":true}',
        name: "育婴师",
        iconUrl: "https://tcdn.udeve.net/udyk/65bb6290e4b0bee2ad943893.png",
        id: 1712153925425,
      },
      {
        size: 100,
        public: true,
        innerText: "保",
        link: '{"cat":"page","opentype":"","path":"/pkgPost/pages/index/index?district_id=5","appid":"","apppath":"","function":"","url":"","customPath":true}',
        name: "保姆",
        iconUrl: "https://tcdn.udeve.net/udyk/65bb6281e4b0bee2ad943892.png",
        id: 1712153982395,
      },
      {
        size: 100,
        public: true,
        innerText: "老",
        link: '{"cat":"page","opentype":"","path":"/pkgPost/pages/index/index?district_id=6","appid":"","apppath":"","function":"","url":"","customPath":true}',
        name: "老年护理",
        iconUrl: "https://tcdn.udeve.net/udyk/65bb6272e4b0bee2ad943891.png",
        id: 1712154035708,
      },
      {
        size: 100,
        public: true,
        innerText: "病",
        link: '{"cat":"page","opentype":"","path":"/pkgPost/pages/index/index?district_id=9","appid":"","apppath":"","function":"","url":"","customPath":true}',
        name: "病患陪护",
        iconUrl: "https://tcdn.udeve.net/udyk/65bb6261e4b0bee2ad943890.png",
        id: 1712154136937,
      },
      // {
      //     "size": "100",
      //     "public": true,
      //     "link": "{\"cat\":\"page\",\"opentype\":\"navigateTo\",\"path\":\"/pkgPost/pages/index/index\",\"appid\":\"\",\"apppath\":\"\",\"function\":\"\",\"url\":\"\"}",
      //     "name": "热门楼盘",
      //     "iconUrl": "https://tcdn.udeve.net/udyk/65ddabce8ecaa4eb12d7bc69.png"
      // },
      {
        size: 100,
        public: true,
        link: '{"cat":"page","opentype":"navigateTo","path":"/pages/want/index","appid":"","apppath":"","function":"","url":""}',
        name: "帮找家政",
        iconUrl: "https://tcdn.udeve.net/udyk/660cae288eca9b2a88286093.png",
      },
      {
        size: "100",
        public: true,
        link: '{"cat":"page","opentype":"navigateTo","path":"/pkgErshou/pages/create","appid":"","apppath":"","function":"","url":""}',
        name: "增加简历",
        iconUrl: "https://tcdn.udeve.net/udyk/660cae898eca9b2a88286094.png",
      },
      // {
      //     "size": "100",
      //     "public": true,
      //     "link": "{\"cat\":\"page\",\"opentype\":\"navigateTo\",\"path\":\"/pkgBroker/pages/broker/join?group_value=broker\",\"appid\":\"\",\"apppath\":\"\",\"function\":\"\",\"url\":\"\"}",
      //     "name": "顾问入驻",
      //     "iconUrl": "https://tcdn.udeve.net/udyk/65e03f7e8eca1a2060df32c1.png"
      // },
      // {
      //     "size": "100",
      //     "public": true,
      //     "link": "{\"cat\":\"page\",\"opentype\":\"navigateTo\",\"path\":\"/pkgJisuanqi/pages/daikuan/index\",\"appid\":\"\",\"apppath\":\"\",\"function\":\"\",\"url\":\"\"}",
      //     "name": "房贷计算",
      //     "iconUrl": "https://tcdn.udeve.net/udyk/660caf138eca2b4e71e23a40.png"
      // },
      // {
      //     "size": 100,
      //     "public": false,
      //     "link": "{\"cat\":\"page\",\"opentype\":\"navigateTo\",\"path\":\"/pkgTour/pages/tourList/index\",\"appid\":\"\",\"apppath\":\"\",\"function\":\"\",\"url\":\"\",\"customPath\":true}",
      //     "name": "热门活动",
      //     "iconUrl": "https://tcdn.udeve.net/udyk/660cb11a8eca2b4e71e23a44.png",
      //     "id": 1712153517405
      // },
      // {
      //     "size": 100,
      //     "public": false,
      //     "link": "{\"cat\":\"page\",\"opentype\":\"navigateTo\",\"path\":\"/pkgVideo/pages/video/index\",\"appid\":\"\",\"apppath\":\"\",\"function\":\"\",\"url\":\"\"}",
      //     "name": "视频看家政",
      //     "iconUrl": "https://tcdn.udeve.net/udyk/65ee50f5e4b066b2ee17f692.png",
      //     "id": 1712153513003
      // }
    ],
  },

  /** 下拉刷新
   *
   */
  onPullDownRefresh: function () {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;

    app.ensureConfigs((myconfigs) => {
      _this.setData({
        btnColor: myconfigs.color.primary_btn,
        color: myconfigs.color.primary,
      });
      var bgColor = myconfigs.color.primary;
      wx.setNavigationBarColor({
        frontColor: "#ffffff",
        backgroundColor: bgColor,
      });
      wx.setNavigationBarTitle({
        title: "容易养老小程序",
      });
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.checkoutApiHost();
  },

  checkoutApiHost() {
    if (!request.apiHost) {
      wx.redirectTo({
        url: "/pages/error-message/index?key=noapi",
      });
    }
    if (request.apiHost.includes("http://")) {
      if (wx.getStorageSync("showduankouapi")) {
        return;
      }
      wx.setStorageSync("showduankouapi", true);
      wx.redirectTo({
        url: "/pages/error-message/index?key=duankouapi",
      });
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // this.selectComponent('.pm').onReachBottom()
  },

  /**
   * 用户点击右上角分享
   */

  onShareAppMessage: function (res) {
    let shareInfo = res.target.dataset.shareinfo;
    console.log("shareInfo:", shareInfo);
    if (shareInfo) {
      return shareInfo;
    }

    var _this = this;
    var path = "/pkgShare/pages/index";
    const promise = new Promise((resolve) => {
      // √
      var data = {
        uid: wx.getStorageSync("visitorUid"),
        score_config_key: "share_home",
        share_complete_path: "/pages/home/home",
        title: _this.data.shareTitle,
      };
      shareApi.createShareLog(data).then((resp) => {
        if (resp.data.status == 0 && resp.data.data != 0) {
          var shareId = resp.data.data;
          path += "?id=" + shareId;
        }
        resolve({
          title: _this.data.shareTitle,
          imageUrl: _this.data.shareCover,
          path: path,
        });
      });
    });

    return {
      title: _this.data.shareTitle,
      imageUrl: _this.data.shareCover,
      promise,
    };
  },
  onShareTimeline: function () {
    var _this = this;
    return {
      title: _this.data.shareTitle,
      imageUrl: _this.data.shareCover,
    };
  },
});
