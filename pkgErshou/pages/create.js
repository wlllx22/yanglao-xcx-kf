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
// pkgErshou/pages/create.js
import Toast from "../../vant/toast/toast";

const houseApi = require("../../api/house");
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    type_name: "",
    business: "出售",
    sub_district_name: "",
    district_name: "",
    content: "",
    position: "",
    fitment: "",
    images: "",
    type_image: "",
    video: "",
    area_value: null,
    price_value: null,
    show: true,
    focus: false,
    contact_name: "",
    contact_mobile: "",
    seller: "",
    // 以下是隐藏字段
    address: "",
    district_id: null,
    latitude: null,
    longitude: null,
    showSample: false,
    sampleMessage: "你好,这是示例文本",
    showPicker: false,
    //  currentDate: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
    // minDate: new Date("1910-01-01").getFullYear() + '-' + (new Date("1910-01-01").getMonth() + 1) + '-' + new Date("1910-01-01").getDate(),
    // maxDate: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
    birthday: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
    minDate: new Date(1911, 0, 1).getTime(),
    maxDate: new Date().getTime(),
    currentDate: new Date().getTime(),
    formatter(type, value) {
      return value;
        if (type === 'year') {
          return `${value}年`;
        }
        if (type === 'month') {
          return `${value}月`;
        }
        return `${value}日`;
      },
},

  //日期格式转字符窜
  dataToStr(selData) {
    let selDataArr = selData.split("/")
    let strArr = selDataArr.map(function (value) {
      if (value.length == 1) {
        value = 0 + value
      }
      return value
    });

    return strArr.join("-")
  },
  onConfirm(event) {
    let selData = new Date(event.detail).toLocaleDateString()
    console.log("onConfirm:", event.detail, selData)
    this.setData({
        birthday: this.dataToStr(selData),
      });
    this.setData({
      currentDate: event.detail,
    });


    // this.onClose()
    this.setData({
      showPicker: false
    });
  },
  starPopup() {
    this.setData({
      showPicker: true
    });
  },
  cancelData() {
    this.setData({
      showPicker: false
    });
    // this.setData({ 
    //   show: true, 
    //   starTag: false,
    //   selDate: this.strToData(this.data.lastData)
    // });
  },
  bindDateChange: function (e) {
    console.log("picker发送选择改变，携带值为", e.detail.value);
    this.setData({
      currentDate: e.detail.value,
    });
  },
  businessChange: function (name) {
    this.setData({
      business: name.detail.name,
    });
  },
  chooseFitment: function (e) {
    // 跳转到选择枚举值的页面
    // 在选择页面点击后，修改此页面的 fitment字段
    var _this = this;
    wx.navigateTo({
      url: "/pages/enums/index?cat=house_fitment",
      events: {
        change: function (post) {
          // TODO 选中了一个楼盘
          _this.setData({
            fitment: post.name,
          });
        },
      },
    });
  },

  contentInput: function (e) {
    this.setData({
      content: e.detail.value, // 将输入的内容与content进行双向绑定
    });
  },
  onShowSample: function (e) {
    let value = e.currentTarget.dataset.value;
    console.log("value：" + value);
    if (value == 1) {
      this.setData({
        showSample: true
      });
      //   console.log("value："+value)
      //   // Toast({message: 'xxxx', context: this});

      //   Toast.setDefaultOptions({ duration: 10000 });
      //   Toast('我是一名备受信赖的月嫂。投身母婴护理行业已有 8 年，服务过近百家家庭，积累了丰富实战经验。\n专业资质：我持有母婴护理师高级证书、催乳师证，经过系统专业培训，知识储备扎实，护理流程规范科学 。\n经验丰富：从业 8 年有余，服务过超 80 组家庭，各种常见、棘手的母婴状况，像宝宝呛奶、产妇堵奶，我都能迅速应对。\n技能多样：我擅长新生儿早教，通过色彩、声音刺激，能早早开启宝宝智力；还精通产后康复按摩，助力宝妈身体更快恢复。\n性格特质：我性格温和耐心，宝宝哭闹时，能轻声安抚几个小时；做事又极有条理，宝妈的一日三餐、护理流程，都安排得妥妥当当。\n客户好评：之前雇主在评价里夸我贴心周到，把我推荐给好几个朋友，我的服务能让您省心、安心，尽享月子温馨。');
      this.setData({
        sampleMessage: "我是一名备受信赖的月嫂。投身母婴护理行业已有 8 年，服务过近百家家庭，积累了丰富实战经验。\n专业资质：我持有母婴护理师高级证书、催乳师证，经过系统专业培训，知识储备扎实，护理流程规范科学 。\n经验丰富：从业 8 年有余，服务过超 50 组家庭，各种常见、棘手的母婴状况，像宝宝呛奶、产妇堵奶，我都能迅速应对。\n技能多样：我擅长新生儿早教，通过色彩、声音刺激，能早早开启宝宝智力；还精通产后康复按摩，助力宝妈身体更快恢复。\n性格特质：我性格温和耐心，宝宝哭闹时，能轻声安抚几个小时；做事又极有条理，宝妈的一日三餐、护理流程，都安排得妥妥当当。\n客户好评：之前雇主在评价里夸我贴心周到，把我推荐给好几个朋友，我的服务能让您省心、安心，尽享月子温馨。",
      });
    }
  },

  onCloseSample() {
    this.setData({
      showSample: false
    });
  },

  choosePosition: function (e) {
    // 跳转到选择枚举值的页面
    // 在选择页面点击后，修改此页面的 position字段
    var _this = this;
    wx.navigateTo({
      url: "/pages/enums/index?cat=house_position",
      events: {
        change: function (post) {
          // TODO 选中了一个楼盘
          _this.setData({
            position: post.name,
          });
        },
      },
    });
  },
  chooseSeller: function (e) {
    var _this = this;
    wx.navigateTo({
      url: "/pages/enums/index?cat=house_seller",
      events: {
        change: function (post) {
          _this.setData({
            seller: post.value,
          });
        },
      },
    });
  },

  checkLogin() {
    if (!app.globalData.token) {
      this.selectComponent(".loginwindow").openWindow();
      return;
    }
    this.setData({
      contact_mobile: app.globalData.userInfo.mobile,
    });
  },

  chooseLocation: function (e) {
    var _this = this;
    wx.getSetting(); //获取用户权限
    wx.chooseLocation({
      success: function (poi) {
        _this.updatePoi(poi);
      },
    });
  },
  chooseDistrict: function (e) {
    // TODO
    // 在二级页面点击后，修改此页面的district_id、district_name 3个字段
    var _this = this;
    wx.navigateTo({
      url: "/pages/districts/select",
      events: {
        change: function (ditem) {
          // TODO 选中了一个楼盘
          _this.setData({
            district_name: ditem.text,
            district_id: ditem.id,
          });
        },
      },
    });
  },

  updatePoi: function (poi) {
    this.setData({
      address: poi.name,
      sub_district_name: poi.name,
      latitude: poi.latitude,
      longitude: poi.longitude,
    });
  },
  typeimagesHandle: function (image) {
    var type_imagejoin = image.detail.value
      .map(function (obj) {
        return obj.url;
      })
      .join("|");
    this.setData({
      type_image: type_imagejoin,
    });
  },
  imagesHandle: function (image) {
    var imagesjoin = image.detail.value
      .map(function (obj) {
        return obj.url;
      })
      .join("|");
    this.setData({
      images: imagesjoin,
    });
  },
  videoHandle: function (video) {
    this.setData({
      video: JSON.stringify(video.detail.video),
    });
  },
  focusField() {
    this.setData({
      focus: true,
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    if (options.business) {
      this.setData({
        business: options,
      });
    }
    this.setData({
      bg: "https://tcdn.udeve.net/fang/login-window.png",
      primaryColor: app.globalData.myconfigs.color.primary || "#1989fa",
      primaryBtnColor: app.globalData.myconfigs.color.primary_btn ||
        "linear-gradient(270deg, #1989FA 0%, rgba(25, 137, 250, 0.6) 100%)",
    });
  },

  // 提交表单
  submitHandle: function () {
    var data = this.data;
    if (!data.district_name && !data.district_id) {
      wx.showToast({
        title: "请选择区域",
        icon: "none",
      });
      return;
    }
    if (
      !data.address &&
      !data.sub_district_name &&
      !data.latitude &&
      !data.longitude
    ) {
      wx.showToast({
        title: "请选择现住地址",
        icon: "none",
      });
      return;
    }
    if (!data.type_name) {
      wx.showToast({
        title: "请填写户型",
        icon: "none",
      });
      return;
    }
    if (!data.area_value) {
      wx.showToast({
        title: "请填写面积",
        icon: "none",
      });
      return;
    }
    if (!data.fitment) {
      wx.showToast({
        title: "请选择装修",
        icon: "none",
      });
      return;
    }
    if (!data.position) {
      wx.showToast({
        title: "请选择朝向",
        icon: "none",
      });
      return;
    }
    if (!data.price_value) {
      wx.showToast({
        title: "请填写期望月薪",
        icon: "none",
      });
      return;
    }
    if (!data.content) {
      wx.showToast({
        title: "请填写详细介绍",
        icon: "none",
      });
      return;
    }
    if (!data.type_image) {
      wx.showToast({
        title: "请上传户型图",
        icon: "none",
      });
      return;
    }
    if (!data.images) {
      wx.showToast({
        title: "请上传照片",
        icon: "none",
      });
      return;
    }
    if (!data.contact_name) {
      wx.showToast({
        title: "请输入姓名",
        icon: "none",
      });
      return;
    }
    if (!data.seller) {
      wx.showToast({
        title: "请选择身份",
        icon: "none",
      });
      return;
    } else {
      houseApi.createHouse(data).then((res) => {
        // todo
        if (res.data.code != 0) {
          return;
        }
        wx.showModal({
          title: "提交成功",
          content: "房源审核通过后将上架到小程序",
          showCancel: false,
          complete: (res) => {
            if (res.confirm) {
              wx.navigateBack({
                delta: 1,
              });
            }
          },
        });
      });
    }
  },

  setMobile() {
    if (app.globalData.userInfo) {
      this.setData({
        contact_mobile: app.globalData.userInfo.mobile,
      });
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log(
      "date:",
      new Date(),
      new Date("2019-07-24"),
      new Date(2025, 11, 30).toLocaleString(),
      new Date(2025, 12, 31).toISOString().substring(0, 10)
    );
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    if (!app.globalData.token) {
      this.selectComponent(".loginwindow").openWindow();
      return;
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
});