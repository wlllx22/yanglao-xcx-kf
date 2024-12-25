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
// pages/districts/select.js
const app = getApp()
var onfire = require('../../utils/onfire.min.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (q) {
        this.setData({
            cities: app.globalData.cities,
            did: q.id,
        })
    },

    districtClick: function (e) {
        var cindex = e.currentTarget.dataset.cindex
        var dindex = e.currentTarget.dataset.dindex
        var citem = this.data.cities[cindex]
        var ditem = citem['children'][dindex]
        onfire.fire('selectDistrict', { id: citem.id, name: citem.text }, { id: ditem.id, name: ditem.text })
        var ch = this.getOpenerEventChannel()
        if (ch) {
            ch.emit("change", ditem)
        }
        wx.navigateBack({
            delta: 1,
        })
    },


    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})