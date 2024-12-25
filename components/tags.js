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
// components/tags.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        max: { type: Number, value: 3 },
        items: { type: Array, value: [] },
        size: { type: String, value: 'default' },
        colorIndex: { type: Number, value: 0 },
    },
    observers: {
        "items": function () {
            var safeItems = this.data.items.slice(0, this.data.max)
            this.setData({ safeItems: safeItems })
        }
    },
    ready: function () {
        var safeItems = this.data.items.slice(0, this.data.max)
        this.setData({ safeItems: safeItems })
    },

    /**
     * 组件的初始数据
     */
    data: {
        safeItems: null,

    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})
