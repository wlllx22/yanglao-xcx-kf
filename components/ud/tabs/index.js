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
// components/ud/ud-tabs/index.js
const app = getApp()


Component({
    /**
     * 组件的属性列表
     */
    externalClasses: [],
    properties: {
        data: { type: Array },
        activeIndex: { type: Number, value: 0 }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    ready: function () {
        var color = app.globalData.myconfigs.color
        this.setData({
            primaryColor: color.primary,
        })
    },

    /**
     * 组件的方法列表
     */
    methods: {
        tabChange (e) {
            const { index } = e.currentTarget.dataset
            this.setData({
                activeIndex: index
            })
            this.triggerEvent('change', index)
        }
    }
})
