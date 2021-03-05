'use strict'
/**
 * @api {GET} /blogAdmin/article/list 管理界面文章列表
 * @apiName articleList
 * @apiDescription 后台管理页面获取文章页面，超级管理员可以获取所有文章列表，其他用户只可以获取自己以及子账号下文章
 * @apiGroup ARTICLE
 * @apiUse HEADERTOKEN
 * @apiUse articleListParam
*/

/**
 * @api {GET} /blogAdmin/article/detail 管理界面文章详情
 * @apiName articleDetail
 * @apiGroup ARTICLE
 * @apiUse HEADERTOKEN
 * @apiUse articleDetailParam
*/

/**
 * @api {POST} /blogAdmin/article/add 文章新建
 * @apiName articleAdd
 * @apiGroup ARTICLE
 * @apiUse HEADERTOKEN
 * @apiUse articleAddParam
*/

/**
 * @api {PUT} /blogAdmin/article/like 文章点赞
 * @apiName articleLike
 * @apiGroup ARTICLE
 * @apiUse HEADERTOKEN
 * @apiUse articleLikeParam
*/

/**
 * @api {PUT} /blogAdmin/article/update 文章编辑
 * @apiName articleUpdate
 * @apiGroup ARTICLE
 * @apiUse HEADERTOKEN
 * @apiUse articleUpdateParam
*/

/**
 * @api {DELETE} /blogAdmin/article/del/:id 文章删除
 * @apiName articleDel
 * @apiGroup ARTICLE
 * @apiUse HEADERTOKEN
 * @apiUse articleDelParam
*/

/**
 * @api {GET} /blogPage/article/list 展示界面文章列表
 * @apiName articlePageList
 * @apiDescription 前端管理页面显示所有状态为已发布的文章
 * @apiGroup ARTICLE
 * @apiUse NOHEADERTOKEN
 * @apiUse articleListParam
*/

/**
 * @api {GET} /blogPage/article/detail 展示界面文章详情
 * @apiName articlePageDetail
 * @apiGroup ARTICLE
 * @apiUse NOHEADERTOKEN
 * @apiUse articleDetailParam
*/