'use strict'
/**
 * @api {GET} /blogAdmin/role/list 角色列表
 * @apiName roleList
 * @apiGroup ROLE
 * @apiUse HEADERTOKEN
 * @apiUse roleListParam
*/

/**
 * @api {GET} /blogAdmin/role/userList 角色用户列表
 * @apiName roleUserList
 * @apiDescription 查询属于该角色的所用用户
 * @apiGroup ROLE
 * @apiUse HEADERTOKEN
 * @apiUse roleUserListParam
*/

/**
 * @api {GET} /blogAdmin/role/getAuth 角色权限列表
 * @apiName roleAuthList
 * @apiDescription 查询属于该角色的菜单功能权限
 * @apiGroup ROLE
 * @apiUse HEADERTOKEN
 * @apiUse roleAuthListParam
*/

/**
 * @api {POST} /blogAdmin/role/add 角色新增
 * @apiName roleAdd
 * @apiGroup ROLE
 * @apiUse HEADERTOKEN
 * @apiUse roleAddParam
*/

/**
 * @api {PUT} /blogAdmin/role/update 角色编辑
 * @apiName roleUpdate
 * @apiGroup ROLE
 * @apiUse HEADERTOKEN
 * @apiUse roleUpdateParam
*/

/**
 * @api {PUT} /blogAdmin/role/setAuth 角色权限编辑
 * @apiName setAuthUpdate
 * @apiGroup ROLE
 * @apiUse HEADERTOKEN
 * @apiUse setAuthUpdateParam
*/

/**
 * @api {PUT} /blogAdmin/role/updateMuchUser 用户绑定角色
 * @apiName roleMuchUser
 * @apiDescription 批量导入用户或移除用户到某角色
 * @apiGroup ROLE
 * @apiUse HEADERTOKEN
 * @apiUse roleMuchUserParam
*/

/**
 * @api {DELETE} /blogAdmin/role/del/:id 角色删除
 * @apiName roleDel
 * @apiGroup ROLE
 * @apiUse HEADERTOKEN
 * @apiUse roleDelParam
*/