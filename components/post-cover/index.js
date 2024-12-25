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
// components/post-cover/index.js
const app = getApp()

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        item: { type: Object, value: {} },
        width: { type: String, value: 215 },
        height: { type: Number, value: 156 },
        topLeftRadius: { type: Number, value: 8 },
        topRightRadius: { type: Number, value: 8 },
        bottomLeftRadius: { type: Number, value: 8 },
        bottomRightRadius: { type: Number, value: 8 },

    },

    ready: function () {

    },

    observers: {
        "item.views": function (views) {
            // 处理浏览量单位 
            if (views >= 10000) {
                var n = views / 10000
                n = n.toFixed(1) + 'w'
            } else if (views >= 1000) {
                var n = views / 1000
                n = n.toFixed(1) + 'k'
            } else {
                n = views
            }
            this.setData({ views: n })

        },
        "width": function (iw) {
          // 如果width是百分比
          if (iw.indexOf('%') > 0) {
            this.setData({ imageWidth: iw })
          } else {
            this.setData({ imageWidth: iw + 'rpx' })
          }
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        views: 0,
        vrIcon: '',
        videoIcon: '',
        eyeIcon: '',
        imageWidth: '215rpx',
    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})
