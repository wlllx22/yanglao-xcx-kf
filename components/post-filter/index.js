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
// pages/post/filter/index.js
const app = getApp()

Component({
    /**
     * 组件的属性列表
     * 根据filter传递的参数，自动调用对应房源的filter
     */

    properties: {
        filter: { type: Object, default: null },
    },

    observers: {
        "filter.group_v2": function (g) {
            if (!g) {
                return
            }
            this.setData({ postGroup: g })
        }
    },

    ready: function () {
        console.log('ready load filter options')
    },


    /**
     * 组件的初始数据
     */
    data: {
        postGroup: 'new', // 房源的类型
        filterOptions: {}, // 筛选下拉框
    },

    /**
     * 组件的方法列表
     */
    methods: {

        filterChange: function (e) {
            this.triggerEvent("change", e.detail)
        }
    }
})
