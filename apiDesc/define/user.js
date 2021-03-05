'use strict'

/**
 * @apiDefine codeParam
 * @apiSuccessExample 成功返回:
 * svg格式文件
*/

/**
 * @apiDefine registerParam
 * @apiParam {String} name 用户名
 * @apiParam {String} password 密码
 * @apiParam {String} email 邮箱
 * @apiParam {String} [phone] 手机
 * @apiParam {String} [type] 注册类型，type存在不为空则注册类型为普通用户，否则为后台管理员
 * @apiParam {String} [randomCode] 随机验证码，注册类型为后台管理员必填
 * @apiParam {String} [emailCode] 邮箱验证码，注册类型为后台管理员必填
 * @apiError (BACKERRORPARAM) {String} 10001 用户名已存在
 * @apiError (BACKERRORPARAM) {String} 10008 邮箱已存在
 * @apiError (BACKERRORPARAM) {String} 10006 随机验证码错误或超过有效期10分钟
 * @apiError (BACKERRORPARAM) {String} 10004 邮箱验证码错误
 * @apiError (BACKERRORPARAM) {String} 10005 邮箱验证码有效期已过期
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "注册成功",
     "data": null
 }
*/

/**
 * @apiDefine userListParam
 * @apiSuccess (BACKPARAM) {String} status 用户状态：0-禁用，1-启用
 * @apiSuccess (BACKPARAM) {String} avatarId 头像ID
 * @apiSuccess (BACKPARAM) {String} mark  账户归属标识
 * @apiSuccess (BACKPARAM) {String} _id  用户唯一标识ID
 * @apiSuccess (BACKPARAM) {String} name  用户名
 * @apiSuccess (BACKPARAM) {String} email  邮箱
 * @apiSuccess (BACKPARAM) {String} phone  手机号码
 * @apiSuccess (BACKPARAM) {String} info  个性签名
 * @apiSuccess (BACKPARAM) {Object} roleId  角色对象
 * @apiSuccess (BACKPARAM) {String} roleId.type 角色类型
 * @apiSuccess (BACKPARAM) {String} roleId.status 角色状态：0-禁用，1-启用
 * @apiSuccess (BACKPARAM) {String[]} roleId.functionList 角色功能权限
 * @apiSuccess (BACKPARAM) {String[]} roleId.menuList 角色菜单权限
 * @apiSuccess (BACKPARAM) {String} roleId._id 角色唯一标识ID
 * @apiSuccessExample 成功返回:
 {
   "code": "10000",
   "msg": "获取用户列表成功",
   "data": {
     "count": 1,
     "data": [
       {
         "status": "1",
         "avatarId": "9184a55892160ddf2a263f2aa6da88d9",
         "mark": "563f404e629094a33",
         "_id": "5e70cdf2b1867a5078888888",
         "name": "sdj",
         "email": "1251662462@qq.com",
         "phone": "18473481958",
         "roleId": {
           "type": "1",
           "status": "1",
           "functionList": [
             "5e70cdf2b1867a5078888888"
           ],
           "menuList": [
             "5e70cdf2b1867a5078888888"
           ],
           "_id": "5e70cdf2b1867a5078888888",
           "name": "超级管理员",
           "description": "拥有后台全部操作权限",
           "createUser": "5e70cdf2b1867a5078888888",
           "updateUser": "5e70cdf2b1867a5078888888",
           "createTime": "2020-03-30 22:15:23",
           "updateTime": "2020-04-27 23:30:36"
         },
         "createTime": "2020-03-17 21:17:38",
         "updateTime": "2020-12-23 22:51:29",
         "info": "haha"
       }
     ]
   }
 }
*/

