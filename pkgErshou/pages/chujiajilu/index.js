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
// pkgErshou/pages/chujiajilu/index.js
var houseApi = require("../../../api/house")
Page({
    /**
     * 页面的初始数据
     */
    data: {
        bids: [], // 出价记录
        id: null
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad (options) {
        this.setData({
            id: options.id
        })
        wx.setNavigationBarTitle({
            title: "出价记录"
        }),
            this.getdata(options.id)
    },
    getdata: function (id) {
        var _this = this
        houseApi.getRuleDetail(id).then((res) => {
            var data = res.data.data
            _this.setData(data)
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
        this.getdata(this.data.id)
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
        return {
            title: "出价记录",
            path: "/pkgErshou/pages/chujiajilu/index?id=" + this.data.id, // 自定义的分享路径
        };
    },
    // 自定义朋友圈分享内容
    onShareTimeline: function () {
        return {
            title: "出价记录",
        };
    }
})