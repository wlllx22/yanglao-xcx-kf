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
 * 二维码模块接口
 * **/

// 拉取二维码详细信息  完成 
export function getQrDetail (qrId) {
    return request.get("/api/v6/qrs/" + qrId);
}



// 生成一张带数据的二维图片   1
export function createQrImage (path, extData) {
    return request.post("/api/v6/qrs/", {
        path: path,
        qr_data: extData
    });
}