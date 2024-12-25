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

/** 
 * news模块接口
 * **/


// 拉取文章列表    完成
export function getNewsList (query) {
    return request.get("/api/v6/news/", query);
}

// 拉取文章分类信息   完成
export function getNewsCatList () {
    return request.get("/api/v6/news_cats/");
}

// 查询文章详细内容    1
export function getNewsDetail (newsId) {
    return request.get("/api/v6/news/" + newsId);
}