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


// 拉取收藏状态
export function getFavStatus (query) {
    return request.get("/api/v6/favs", query);
}
// 添加收藏 
export function createFav (targetType, targetId) {
    return request.post("/api/v6/favs", { target_type: targetType, target_id: targetId });
}