/**
 * @apiDefine userAddParam
 * @apiParam {String} name 用户名
 * @apiParam {String} password 密码
 * @apiParam {String} email 邮箱
 * @apiParam {String} [phone] 手机
 * @apiParam {String} [roleId] 角色类型，默认为普通用户
 * @apiError (BACKERRORPARAM) {String} 10001 用户名已存在
 * @apiError (BACKERRORPARAM) {String} 10008 邮箱已存在
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "添加用户成功",
     "data": null
 }
*/

/**
 * @apiDefine userUpdateParam
 * @apiParam {String} id 用户标识ID
 * @apiParam {String} [status] 用户状态：禁用-0，1-启用
 * @apiParam {String} [avatarId] 头像ID
 * @apiParam {String} [name] 用户名
 * @apiParam {String} [email] 邮箱
 * @apiParam {String} [phone] 手机
 * @apiParam {String} [info] 个性签名
 * @apiError (BACKERRORPARAM) {String} 10001 用户名已存在
 * @apiError (BACKERRORPARAM) {String} 10008 邮箱已存在
 * @apiSuccessExample 成功返回:
 {
   "code": "10000",
   "msg": "更新用户信息成功",
   "data": {
     "status": "1",
     "avatarId": "9184a55892160ddf2a263f2aa6da88d9",
     "mark": "563f404e629094a33",
     "_id": "5e70cdf2b1867a5078888888",
     "name": "sdj",
     "email": "1251662462@qq.com",
     "phone": "18473481958",
     "roleId": {
       "type": "1",
       "status": "1",
       "functionList": [
         "5e70cdf2b1867a5078888888"
       ],
       "menuList": [
         "5e70cdf2b1867a5078888888"
       ],
       "_id": "5e70cdf2b1867a5078888888",
       "name": "超级管理员",
       "description": "拥有后台全部操作权限",
       "createUser": "5e70cdf2b1867a5078888888",
       "updateUser": "5e70cdf2b1867a5078888888",
       "createTime": "2020-03-30 22:15:23",
       "updateTime": "2020-04-27 23:30:36"
     },
     "createTime": "2020-03-17 21:17:38",
     "updateTime": "2020-12-23 22:51:29",
     "info": "haha"
   }
 }
*/

