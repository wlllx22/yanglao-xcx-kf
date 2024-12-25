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
// pages/sub-districts/select.js
const app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    doSearch: function (kw) {
        var _this = this
        app.request({
            url: '/api/v1/sub_districts',
            data: { kw: kw, per_page: 10, order: 'id desc' },
            success: function (resp) {
                console.log('resp', resp.data.data)
                _this.setData({
                    items: resp.data.data
                })
            }
        })
    },

    itemClick: function (e) {
        console.log('e', e)
        var i = e.currentTarget.dataset.index
        var item = this.data.items[i]
        onfire.fire('selectSubDistrict', item)

    },

    onConfirm: function (e) {
        // TODO返回并向父页面传递数据
    },

    inputChange: function (e) {
        var kw = e.detail
        if (kw.length >= 1) {
            this.setData({ kw: kw })
            this.doSearch(kw)
        }
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