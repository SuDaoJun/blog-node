'use strict'
/**
 * @apiDefine linkListParam
 * @apiSuccess (BACKPARAM) {String} _id 链接标识ID
 * @apiSuccess (BACKPARAM) {String} color  链接背景颜色
 * @apiSuccess (BACKPARAM) {String} name  链接名称
 * @apiSuccess (BACKPARAM) {String} linkAddress  链接地址
 * @apiSuccessExample 成功返回:
 {
   "code": "10000",
   "msg": "获取友情链接列表成功",
   "data": {
     "count": 1,
     "data": [
       {
         "color": "#F7D699",
         "_id": "5e70cdf2b1867a5078888888",
         "name": "咚子",
         "linkAddress": "http://dzblog.cn/",
         "createTime": "2020-05-07 14:51:04",
         "updateTime": "2020-05-07 15:05:03"
       }
     ]
   }
 }
*/

/**
 * @apiDefine linkAddParam
 * @apiParam {String} name 链接名称
 * @apiParam {String} linkAddress 链接地址
 * @apiParam {String} [color] 链接颜色
 * @apiError (BACKERRORPARAM) {String} 10001 友情链接名称已存在
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "友情链接新增成功",
     "data": null
 }
*/

/**
 * @apiDefine linkUpdateParam
 * @apiParam {String} id 链接标识ID
 * @apiParam {String} [name] 链接名称
 * @apiParam {String} [linkAddress] 链接地址
 * @apiParam {String} [color] 链接颜色
 * @apiError (BACKERRORPARAM) {String} 10001 友情链接名称已存在
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "更新功能信息成功",
     "data": null
 }
*/

/**
 * @apiDefine linkDelParam
 * @apiParam {String} id 链接标识ID
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "删除友情链接成功",
     "data": null
 }
*/