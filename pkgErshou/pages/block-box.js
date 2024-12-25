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
// pkgErshou/pages/block-box.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: '标题'
    },
    subTitle: {
      type: String,
      value: ''
    },
    url: {
      type: String,
      value: null
    },
    opentype: {
      type: String,
      value: 'navigateto'
    },
    leftHat: {
      type: Boolean,
      value: false
    },
    leftHatColor: {
      type: String,
      value: '#000000'
    },
    longitude: {
      type: Number
    },
    latitude: {
      type: Number
    },
    address: {
      type: String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {

    actionHandle: function (e) {
      // console.log('url:', this.data.url, 'opentype', this.data.opentype)
      if (!this.data.url) {
        return false
      }
      if(this.data.url == 'daohang'){
        wx.openLocation({
          type: 'gcj02',
          latitude: this.data.latitude,
          longitude: this.data.longitude,
          name: this.data.address,
          scale: 17
        })
        return
      }

      var _this = this
      var url = _this.data.url
      switch (_this.data.opentype.toLowerCase()) {
        case 'navigateto':
          wx.navigateTo({
            url: url,
          })
          break;
        case "switchtab":
          wx.switchTab({
            url: url,
          })
          break;
        case "webview":
          wx.navigateTo({
            url: '/pages/webview/webview?url=' + url,
          })
          // console.log('hello')
          break;
        default:
          console.log('default:', _this.data.opentype.toLowerCase, 'url', url)
      }
    },

  }
})