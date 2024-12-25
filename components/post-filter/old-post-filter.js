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
// pages/post/filter/old-post-filter.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        filter: { type: Object, default: null }
    },

    /**
     * 组件的初始数据
     */
    data: {
        houseTypeItems: [
            { name: '不限', value: null },
            { name: '两室', value: 2 },
            { name: '三室', value: 3 },
            { name: '四室', value: 4 },
            { name: '五室及以上', value: 5 },
        ],
        totalPriceMin: null,
        totalPriceMax: null,
        houseTypeIndex: 0,

        areaMin: null,
        areaMax: null,
        showPop: false,
        orderOptions: [
            {
                label: "默认",
                value: null
            },
            {
                label: "面积（从大到小)",
                value: "area desc"
            },
            {
                label: "面积（从小到大)",
                value: "area asc"
            },
            {
                label: "总价（从小到大)",
                value: "total_price  asc"
            },
            {
                label: "总价（从大到小)",
                value: "total_price desc"
            }
        ]
    },

    /**
     * 组件的方法列表
     */
    methods: {
        showFilterHandle: function (e) {
            this.setData({ showPop: true })
        },
        filterConfirmHandle: function (e) {
            // validate 
            // check price range 
            if (this.data.totalPriceMin === null && this.data.totalPriceMax != null) {
                wx.showToast({
                    title: '请输入价格范围',
                    icon: 'none',
                });
                return false
            }
            if (this.data.totalPriceMin != null && this.data.totalPriceMax === null) {
                wx.showToast({
                    title: '请输入价格范围',
                    icon: 'none',
                });
                return false
            }

            // check area range 
            if (this.data.areaMin === null && this.data.areaMax != null) {
                wx.showToast({
                    title: '请输入面积范围',
                    icon: 'none',
                });
                return false
            }
            if (this.data.areaMin != null && this.data.areaMax === null) {
                wx.showToast({
                    title: '请输入面积范围',
                    icon: 'none',
                });
                return false
            }

            // 拼接filter
            var filter = this.data.filter
            if (this.data.totalPriceMin != null) {
                filter.total_price = this.data.totalPriceMin + ',' + this.data.totalPriceMax

            }
            if (this.data.areaMin != null) {
                filter.area = this.data.areaMin + ',' + this.data.areaMax
            }

            var v = this.data.houseTypeItems[this.data.houseTypeIndex].value
            if (v === null) {
                delete filter.type
            } else {
                filter.type = v
            }

            filter.page = 1
            this.setData({ filter: filter })
            this.triggerEvent('change', filter)
            this.setData({ showPop: false })
        },
        filterCancleHandle: function (e) {
            this.setData({
                totalPriceMin: null,
                totalPriceMax: null,
                areaMin: null,
                areaMax: null,
                houseTypeIndex: 0
            })
        },
        houseTypeItemHandle: function (e) {
            const { index } = e.target.dataset
            this.setData({ houseTypeIndex: index })
        },
        totalPriceChange: function (e) {
            var key = e.currentTarget.dataset.name
            var value = Math.floor(e.detail)
            var data = {}
            data[key] = value
            this.setData(data)
        },

        areaChange: function (e) {
            var key = e.currentTarget.dataset.name
            var value = Math.floor(e.detail)
            var data = {}
            data[key] = value
            this.setData(data)
        },

        orderChange: function (e) {
            // TODO CHANGE FILTER
            const { order } = e.detail
            var filter = this.data.filter
            filter.order = order
            this.triggerEvent('change', filter)

        },
        cityChange: function (e) {
            // city id or district id change
            // TODO 
            console.log('city change e', e)
            const { city_id, district_id } = e.detail
            var filter = this.data.filter
            filter.city_id = city_id || null
            filter.district_id = district_id || null
            this.triggerEvent('change', filter)
        },
    }


})
