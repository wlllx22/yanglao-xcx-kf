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
// components/eav/column/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        config: { type: Object },
        value: { type: String, optionalTypes: [Boolean, Number] },
    },

    observers: {
        "config.options": function (val) {
            // 处理选项 
            if (!val) {
                return
            }
            var items = val.split('\n').map((item) => {
                var res = item.split('|')
                if (res.length == 0) {
                    return { name: res[0], value: res[0] }
                } else {
                    return { name: res[0], value: res[1] }
                }
            })
            this.setData({ options: items })

        },
    },

    /**
     * 组件的初始数据
     */
    data: {
        options: [],

    },

    /**
     * 组件的方法列表
     */
    methods: {



    }
})
