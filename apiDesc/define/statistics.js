'use strict'

/**
 * @apiDefine countTotalParam
 * @apiSuccess (BACKPARAM) {Number} accessUserTotal 访客总数
 * @apiSuccess (BACKPARAM) {Number} userTotal 用户总数
 * @apiSuccess (BACKPARAM) {Number} articleTotal 文章总数
 * @apiSuccess (BACKPARAM) {Number} messageTotal 留言总数
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "获取统计列表成功",
     "data": {
         "accessUserTotal": 63,
         "userTotal": 7,
         "articleTotal": 8,
         "messageTotal": 20
     }
 }
*/

/**
 * @apiDefine accessUserStatisticsParam
 * @apiParam {String} [type] 查询类型，day-天 week-周 month-月 year-年 其它-时间选择，默认时间选择
 * @apiParam {String} [startTime] 开始时间，默认为此时
 * @apiParam {String} [endTime] 结束时间
 * @apiSuccess (BACKPARAM) {String} _id  代表意义，day-小时 week-星期（1代表星期一） month-日期 year-月份 其它-日期
 * @apiSuccess (BACKPARAM) {Number} count 统计数量
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "获取访客用户统计",
     "data": [
        {
            "_id": "14",
            "count": 1
        },
        {
            "_id": "15",
            "count": 2
        }
     ]
 }
*/

/**
 * @apiDefine userStatisticsParam
 * @apiParam {String} [type] 查询类型，day-天 week-周 month-月 year-年 其它-时间选择，默认时间选择
 * @apiParam {String} [startTime] 开始时间，默认为此时
 * @apiParam {String} [endTime] 结束时间
 * @apiSuccess (BACKPARAM) {String} _id  代表意义，day-小时 week-星期（1代表星期一） month-日期 year-月份 其它-日期
 * @apiSuccess (BACKPARAM) {Number} count 统计数量
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "获取用户统计",
     "data": [
        {
            "_id": "1",
            "count": 1
        },
        {
            "_id": "2",
            "count": 2
        }
     ]
 }
*/

/**
 * @apiDefine articleStatisticsParam
 * @apiParam {String} [type] 查询类型，day-天 week-周 month-月 year-年 其它-时间选择，默认时间选择
 * @apiParam {String} [startTime] 开始时间，默认为此时
 * @apiParam {String} [endTime] 结束时间
 * @apiSuccess (BACKPARAM) {String} _id  代表意义，day-小时 week-星期（1代表星期一） month-日期 year-月份 其它-日期
 * @apiSuccess (BACKPARAM) {Number} count 统计数量
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "获取文章统计",
     "data": [
        {
            "_id": "2020-05-16",
            "count": 1
        },
        {
            "_id": "2020-05-18",
            "count": 2
        }
     ]
 }
*/

/**
 * @apiDefine messageStatisticsParam
 * @apiParam {String} [type] 查询类型，day-天 week-周 month-月 year-年 其它-时间选择，默认时间选择
 * @apiParam {String} [startTime] 开始时间，默认为此时
 * @apiParam {String} [endTime] 结束时间
 * @apiSuccess (BACKPARAM) {String} _id  代表意义，day-小时 week-星期（1代表星期一） month-日期 year-月份 其它-日期
 * @apiSuccess (BACKPARAM) {Number} count 统计数量
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "获取留言统计",
     "data": [
        {
            "_id": "05",
            "count": 1
        },
        {
            "_id": "06",
            "count": 2
        }
     ]
 }
*/

/**
 * @apiDefine accessUserListStatisticsParam
 * @apiParam {String} [type] 查询类型，day-天 month-月 其它-星期，默认星期
 * @apiSuccess (BACKPARAM) {String} _id  代表意义，day-小时 month-月份 其它-星期（1代表星期一）
 * @apiSuccess (BACKPARAM) {Number} count 统计数量
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "获取访客人数排名统计",
     "data": [
        {
            "_id": "05",
            "count": 2
        },
        {
            "_id": "06",
            "count": 1
        }
     ]
 }
*/