/**
 * @apiDefine adminLoginParam
 * @apiParam {String} name 用户名
 * @apiParam {String} password 密码
 * @apiParam {String} randomCode 随机验证码
 * @apiSuccess (BACKPARAM) {String} token 身份验证，没有返回前缀Bearer ，传递时需要加上
 * @apiSuccess (BACKPARAM) {Object} user 用户信息
 * @apiSuccess (BACKPARAM) {String} user.status 用户状态：0-禁用，1-启用
 * @apiSuccess (BACKPARAM) {String} user.avatarId 头像ID
 * @apiSuccess (BACKPARAM) {String} user.mark  账户归属标识
 * @apiSuccess (BACKPARAM) {String} user._id  用户唯一标识ID
 * @apiSuccess (BACKPARAM) {String} user.name  用户名
 * @apiSuccess (BACKPARAM) {String} user.email  邮箱
 * @apiSuccess (BACKPARAM) {String} user.phone  手机号码
 * @apiSuccess (BACKPARAM) {String} user.info  个性签名
 * @apiSuccess (BACKPARAM) {Object} user.roleId  角色对象
 * @apiSuccess (BACKPARAM) {String} user.roleId.type 角色类型
 * @apiSuccess (BACKPARAM) {String} user.roleId.status 角色状态：0-禁用，1-启用
 * @apiSuccess (BACKPARAM) {String[]} user.roleId.functionList 角色功能权限
 * @apiSuccess (BACKPARAM) {String[]} user.roleId.menuList 角色菜单权限
 * @apiSuccess (BACKPARAM) {String} user.roleId._id 角色唯一标识ID
 * @apiError (BACKERRORPARAM) {String} 10002 邮箱或用户名不存在
 * @apiError (BACKERRORPARAM) {String} 10003 密码错误
 * @apiError (BACKERRORPARAM) {String} 10008 用户处于禁用状态
 * @apiError (BACKERRORPARAM) {String} 10006 随机验证码错误或超过有效期10分钟
 * @apiSuccessExample 成功返回:
 {
   "code": "10000",
   "msg": "登录成功",
   "data": {
    "user": {
      "status": "1",
      "avatarId": "9184a55892160ddf2a263f2aa6da88d9",
      "mark": "563f404e629094a33",
      "_id": "5e70cdf2b1867a5078888888",
      "name": "sdj",
      "email": "1251662462@qq.com",
      "phone": "18473481958",
      "roleId": {
        "type": "1",
        "status": "1",
        "functionList": [
          "5e70cdf2b1867a5078888888"
        ],
        "menuList": [
          "5e70cdf2b1867a5078888888"
        ],
        "_id": "5e70cdf2b1867a5078888888",
        "name": "超级管理员",
        "description": "拥有后台全部操作权限",
        "createUser": "5e70cdf2b1867a5078888888",
        "updateUser": "5e70cdf2b1867a5078888888",
        "createTime": "2020-03-30 22:15:23",
        "updateTime": "2020-04-27 23:30:36"
      },
      "createTime": "2020-03-17 21:17:38",
      "updateTime": "2020-12-23 22:51:29",
      "info": "haha"
    },
    "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTWVzc2FnZSI6eyJpZCI6IjVlNzBjZGYyYjE4NjdhNTA3NGRkYTM1ZSIsIm5hbWUiOiJzZGoiLCJhdmF0YXJJZCI6IjkxODRhNTU4OTIxNjBkZGYyYTI2M2YyYWE2ZGE4OGQ5IiwiZnVuY3Rpb25MaXN0IjpbIjVlODM0ZjIzZmI2OTMwNWFhMDkxZTgyNCIsIjVlODM0ZjJhZmI2OTMwNWFhMDkxZTgyNSIsIjVlODM0ZjMxZmI2OTMwNWFhMDkxZTgyNiIsIjVlOTljMTdkZDFiYTcyOWE3OGIwMTZiNiIsIjVlODM0ZjUxZmI2OTMwNWFhMDkxZTgyNyIsIjVlODM0ZjVhZmI2OTMwNWFhMDkxZTgyOCIsIjVlODM0ZjYxZmI2OTMwNWFhMDkxZTgyOSIsIjVlOTljMWMwZDFiYTcyOWE3OGIwMTZiNyIsIjVlODM0ZjZmZmI2OTMwNWFhMDkxZTgyYSIsIjVlODM0Zjc3ZmI2OTMwNWFhMDkxZTgyYiIsIjVlODM0ZjdlZmI2OTMwNWFhMDkxZTgyYyIsIjVlOTljMWNjZDFiYTcyOWE3OGIwMTZiOCIsIjVlODM0Zjg4ZmI2OTMwNWFhMDkxZTgyZCIsIjVlODM0ZjkwZmI2OTMwNWFhMDkxZTgyZSIsIjVlODM0Zjk3ZmI2OTMwNWFhMDkxZTgyZiIsIjVlOTljMWQ5ZDFiYTcyOWE3OGIwMTZiOSIsIjVlODM0ZjllZmI2OTMwNWFhMDkxZTgzMCIsIjVlODM0ZmFmZmI2OTMwNWFhMDkxZTgzMSIsIjVlODM0ZmI1ZmI2OTMwNWFhMDkxZTgzMiIsIjVlOTljMWUyZDFiYTcyOWE3OGIwMTZiYSIsIjVlODM0ZmJkZmI2OTMwNWFhMDkxZTgzMyIsIjVlODM0ZmM0ZmI2OTMwNWFhMDkxZTgzNCIsIjVlODM0ZmNiZmI2OTMwNWFhMDkxZTgzNSIsIjVlOTljMWVkZDFiYTcyOWE3OGIwMTZiYiIsIjVlODM0ZmYyZmI2OTMwNWFhMDkxZTgzNiIsIjVlOTljMjVhZDFiYTcyOWE3OGIwMTZiYyIsIjVlOTljMjgwZDFiYTcyOWE3OGIwMTZiZCIsIjVlOTljMjg3ZDFiYTcyOWE3OGIwMTZiZSIsIjVlN2UwNmE4MDg0OWI3MDhkNDE0ZGEwMSIsIjVlODM1MDM5ZmI2OTMwNWFhMDkxZTgzOCIsIjVlODM1MDNmZmI2OTMwNWFhMDkxZTgzOSIsIjVlOTljMmI0ZDFiYTcyOWE3OGIwMTZiZiIsIjVlOTljOGE5ZDFiYTcyOWE3OGIwMTZjMSIsIjVlYTZmYTI0NWZiNWQyNTY3YzZjYWQ1NCIsIjVlODM1MDVkZmI2OTMwNWFhMDkxZTgzYSIsIjVlODM1MDY3ZmI2OTMwNWFhMDkxZTgzYiIsIjVlODM1MDZkZmI2OTMwNWFhMDkxZTgzYyIsIjVlOTljMmMyZDFiYTcyOWE3OGIwMTZjMCIsIjVlOTljYjg1ZDFiYTcyOWE3OGIwMTZjMiJdLCJyb2xlSWQiOiI1ZTgxZmVmYmNlOGUyNjBhMzhkMGI1NzciLCJtYXJrIjoiNTYzZjQwNGU2MjkwOTRhMTAifSwiaWF0IjoxNjA5MjI3NjIyLCJleHAiOjE2MTE4MTk2MjJ9.Tq13RH6Rag-b4U4VORloG6DPe9hc1Tt09Y5xlANYlUEuwbOLtdBkD9ZqhTGRjPppYZFbiK97cMdvoflk1zreKDZ2xJ9OPqabkIwihGGKT8bKOey7nYS7H5xmmyMizgn_jYGBRsrlj8xXEhZwAn03s2Np9lJ6goKhlFsDTsV4r_Y"
   }
 }
*/

