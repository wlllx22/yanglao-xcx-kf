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
// pkgSearch/components/search-item/index.js
const app = getApp();
const searchApi = require("../../../api/search")
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        house: '',
    },

    /**
     * 组件的方法列表
     */
    methods: {

    },
    ready: function () {
        var _this = this
        searchApi.getHotSearchList().then((res) => {
            _this.setData({
                house: res.data.data
            })
        })
    }
})
