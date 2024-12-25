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
// pages/post/brokers-block.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        value: { type: Object, default: {} },
        color: { type: String, value: '#3A6BDD' },
        theme: { type: String }
    },

    observers: {
        "value.items": function (vals) {
            if (!vals) {
                return
            }
            var brokers = vals.sort((a,b)=>{
              return a.level - b.level
            }).filter((v, i) => {
                return i <= 2
            })
            this.setData({ brokers: brokers })
        },
    },

    /**
     * 组件的初始数据
     */
    data: {
        maxLength: 3,
        moreBrokersBtn: true,
    },

    /**
     * 组件的方法列表
     */
    methods: {
        moreBrokersHandle: function () {
            // 显示更多经纪人
            var _this = this
            this.setData({
                moreBrokersBtn: false,
                maxLength: _this.data.value.brokers.length
            })
        },

    }
})
