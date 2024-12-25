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
// pkgSearch/components/search/index.js
const app = getApp()
const postApi = require("../../api/post")
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        value: {
            type: String
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        house_list: [],
    },

    /**
     * 组件的方法列表
     */
    methods: {
        selectHanlde: function (e) {
            var house = this.data.house_list[e.currentTarget.dataset.index]
            this.triggerEvent("changevalue", house)
        }
    },
    observers: {
        'value': function (v) {
            var _this = this
            var myvalue = v
            //   ？？  跳转楼盘搜索页面了  这个请求没有发 
            postApi.quickSearch(myvalue).then((res) => {

                _this.setData({
                    house_list: res.data.data
                })
                //changeShow:传组件的长度（控制筛选组件是否显示）
                _this.triggerEvent("changeShow", res.data.data.length)
            })
        }
    }
})
