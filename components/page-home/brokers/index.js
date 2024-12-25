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
// components/broker/hot-brokers.js
const app = getApp()
const brokerApi = require("../../../api/broker")
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    ids: {
      type: Array,
      value: null
    }
  },

  observers: {
    "ids": function (ids) {
      if (ids && ids.length > 0) {
        this.initBrokers()
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    loading: false,
    items: [],
  },

  ready: function () {
    this.initBrokers()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    shuffle: function (arr) {
      var i = arr.length,
        t, j
      while (i) {
        j = Math.floor(Math.random() * i--)
        t = arr[i]
        arr[i] = arr[j]
        arr[j] = t
      }
    },

    initBrokers: function () {
      // TODO 根据id查询
      var _this = this
      var query = {}

      query.ids = this.data.ids.join(',')

      var _this = this
      this.setData({
        loading: true
      })
      //   √
      brokerApi.getBrokerList(query).then((resp) => {
        _this.setData({
          loading: false,
          items: resp.data.data.result,
        })
      })
    },

  }
})