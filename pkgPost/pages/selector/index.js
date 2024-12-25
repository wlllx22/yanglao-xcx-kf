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
// pkgPost/pages/selector/index.js
const app = getApp()
const postApi = require("../../../api/post")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        kw: '',
        items: [],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad (q) {
        this.loadData()
    },

    kwChange: function (e) {
        this.loadData()
    },

    itemClick: function (e) {
        const {
            index
        } = e.currentTarget.dataset
        var post = this.data.items[index]
        var ch = this.getOpenerEventChannel()
        if (ch) {
            ch.emit("change", post)
        }
        wx.navigateBack({
            delta: 1,
        })
    },

    loadData: function () {
        var _this = this
        //  √
        postApi.quickSearch(this.data.kw).then((res) => {
            _this.setData({
                items: res.data.data
            })
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage () {

    }
})