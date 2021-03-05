'use strict'

/**
 * @apiDefine statementListParam
 * @apiSuccess (BACKPARAM) {String} _id 励志语句标识ID
 * @apiSuccess (BACKPARAM) {String} title 励志语句标题
 * @apiSuccess (BACKPARAM) {String} sortNum  励志语句代表星期，1表示星期一，以此类推
 * @apiSuccessExample 成功返回:
 {
   "code": "10000",
   "msg": "获取励志语句成功",
   "data": [
     {
       "title": "家人闲坐，灯火可亲",
       "sortNum": 1,
       "_id": "5e70cdf2b1867a5078888888"
     },
     {
       "title": "情不知所起，一往而深",
       "sortNum": 2,
       "_id": "5e70cdf2b1867a5078888888"
     },
     {
       "title": "笑看风云淡，坐对云起时",
       "sortNum": 3,
       "_id": "5e70cdf2b1867a5078888888"
     },
     {
       "title": "不乱于心，不困于情，不畏将来，不念过往，如此安好",
       "sortNum": 4,
       "_id": "5e70cdf2b1867a5078888888"
     },
     {
       "title": "生活最佳状态是冷冷清清地风风火火",
       "sortNum": 5,
       "_id": "5e70cdf2b1867a5078888888"
     },
     {
       "title": "愿你成为自己喜欢的模样，不抱怨，不将就",
       "sortNum": 6,
       "_id": "5e70cdf2b1867a5078888888"
     },
     {
       "title": "梦想不大， 道路很长，开始了就别停下",
       "sortNum": 7,
       "_id": "5e70cdf2b1867a5078888888"
     }
   ]
 }
*/

/**
 * @apiDefine statementAddParam
 * @apiHeader {String} Content-Type  需要设置值为application/json;charset=UTF-8
 * @apiParamExample {json} 请求参数:
 * [{
     "title": "星期一",
     "sortNum": 1
   },
   {
     "title": "星期二",
     "sortNum": 2
   },
   {
     "title": "星期三",
     "sortNum": 3
   },
   {
     "title": "星期四",
     "sortNum": 4
   },
   {
     "title": "星期五",
     "sortNum": 5
   },
   {
     "title": "星期六",
     "sortNum": 6
   },
   {
     "title": "星期日",
     "sortNum": 7
   }]
 * @apiError (BACKERRORPARAM) {String} 10008 传递数据格式为数组对象
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "新增励志语句成功",
     "data": null
 }
*/

/**
 * @apiDefine statementUpdateParam
 * @apiHeader {String} Content-Type  需要设置值为application/json;charset=UTF-8
 * @apiParamExample {json} 请求参数:
 {
   "idArr": [
     "5e70cdf2b1867a5078888888",
     "5e70cdf2b1867a5078888888",
     "5e70cdf2b1867a5078888888",
     "5e70cdf2b1867a5078888888",
     "5e70cdf2b1867a5078888888",
     "5e70cdf2b1867a5078888888",
     "5e70cdf2b1867a5078888888"
   ],
   "dataList": [
     {
       "title": "家人闲坐，灯火可亲",
       "sortNum": 1
     },
     {
       "title": "情不知所起，一往而深",
       "sortNum": 2
     },
     {
       "title": "笑看风云淡，坐对云起时",
       "sortNum": 3
     },
     {
       "title": "不乱于心，不困于情，不畏将来，不念过往，如此安好",
       "sortNum": 4
     },
     {
       "title": "生活最佳状态是冷冷清清地风风火火",
       "sortNum": 5
     },
     {
       "title": "愿你成为自己喜欢的模样，不抱怨，不将就",
       "sortNum": 6
     },
     {
       "title": "梦想不大， 道路很长，开始了就别停下",
       "sortNum": 7
     }
   ]
 }
 * @apiError (BACKERRORPARAM) {String} 10008 参数格式错误
 * @apiSuccessExample 成功返回:
 {
     "code": "10000",
     "msg": "编辑励志语句成功",
     "data": null
 }
*/