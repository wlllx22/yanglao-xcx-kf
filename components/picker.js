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
// components/typepicker.js

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        options: { type: Array, default: [] },
        current: { type: Number, default: 0 },
        show: { type: Boolean, default: false },
        position: {
            type: String, value: 'top'
        }
    },

    observers: {
        "current": function (val) {
            this.setData({
                currentIndex: val + ''
            })
        }
    },




    /**
     * 组件的初始数据
     */
    data: {
        currentIndex: '0', // vant 的index必须要是字符串
    },

    /**
     * 组件的方法列表
     */
    methods: {

        onClose: function () {
            this.triggerEvent('close')
        },

        optionClick: function (e) {
            const { index } = e.currentTarget.dataset;
            this.setData({ currentIndex: index })
        },

        onConfirm: function (e) {
            var index = this.data.currentIndex
            this.triggerEvent('change', { index: parseInt(index) })
        },
    }
})
