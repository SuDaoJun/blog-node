'use strict'

/**
 * @apiDefine commentListParam
 * @apiSuccess (BACKPARAM) {Boolean} isTop 置顶状态：true-置顶
 * @apiSuccess (BACKPARAM) {String} status 评论显示状态：0-待审核，1-审核通过
 * @apiSuccess (BACKPARAM) {Number} replyCommentNum  回复评论条数
 * @apiSuccess (BACKPARAM) {Objrct[]} replyCommentList  回复评论列表
 * @apiSuccess (BACKPARAM) {String} content  评论内容
 * @apiSuccess (BACKPARAM) {String} _id  评论标识ID
 * @apiSuccess (BACKPARAM) {String} topUpdateTime  置顶更新时间
 * @apiSuccessExample 成功返回:
 {
   "code": "10000",
   "msg": "获取评论列表成功",
   "data": {
     "count": 1,
     "data": [
       {
         "isTop": false,
         "status": "1",
         "replyCommentNum": 1,
         "replyCommentList": [
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
             "content": "asdsadsasa",
             "replyUser": {
               "avatarId": "5e70cdf2b1867a5078888888",
               "_id": "5e70cdf2b1867a5078888888",
               "name": "sdj"
             },
             "createTime": "2020-08-10 22:17:12"
           }
         ],
         "_id": "5e70cdf2b1867a5078888888",
         "articleId": {
           "_id": "5e70cdf2b1867a5078888888",
           "title": "移动端知识点"
         },
         "content": "sda",
         "createUser": {
           "avatarId": "5e70cdf2b1867a5078888888",
           "_id": "5e70cdf2b1867a5078888888",
           "name": "sdj"
         },
         "createTime": "2020-08-10 22:16:46",
         "topUpdateTime": "2020-08-10 22:17:28"
       }
     ]
   }
 }
*/

/**
 * @apiDefine commentAddParam
 * @apiParam {String} articleId 文章ID
 * @apiParam {String} content 评论内容
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "文章评论新增成功",
     "data": null
 }
*/

/**
 * @apiDefine commentUpdateParam
 * @apiParam {String} commentId 评论标识ID
 * @apiParam {String} [content] 评论内容
 * @apiParam {String} [status] 评论状态
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "一级评论内容更新成功",
     "data": null
 }
*/

/**
 * @apiDefine commentStickyParam
 * @apiParam {String} commentId 评论标识ID
 * @apiParam {String} isTop 评论置顶状态：1或true为置顶，0或false取消置顶
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "评论置顶更换成功",
     "data": null
 }
*/

/**
 * @apiDefine commentDelParam
 * @apiParam {String} :id 评论ID
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "删除文章评论成功",
     "data": null
 }
*/


