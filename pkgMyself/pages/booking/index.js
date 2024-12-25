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
// pkgBooking/pages/booking/index.js
const app = getApp()
const bookingApi = require("../../../api/booking")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        broker: [],
        tab: 0
    },

    callHandle: function (e) {
        var mobile = e.currentTarget.dataset.mobile
        wx.makePhoneCall({
            phoneNumber: mobile,
        })
    },
    onChange: function (e) {
        this.setData({
            tab: e.detail.index
        })
        this.getBroker()
    },
    getBroker: function () {
        var _this = this
        var tab = this.data.tab
        bookingApi.getBookingListFromStatus(tab).then((res) => {
            if (res.data.code != 0) {
              return
            }
            _this.setData({
                broker: res.data.data
            })
            console.log("res.data.data:", res.data.data)
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function () {
        this.getBroker()
        wx.setNavigationBarTitle({
            title: '我的预约',
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