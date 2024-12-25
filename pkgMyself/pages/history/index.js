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
// pkgHistory/pages/history/index.js
const app = getApp()
const historyApi = require("../../../api/history")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        page: 1,
        perPage: 10,
        total: 0,
        active: "post",
        logs: [],
        primaryColor: ''
    },

    onChange (e) {
        var _this = this
        console.log(e.detail.name);
        this.setData({
            active: e.detail.name,
            page: 1,
            logs: []
        }, () => {
            _this.loadData()
        })
    },

    loadData: function () {
        var _this = this
        var query = {
            page: this.data.page,
            per_page: this.data.perPage,
            scope: this.data.active
        }
        // √
        historyApi.getHistoryList(query).then((resp) => {
            var logs = _this.data.logs.concat(resp.data.data.items)
            _this.setData({ logs: logs })
        })
    },

    getHistory: function () {
        var history = wx.getStorageSync('post.history')
        history = history.reverse()
        console.log(" history", history)
        this.setData({
            history: history
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.setNavigationBarTitle({
            title: '访问足迹',
        })
        this.loadData()
        var color = app.globalData.color
        this.setData({
          primaryColor: color.primary || '#9e1d1d',
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
        if (app.globalData.backToReload) {
            this.loadData()
            app.globalData.backToReload = false
        }
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
        this.setData({
            page: this.data.page + 1,
        }, () => {
            this.loadData()
        })


    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})