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
// components/tt.js
const app = getApp()

Component({
    options: {

    },

    /**
     * 组件的属性列表
     */
    properties: {
        item: { type: Object, value: {} },
        width: { type: Number, value: 710 },
        isCell: { type: Boolean, value: false },
    },

    observers: {
        "item": function (item) {
            if (!item || !item.id || !item.content_type) {
                return
            }
            if (this.data.isCell == true) {
                // 强制制定了class name
                this.setData({
                    className: 'item'
                })
                return
            }

            var t = item.content_type || 'html'

            if (t == 'video') {

                this.setData({
                    className: 'video-item'
                })
            }


        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        className: 'item',
        primaryColor:'#9e1d1d'
    },

    ready: function () {
        var color = app.globalData.color
        this.setData({
          primaryColor: color.primary || '#9e1d1d',
        })
    },

    /**
     * 组件的方法列表
     */
    methods: {
    }
})
