'use strict'

/**
 * @api {GET} /blogAdmin/statistics/countTotal 统计总数
 * @apiName countTotal
 * @apiGroup STATISTICS
 * @apiUse HEADERTOKEN
 * @apiUse countTotalParam
*/

/**
 * @api {GET} /blogAdmin/statistics/accessUserStatistics 访客统计
 * @apiName accessUserStatistics
 * @apiGroup STATISTICS
 * @apiUse HEADERTOKEN
 * @apiUse accessUserStatisticsParam
*/

/**
 * @api {GET} /blogAdmin/statistics/userStatistics 用户统计
 * @apiName userStatistics
 * @apiGroup STATISTICS
 * @apiUse HEADERTOKEN
 * @apiUse userStatisticsParam
*/

/**
 * @api {GET} /blogAdmin/statistics/articleStatistics 文章统计
 * @apiName articleStatistics
 * @apiGroup STATISTICS
 * @apiUse HEADERTOKEN
 * @apiUse articleStatisticsParam
*/

/**
 * @api {GET} /blogAdmin/statistics/messageStatistics 留言统计
 * @apiName messageStatistics
 * @apiGroup STATISTICS
 * @apiUse HEADERTOKEN
 * @apiUse messageStatisticsParam
*/

/**
 * @api {GET} /blogAdmin/statistics/accessUserList 访客排名统计
 * @apiName accessUserListStatistics
 * @apiGroup STATISTICS
 * @apiUse HEADERTOKEN
 * @apiUse accessUserListStatisticsParam
*/

/**
 * @api {GET} /blogAdmin/statistics/userList 用户排名统计
 * @apiName userListStatistics
 * @apiGroup STATISTICS
 * @apiUse HEADERTOKEN
 * @apiUse userListStatisticsParam
*/

/**
 * @api {GET} /blogAdmin/statistics/articleList 文章排名统计
 * @apiName articleListStatistics
 * @apiGroup STATISTICS
 * @apiUse HEADERTOKEN
 * @apiUse articleListStatisticsParam
*/

/**
 * @api {GET} /blogAdmin/statistics/messageList 留言排名统计
 * @apiName messageListStatistics
 * @apiGroup STATISTICS
 * @apiUse HEADERTOKEN
 * @apiUse messageListStatisticsParam
*/

/**
 * @api {GET} /blogAdmin/statistics/tagList 后台页面标签排名统计
 * @apiName tagListStatistics
 * @apiGroup STATISTICS
 * @apiUse HEADERTOKEN
 * @apiUse tagListStatisticsParam
*/

/**
 * @api {GET} /blogAdmin/statistics/articleImgStatistics 文章图片统计
 * @apiName articleImgStatistics
 * @apiGroup STATISTICS
 * @apiUse HEADERTOKEN
 * @apiUse articleImgStatisticsParam
*/

/**
 * @api {GET} /blogPage/statistics/tagList 展示页面标签排名统计
 * @apiName pageTagList
 * @apiGroup STATISTICS
 * @apiUse NOHEADERTOKEN
 * @apiUse tagListStatisticsParam
*/

/**
 * @api {GET} /blogPage/statistics/articleArchive 文章归档统计
 * @apiName articleArchive
 * @apiGroup STATISTICS
 * @apiUse NOHEADERTOKEN
 * @apiUse articleArchiveParam
*/

/**
 * @api {GET} /blogPage/statistics/randomMessage 随机获取留言
 * @apiName randomMessage
 * @apiGroup STATISTICS
 * @apiUse NOHEADERTOKEN
 * @apiUse randomMessageParam
*/

/**
 * @api {GET} /blogPage/statistics/randomArticle 随机获取文章
 * @apiName randomArticle
 * @apiGroup STATISTICS
 * @apiUse NOHEADERTOKEN
 * @apiUse randomArticleParam
*/

/**
 * @api {GET} /blogPage/statistics/userHistory 用户操作统计
 * @apiName userHistory
 * @apiDescription 查看用户浏览、点赞以及评论过的文章
 * @apiGroup STATISTICS
 * @apiUse HEADERTOKEN
 * @apiUse userHistoryParam
*/