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
let request = require('../utils/request');

// 拉取订阅状态
export function getSubscribeStatus (data) {
	return request.get("/api/v6/subscribe_status", data);
}

// 订阅
export function unsubscribe (data) {
	return request.post("/api/v6/unsubscribe", data);
}

//取消订阅
export function subscribe (data) {
	return request.post("/api/v6/subscribe", data);
}