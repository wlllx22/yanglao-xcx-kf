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

// 更新用户信息(avatar/name)     1
export function updateUserProfile (profile) {
    // profile like {name:xxx, name: xxx}
    return request.put("/api/v6/users/myself", profile);
}

// 拉取当前账号的基本信息  完成
export function getMyselfInfo () {
    return request.get("/admin-api/system/user/profile/get");
    // return request.get("/api/v6/users/myself");
}
