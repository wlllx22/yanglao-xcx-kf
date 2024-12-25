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
// components/pagemaker/searchbar/index.js
const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
    },

    observers: {
    },

    ready(){
        var _this = this
        app.ensureConfigs((myconfigs) => {
            _this.setData({
                btnColor: myconfigs.color.primary_btn,
                color: myconfigs.color.primary,
            })
        })
    },

    /**
     * 组件的初始数据
     */
    data: {
        text: '',
        textColor: '',
        bodyBgColor: '',
        heightValue: '80rpx',
        btnColor: '',
        color: '',
    },

    /**
     * 组件的方法列表
     */
    methods: {
        gotoSearch: function () {
            wx.navigateTo({
                url: '/pkgSearch/page/search/index',
                success: (result) => {

                },
                fail: () => { },
                complete: () => { }
            });

        },

    }
})