/**
 * @apiDefine forgetPwdParam
 * @apiParam {String} email 邮箱
 * @apiParam {String} password 密码
 * @apiParam {String} randomCode 随机验证码
 * @apiParam {String} emailCode 邮箱验证码
 * @apiError (BACKERRORPARAM) {String} 10002 邮箱不存在
 * @apiError (BACKERRORPARAM) {String} 10006 随机验证码错误或超过有效期10分钟
 * @apiError (BACKERRORPARAM) {String} 10004 邮箱验证码错误
 * @apiError (BACKERRORPARAM) {String} 10005 邮箱验证码有效期已过期
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "重置密码成功",
     "data": null
 }
*/

/**
 * @apiDefine setPwdParam
 * @apiParam {String} userId 用户ID
 * @apiError (BACKERRORPARAM) {String} 10002 用户不存在
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "重置密码成功",
     "data": null
 }
*/

/**
 * @apiDefine modifyPwdParam
 * @apiParam {String} password 旧密码
 * @apiParam {String} newPassword 新密码
 * @apiError (BACKERRORPARAM) {String} 10002 用户不存在
 * @apiError (BACKERRORPARAM) {String} 10008 密码错误
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "修改密码成功",
     "data": null
 }
*/

/**
 * @apiDefine sendEmailParam
 * @apiParam {String} email 邮箱
 * @apiParam {String} type 发送类型：注册发送-add  忘记密码发送-update
 * @apiError (BACKERRORPARAM) {String} 10001 邮箱账号已存在，type为add
 * @apiError (BACKERRORPARAM) {String} 10007 邮箱账号不存在，type为update
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "发送验证码成功",
     "data": null
 }
*/

/**
 * @apiDefine userDelParam
 * @apiParam {String} :id 用户ID
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "用户删除成功",
     "data": null
 }
*/

