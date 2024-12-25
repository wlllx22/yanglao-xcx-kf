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
// pages/post/types-block.js
const app =getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        value: { type: Object },
        color: { type: String, value: '#3A6BDD' }
    },

    observers: {
        "value.items": function (items) {
            items = items.map((item, i) => {
              var images_list = item.images.split(',')
                if (images_list && images_list.length >= 1) {
                    item.hasImage = true
                    item.cover = images_list[0]
                } else {
                    item.hasImage = false
                    item.cover = 'https://tcdn.udeve.net/fang/pkgPost/image-none.png'
                }

                if (item.tags) {
                    item.tags = item.tags.split(',')
                }
                return item
            })
            this.setData({ items: items })
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        items: []
    },

    /**
     * 组件的方法列表
     */
    methods: {
      gotoVr(e){
        var vr = e.currentTarget.dataset.vr
        app.gotoWebview(vr, 'vr')
      },
      callPhone(){
        console.log(1111);
        var phone = wx.getStorageSync('post-'+ this.data.value.post_id +'-mobile')
        console.log(phone);
        wx.makePhoneCall({
            phoneNumber: phone,
            success: (result) => { },
        });
      },
    }
})
