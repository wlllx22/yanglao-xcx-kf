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
// pages/post/filter/order-picker.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        options: {
            type: Object, default: [
                { label: '默认', value: null },
            ]
        }
    },

    observers: {
        currentIndex: function (i) {
            if (typeof i == 'number') {
                var order = this.data.options[i]
                this.setData({ order: order })
            } else {
                this.setData({ currentIndex: 0 })
            }
        },
    },

    /**
     * 组件的初始数据
     */
    data: {
        popShow: false,
        order: null,
        currentIndex: 0,

    },

    /**
     * 组件的方法列表
     */
    methods: {

        popToggleHandle: function () {
            var _this = this
            this.setData({
                popShow: !_this.data.popShow
            })
        },

        orderChange: function (e) {
            const { index } = e.detail
            this.setData({ currentIndex: index })
            var order = this.data.order
            console.log('change', order);
            this.triggerEvent('change', { order: order.value })
            this.setData({ popShow: false })
        },


    }
})
