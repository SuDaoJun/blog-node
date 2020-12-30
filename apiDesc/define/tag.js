'use strict'
/**
 * @apiDefine tagListParam
 * @apiSuccess (BACKPARAM) {String} _id 标签标识ID
 * @apiSuccess (BACKPARAM) {String} name 标签名称
 * @apiSuccess (BACKPARAM) {String} description  标签描述
 * @apiSuccess (BACKPARAM) {String} bgColor  标签背景色
 * @apiSuccess (BACKPARAM) {Object} createUser  创建者
 * @apiSuccessExample 成功返回:
 {
   "code": "10000",
   "msg": "获取标签列表成功",
   "data": {
     "count": 1,
     "data": [
       {
         "description": "vue",
         "bgColor": "#41B883",
         "_id": "5e70cdf2b1867a5078888888",
         "name": "vue",
         "createUser": {
           "_id": "5e70cdf2b1867a5078888888",
           "name": "sdj"
         },
         "createTime": "2020-05-13 10:41:40",
         "updateTime": "2020-05-18 09:50:53"
       }
     ]
   }
 }
*/

/**
 * @apiDefine tagAddParam
 * @apiParam {String} name 标签名称
 * @apiParam {String} [description] 标签描述
 * @apiParam {String} [bgColor] 标签背景色
 * @apiError (BACKERRORPARAM) {String} 10001 标签已存在
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "标签新增成功",
     "data": null
 }
*/

/**
 * @apiDefine tagUpdateParam
 * @apiParam {String} id 项目标识ID
 * @apiParam {String} [name] 标签名称
 * @apiParam {String} [description] 标签描述
 * @apiParam {String} [bgColor] 标签背景色
 * @apiError (BACKERRORPARAM) {String} 10001 标签已存在
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "更新标签成功",
     "data": null
 }
*/

/**
 * @apiDefine tagDelParam
 * @apiParam {String} id 标签标识ID
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "删除标签成功",
     "data": null
 }
*/