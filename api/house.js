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
//
export function getHouseList (data) {
    return request.get("/api/v6/houses", data);
}
// 发布二手房
export function createHouse (data) {
    return request.post("/api/v6/houses", data);
}

// 拉取楼盘详情页模块数据
export function getHouseBlocks (pid) {
    return request.get("/api/v6/houses/" + pid);
}

// 拉取楼盘筛选条件
export function getHouseFilter (busi) {
    return request.get("/api/v6/house_filters?business=" + busi);
}
