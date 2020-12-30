'use strict'
/**
 * @api {GET} /blogAdmin/message/list 管理界面留言列表
 * @apiName messageList
 * @apiGroup MESSAGE
 * @apiUse HEADERTOKEN
 * @apiUse messageListParam
*/

/**
 * @api {GET} /blogPage/message/list 展示界面留言列表
 * @apiName messagePageList
 * @apiDescription 只显示审核通过的留言
 * @apiGroup MESSAGE
 * @apiUse NOHEADERTOKEN
 * @apiUse messageListParam
*/

/**
 * @api {POST} /blogAdmin/message/add 管理界面留言新增
 * @apiName messageAdd
 * @apiGroup MESSAGE
 * @apiUse HEADERTOKEN
 * @apiUse messageAddParam
*/

/**
 * @api {POST} /blogPage/message/add 展示界面留言新增
 * @apiName messagePageAdd
 * @apiGroup MESSAGE
 * @apiUse HEADERTOKEN
 * @apiUse messageAddParam
*/

/**
 * @api {PUT} /blogAdmin/message/update 留言编辑
 * @apiName messageUpdate
 * @apiGroup MESSAGE
 * @apiUse HEADERTOKEN
 * @apiUse messageUpdateParam
*/

/**
 * @api {DELETE} /blogAdmin/message/del/:id 留言删除
 * @apiName messageDel
 * @apiGroup MESSAGE
 * @apiUse HEADERTOKEN
 * @apiUse messageDelParam
*/