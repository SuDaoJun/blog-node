'use strict'
/**
 * @api {GET} /blogAdmin/project/list 管理界面项目列表
 * @apiName projectList
 * @apiGroup PROJECT
 * @apiUse HEADERTOKEN
 * @apiUse projectListParam
*/

/**
 * @api {GET} /blogPage/project/list 展示界面项目列表
 * @apiName projectPageList
 * @apiGroup PROJECT
 * @apiUse NOHEADERTOKEN
 * @apiUse projectListParam
*/

/**
 * @api {POST} /blogAdmin/project/add 项目新增
 * @apiName projectAdd
 * @apiGroup PROJECT
 * @apiUse HEADERTOKEN
 * @apiUse projectAddParam
*/

/**
 * @api {PUT} /blogAdmin/project/update 项目编辑
 * @apiName projectUpdate
 * @apiGroup PROJECT
 * @apiUse HEADERTOKEN
 * @apiUse projectUpdateParam
*/

/**
 * @api {DELETE} /blogAdmin/project/del/:id 项目删除
 * @apiName projectDel
 * @apiGroup PROJECT
 * @apiUse HEADERTOKEN
 * @apiUse projectDelParam
*/