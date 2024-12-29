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
// components/page-contact/index.js
const app = getApp()
const brokerApi = require("../../api/broker")
const postApi = require("../../api/post")
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    pid: {
      type: String,
      value: null
    },
    brokerId: {type: String, value: null},
  },

  observers: {
    "pid": function (pid) {

      console.log("---------f分享 postApi.getPostBaseInfo3:",pid) 
      if (!pid) {
        return
      }
      this.properties.pid = pid
      // load broker info 
      var _this = this
      var query = {
        post_id: pid,
        per_page: 999
      }
      console.log("--------- postApi.getPostBaseInfo3:",this.properties) 
      _this.loadPostBaseInfo()
      // TODO get from cache 
      brokerApi.getBrokerList(query).then((resp) => {
        if (resp.data.code != 0) {
          return
        }
        var brokers = resp.data.data.result;
        var _id = wx.getStorageSync('bindBrokerId')
        var foundBroker = brokers.find(function(broker) {
          return broker.user_id == _id;
        });
        if (foundBroker) {
          // 找到了符合条件的对象，可以使用 foundBroker 变量来引用该对象
          _this.setData({
            broker: foundBroker,
            showBroker: true
          })
          //设置该楼盘拨打的电话，用于户型
          wx.setStorageSync('post-'+ pid +'-mobile', foundBroker.mobile)
        } else {
          // 没有找到符合条件的对象
          _this.loadPostBaseInfo()
          _this.setData({
            showBroker: false,
          })
        }
        // _this.setData({
        //   broker: resp.data.data
        // })
      })
    },
    "brokerId": function (bid) {
      console.log("---------123分享 postApi.getPostBaseInfo3-bid",bid) 
      var key = 'bindBrokerId'
      var brokerId = wx.getStorageSync(key)
      if (brokerId) {
        return
      }
      this.properties.brokerId = bid
      if (!bid) {
        return
      }
      wx.setStorageSync(key, bid)
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showBroker: false,
    postInfo: null,
    broker: null,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    loadPostBaseInfo: function () {
      // 加载楼盘的基本信息
      var _this = this;
      console.log("--------- postApi.getPostBaseInfo1 info:",this.data) 
      postApi.getPostBaseInfo(this.data.pid).then((resp) => {
        console.log("---------postApi.getPostBaseInfo2:--------------------",this.data,resp) 
        if (resp.data.code != 0) {
          return
        }
        var post = resp.data.data;
         //设置该楼盘拨打的电话，用于户型
         wx.setStorageSync('post-'+ this.data.pid +'-mobile', post.phone)
        _this.setData({
          postInfo: post
        })
      })
    },
  }
})