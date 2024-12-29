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
 * 家政动态模块
 */

// 查询动态列表
export function getEventList (query) {
    return request.get("/api/v6/events", query);
}

// 查询动态详情
export function getEventDetail (eventId) {
    return request.get("/api/v6/events/" + eventId);
}

// 查询动态分类列表
export function getEventCatList () {
    return request.get("/api/v6/event_cats");
}

//拉取我订阅的家政动态列表
export function getMineFollowPostList (query) {
    return request.get("/api/v6/event_followers/mine", query);
}