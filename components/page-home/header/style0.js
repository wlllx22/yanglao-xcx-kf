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
// components/pagemaker/header/style0.js
const app = getApp()
const link = require('../link.js')

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        title: { type: String, value: '' },
        icon: {type: String, value: null},
        subtitle: { type: String, value: '' },
        link: { type: Object, value: null },
        fontsize: { type: Number, value: 40 },
        fontcolor: { type: String, value: '#000000' },
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {

        clickHandle: function (e) {
            link.clickHandle(this.data.link)
        }

    }
})
