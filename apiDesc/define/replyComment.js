'use strict'

/**
 * @apiDefine replyCommentListParam
 * @apiSuccess (BACKPARAM) {String} status 评论显示状态：0-待审核，1-审核通过
 * @apiSuccess (BACKPARAM) {String} _id  回复评论ID
 * @apiSuccess (BACKPARAM) {String} articleId  文章ID
 * @apiSuccess (BACKPARAM) {String} commentId  一级评论ID
 * @apiSuccess (BACKPARAM) {String} content  评论内容
 * @apiSuccess (BACKPARAM) {Object} toUser  被评论者
 * @apiSuccess (BACKPARAM) {Object} replyUser  评论者
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "获取回复评论列表成功",
     "data": {
         "count": 1,
         "data": [
            {
              "status": "1",
              "_id": "5e70cdf2b1867a5078888888",
              "articleId": "5e70cdf2b1867a5078888888",
              "commentId": "5e70cdf2b1867a5078888888",
              "toUser": {
                  "avatarId": "5e70cdf2b1867a5078888888",
                  "_id": "5e70cdf2b1867a5078888888",
                  "name": "sdj"
              },
              "content": "ss",
              "replyUser": {
                  "avatarId": "5e70cdf2b1867a5078888888",
                  "_id": "5e70cdf2b1867a5078888888",
                  "name": "sdj"
              },
              "createTime": "2020-12-22 17:51:02"
            }
         ]
     }
 }
*/

/**
 * @apiDefine replyCommentAddParam
 * @apiParam {String} articleId 文章ID
 * @apiParam {String} commentId 一级评论ID
 * @apiParam {String} content 评论内容
 * @apiParam {String} toUser 评论对象用户ID，即对谁评论
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "回复评论添加成功",
     "data": null
 }
*/

/**
 * @apiDefine replyCommentUpdateParam
 * @apiParam {String} replayId 回复评论标识ID
 * @apiParam {String} [content] 评论内容
 * @apiParam {String} [status] 评论显示状态：0-待审核，1-审核通过
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "回复评论更新成功",
     "data": null
 }
*/

/**
 * @apiDefine replyCommentDelParam
 * @apiParam {String} :id 评论回复ID
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "删除回复评论成功",
     "data": null
 }
*/


