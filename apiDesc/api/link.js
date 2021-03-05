'use strict'
/**
 * @api {GET} /blogAdmin/link/list 管理界面链接列表
 * @apiName linkList
 * @apiGroup LINK
 * @apiUse HEADERTOKEN
 * @apiUse linkListParam
*/

/**
 * @api {POST} /blogAdmin/link/add 链接新增
 * @apiName linkAdd
 * @apiGroup LINK
 * @apiUse HEADERTOKEN
 * @apiUse linkAddParam
*/

/**
 * @api {PUT} /blogAdmin/link/update 链接编辑
 * @apiName linkUpdate
 * @apiGroup LINK
 * @apiUse HEADERTOKEN
 * @apiUse linkUpdateParam
*/

/**
 * @api {DELETE} /blogAdmin/link/del/:id 链接删除
 * @apiName linkDel
 * @apiGroup LINK
 * @apiUse HEADERTOKEN
 * @apiUse linkDelParam
*/

/**
 * @api {GET} /blogPage/link/list 展示界面链接列表
 * @apiName linkPageList
 * @apiGroup LINK
 * @apiUse NOHEADERTOKEN
 * @apiUse linkListParam
*/