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
// components/sub-district/items.js
const app = getApp();
const postApi = require("../../api/post")
import Notify from '../../vant/notify/notify.js';


Component({
    /**
     * 组件的属性列表
     */
    properties: {
        filter: {
            type: Object, value: {}, observer: "filterChange"
        },
        albumKey: { type: String, value: null },

    },

    /**
     * 组件的初始数据
     */
    data: {
        items: [],
        query: {},
        loading: true,
    },

    ready: function () { },

    /**
     * 组件的方法列表
     */
    methods: {

        filterChange: function (v) {
            var query = this.data.filter || {}
            if (Object.keys(query).length == 0) {
                return false;
            }
            for (let prop in query) {
              if (query[prop] === null) {
                delete query[prop];
              }
            }
            this.setData({ query: query })
            this.loadData()
        },

        loadData: function () {
            var _this = this
            var query = this.data.query
            if (!query) {
                return false
            }

            _this.setData({ loading: true })
            var query = this.data.query
            postApi.getPostList(query).then((resp) => {
                console.log("2.getPostList:",resp)
                var total = resp.data.data.total
                var p = _this.data.query.page || 1
                var i = p - 1
                var data = { total: total }
                if (p > 1) {
                    var key = 'items[' + i + ']'
                    data[key] = resp.data.data.list
                } else {
                    data['items'] = [resp.data.data.list]
                }
                console.log("2.getPostList data:",data)
                _this.setData(data)
                _this.setData({
                  loading: false
                })


                for (var i = 0; i <= resp.data.data.list.length - 1; i++) {
                    var post = resp.data.data.list[i]
                    wx.setStorage({
                        key: 'post.' + post.id,
                        data: post,
                    })
                }
            })
        }
    }
})
