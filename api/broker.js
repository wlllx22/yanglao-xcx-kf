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

// 拉取客服顾问列表  完成
export function getBrokerList (query) {
    return request.get("/api/v6/brokers/", query);
}

// 拉取一个楼盘下所有客服顾问列表  完成
export function getPostBrokerList (pid) {
  return request.get("/api/v6/post_brokers/"+ pid);
}

// 拉取客服顾问详情   完成
export function getBrokerDetail (userId) {
    return request.get("/api/v6/brokers/" + userId);
}

// 根据楼盘id拉取一个默认客服顾问详情   完成
export function getPostDefaultBrokerDetail (query) {
    return request.get("/api/v6/brokers/postDefault", query);
}

// 增加客服顾问主页浏览量    完成
// 注意：这里要传user_id，而不是broker_id
export function updateBrokerViewsCount (userId) {
    return request.post("/api/v6/brokers/view", {
        user_id: userId
    });
}


// 客服顾问申请入驻    完成
export function createBroker (profile) {
    return request.post("/api/v6/brokers", profile);
}

// 拉取当前登录账号客服顾问申请入驻状态信息   完成
export function checkBrokerStatus () {
    return request.post("/api/v6/brokers/check_status", {});
}

//完成
export function getBrokerShowDetail (query) {
    return request.get("/api/v6/brokers/show", query);
}


// 点赞  完成
export function likeBroker (data) {
    return request.post("/api/v6/brokers/like", data);
}



