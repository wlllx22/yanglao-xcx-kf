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
// components/pagemaker/banners/index.js
const link = require("../link")

Component({
    /**
     * 组件的属性列表
     */
    properties: {
    },



    observers: {

    },


    /**
     * 组件的初始数据
     */
    data: {
        items:[
            {
                "link": {
                    "path": "",
                    "cat": "no",
                    "appid": "",
                    "function": "",
                    "opentype": "",
                    "url": "",
                    "apppath": ""
                },
                "title": "图片1",
                "url": "https://tcdn.udeve.net/fang2021/4bbe636b-e0e8-4580-8bb0-66bbf61f11bd.png"
            }
        ]
    },

    /**
     * 组件的方法列表
     */
    methods: {
        goto: function (e) {
            var index = e.currentTarget.dataset.index
            var block = this.data.config.items[index]
            link.clickHandle(block.link)
        },
    }
})
