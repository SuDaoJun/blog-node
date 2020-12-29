'use strict'

/**
 * @apiDefine articleListParam
 * @apiSuccess (BACKPARAM) {String} status 文章发布状态：0-草稿，1-已发布
 * @apiSuccess (BACKPARAM) {String} imgId 文章封面ID
 * @apiSuccess (BACKPARAM) {String} _id  文章唯一标识ID
 * @apiSuccess (BACKPARAM) {String} title  文章标题
 * @apiSuccess (BACKPARAM) {String} description  文章描述
 * @apiSuccess (BACKPARAM) {Object} createUser  文章创建对象
 * @apiSuccess (BACKPARAM) {Object} tags  文章标签
 * @apiSuccess (BACKPARAM) {String} tags.name  文章标签名称
 * @apiSuccess (BACKPARAM) {String} tags.bgColor  文章标签显示背景
 * @apiSuccess (BACKPARAM) {Object} meta  文章统计对象
 * @apiSuccess (BACKPARAM) {String} meta.viewTotal 文章浏览总数
 * @apiSuccess (BACKPARAM) {String} meta.likeTotal 文章点赞总数
 * @apiSuccess (BACKPARAM) {String} meta.commentTotal 文章评论总数
 * @apiSuccess (BACKPARAM) {String} meta.txtTotal 文章字数总数
 * @apiSuccessExample 成功返回:
 {
   "code": "10000",
   "msg": "获取文章列表成功",
   "data": {
     "count": 1,
     "data": [
       {
         "meta": {
           "viewTotal": 68,
           "likeTotal": 1,
           "commentTotal": 0,
           "txtTotal": 27555
         },
         "imgId": "5e70cdf2b1867a5078888888",
         "status": "1",
         "tags": [
           {
             "bgColor": "#B5B506",
             "_id": "5e70cdf2b1867a5078888888",
             "name": "javascript"
           }
         ],
         "_id": "5e70cdf2b1867a5078888888",
         "title": "测试",
         "description": "测试",
         "createUser": {
           "mark": "5e70cdf2b1867a5078888888",
           "_id": "5e70cdf2b1867a5078888888",
           "name": "sdj"
         },
         "createTime": "2020-08-12 09:23:00"
       }
     ]
   }
 }
*/

/**
 * @apiDefine articleDetailParam
 * @apiParam {String} id 文章ID
 * @apiSuccess (BACKPARAM) {String} contentType  文章编辑器类型，0-富文本，1-markdown
 * @apiSuccess (BACKPARAM) {Object} meta  文章统计对象
 * @apiSuccess (BACKPARAM) {String} meta.viewTotal 文章浏览总数
 * @apiSuccess (BACKPARAM) {String} meta.likeTotal 文章点赞总数
 * @apiSuccess (BACKPARAM) {String} meta.commentTotal 文章评论总数
 * @apiSuccess (BACKPARAM) {String} meta.txtTotal 文章字数总数
 * @apiSuccess (BACKPARAM) {Object[]} linkUser  点赞用户列表
 * @apiSuccess (BACKPARAM) {Object[]} commentList  评论用户列表
 * @apiSuccessExample 成功返回:
 {
   "code": "10000",
   "msg": "获取文章详情成功",
   "data": {
     "meta": {
       "viewTotal": 90,
       "likeTotal": 1,
       "commentTotal": 1,
       "txtTotal": 949
     },
     "contentType": "0",
     "imgId": "5e70cdf2b1867a5078888888",
     "status": "1",
     "tags": [
       {
         "bgColor": "#74A762",
         "_id": "5e70cdf2b1867a5078888888",
         "name": "node"
       }
     ],
     "linkUser": [
       {
         "avatarId": "5e70cdf2b1867a5078888888",
         "_id": "5e70cdf2b1867a5078888888",
         "name": "sdj"
       }
     ],
     "commentList": [
       {
         "isTop": false,
         "status": "1",
         "replyCommentNum": 0,
         "replyCommentList": [],
         "_id": "5f311d5c6ada83490c117a75",
         "articleId": "5ec13327002a493ca863e23f",
         "content": "haha",
         "createUser": {
           "avatarId": "5e70cdf2b1867a5078888888",
           "_id": "5e70cdf2b1867a5078888888",
           "name": "sdj"
         },
         "createTime": "2020-08-10 18:11:40",
         "topUpdateTime": "2020-08-10 18:11:40"
       }
     ],
     "_id": "5ec13327002a493ca863e23f",
     "title": "node 知识点",
     "description": "node 知识点",
     "content": "<p>请求参数</p>",
     "createUser": {
       "avatarId": "5e70cdf2b1867a5078888888",
       "_id": "5e70cdf2b1867a5078888888",
       "name": "sdj"
     },
     "updateUser": {
       "avatarId": "5e70cdf2b1867a5078888888",
       "_id": "5e70cdf2b1867a5078888888",
       "name": "sdj"
     },
     "createTime": "2020-05-17 20:50:47",
     "updateTime": "2020-08-10 18:12:42"
   }
 }
*/

/**
 * @apiDefine articleAddParam
 * @apiParam {String} title 文章标题
 * @apiParam {String} description 文章描述
 * @apiParam {String} contentType 文章编辑器类型，0-富文本，1-markdown
 * @apiParam {String} content 文章内容
 * @apiParam {String} status 文章发布状态：0-草稿，1-已发布，默认为0
 * @apiParam {String} tags 文章标签ID，逗号相隔如1,6,7
 * @apiParam {String} [imgId] 封面图片ID
 * @apiError (BACKERRORPARAM) {String} 10001 文章标题已存在
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "文章新增成功",
     "data": null
 }
*/

/**
 * @apiDefine articleLikeParam
 * @apiParam {String} id 文章ID
 * @apiParam {String} type 点赞状态，0-取消点赞，1-点赞
 * @apiError (BACKERRORPARAM) {String} 10001 已点赞，不要重复点赞
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "文章点赞成功",
     "data": null
 }
*/

/**
 * @apiDefine articleUpdateParam
 * @apiParam {String} id 文章ID
 * @apiParam {String} [title] 文章标题
 * @apiParam {String} [description] 文章描述
 * @apiParam {String} [contentType] 文章编辑器类型，0-富文本，1-markdown
 * @apiParam {String} [content] 文章内容
 * @apiParam {String} [status] 文章发布状态：0-草稿，1-已发布，默认为0
 * @apiParam {String} [tags] 文章标签ID，逗号相隔如1,6,7
 * @apiParam {String} [imgId] 封面图片ID
 * @apiError (BACKERRORPARAM) {String} 10001 文章标题已存在
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "文章更新成功",
     "data": null
 }
*/

/**
 * @apiDefine articleDelParam
 * @apiParam {String} :id 文章ID
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "删除文章成功",
     "data": null
 }
*/