/**
 * @apiDefine userListStatisticsParam
 * @apiParam {String} [type] 查询类型，day-天 month-月 其它-星期，默认星期
 * @apiSuccess (BACKPARAM) {String} _id  代表意义，day-小时 month-月份 其它-星期（1代表星期一）
 * @apiSuccess (BACKPARAM) {Number} count 统计数量
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "获取访客人数排名统计",
     "data": [
        {
            "_id": "05",
            "count": 2
        },
        {
            "_id": "06",
            "count": 1
        }
     ]
 }
*/

/**
 * @apiDefine articleListStatisticsParam
 * @apiParam {String} [type] 查询类型，day-天 month-月 其它-星期，默认星期
 * @apiSuccess (BACKPARAM) {String} _id  代表意义，day-小时 month-月份 其它-星期（1代表星期一）
 * @apiSuccess (BACKPARAM) {Number} count 统计数量
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "获取访客人数排名统计",
     "data": [
        {
            "_id": "3",
            "count": 2
        },
        {
            "_id": "2",
            "count": 1
        }
     ]
 }
*/

/**
 * @apiDefine messageListStatisticsParam
 * @apiParam {String} [type] 查询类型，day-天 month-月 其它-星期，默认星期
 * @apiSuccess (BACKPARAM) {String} _id  代表意义，day-小时 month-月份 其它-星期（1代表星期一）
 * @apiSuccess (BACKPARAM) {Number} count 统计数量
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "获取访客人数排名统计",
     "data": [
        {
            "_id": "3",
            "count": 2
        },
        {
            "_id": "2",
            "count": 1
        }
     ]
 }
*/

/**
 * @apiDefine tagListStatisticsParam
 * @apiSuccess (BACKPARAM) {Object} _id  标签对象
 * @apiSuccess (BACKPARAM) {String} _id.id  标签标识ID
 * @apiSuccess (BACKPARAM) {String} _id.name  标签名称
 * @apiSuccess (BACKPARAM) {String} _id.description  标签描述
 * @apiSuccess (BACKPARAM) {String} _id.bgColor  标签背景颜色
 * @apiSuccess (BACKPARAM) {Number} count 统计数量
 * @apiSuccessExample 成功返回:
 {
   "code": "10000",
   "msg": "获取文章标签统计",
   "data": [
     {
       "_id": {
         "id": "5e70cdf2b1867a5078888888",
         "name": "node",
         "description": "node",
         "bgColor": "#74A762"
       },
       "count": 2
     },
     {
       "_id": {
         "id": "5e70cdf2b1867a5078888888",
         "name": "微信小程序",
         "description": "微信小程序",
         "bgColor": "#409EFF"
       },
       "count": 1
     }
   ]
 }
*/

/**
 * @apiDefine articleImgStatisticsParam
 * @apiParam {Number} [number] 获取文章图片数量，默认为10
 * @apiSuccess (BACKPARAM) {String} _id  文章标识ID
 * @apiSuccess (BACKPARAM) {String} imgId 文章封面图片ID
 * @apiSuccessExample 成功返回:
 {
   "code": "10000",
   "msg": "获取文章图片列表失败",
   "data": [
     {
       "_id": "5e70cdf2b1867a5078888888",
       "imgId": "6a045d7ecbeb3ab06c5f587578d9304c"
     },
     {
       "_id": "5e70cdf2b1867a5078888888",
       "imgId": "70837163b778d76ac0a6a366323d85b3"
     }
   ]
 }
*/

