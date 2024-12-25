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
// pkgWrok/pages/index.js
const app = getApp()
const myselfApi = require('../../api/myself')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [],
    myIcons: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var _this = this
    app.ensureConfigs(function (configs) {
      _this.setData({
        primaryColor: configs.color.primary,
      })
      wx.setNavigationBarColor({
        backgroundColor: configs.color.primary || '#183579',
        frontColor: '#ffffff',
      })
    })
    this.loadData()
  },

  loadData(){
    var _this = this
    myselfApi.getWorkspaceIcons().then(resp => {
      if(resp.data.code != 0){
        return
      }
      _this.setData({
        myIcons: resp.data.data
      })
    })
  },

  btnHandle(e){
    var name = e.currentTarget.dataset.name
    var url = e.currentTarget.dataset.url
      wx.navigateTo({
        url: url,
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