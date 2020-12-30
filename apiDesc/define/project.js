'use strict'
/**
 * @apiDefine projectListParam
 * @apiSuccess (BACKPARAM) {String} _id 项目标识ID
 * @apiSuccess (BACKPARAM) {String} status 项目状态：1-已完成 2-进行中 3-已废弃
 * @apiSuccess (BACKPARAM) {String} imgId  项目封面图片ID
 * @apiSuccess (BACKPARAM) {String} linkUrl  项目地址
 * @apiSuccess (BACKPARAM) {String} startTime  项目开始时间
 * @apiSuccess (BACKPARAM) {String} endTime  项目结束时间
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "获取项目列表成功",
     "data": {
         "count": 1,
         "data": [
             {
                 "imgId": "5e70cdf2b1867a5078888888",
                 "status": "2",
                 "endTime": "",
                 "_id": "5e70cdf2b1867a5078888888",
                 "name": "blog-node",
                 "linkUrl": "https://gitee.com/sdj_work/blog-node",
                 "startTime": "2020-03-10",
                 "description": "博客 node",
                 "createTime": "2020-05-18 14:56:44",
                 "updateTime": "2020-05-18 14:56:44"
             }
         ]
     }
 }
*/

/**
 * @apiDefine projectAddParam
 * @apiParam {String} name 项目名称
 * @apiParam {String} description 项目描述
 * @apiParam {String} linkUrl 项目地址
 * @apiParam {String} [imgId] 项目封面图片ID
 * @apiParam {String} [startTime] 项目开始时间
 * @apiParam {String} [endTime] 项目结束时间
 * @apiParam {String} [status] 项目状态：1-已完成 2-进行中 3-已废弃，默认为2
 * @apiError (BACKERRORPARAM) {String} 10001 项目名称已存在
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "项目新增成功",
     "data": null
 }
*/

/**
 * @apiDefine projectUpdateParam
 * @apiParam {String} id 项目标识ID
 * @apiParam {String} [name] 项目名称
 * @apiParam {String} [description] 项目描述
 * @apiParam {String} [linkUrl] 项目地址
 * @apiParam {String} [imgId] 项目封面图片ID
 * @apiParam {String} [startTime] 项目开始时间
 * @apiParam {String} [endTime] 项目结束时间
 * @apiParam {String} [status] 项目状态：1-已完成 2-进行中 3-已废弃
 * @apiError (BACKERRORPARAM) {String} 10001 项目名称已存在
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "更新项目信息成功",
     "data": null
 }
*/

/**
 * @apiDefine projectDelParam
 * @apiParam {String} id 项目标识ID
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "删除项目信息成功",
     "data": null
 }
*/