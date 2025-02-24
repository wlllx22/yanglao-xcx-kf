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
 * 我的模块接口
 * **/


export function getWorkspaceIcons () {
    return request.get("/api/v6/workspace");
}

// 拉取我发布的问题列表  完成
export function getMyselfQuestionList (query) {
    return request.get("/api/v6/myself/questions", query);
}

