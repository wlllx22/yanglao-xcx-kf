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
// pkgPost/components/broker-contact/index.js
const app = getApp()
const brokerApi = require("../../api/broker")

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        broker: {
            type: Object,
            value: null
        },
        postId: {
            type: Number,
            value: null
        },
        bid: {
            type: Number,
            value: null
        }

    },

    /**
     * 组件的初始数据
     */
    data: {
        mode: 'mini',
        localBrokerId: null,
        primaryBtnColor: "#ff9600",
        secondaryBtnColor: "#3a67c0",
    },
    ready(){
      var color = app.globalData.myconfigs.color
      this.setData({
          primaryBtnColor: color.primary_btn,
          secondaryBtnColor: color.secondary_btn,
      })
    },

    observers: {
        "bid": function (bid) {
            if (!bid) {
                return
            }

            // load broker info 
            var _this = this
            // TODO get from cache 
            brokerApi.getBrokerDetail(bid).then((resp) => {
                _this.setData({
                    broker: resp.data.data
                })
            })
        }
    },

    /**
     * 组件的方法列表
     */
    methods: {

        gotoProfile: function () {
            var url = '/pkgBroker/pages/broker/profile?id=' + this.data.broker.user_id
            wx.navigateTo({
                url: url,
            })
        },

        callHandle: function () {
            var phone = this.data.broker.mobile
            wx.makePhoneCall({
                phoneNumber: phone,
            });

        },

        loadBrokerInfo(bid){
          var _this = this
          brokerApi.getBrokerDetail(bid).then((resp) => {
            if (resp.data.code != 0) {
              return
            }
            _this.setData({
              broker: resp.data.data
            })
          })
        },


    }
})