/**
 * @apiDefine pageLoginParam
 * @apiParam {String} name 用户名
 * @apiParam {String} password 密码
 * @apiSuccess (BACKPARAM) {String} token 身份验证，没有返回前缀Bearer ，传递时需要加上
 * @apiSuccess (BACKPARAM) {Object} user 用户信息
 * @apiSuccess (BACKPARAM) {String} user.status 用户状态：0-禁用，1-启用
 * @apiSuccess (BACKPARAM) {String} user.avatarId 头像ID
 * @apiSuccess (BACKPARAM) {String} user.mark  账户归属标识
 * @apiSuccess (BACKPARAM) {String} user._id  用户唯一标识ID
 * @apiSuccess (BACKPARAM) {String} user.name  用户名
 * @apiSuccess (BACKPARAM) {String} user.email  邮箱
 * @apiSuccess (BACKPARAM) {String} user.phone  手机号码
 * @apiSuccess (BACKPARAM) {String} user.info  个性签名
 * @apiSuccess (BACKPARAM) {Object} user.roleId  角色对象
 * @apiSuccess (BACKPARAM) {String} user.roleId.type 角色类型
 * @apiSuccess (BACKPARAM) {String} user.roleId.status 角色状态：0-禁用，1-启用
 * @apiSuccess (BACKPARAM) {String[]} user.roleId.functionList 角色功能权限
 * @apiSuccess (BACKPARAM) {String[]} user.roleId.menuList 角色菜单权限
 * @apiSuccess (BACKPARAM) {String} user.roleId._id 角色唯一标识ID
 * @apiError (BACKERRORPARAM) {String} 10002 邮箱或用户名不存在
 * @apiError (BACKERRORPARAM) {String} 10003 密码错误
 * @apiError (BACKERRORPARAM) {String} 10008 用户处于禁用状态
 * @apiSuccessExample 成功返回:
 {
   "code": "10000",
   "msg": "登录成功",
   "data": {
    "user": {
      "status": "1",
      "avatarId": "9184a55892160ddf2a263f2aa6da88d9",
      "mark": "563f404e629094a33",
      "_id": "5e70cdf2b1867a5078888888",
      "name": "sdj",
      "email": "1251662462@qq.com",
      "phone": "18473481958",
      "roleId": {
        "type": "1",
        "status": "1",
        "functionList": [
          "5e70cdf2b1867a5078888888"
        ],
        "menuList": [
          "5e70cdf2b1867a5078888888"
        ],
        "_id": "5e70cdf2b1867a5078888888",
        "name": "超级管理员",
        "description": "拥有后台全部操作权限",
        "createUser": "5e70cdf2b1867a5078888888",
        "updateUser": "5e70cdf2b1867a5078888888",
        "createTime": "2020-03-30 22:15:23",
        "updateTime": "2020-04-27 23:30:36"
      },
      "createTime": "2020-03-17 21:17:38",
      "updateTime": "2020-12-23 22:51:29",
      "info": "haha"
    },
    "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTWVzc2FnZSI6eyJpZCI6IjVlNzBjZGYyYjE4NjdhNTA3NGRkYTM1ZSIsIm5hbWUiOiJzZGoiLCJhdmF0YXJJZCI6IjkxODRhNTU4OTIxNjBkZGYyYTI2M2YyYWE2ZGE4OGQ5IiwiZnVuY3Rpb25MaXN0IjpbIjVlODM0ZjIzZmI2OTMwNWFhMDkxZTgyNCIsIjVlODM0ZjJhZmI2OTMwNWFhMDkxZTgyNSIsIjVlODM0ZjMxZmI2OTMwNWFhMDkxZTgyNiIsIjVlOTljMTdkZDFiYTcyOWE3OGIwMTZiNiIsIjVlODM0ZjUxZmI2OTMwNWFhMDkxZTgyNyIsIjVlODM0ZjVhZmI2OTMwNWFhMDkxZTgyOCIsIjVlODM0ZjYxZmI2OTMwNWFhMDkxZTgyOSIsIjVlOTljMWMwZDFiYTcyOWE3OGIwMTZiNyIsIjVlODM0ZjZmZmI2OTMwNWFhMDkxZTgyYSIsIjVlODM0Zjc3ZmI2OTMwNWFhMDkxZTgyYiIsIjVlODM0ZjdlZmI2OTMwNWFhMDkxZTgyYyIsIjVlOTljMWNjZDFiYTcyOWE3OGIwMTZiOCIsIjVlODM0Zjg4ZmI2OTMwNWFhMDkxZTgyZCIsIjVlODM0ZjkwZmI2OTMwNWFhMDkxZTgyZSIsIjVlODM0Zjk3ZmI2OTMwNWFhMDkxZTgyZiIsIjVlOTljMWQ5ZDFiYTcyOWE3OGIwMTZiOSIsIjVlODM0ZjllZmI2OTMwNWFhMDkxZTgzMCIsIjVlODM0ZmFmZmI2OTMwNWFhMDkxZTgzMSIsIjVlODM0ZmI1ZmI2OTMwNWFhMDkxZTgzMiIsIjVlOTljMWUyZDFiYTcyOWE3OGIwMTZiYSIsIjVlODM0ZmJkZmI2OTMwNWFhMDkxZTgzMyIsIjVlODM0ZmM0ZmI2OTMwNWFhMDkxZTgzNCIsIjVlODM0ZmNiZmI2OTMwNWFhMDkxZTgzNSIsIjVlOTljMWVkZDFiYTcyOWE3OGIwMTZiYiIsIjVlODM0ZmYyZmI2OTMwNWFhMDkxZTgzNiIsIjVlOTljMjVhZDFiYTcyOWE3OGIwMTZiYyIsIjVlOTljMjgwZDFiYTcyOWE3OGIwMTZiZCIsIjVlOTljMjg3ZDFiYTcyOWE3OGIwMTZiZSIsIjVlN2UwNmE4MDg0OWI3MDhkNDE0ZGEwMSIsIjVlODM1MDM5ZmI2OTMwNWFhMDkxZTgzOCIsIjVlODM1MDNmZmI2OTMwNWFhMDkxZTgzOSIsIjVlOTljMmI0ZDFiYTcyOWE3OGIwMTZiZiIsIjVlOTljOGE5ZDFiYTcyOWE3OGIwMTZjMSIsIjVlYTZmYTI0NWZiNWQyNTY3YzZjYWQ1NCIsIjVlODM1MDVkZmI2OTMwNWFhMDkxZTgzYSIsIjVlODM1MDY3ZmI2OTMwNWFhMDkxZTgzYiIsIjVlODM1MDZkZmI2OTMwNWFhMDkxZTgzYyIsIjVlOTljMmMyZDFiYTcyOWE3OGIwMTZjMCIsIjVlOTljYjg1ZDFiYTcyOWE3OGIwMTZjMiJdLCJyb2xlSWQiOiI1ZTgxZmVmYmNlOGUyNjBhMzhkMGI1NzciLCJtYXJrIjoiNTYzZjQwNGU2MjkwOTRhMTAifSwiaWF0IjoxNjA5MjI3NjIyLCJleHAiOjE2MTE4MTk2MjJ9.Tq13RH6Rag-b4U4VORloG6DPe9hc1Tt09Y5xlANYlUEuwbOLtdBkD9ZqhTGRjPppYZFbiK97cMdvoflk1zreKDZ2xJ9OPqabkIwihGGKT8bKOey7nYS7H5xmmyMizgn_jYGBRsrlj8xXEhZwAn03s2Np9lJ6goKhlFsDTsV4r_Y"
   }
 }
*/