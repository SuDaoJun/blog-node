'use strict'
/**
 * @apiDefine messageListParam
 * @apiSuccess (BACKPARAM) {String} _id 留言标识ID
 * @apiSuccess (BACKPARAM) {String} status 留言状态：0-待审核，1-通过
 * @apiSuccess (BACKPARAM) {String} content  留言内容
 * @apiSuccess (BACKPARAM) {Object} createUser  创建者
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "获取留言列表成功",
     "data": {
         "count": 2,
         "data": [
             {
                 "status": "1",
                 "_id": "5e70cdf2b1867a5078888888",
                 "content": "哈哈",
                 "createUser": {
                     "avatarId": "5e70cdf2b1867a5078888888",
                     "_id": "5e70cdf2b1867a5078888888",
                     "name": "sdj",
                     "createTime": "2020-03-17 21:17:38"
                 },
                 "createTime": "2020-12-22 09:34:46"
             },
             {
                 "status": "1",
                 "_id": "5e70cdf2b1867a5078888888",
                 "content": "haha",
                 "createUser": {
                     "avatarId": "5e70cdf2b1867a5078888888",
                     "_id": "5e70cdf2b1867a5078888888",
                     "name": "sdj",
                     "createTime": "2020-03-17 21:17:38"
                 },
                 "createTime": "2020-08-26 13:47:21"
             }
         ]
     }
 }
*/

/**
 * @apiDefine messageAddParam
 * @apiParam {String} content 留言内容
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "留言新增成功",
     "data": null
 }
*/

/**
 * @apiDefine messageUpdateParam
 * @apiParam {String} id 留言标识ID
 * @apiParam {String} [content] 留言内容
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "更新留言信息成功",
     "data": null
 }
*/

/**
 * @apiDefine messageDelParam
 * @apiParam {String} id 留言标识ID
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "删除留言信息成功",
     "data": null
 }
*/