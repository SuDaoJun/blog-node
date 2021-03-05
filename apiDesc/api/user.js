'use strict'
/**
 * @api {GET} /blogAdmin/user/getCode 随机验证码
 * @apiName userCode
 * @apiDescription 随机验证码有效期为10分钟
 * @apiGroup USER
 * @apiUse NOHEADERTOKEN
 * @apiUse codeParam
*/

/**
 * @api {POST} /blogAdmin/user/register 注册用户
 * @apiName registerUser
 * @apiGroup USER
 * @apiUse NOHEADERTOKEN
 * @apiUse registerParam
*/

/**
 * @api {GET} /blogAdmin/user/list 用户列表
 * @apiName getUser
 * @apiDescription 超级管理员显示所有用户，管理员只显示子账户
 * @apiGroup USER
 * @apiUse HEADERTOKEN
 * @apiUse userListParam
*/

/**
 * @api {POST} /blogAdmin/user/add 新增用户
 * @apiName addUser
 * @apiDescription 超级管理员创建的账号为管理员，管理员创建的账户为普通用户
 * @apiGroup USER
 * @apiUse HEADERTOKEN
 * @apiUse userAddParam
*/

/**
 * @api {PUT} /blogAdmin/user/update 更新用户
 * @apiName updateUser
 * @apiGroup USER
 * @apiUse HEADERTOKEN
 * @apiUse userUpdateParam
*/

/**
 * @api {POST} /blogAdmin/user/login 管理界面用户登录
 * @apiName adminLogin
 * @apiGroup USER
 * @apiUse NOHEADERTOKEN
 * @apiUse adminLoginParam
*/

/**
 * @api {POST} /blogAdmin/user/resetPwd 忘记密码
 * @apiName forgetPwd
 * @apiGroup USER
 * @apiUse NOHEADERTOKEN
 * @apiUse forgetPwdParam
*/

/**
 * @api {POST} /blogAdmin/user/setPwd 重置密码
 * @apiName setPwd
 * @apiGroup USER
 * @apiUse HEADERTOKEN
 * @apiUse setPwdParam
*/

/**
 * @api {POST} /blogAdmin/user/modifyPwd 修改密码
 * @apiName modifyPwd
 * @apiGroup USER
 * @apiUse HEADERTOKEN
 * @apiUse modifyPwdParam
*/

/**
 * @api {POST} /blogAdmin/user/sendEmail 获取邮箱验证码
 * @apiName sendEmail
 * @apiDescription 邮箱验证码有效期为10分钟
 * @apiGroup USER
 * @apiUse NOHEADERTOKEN
 * @apiUse sendEmailParam
*/

/**
 * @api {DELETE} /blogAdmin/user/del/:id 用户删除
 * @apiName userDel
 * @apiGroup USER
 * @apiUse HEADERTOKEN
 * @apiUse userDelParam
*/

/**
 * @api {POST} /blogPage/user/login 展示界面用户登录
 * @apiName pageLogin
 * @apiGroup USER
 * @apiUse NOHEADERTOKEN
 * @apiUse pageLoginParam
*/