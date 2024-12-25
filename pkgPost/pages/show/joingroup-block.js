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
// pkgPost/pages/show/joingroup-block.js
var app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        value: {
            type: Object,
            value: ''
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        show: false,
        number: 0
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onClose () {
            this.setData({
                show: false
            });
        },
        onQrShow () {
            this.setData({
                show: true
            });
        },
        getSaveImage () {
            var _this = this
            app.downloadImage(this.data.value.qr)
            wx.getSetting({
                success: function (res) {
                    if (res.authSetting['scope.writePhotosAlbum']) {
                        _this.setData({
                            show: false
                        })
                    }
                }
            })
        }
    }
})
