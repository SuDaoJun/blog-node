'use strict'
/**
 * @apiDefine fileDownParam
 * @apiParam (BACKPARAM) {String} downId 资源标识ID
 * @apiSuccessExample 成功返回:
 * 图片资源文件
*/

/**
 * @apiDefine fileUploadParam
 * @apiHeader {String} Content-Type  需要设置值为multipart/form-data;charset=UTF-8
 * @apiParam (BACKPARAM) {String} file 上传文件名字
 * @apiSuccess (BACKPARAM) {String} sourceId  资源标识ID
 * @apiSuccessExample 成功返回:
 {
   "code": "10000",
   "msg": "上传成功",
   "data": {
     "_id": "5e70cdf2b1867a5078888888",
     "sourceId": "1609317978655",
     "name": "timg (1).jpg",
     "type": "image/jpeg",
     "url": "http://sdjblog.cn:3000/blogAdmin/file/down?downId=1609317978655"
   }
 }
*/


/**
 * @apiDefine fileDelParam
 * @apiParam {String} sourceId 资源标识ID
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "删除资源成功",
     "data": null
 }
*/