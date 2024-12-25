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
let request = require('../utils/request.js');


// 拉取楼盘列表 
export function getPostList (data) {
    return request.get("/api/v6/posts/", data);
}

// 查询楼盘详情数据   
export function getPostDetail (pid) {
    return request.get("/api/v6/posts/" + pid);
}


// 拉取我收藏过的楼盘列表 
export function getFavPosts (query) {
    return request.get("/api/v6/posts/myfavs", query);
}



// 拉取楼盘详情页模块数据  
export function getPostBlocks (pid) {
    return request.get("/api/v6/posts/" + pid);
}

// 拉取楼盘bannersInfo信息数据
export function getPostBannerInfo (pid) {
    return request.get("/api/v6/post_banner_info/" + pid)
}

// 拉取楼盘基本信息  
export function getPostBaseInfo (pid) {
    return request.get("/api/v6/post_base_info/" + pid);
}

// 快速搜索楼盘，参数只需要传关键字既可   
export function quickSearch (kw) {
    return request.get("/api/v6/quicksearch", {
        kw: kw
    })
}

export function getPostDetailContent (pid) {
    return request.get("/api/v6/post_detail/" + pid);
}

// 查询楼盘户型列表  
export function getPostTypeList (query) {
    return request.get("/api/v6/types", query);
}

// 查询户型详情数据   
export function getPostTypeDetail (tid) {
    return request.get("/api/v6/types/" + tid);
}

// 查询楼盘评测
export function getPostReviews(pid){
  return request.get("/api/v6/post_reviews/"+pid)
}
