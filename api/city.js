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
 * city模块接口
 * **/


export function getCityListV6 () {
    return request.get("/api/v6/cities/");
}