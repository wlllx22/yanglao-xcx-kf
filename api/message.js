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
 * 消息模块接口
 * **/


// 标记系统消息全部已读
export function markSysReadAll () {
  return request.post("/api/v6/sys_message_list/readall");
}

// 拉取系统消息
export function getSysMessage (data) {
  return request.get("/api/v6/sys_message_list", data);
}

// 标记系统消息已读
export function markSysMesRead (id) {
  return request.post("/api/v6/sys_message_list/marker_read/" + id);
}

// 拉取系统消息详情
export function getSysMessageDetail (id) {
  return request.get("/api/v6/sys_message/" + id);
}

// 删除一个系统通知
export function deleteSysMes (chatId) {
  return request.destroy("/api/v6/sys_message/" + chatId);
}