'use strict'

/**
 * @apiDefine menuListParam
 * @apiSuccess (BACKPARAM) {String} title 菜单名称
 * @apiSuccess (BACKPARAM) {String} description  菜单描述
 * @apiSuccess (BACKPARAM) {String} parentId  父级菜单ID
 * @apiSuccess (BACKPARAM) {Object} supMenu  父级菜单对象
 * @apiSuccess (BACKPARAM) {Object[]} functionList  功能列表
 * @apiSuccessExample 成功返回:
 {
   "code": "10000",
   "msg": "获取菜单列表成功",
   "data": {
     "count": 12,
     "data": [
       {
         "parentId": "5e70cdf2b1867a5078888888",
         "functionList": [
           {
             "_id": "5e70cdf2b1867a5078888888",
             "title": "新增项目",
             "menuId": "5e70cdf2b1867a5078888888",
             "createTime": "2020-03-31 22:11:20"
           },
           {
             "_id": "5e70cdf2b1867a5078888888",
             "title": "编辑项目",
             "menuId": "5e70cdf2b1867a5078888888",
             "createTime": "2020-03-31 22:11:28"
           },
           {
             "_id": "5e70cdf2b1867a5078888888",
             "title": "删除项目",
             "menuId": "5e70cdf2b1867a5078888888",
             "createTime": "2020-03-31 22:11:35"
           },
           {
             "_id": "5e70cdf2b1867a5078888888",
             "title": "浏览项目",
             "menuId": "5e70cdf2b1867a5078888888",
             "createTime": "2020-04-17 22:48:57"
           }
         ],
         "_id": "5e70cdf2b1867a5078888888",
         "title": "项目管理",
         "description": "项目管理",
         "createTime": "2020-03-24 21:58:08",
         "supMenu": {
           "parentId": "0",
           "functionList": [

           ],
           "_id": "5e70cdf2b1867a5078888888",
           "title": "系统菜单",
           "description": "系统菜单",
           "createTime": "2020-03-24 05:27:22"
         }
       },
       {
         "parentId": "0",
         "functionList": [

         ],
         "_id": "5e70cdf2b1867a5078888888",
         "title": "系统菜单",
         "description": "系统菜单",
         "createTime": "2020-03-24 05:27:22"
       }
     ]
   }
 }
*/

/**
 * @apiDefine menuTreeParam
 * @apiSuccess (BACKPARAM) {String} title 菜单名称
 * @apiSuccess (BACKPARAM) {String} description  菜单描述
 * @apiSuccess (BACKPARAM) {String} parentId  父级菜单ID
 * @apiSuccess (BACKPARAM) {Object[]} children  子级树结构
 * @apiSuccess (BACKPARAM) {Object[]} functionList  功能列表
 * @apiSuccessExample 成功返回:
 {
   "code": "10000",
   "msg": "获取菜单功能树成功",
   "data": [
     {
       "parentId": "0",
       "functionList": [],
       "_id": "5e70cdf2b1867a5078888888",
       "title": "系统菜单",
       "description": "系统菜单",
       "createTime": "2020-03-24 05:27:22",
       "children": [
         {
           "parentId": "5e70cdf2b1867a5078888888",
           "functionList": [
             {
               "_id": "5e70cdf2b1867a5078888888",
               "title": "新增项目",
               "menuId": "5e70cdf2b1867a5078888888",
               "createTime": "2020-03-31 22:11:20"
             },
             {
               "_id": "5e70cdf2b1867a5078888888",
               "title": "编辑项目",
               "menuId": "5e70cdf2b1867a5078888888",
               "createTime": "2020-03-31 22:11:28"
             },
             {
               "_id": "5e70cdf2b1867a5078888888",
               "title": "删除项目",
               "menuId": "5e70cdf2b1867a5078888888",
               "createTime": "2020-03-31 22:11:35"
             },
             {
               "_id": "5e70cdf2b1867a5078888888",
               "title": "浏览项目",
               "menuId": "5e70cdf2b1867a5078888888",
               "createTime": "2020-04-17 22:48:57"
             }
           ],
           "_id": "5e70cdf2b1867a5078888888",
           "title": "项目管理",
           "description": "项目管理",
           "createTime": "2020-03-24 21:58:08",
           "supMenu": {
             "parentId": "0",
             "functionList": [],
             "_id": "5e70cdf2b1867a5078888888",
             "title": "系统菜单",
             "description": "系统菜单",
             "createTime": "2020-03-24 05:27:22"
           }
         }]
         }
       ]
     }
   ]
 }
*/

/**
 * @apiDefine menuAddParam
 * @apiParam {String} title 菜单名称
 * @apiParam {String} parentId 父级菜单ID，默认0为顶级系统菜单
 * @apiParam {String} [description] 菜单描述
 * @apiError (BACKERRORPARAM) {String} 10001 菜单标题已存在
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "菜单新增成功",
     "data": null
 }
*/

/**
 * @apiDefine menuUpdateParam
 * @apiParam {String} id 菜单标识ID
 * @apiParam {String} [title] 菜单名称
 * @apiParam {String} [parentId] 父级菜单ID
 * @apiParam {String} [description] 菜单描述
 * @apiError (BACKERRORPARAM) {String} 10001 菜单标题已存在
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "更新菜单信息成功",
     "data": null
 }
*/

/**
 * @apiDefine menuDeleteParam
 * @apiParam {String} id 菜单标识ID
 * @apiError (BACKERRORPARAM) {String} 10001 菜单存在功能列表，请先删除功能列表
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "删除菜单成功",
     "data": null
 }
*/

/**
 * @apiDefine functionListParam
 * @apiSuccess (BACKPARAM) {String} _id 功能标识ID
 * @apiSuccess (BACKPARAM) {String} title  功能名称
 * @apiSuccess (BACKPARAM) {Object} menuId  归属菜单
 * @apiSuccessExample 成功返回:
 {
   "code": "10000",
   "msg": "获取功能列表成功",
   "data": {
     "count": 3,
     "data": [
       {
         "_id": "5e70cdf2b1867a5078888888",
         "title": "删除项目",
         "menuId": {
           "_id": "5e70cdf2b1867a5078888888",
           "title": "项目管理"
         },
         "createTime": "2020-03-31 22:11:35"
       },
       {
         "_id": "5e70cdf2b1867a5078888888",
         "title": "编辑项目",
         "menuId": {
           "_id": "5e70cdf2b1867a5078888888",
           "title": "项目管理"
         },
         "createTime": "2020-03-31 22:11:28"
       },
       {
         "_id": "5e70cdf2b1867a5078888888",
         "title": "新增项目",
         "menuId": {
           "_id": "5e70cdf2b1867a5078888888",
           "title": "项目管理"
         },
         "createTime": "2020-03-31 22:11:20"
       }
     ]
   }
 }
*/

/**
 * @apiDefine functionAddParam
 * @apiParam {String} menuId 归属菜单ID
 * @apiParam {String} title 功能名称
 * @apiError (BACKERRORPARAM) {String} 10001 功能名称已存在
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "功能新增成功",
     "data": null
 }
*/

/**
 * @apiDefine functionUpdateParam
 * @apiParam {String} id 功能标识ID
 * @apiParam {String} [title] 功能名称
 * @apiParam {String} [menuId] 归属菜单ID
 * @apiError (BACKERRORPARAM) {String} 10001 功能名称已存在
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "更新功能信息成功",
     "data": null
 }
*/

/**
 * @apiDefine functionDeleteParam
 * @apiParam {String} id 功能标识ID
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "删除功能信息成功",
     "data": null
 }
*/