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
// components/tt.js
const app = getApp()

Component({
    options: {
        addGlobalClass: false,
        externalClasses: ['my-class'],
    },

    /**
     * 组件的属性列表
     */
    properties: {
        item: { type: Object, value: {} }
    },

    observers: {
    },

    /**
     * 组件的初始数据
     */
    data: {
        tagClassName: ''
    },

    ready: function () {
        // console.log('ready')
        var _this = this
        var time_ago = this.getDateDiff(_this.data.item.created_at)
        this.setData({ time_ago: time_ago })
        var badgeImg = null
        if (this.data.item.is_new) {
            badgeImg = this.data.newImg
        } else if (this.data.item.is_hot) {
            badgeImg = this.data.hotImg
        }
        this.setData({ badgeImg: badgeImg })
    },

    /**
     * 组件的方法列表
     */
    methods: {
        newsClick: function () {
            var _this = this
            var url = this.data.item.url
            var path = '/pages/news/show?id=' + this.data.item.id
            wx.navigateTo({ url: path, })

        },

        gotoTour(){
            var appid = this.data.item.weapp_id
            var weapp_path = this.data.item.weapp_path
            wx.navigateToMiniProgram({
                appId: appid,
                path: weapp_path
            })
        },

        getDateDiff: function (dateStr) {
            var result = ''
            var dateTimeStamp = Date.parse(dateStr)
            var minute = 1000 * 60;
            var hour = minute * 60;
            var day = hour * 24;
            var halfamonth = day * 15;
            var month = day * 30;
            var now = new Date().getTime();
            var diffValue = now - dateTimeStamp;
            if (diffValue < 0) { return; }
            var monthC = diffValue / month;
            var weekC = diffValue / (7 * day);
            var dayC = diffValue / day;
            var hourC = diffValue / hour;
            var minC = diffValue / minute;
            if (monthC >= 1) {
                result = "" + parseInt(monthC) + "月前";
            }
            else if (weekC >= 1) {
                result = "" + parseInt(weekC) + "周前";
            }
            else if (dayC >= 1) {
                result = "" + parseInt(dayC) + "天前";
            }
            else if (hourC >= 1) {
                result = "" + parseInt(hourC) + "小时前";
            }
            else if (minC >= 1) {
                result = "" + parseInt(minC) + "分钟前";
            } else
                result = "1分钟";
            return result;
        }
    }
})
