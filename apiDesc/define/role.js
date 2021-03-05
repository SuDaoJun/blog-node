'use strict'
/**
 * @apiDefine roleListParam
 * @apiSuccess (BACKPARAM) {String} _id 角色标识ID
 * @apiSuccess (BACKPARAM) {String} status 角色状态：0-禁用 1-启用
 * @apiSuccess (BACKPARAM) {String} type  角色类型：1-超级管理员 2-管理员 3-普通用户 4-其它角色
 * @apiSuccess (BACKPARAM) {String} name  角色名称
 * @apiSuccess (BACKPARAM) {String} description  角色描述
 * @apiSuccess (BACKPARAM) {String[]} functionList  角色功能权限列表
 * @apiSuccessExample 成功返回:
 {
   "code": "10000",
   "msg": "获取角色列表成功",
   "data": {
     "count": 1,
     "data": [
       {
         "type": "2",
         "status": "1",
         "functionList": [
           "5e70cdf2b1867a5078888888"
         ],
         "_id": "5e70cdf2b1867a5078888888",
         "name": "管理员",
         "description": "拥有后台部分操作权限",
         "createTime": "2020-03-30 22:15:41"
       }
     ]
   }
 }
 }
*/

/**
 * @apiDefine roleUserListParam
 * @apiParam {String} roleId 角色标识ID
 * @apiParam {String} [type] 查询用户分类 1-属于该角色用户 0-不属于该角色用户 默认为0
 * @apiParam {String} [name] 用户名称
 * @apiSuccess (BACKPARAM) {String} _id 用户标识ID
 * @apiSuccess (BACKPARAM) {String} roleId 角色标识ID
 * @apiSuccessExample 成功返回:
 {
   "code": "10000",
   "msg": "获取角色用户列表成功",
   "data": {
     "count": 1,
     "data": [
       {
         "_id": "5e70cdf2b1867a5078888888",
         "name": "sdj",
         "email": "1251662462@qq.com",
         "phone": "18473481958",
         "roleId": "5e70cdf2b1867a5078888888"
       }
     ]
   }
 }
*/

/**
 * @apiDefine roleAuthListParam
 * @apiSuccess (BACKPARAM) {String} _id 功能标识ID
 * @apiSuccess (BACKPARAM) {String} menuId 菜单标识ID
 * @apiSuccess (BACKPARAM) {String} title 功能标题
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "获取角色权限成功",
     "data": [
         {
             "_id": "5e70cdf2b1867a5078888888",
             "title": "新增文章",
             "menuId": "5e70cdf2b1867a5078888888",
             "createTime": "2020-03-31 22:09:39"
         },
         {
             "_id": "5e70cdf2b1867a5078888888",
             "title": "编辑文章",
             "menuId": "5e70cdf2b1867a5078888888",
             "createTime": "2020-03-31 22:09:46"
         }
     ]
 }
*/

/**
 * @apiDefine roleAddParam
 * @apiParam {String} name 角色名称
 * @apiParam {String} [description] 角色描述
 * @apiError (BACKERRORPARAM) {String} 10001 角色名称已存在
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "角色新增成功",
     "data": null
 }
*/

/**
 * @apiDefine roleUpdateParam
 * @apiParam {String} id 角色标识ID
 * @apiParam {String} [name] 角色名称
 * @apiParam {String} [description] 角色描述
 * @apiError (BACKERRORPARAM) {String} 10001 角色名称已存在
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "更新角色信息成功",
     "data": null
 }
*/

/**
 * @apiDefine setAuthUpdateParam
 * @apiParam {String} id 角色标识ID
 * @apiParam {String} functionList 功能列表，功能ID用逗号相隔，如2,5,7
 * @apiParam {String} menuList 菜单列表，菜单ID用逗号相隔，如2,5,7
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "角色赋值权限成功",
     "data": null
 }
*/

/**
 * @apiDefine roleMuchUserParam
 * @apiParam {String} roleId 角色标识ID
 * @apiParam {String} ids 所选用户列表，用户ID用逗号相隔，如2,5,7
 * @apiParam {String} [type] 操作类型， 1-移除用户 0-导入用户 默认为0
 * @apiError (BACKERRORPARAM) {String} 10008 所传用户或角色为空
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "用户角色操作成功",
     "data": null
 }
*/

/**
 * @apiDefine roleDelParam
 * @apiParam {String} id 角色标识ID
 * @apiError (BACKERRORPARAM) {String} 10008 该角色暂不支持删除，只能删除type为4的角色，1-超级管理员 2-管理员 3-普通用户 4-其它角色
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "删除角色成功",
     "data": null
 }
*/