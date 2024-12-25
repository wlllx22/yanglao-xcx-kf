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
// pages/comments/stars.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        value: { type: Number, value: 5 },
        big: { type: Boolean, value: false },
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

        scoreClick: function (e) {
            var score = e.currentTarget.dataset.value
            console.log('click score, ', score)
            this.triggerEvent('scoreChange', { score: score })

        },

    }
})
