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
let request = require("../utils/request.js");

// 微信手机号码授权登录
// 必须传递对应的3个参数
export function wechatLogin(code, encryptedData, iv, phoneCode) {
  return request.post("/admin-api/system/auth/weixin-mini-login", {
    code: code,
    phoneCode: phoneCode,
    iv: iv,
    encrypted_data: encryptedData,
    type: 34,
    state: "default",
  });
  return request.post("/api/v6/sessions", {
    code: code,
    iv: iv,
    encrypted_data: encryptedData,
  });
}
