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
// components/avatar/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        border: {
            type: String,
            default: null,
        },
        size: {
            type: Number,
            default: 200,
        },
        src: {
            type: String,
            default: '',
        },
        borderWidth: {
          type: Number,
          value: 6,
        },

    },

    observers: {
        "border": function (color) {
            if (!color) {
                return
            }
            // this.setData({
            //     borderValue: "border:6rpx solid " + color
            // })
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        borderValue: ''

    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})
