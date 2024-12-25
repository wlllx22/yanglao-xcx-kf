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
 * need模块相关api
 * **/

export function submitNeed (data) {
    return request.post("/api/v6/needs/", data);
}