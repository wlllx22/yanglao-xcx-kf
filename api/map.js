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


// 拉取地图标记点
export function getMapMarkerList (query) {
    return request.post("/api/v6/map_markers", query);
}
// 拉取二手房标记点
export function getErshouMapMarkerList (query) {
  return request.post("/api/v6/map_markers_house", query);
}

