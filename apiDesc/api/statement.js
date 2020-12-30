'use strict'
/**
 * @api {GET} /blogAdmin/statement/list 管理界面励志语句列表
 * @apiName statementList
 * @apiDescription 查看星期一到星期天的励志语句
 * @apiGroup STATEMENT
 * @apiUse HEADERTOKEN
 * @apiUse statementListParam
*/

/**
 * @api {GET} /blogPage/statement/list 展示界面励志语句
 * @apiName statementPageList
 * @apiDescription 根据当前星期显示对应的励志语句
 * @apiGroup STATEMENT
 * @apiUse NOHEADERTOKEN
 * @apiUse statementListParam
*/

/**
 * @api {POST} /blogAdmin/statement/add 励志语句新增
 * @apiName statementAdd
 * @apiGroup STATEMENT
 * @apiUse HEADERTOKEN
 * @apiUse statementAddParam
*/

/**
 * @api {PUT} /blogAdmin/statement/update 励志语句编辑
 * @apiName statementUpdate
 * @apiGroup STATEMENT
 * @apiUse HEADERTOKEN
 * @apiUse statementUpdateParam
*/