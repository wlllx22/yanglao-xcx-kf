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
// pkgMyself/pages/history/historyPostItem/index.js
const postApi = require("../../../../api/post")
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        postId: { type: Number, default: null }
    },

    observers: {
        "postId": function (value) {
            var _this = this
            if (value) {
                postApi.getPostBaseInfo(value).then((resp) => {
                    if (resp.data.status != 0) {
                        return
                    }
                    _this.setData({
                        post: resp.data.data
                    })
                })
            }
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        post: {},
    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})
