'use strict'
/**
 * @api {GET} /blogAdmin/comment/list 管理界面评论列表
 * @apiName commentList
 * @apiDescription 文章一级评论列表
 * @apiGroup COMMENT
 * @apiUse HEADERTOKEN
 * @apiUse commentListParam
*/

/**
 * @api {POST} /blogAdmin/comment/add 一级评论新增
 * @apiName commentAdd
 * @apiGroup COMMENT
 * @apiUse HEADERTOKEN
 * @apiUse commentAddParam
*/

/**
 * @api {PUT} /blogAdmin/comment/update 一级评论编辑
 * @apiName commentUpdate
 * @apiGroup COMMENT
 * @apiUse HEADERTOKEN
 * @apiUse commentUpdateParam
*/

/**
 * @api {PUT} /blogAdmin/comment/sticky 一级评论置顶
 * @apiName commentSticky
 * @apiGroup COMMENT
 * @apiUse HEADERTOKEN
 * @apiUse commentStickyParam
*/

/**
 * @api {DELETE} /blogAdmin/comment/del/:id 一级评论删除
 * @apiName commentDel
 * @apiGroup COMMENT
 * @apiUse HEADERTOKEN
 * @apiUse commentDelParam
*/

/**
 * @api {GET} /blogPage/comment/list 展示界面评论列表
 * @apiName commentPageList
 * @apiDescription 文章一级评论l列表
 * @apiGroup COMMENT
 * @apiUse HEADERTOKEN
 * @apiUse commentListParam
*/