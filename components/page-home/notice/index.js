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
// components/pagemaker/noticebar/index.js
const app = getApp()
const newsApi = require("../../../api/news")
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        ids: { type: Array },
    },

    observers: {
        "ids": function (ids) {
            this.loadNews(ids)
        },
    },

    /**
     * 组件的初始数据
     */
    data: {
        // TODO default icon
        iconUrl: "https://tcdn.udeve.net/fang2021/c91c5e84-55fd-4fb2-a0ac-edfee71d73c3.png",
        items: [],
        fontSize: '26rpx'

    },

    /**
     * 组件的方法列表
     */
    methods: {
        loadNews: function (ids) {
            if (!ids) {
                return
            }
            if (ids.length == 0) {
                return
            }

            var query = { ids: ids.join(',') }
            var _this = this
            newsApi.getNewsList(query).then((resp)=>{
                if (resp.data.status == 0) {
                    _this.setData({ items: resp.data.data })

                }
            })
        }

    }
})
