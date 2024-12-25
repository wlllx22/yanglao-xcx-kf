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
// components/textarea.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        maxLength: { type: Number, value: 300 },
        width: { type: Number, value: null },
        minLength: { type: Number, value: 5 },
        value: { type: String, value: '' },

    },

    observers: {
        "value": function (val) {
            console.log('value observer', val)
            this.setData({ content: val })
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        content: '',
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onInput: function (e) {
            var v = e.detail.value
            if (v.length <= this.data.maxLength) {
                this.setData({ content: e.detail.value })
                this.triggerEvent('input', { value: v })
                this.triggerEvent('change', { value: v })
            }
        },
    }

})
