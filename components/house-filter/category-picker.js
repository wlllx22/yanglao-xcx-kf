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
// components/house-filter/category-picker.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        position: {
            type: String, value: "bottom"
        },
        items: {
            type: Array, value: []
        }
    },

    observers: {
        "items": function (val) {
            if (!val.length) { return }
            var arr = val.map((ite) => {
                ite.active = false
                return ite
            })
            this.setData({
                filterItem: arr
            })
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        show: false,
        mainActiveIndex: 0,
        activeValue: [],
        filterItem: []
    },

    /**
     * 组件的方法列表
     */
    methods: {

        onConfirm: function (e) {
            // 点击确定
            var _this = this
            if (!this.data.activeValue.length) {
                this.setData({ show: false })
                return
            }
            var categorys = this.data.activeValue.join(',')
            var data = {
                category: categorys
            }


            console.log('on change', data)
            this.triggerEvent('change', data)
            this.setData({ show: false })
        },

        itemsClick: function (e) {
            console.log(e);
            const { activeValue } = this.data;
            var chindex = e.currentTarget.dataset.index
            var items = this.data.filterItem
            const index = activeValue.indexOf(e.currentTarget.dataset.ite.value);
            if (index > -1) {
                activeValue.splice(index, 1);
                items[chindex].active = false
            } else {
                activeValue.push(e.currentTarget.dataset.ite.value);
                items[chindex].active = true
            }
            this.setData({
                activeValue: activeValue,
                filterItem: items
            })
        },
        showHandle: function (e) {
            this.setData({ show: true })
        },

        onReset: function (e) {
            var arr = this.data.items.map((ite) => {
                ite.active = false
                return ite
            })
            this.setData({
                filterItem: arr
            })
            this.setData({ show: false, activeValue: [] })
            var data = {
                category: null
            }
            this.triggerEvent('change', data)
        },
    }
})
