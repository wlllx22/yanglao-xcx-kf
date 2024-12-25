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
const postApi=require("../../../api/post")
// components/pagemaker/posts/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  ready() {
    this.loadPosts()
  },

  /**
   * 组件的初始数据
   */
  data: {
    morelink: {
      cat: 'page',
      opentype: 'navigateTo',
      path: '/pkgPost/pages/index/index',
    },
    items: [],
    query: {},
    page: 1,
    perPage: 6,
    loading: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {

    loadMore: function () {
      var page = this.data.page
      this.setData({
        page: page + 1,
      }, () => {
        this.loadPosts()
      })
    },

    loadPosts: function () {
      this.setData({loading: true})
      var _this = this
      var query = this.data.query
      query.page = this.data.page
      query.per_page = this.data.perPage

      postApi.getPostList(query).then((resp)=>{
        _this.setData({loading: false })
        var res = resp.data.data.result;
        var items = _this.data.items 
        if(res.length > 0){
          items = items.concat(res)
          _this.setData({items: items })
        }

      })
    },
  },

  observers: {

  }
})