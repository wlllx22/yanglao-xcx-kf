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
// pkgVideo/pages/show/index.js
const app = getApp()
const videoApi = require("../../../api/video")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var id = options.id
    this.loadData(id)
  },

  loadData(id){
    var query = { ids: id }
    var _this = this
    videoApi.getVideoList(query).then((resp) => {
      if (resp.data.code != 0) {
        return
      }
      var item = resp.data.data[0]
      wx.setNavigationBarTitle({
        title: item.title,
      })
      _this.setData({
        item: item
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    var item = this.data.item
    return {
      title: item.title,
      path: '/pkgVideo/pages/show/index?id=' + item.id
    }
  }
})