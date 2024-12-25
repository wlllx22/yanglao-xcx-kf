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
const link = require("../../link")
const app = getApp()


Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item: {
      type: Object,
      default: {}
    },
    styleName: {
      type: Number,
      value: 4
    },
    pageKey: {
      type: String,
      value: 'home'
    }
  },

  observers: {
    "item.dynamicInnerText": function (isDongtai) {
      if (!isDongtai) {
        return false
      }
      var _this = this
      var item = this.data.item
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    innerText: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {

    clickHandle: function (e) {
      var item = this.data.item
      var obj = {}
      try {
        obj = JSON.parse(item.link)
      } catch (error) {
        console.log(error)
      }
      link.clickHandle(obj)

    }

  }
})