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
 * @apiParam {String} [type] 查询类型，day-天 month-月 其它-时间选择，默认时间选择
 * @apiSuccess (BACKPARAM) {String} _id  代表意义，day-小时 week-星期（1代表星期一） month-日期 year-月份 其它-日期
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