/**
 * @apiDefine articleArchiveParam
 * @apiSuccess (BACKPARAM) {Object} _id  文章对象
 * @apiSuccess (BACKPARAM) {String} _id.id 文章标识ID
 * @apiSuccess (BACKPARAM) {String} _id.month 文章发布月份
 * @apiSuccess (BACKPARAM) {String} _id.title 文章标题
 * @apiSuccess (BACKPARAM) {String} _id.createTime 文章创建时间
 * @apiSuccessExample 成功返回:
 {
   "code": "10000",
   "msg": "获取文章归档统计",
   "data": [
     {
       "_id": {
         "id": "5e70cdf2b1867a5078888888",
         "month": "2020-08",
         "title": "express博客",
         "createTime": "2020-08-24 21:35:28"
       }
     },
     {
       "_id": {
         "id": "5e70cdf2b1867a5078888888",
         "month": "2020-05",
         "title": "node 知识点",
         "createTime": "2020-05-17 20:50:47"
       }
     }
   ]
 }
*/

/**
 * @apiDefine randomMessageParam
 * @apiParam {Number} [number] 随机获取留言数量，默认为10
 * @apiSuccess (BACKPARAM) {String} _id  留言标识ID
 * @apiSuccess (BACKPARAM) {String} content 留言内容
 * @apiSuccess (BACKPARAM) {Object} createUser 创建者对象
 * @apiSuccessExample 成功返回:
 {
   "code": "10000",
   "msg": "随机获取留言列表",
   "data": [
     {
       "_id": "5e70cdf2b1867a5078888888",
       "content": "与你相遇，好幸运",
       "createUser": [
         {
           "name": "sdj",
           "avatarId": "9184a55892160ddf2a263f2aa6da88d9"
         }
       ],
       "createTime": "2020-05-12 22:55:30"
     },
     {
       "_id": "5e70cdf2b1867a5078888888",
       "content": "目之所及，皆是回忆，心之所想，皆是过往",
       "createUser": [
         {
           "name": "sdj",
           "avatarId": "9184a55892160ddf2a263f2aa6da88d9"
         }
       ],
       "createTime": "2020-05-12 16:22:10"
     }
   ]
 }
*/

/**
 * @apiDefine randomArticleParam
 * @apiParam {Number} [number] 随机获取文章数量，默认为10
 * @apiSuccess (BACKPARAM) {String} _id  文章标识ID
 * @apiSuccess (BACKPARAM) {String} title 文章标题
 * @apiSuccessExample 成功返回:
 {
    "code": "10000",
    "msg": "随机获取文章成功",
    "data": [
        {
            "_id": "5f334474cc24fd17ecd5d03f",
            "title": "测试"
        }
    ]
}
*/

/**
 * @apiDefine userHistoryParam
 * @apiParam {String} [type] 用户操作类型，1-浏览文章 2-点赞文章 3-评论文章，默认为1
 * @apiParam {Number} [currentPage] 列表数据页码，默认为1
 * @apiParam {Number} [pageSize] 列页每页展示的条数，默认为10
 * @apiSuccess (BACKPARAM) {Number} count  统计总数
 * @apiSuccess (BACKPARAM) {Object} data 历史统计对象
 * @apiSuccess (BACKPARAM) {String} data._id 历史统计标识ID
 * @apiSuccess (BACKPARAM) {String} data.updateTime 历史统计更新时间
 * @apiSuccess (BACKPARAM) {Object} data.article 文章详情对象
 * @apiError (BACKERRORPARAM) {String} 10007 用户不存在
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "获取用户操作历史统计",
     "data": {
        "data": [
            {
                "_id": "5fe1a023bbc48f428c01ad7b",
                "updateTime": "2020-12-29 17:31:55",
                "article": [
                    {
                        "_id": "5ec13327002a493ca863e23f",
                        "meta": {
                            "viewTotal": 90,
                            "likeTotal": 1,
                            "commentTotal": 4,
                            "txtTotal": 949
                        },
                        "imgId": "9c6ea64ab980fa18e78a0328ed5f02d9",
                        "title": "node 知识点",
                        "description": "node 知识点",
                        "createTime": "2020-05-17 20:50:47"
                    }
                ]
            }
        ],
        "count": 1
     }
 }
*/