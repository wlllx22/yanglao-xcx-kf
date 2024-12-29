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
// pages/post/index.js
const app = getApp();
const postApi = require("../../../api/post");
// const scoreApi = require("../../../api/score")
const shareApi = require("../../../api/share");
const historyApi = require("../../../api/history");
var wxCharts = require("../../../utils/wxcharts-min");
const themes = [
  {
    color: "#3A6BDD",
    bgImg:
      "https://tcdn.udeve.net/fang2021/6eed67a9-7a5c-4a64-be48-d81221ca3ac0.png",
  },
  {
    color: "#30DFBB",
    bgImg:
      "https://tcdn.udeve.net/fang2021/40f109f6-8ec0-4bb2-8483-8a073fa2a294.png",
  },
];
Page({
  /**
   * 页面的初始 数据
   */
  data: {
    showNavBack: false, // 是否显示返回按钮
    blocks: [],
    points: [],
    pageTitle: "家政员详情",
    pageCover: "",
    pageUrl: "/pkgPost/pages/show/index?post_id=",
    postInfo: null,
    postId: "",
    brokerId: null,
    color: "#3A6BDD",
    bgImg:
      "https://tcdn.udeve.net/fang2021/6eed67a9-7a5c-4a64-be48-d81221ca3ac0.png",
    theme: "theme1",
    showTab: false,
    StatusBarHeight: null,
    pageDomTop: [],
    tabActive: "types",
    vanTabs: [],

    loading: true,
    broker: null, // 联系人卡片
    visitorLogId: null,
    contactInfo: {},
    bannersInfo: {},
    debug: false,
    user: {},

    showShareBox: false,
    title: "",
    imageUrl: "",
    bgOpacity: 0,
  },
  backHandle: function () {
    wx.navigateBack({
      delta: 1,
    });
  },

  tabChange: function (e) {
    // console.log(e.detail.name)
    var name = e.detail.name;
    var offsetTop = this.data.StatusBarHeight;
    wx.pageScrollTo({
      selector: "#" + name,
      duration: 300,
      offsetTop: -offsetTop,
      success(resp) {
        console.log("成功", resp);
      },
      fail(resp) {
        console.log("失败", resp);
      },
    });
  },
  pageTopChange: function (e) {
    var statusBarHeight = this.data.StatusBarHeight;
    var vanTabs = this.data.vanTabs;
    var pageDomTop = this.data.pageDomTop;
    for (let i = 0; i < pageDomTop.length; i++) {
      if (e + statusBarHeight < pageDomTop[i]) {
        this.setData({
          tabActive: vanTabs[i],
        });
        // console.log('7777',e,i)
        break;
      }
    }
  },
  getVanTabs(blocks) {
    var vanTabs = [];
    blocks.map((p) => {
      console.log("vanTabs.push(p.name):", p);
      vanTabs.push(p.name);
    });
    this.setData({
      tabActive: vanTabs[0],
      vanTabs: vanTabs,
    });
  },
  onPageScroll: function (e) {
    var scrollTop = e.scrollTop;
    this.setOpacity(scrollTop, 500);
    this.setShowTab(scrollTop);
    this.pageTopChange(scrollTop);
  },

  getPageDom: function () {
    var _this = this;
    var query = wx.createSelectorQuery();
    setTimeout(() => {
      query
        .selectAll(".block")
        .boundingClientRect()
        .exec(function (res) {
          var pageDomTop = [];
          // console.log('8888',res)
          for (let i = 0; i < res[0].length; i++) {
            pageDomTop.push(res[0][i].bottom);
          }
          _this.setData({
            pageDomTop: pageDomTop,
          });
        });
    }, 500);
  },

  setOpacity: function (scrollTop, maxTop) {
    var opacity = 0;
    if (scrollTop <= maxTop) {
      opacity = scrollTop / maxTop;
    } else {
      opacity = 1;
    }
    this.setData({
      bgOpacity: opacity,
    });
  },
  getStatusBarHeight() {
    var _this = this;
    wx.getSystemInfo({
      success: (result) => {
        _this.setData({
          StatusBarHeight: result.statusBarHeight,
        });
      },
    });
  },
  setShowTab(st) {
    var _this = this;
    wx.getSystemInfo({
      success: (result) => {
        var screenWidth = result.screenWidth;
        var StatusBarHeight = result.statusBarHeight;
        if (
          parseInt(st + StatusBarHeight + 88) >
          parseInt((screenWidth / 750) * 520)
        ) {
          this.setData({
            showTab: true,
          });
        }
        if (
          parseInt(st + StatusBarHeight + 88) <
          parseInt((screenWidth / 750) * 520)
        ) {
          this.setData({
            showTab: false,
          });
        }
      },
    });
  },

  backTo(e) {
    // console.log(e.detail.delta)
    wx.navigateBack({
      delta: e.detail.delta,
    });
    if (e.detail.delta == 1) {
      wx.reLaunch({
        url: "/pages/home/home",
      });
    }
  },

  homeHandle: function () {
    wx.switchTab({
      url: "/pages/home/home",
      success: (result) => {},
    });
  },

  gotoSubpage: function (name) {
    // 跳转进入子页面
    var pid = this.data.postId;
    var url = null;
    switch (name) {
      case "xiangce":
        url = "/pkgXiangce/pages/xiangce/index?post_id=" + pid;
        break;
      case "yfyj":
        url = "/pkgYfyj/pages/yfyj/index?post_id=" + pid;
        break;
      case "vr":
        url = "/pkgVr/pages/vr/index?post_id=" + pid;
        break;
    }

    if (!url) {
      return;
    }
    wx.navigateTo(url);
  },

  loadPostBannerInfo: function (params) {
    var _this = this;
    postApi.getPostBannerInfo(_this.data.postId).then((resp) => {
      if (resp.data.code != 0) {
        return;
      }
      // console.log("bannersInfo: resp.data", resp.data);
      _this.setData({
        bannersInfo: resp.data.data,
      });
    });
  },

  loadPostBlocks: function () {
    var _this = this;
    var query = {};
    if (app.globalData.sourceUid) {
      query.source_uid = app.globalData.sourceUid;
    }
    console.log("---------loadPostBlocks info3-_this", _this.data);
    // √
    postApi
      .getPostBlocks(_this.data.postId)
      .then((resp) => {
        console.log("---------loadPostBlocks info3-resp", resp);
        wx.stopPullDownRefresh();
        wx.hideNavigationBarLoading();
        wx.stopPullDownRefresh(); //停止下拉刷新

        var user = _this.data.user;
        var data = {};
        data.pageQuery = "id=" + _this.data.postId;
        if (user && user.is_broker) {
          data.pageQuery += "&broker_uid=" + user.id;
        }
        data.loading = false;
        // data.blocks = resp.data.data
        data.blocks = [
          { name: "info", label_short: "信息" },
          { name: "types", label_short: "户型" },
          { name: "brokers", label_short: "顾问" },
          { name: "qas", label_short: "问答" },
          { name: "news", label_short: "资讯" },
          { name: "events", label_short: "动态" },
          { name: "tours", label_short: "活动" },
          { name: "recoms", label_short: "推荐" },
          { name: "points", label_short: "评分" },
          { name: "xiangce", label_short: "相册" },
          { name: "html", label_short: "顾问" },
        ];
        //data.navs = resp.data.navs
        //data.bannersInfo = resp.data.banners
        //data.broker = resp.data.broker

        _this._setPostInfo(resp.data.data);

        console.log("---------loadPostBlocks info3-get postInfo", this.data.postInfo);
        _this.getVanTabs(data.blocks);
        // _this.getVanTabs(resp.data.data)
        _this.setData(data, () => {
          wx.showShareMenu({
            withShareTicket: true,
            menus: ["shareAppMessage", "shareTimeline"],
          });
        });
      })
      .catch((res) => {
        wx.showToast({
          title: "页面渲染错误",
          icon: "error",
          image: "",
          duration: 1500,
          mask: true,
        });
        console.error("页面渲染错误:", res);
      });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("1详情主页show--options info", options);

    // 默认先关闭分享按钮，数据加载完后再开启
    wx.hideShareMenu({
      menus: ["shareAppMessage", "shareTimeline"],
    });
    var _this = this;

    var qrdata = app.globalData.qrdata;
    // 将二维码携带的额外参数和options合并
    // 原因是options的参数长度有限，防止参数失效
    if (qrdata) {
      options = Object.assign(qrdata);
      app.globalData.qrdata = null;
    }
    var postId = options.id || options.post_id;

    console.log(
      "2详情主页show--options info -postId",
      postId,
      options,
      _this.data
    );
    _this.setData({
      postId: postId + "",
      t0: new Date().getTime(),
    });
    app.ensureConfigs(function (configs) {
      _this.setData({
        configs: configs,
      });
    });

    _this.createHistory(postId);
    wx.setStorageSync("bindPostId", postId);
    var sourceUid = options.source_uid;
    app.globalData.sourceUid = sourceUid;

    _this.setData(
      {
        postId: postId,
        t0: new Date().getTime(),
      },
      () => {
        _this.loadData();
        _this.gotoSubpage(options.subpage);
      }
    );

    _this.getStatusBarHeight();
    this.showLogin();

    if (options.broker_uid) {
      this.setData({
        brokerId: options.broker_uid,
      });
    }
  },

  createHistory(id) {
    console.log("详情主页createHistory--options info", id);
    historyApi
      .createHistory({
        target_type: "post",
        target_id: id,
      })
      .then((resp) => {
        if (resp.data.status != 0) {
          return;
        }
      });
  },

  showLogin: function () {
    // 弹出登录授权窗口
    if (app.globalData.token) {
      return;
    }

    setTimeout(() => {
      this.selectComponent(".loginwindow").openWindow();
      return;
    }, 10000);
  },

  markHistory: function () {
    // 记录访问历史
    var cacheKey = "post.history";
    var cacheValue = wx.getStorageSync(cacheKey) || [];
    var d = new Date();
    var y = d.getFullYear();
    var m = d.getMonth() + 1;
    var day = d.getDate();
    var today = y + "-" + m + "-" + day;

    if (cacheValue.length >= 1) {
      for (let i = 0; i < cacheValue.length; i++) {
        if (cacheValue[i].post.id == this.data.postId) {
          // console.log("出现过了")
          return;
        }
      }
    }
    cacheValue.push({
      date: today,
      post: wx.getStorageSync("post_base_info." + this.data.postId),
    });
    wx.setStorage({
      data: cacheValue,
      key: cacheKey,
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("---------onReady Info-data", this.data);
    // 页面渲染完成后
    this.drawRadar();
    //获取经纬度
    //setTimeout(this.getPageDom(),500)
    this.getPageDom();
  },

  drawRadar() {
    let windowWidth = 320;
    try {
      let res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      // do something when get system info failed
    }
    this.radarChart = new wxCharts({
      canvasId: "radarCanvas",
      type: "radar",
      background: "#D1E8FF",
      categories: ["区域发展", "周边设施", "交通概况", "小区环境", "室内体验"],
      series: [
        {
          name: "综合评分",
          data: [90, 110, 125, 95, 87],
          color: "#1989fa",
        },
      ],
      width: windowWidth,
      height: 200,
      extra: {
        radar: {
          max: 150,
          labelColor: "#333",
        },
      },
    });
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("---------onShow Info-data", this.data);
    var pages = getCurrentPages();
    // console.log('pages', pages)
    var showNavBack = false;
    if (pages.length > 1) {
      showNavBack = true;
    }
    var user = app.globalData.userInfo;

    this.setData({
      userInfo: app.globalData.userInfo,
      showNavBack: showNavBack,
      user: user,
    });
    if (!this.data.loading) {
      this.loadData();

      setTimeout(() => {
        wx.hideLoading();
      }, 3000);
    }

    if (app.globalData.backToReload) {
      this.loadData();
      app.globalData.backToReload = false;
    }
  },

  loadData: function () {
    this.loadPostBlocks();
    this.loadPostBaseInfo();
    this.loadPostBannerInfo();
  },

  _setPostInfo: function (post, cb) {
    console.log("---------_setPostInfo Info-post", post);
    var data = {};
    data.postInfo = post;
    data.postId = post.id;
    data.brokerId = "";
    data.pageTitle = post.name;
    data.pageCover = post.avatar;
    console.log('set post info', post)
    wx.setNavigationBarTitle({ title: post.name });
    this.setData(data, () => {
      typeof cb == "function" && cb(post);
    });
  },

  // _setTheme: function (q, img) {
  //     console.log(q);
  //     if (q && q.substring(0, 1) == "#") {
  //         this.setData({
  //             color: q
  //         })
  //     } else {
  //         themes.map((t, i) => {
  //             if (q == ('theme' + (i + 1))) {
  //                 this.setData({
  //                     color: t.color,
  //                     bgImg: t.bgImg,
  //                     theme: q
  //                 })
  //                 return
  //             }
  //         })
  //     }
  //     if (img) {
  //         this.setData({
  //             bgImg: img
  //         })
  //     }
  // },

  loadPostBaseInfo: function (cb) {
    // 加载楼盘的基本信息
    var _this = this;
    postApi.getPostBaseInfo(this.data.postId).then((resp) => {
      var post = resp.data.data;
      // _this._setTheme(post.theme, post.header_image)
      _this._setPostInfo(post, cb);
    });
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
  onPullDownRefresh: function () {
    this.setData({ loading: true });
    this.loadData();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  onShareAppMessage: function () {
    var _this = this;
    const promise = new Promise((resolve) => {
      //  √

      var data = {
        uid: wx.getStorageSync("visitorUid"),
        score_config_key: "share_post",
        share_complete_path:
          "/pkgPost/pages/show/index?" +
          _this.data.pageQuery +
          "&scene_key=wechat",
        title: _this.data.pageTitle,
      };
      shareApi.createShareLog(data).then((resp) => {
        if (resp.data.status == 0 && resp.data.data != 0) {
          var shareId = resp.data.data;
        }
        resolve({
          title: _this.data.pageTitle,
          imageUrl: _this.data.pageCover,
          path: "/pkgShare/pages/index?id=" + shareId,
        });
      });
    });
    return {
      title: _this.data.pageTitle,
      path: "pages/post/post?" + _this.data.pageQuery + "&scene_key=wechat",
      imageUrl: _this.data.pageCover,
      promise,
    };
  },

  onShareTimeline: function () {
    var _this = this;
    return {
      title: _this.data.pageTitle,
      query: _this.data.pageQuery + "&scene_key=timeline",
      imageUrl: _this.data.pageCover,
      promise,
    };
  },
});
