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
const link = require("../link")
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },



  observers: {

  },


  /**
   * 组件的初始数据
   */
  data: {
    heightValue: '150rpx',
  },

  /**
   * 组件的方法列表
   */
  methods: {

    linkHandle: function (e) {
      wx.showModal({
        title: '未设置公众号',
        content: '请在关注组件中设置公众号，设置后可点击关注',
        complete: (res) => {
        }
      })
    }

  }
})
