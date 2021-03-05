'use strict'
/**
  * @apiDefine APIINFO 系统说明
*/

/**
 * @apiDefine USER  用户模块
*/

/**
  * @apiDefine ARTICLE 文章模块
*/

/**
  * @apiDefine COMMENT 评论模块
*/

/**
  * @apiDefine MENUFUNCTION 菜单功能模块
*/

/**
  * @apiDefine LINK 链接模块
*/

/**
  * @apiDefine MESSAGE 留言模块
*/

/**
  * @apiDefine PROJECT 项目模块
*/

/**
  * @apiDefine REPLYCOMMENT 评论回复模块
*/

/**
  * @apiDefine STATEMENT 励志语句模块
*/

/**
  * @apiDefine TAG 标签模块
*/

/**
  * @apiDefine UPLOAD 上传模块
*/

/**
  * @apiDefine ROLE 角色模块
*/

/**
  * @apiDefine STATISTICS 统计模块
*/

/**
 * @apiDefine NOHEADERTOKEN
 * @apiHeader {String} Authorization 无需token认证授权
*/

/**
 * @apiDefine HEADERTOKEN
 * @apiHeader {String} Authorization 需要token认证授权
*/

/**
 * @apiDefine BACKPARAM  返回参数
*/

/**
 * @apiDefine BACKERRORPARAM  返回错误码code
*/

/**
 * @apiDefine headerParams
 * @apiHeader {String} Authorization 用户登录后返回的token令牌，没有返回前缀Bearer 。
 * @apiHeader {String} Content-Type 默认为表单格式，application/x-www-form-urlencoded;charset=UTF-8
 * @apiHeaderExample {json} 头部请求:
 *   {
 *     "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTWVzc2FnZSI6eyJpZCI6IjVlNzBjZGYyYjE4NjdhNTA3NGRkYTM1ZSIsIm5hbWUiOiJzZGoiLCJhdmF0YXJJZCI6IjkxODRhNTU4OTIxNjBkZGYyYTI2M2YyYWE2ZGE4OGQ5IiwiZnVuY3Rpb25MaXN0IjpbIjVlODM0ZjIzZmI2OTMwNWFhMDkxZTgyNCIsIjVlODM0ZjJhZmI2OTMwNWFhMDkxZTgyNSIsIjVlODM0ZjMxZmI2OTMwNWFhMDkxZTgyNiIsIjVlOTljMTdkZDFiYTcyOWE3OGIwMTZiNiIsIjVlODM0ZjUxZmI2OTMwNWFhMDkxZTgyNyIsIjVlODM0ZjVhZmI2OTMwNWFhMDkxZTgyOCIsIjVlODM0ZjYxZmI2OTMwNWFhMDkxZTgyOSIsIjVlOTljMWMwZDFiYTcyOWE3OGIwMTZiNyIsIjVlODM0ZjZmZmI2OTMwNWFhMDkxZTgyYSIsIjVlODM0Zjc3ZmI2OTMwNWFhMDkxZTgyYiIsIjVlODM0ZjdlZmI2OTMwNWFhMDkxZTgyYyIsIjVlOTljMWNjZDFiYTcyOWE3OGIwMTZiOCIsIjVlODM0Zjg4ZmI2OTMwNWFhMDkxZTgyZCIsIjVlODM0ZjkwZmI2OTMwNWFhMDkxZTgyZSIsIjVlODM0Zjk3ZmI2OTMwNWFhMDkxZTgyZiIsIjVlOTljMWQ5ZDFiYTcyOWE3OGIwMTZiOSIsIjVlODM0ZjllZmI2OTMwNWFhMDkxZTgzMCIsIjVlODM0ZmFmZmI2OTMwNWFhMDkxZTgzMSIsIjVlODM0ZmI1ZmI2OTMwNWFhMDkxZTgzMiIsIjVlOTljMWUyZDFiYTcyOWE3OGIwMTZiYSIsIjVlODM0ZmJkZmI2OTMwNWFhMDkxZTgzMyIsIjVlODM0ZmM0ZmI2OTMwNWFhMDkxZTgzNCIsIjVlODM0ZmNiZmI2OTMwNWFhMDkxZTgzNSIsIjVlOTljMWVkZDFiYTcyOWE3OGIwMTZiYiIsIjVlODM0ZmYyZmI2OTMwNWFhMDkxZTgzNiIsIjVlOTljMjVhZDFiYTcyOWE3OGIwMTZiYyIsIjVlOTljMjgwZDFiYTcyOWE3OGIwMTZiZCIsIjVlOTljMjg3ZDFiYTcyOWE3OGIwMTZiZSIsIjVlN2UwNmE4MDg0OWI3MDhkNDE0ZGEwMSIsIjVlODM1MDM5ZmI2OTMwNWFhMDkxZTgzOCIsIjVlODM1MDNmZmI2OTMwNWFhMDkxZTgzOSIsIjVlOTljMmI0ZDFiYTcyOWE3OGIwMTZiZiIsIjVlOTljOGE5ZDFiYTcyOWE3OGIwMTZjMSIsIjVlYTZmYTI0NWZiNWQyNTY3YzZjYWQ1NCIsIjVlODM1MDVkZmI2OTMwNWFhMDkxZTgzYSIsIjVlODM1MDY3ZmI2OTMwNWFhMDkxZTgzYiIsIjVlODM1MDZkZmI2OTMwNWFhMDkxZTgzYyIsIjVlOTljMmMyZDFiYTcyOWE3OGIwMTZjMCIsIjVlOTljYjg1ZDFiYTcyOWE3OGIwMTZjMiJdLCJyb2xlSWQiOiI1ZTgxZmVmYmNlOGUyNjBhMzhkMGI1NzciLCJtYXJrIjoiNTYzZjQwNGU2MjkwOTRhMTAifSwiaWF0IjoxNjA5MTYwMTE2LCJleHAiOjE2MTE3NTIxMTZ9.UVWKgG-GCkA7Wa8TvwcnVUYAl5SIsIjyCQZSb_8O8WzchsfXt6W82Eg-YuB6ezcDbNI5XhPdSE_S_nV8kIcOJtDHsLUaGFOoKvBLGYEUAoGQp2r3jTOVBM20K9bxPdJlMmcin1CCxX_4sc_B6SyOtBHsoOyPbQLgS_x216yskjA",
 *    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
 *   }
 * @apiErrorExample {json} token失效或错误:
 * {
 *  "code": 403,
 *  "msg": "登录已过期,请重新登录",
 *  "data": null
 * }
*/

/**
 * @apiDefine pageParams
 * @apiParam {Number} [currentPage] 列表数据页码，默认为1
 * @apiParam {Number} [pageSize] 列页每页展示的条数，默认为10
 * @apiParam {String} [sortBy] 排序字段参数，默认为createTime
 * @apiParam {String} [sortOrders] -1或asc代表降序，1或desc代表升序，默认为-1
 * @apiSuccessExample 成功返回:
 * {
 *  "code": "10000",
 *  "msg": "获取列表数据成功",
 *  "data": {
 *    "count": 0,
 *    "data": []
 *  }
 * }
*/