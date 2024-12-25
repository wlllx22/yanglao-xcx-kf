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
// pages/messages/systemMesShow/index.js
const app = getApp()
const messageApi = require("../../../api/message")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: null,
    mid: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      mid: options.id
    })
    this.loadData(options.id)
  },

  loadData(id){
    var _this =  this
    messageApi.getSysMessageDetail(id).then((resp) => {
      if (resp.data.code != 0) {
        return
      }
      wx.setNavigationBarTitle({
        title: resp.data.data.title,
      })
      _this.setData({
        message: resp.data.data
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

  }
})