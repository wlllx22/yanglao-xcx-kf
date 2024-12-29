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
// pkgPost/components/share-box/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        show: { type: Boolean, value: false },
        postInfo: { type: Object, value: null },

    },

    observers: {
        "postInfo": function (p) {
            if (!p) {
                return
            }
            var kinds = p.kind.map((t, i) => {
                return t.name
            })
            this.setData({ kinds: kinds })
        },
    },

    /**
     * 组件的初始数据
     */
    data: {
        showTips: false,
        showCopy: false,
        kinds: [],

    },

    /**
     * 组件的方法列表
     */
    methods: {
        wechatHandle: function () {

        },

        posterHandle: function () {
            var url = '/pkgPoster/pages/poster/index?post_id=' + this.data.postInfo.id
            wx.navigateTo({
                url: url,
            })
        },

        copyHandle: function () {
            console.log('copyHandle this.data:', this.data)
            // 复制到剪贴板
            var p = this.data.postInfo
            var text = ""
           // var kinds = this.data.kind.join(',')
           var kinds = this.data.kind?this.data.kind:''
            text += "【名称】" + p.name
            // text += "\n【月薪】" + p.average_price
            text += "\n【工种】" + kinds
            // text += "\n【地址】" + p.address
            // TODO 联系电话服务端还没完成
            var phone = p.phone
            if (p.sub_phone && p.sub_phone.length >= 1) {
                phone += '转' + p.sub_phone
            }
            text += "\n【咨询】" + phone
            wx.setClipboardData({
                data: text,
            });
            this.setData({ showCopy: true, show: false })
            console.log('copyHandle copy text:', text)

        },

        closeCopy: function () {
            this.setData({ showCopy: false })
        },

        closeTips: function () {
            this.setData({ showTips: false })
        },

        timelineHandle: function () {
            // TODO 作图
            this.setData({ showTips: true, show: false })
        },
        closeHandle: function (e) {
            this.setData({ show: false })
        }

    }
})
