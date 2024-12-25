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
// pages/faxian/qa-item.js
const app = getApp()

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        item: { type: Object, default: null }

    },

    observers: {
        "item.tags": function (t) {
            if (!t) {
                return false
            }
            this.setData({ tags: t.split(',') })
        },

        "item.user.avatar": function (url) {
            if (!url) {
                return
            }
            var i = url.indexOf('default')
            if (i != -1) {
                url = '/assets/images/default-avatar.png'
            }
            this.setData({ avatar: url })

        },
    },

    /**
     * 组件的初始数据
     */
    data: {
        createdAt: '',
        tags: [],
        avatar: '',
        user: null,

    },

    ready: function () {
        var color = app.globalData.myconfigs.color
        this.setData({
            primaryColor: color.primary,
            user: app.globalData.userInfo,
        })



    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})
