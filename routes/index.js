/*
*所有的路由接口
*/
const multer = require('multer');

const statistics = require('./statistics');
const user = require('./user');
const upload = require('./upload');
const tag = require('./tag');
const article = require('./article');
const comment = require('./comment');
const replyComment = require('./replyComment');
const project = require('./project');
const link = require('./link');
const message = require('./message');
const role = require('./role');
const menu = require('./menu');
const functionOper = require('./functionOper');
const statement = require('./statement');

module.exports = app => {
  // 后台管理接口
  let baseUrl = '/blogAdmin'
  // 统计模块
  app.get(baseUrl + '/statistics/countTotal', statistics.countTotalNum)
  app.get(baseUrl + '/statistics/accessUserStatistics', statistics.accessUserStatistics)
  app.get(baseUrl + '/statistics/userStatistics', statistics.userStatistics)
  app.get(baseUrl + '/statistics/articleStatistics', statistics.articleStatistics)
  app.get(baseUrl + '/statistics/messageStatistics', statistics.messageStatistics)
  app.get(baseUrl + '/statistics/accessUserList', statistics.accessUserList)
  app.get(baseUrl + '/statistics/userList', statistics.userList)
  app.get(baseUrl + '/statistics/articleList', statistics.articleList)
  app.get(baseUrl + '/statistics/messageList', statistics.messageList)
  app.get(baseUrl + '/statistics/tagList', statistics.tagList)
  // 用户模块
  app.get(baseUrl + '/user/list', user.userList)
  app.get(baseUrl + '/user/accessList', user.accessUserList)
  app.post(baseUrl + '/user/register', user.register)
  app.post(baseUrl + '/user/add', user.userAdd)
  app.put(baseUrl + '/user/update', user.userUpdate)
  app.post(baseUrl + '/user/login', user.login)
  app.post(baseUrl + '/user/resetPwd', user.resetPwd)
  app.post(baseUrl + '/user/modifyPwd', user.modifyPwd)
  app.post(baseUrl + '/user/sendEmail', user.sendEmail)
  app.get(baseUrl + '/user/getCode', user.getCode)
  app.delete(baseUrl + '/user/del/:id', user.userDel)
  // 上传模块
  app.post(baseUrl + '/file/upload',multer({
      //设置文件存储路径
     dest: './static/img'   //img文件如果不存在则会自己创建一个,single上传单个文件
  }).single('file'), upload.uploadFile);
  // app.post('/file/upload',multer({
  //     //设置文件存储路径
  //    dest: './static/img'   //img文件如果不存在则会自己创建一个，array上传多个文件，后面是表示最大支持的文件上传数目
  // }).array('file',3), upload.uploadFile);

  app.get(baseUrl + '/file/list', upload.uploadList)
  app.get(baseUrl + '/file/down', upload.downFile)
  app.delete(baseUrl + '/file/del/:sourceId', upload.delFile)
  // 标签模块
  app.get(baseUrl + '/tag/list', tag.tagList)
  app.post(baseUrl + '/tag/add', tag.tagAdd)
  app.put(baseUrl + '/tag/update', tag.tagUpdate)
  app.delete(baseUrl + '/tag/del/:id', tag.tagDel)
  //文章模块
  app.get(baseUrl + '/article/list', article.articleList)
  app.get(baseUrl + '/article/detail', article.articleDetail)
  app.post(baseUrl + '/article/add', article.articleAdd)
  app.put(baseUrl + '/article/like', article.articleLike)
  app.put(baseUrl + '/article/update', article.articleUpdate)
  app.delete(baseUrl + '/article/del/:id', article.articleDel)
  //评论一级模块
  app.get(baseUrl + '/comment/list', comment.commentList)
  app.post(baseUrl + '/comment/add', comment.commentAdd)
  app.put(baseUrl + '/comment/update', comment.commentUpdate)
  app.put(baseUrl + '/comment/sticky', comment.commentSticky)
  app.delete(baseUrl + '/comment/del/:id', comment.commentDel)
  // 评论回复模块
  app.get(baseUrl + '/replyComment/list', replyComment.replyCommentList)
  app.post(baseUrl + '/replyComment/add', replyComment.replyCommentAdd)
  app.put(baseUrl + '/replyComment/update', replyComment.replyCommentUpdate)
  app.delete(baseUrl + '/replyComment/del/:id', replyComment.replyCommentDel)
  // 项目模块
  app.get(baseUrl + '/project/list', project.projectList)
  app.post(baseUrl + '/project/add', project.projectAdd)
  app.put(baseUrl + '/project/update', project.projectUpdate)
  app.delete(baseUrl + '/project/del/:id', project.projectDel)
  // 友情链接模块
  app.get(baseUrl + '/link/list', link.linkList)
  app.post(baseUrl + '/link/add', link.linkAdd)
  app.put(baseUrl + '/link/update', link.linkUpdate)
  app.delete(baseUrl + '/link/del/:id', link.linkDel)
  // 留言模块
  app.get(baseUrl + '/message/list', message.messageList)
  app.post(baseUrl + '/message/add', message.messageAdd)
  app.put(baseUrl + '/message/update', message.messageUpdate)
  app.delete(baseUrl + '/message/del/:id', message.messageDel)
  //角色模块
  app.get(baseUrl + '/role/list', role.roleList)
  app.get(baseUrl + '/role/userList', role.roleUserList)
  app.post(baseUrl + '/role/add', role.roleAdd)
  app.put(baseUrl + '/role/update', role.roleUpdate)
  app.put(baseUrl + '/role/setAuth', role.setRoleAuth)
  app.put(baseUrl + '/role/updateMuchUser', role.updateMuchUser)
  app.get(baseUrl + '/role/getAuth', role.getRoleAuth)
  app.delete(baseUrl + '/role/del/:id', role.roleDel)
  //菜单功能模块
  app.get(baseUrl + '/menu/list', menu.menuList)
  app.get(baseUrl + '/menu/tree', menu.menuTree)
  app.post(baseUrl + '/menu/add', menu.menuAdd)
  app.put(baseUrl + '/menu/update', menu.menuUpdate)
  app.delete(baseUrl + '/menu/del/:id', menu.menuDel)
  app.get(baseUrl + '/functionOper/list', functionOper.functionOperList)
  app.post(baseUrl + '/functionOper/add', functionOper.functionOperAdd)
  app.put(baseUrl + '/functionOper/update', functionOper.functionOperUpdate)
  app.delete(baseUrl + '/functionOper/del/:id', functionOper.functionOperDel)
  //励志语句
  app.get(baseUrl + '/statement/list', statement.statementList)
  app.post(baseUrl + '/statement/add', statement.statementAdd)
  app.put(baseUrl + '/statement/update', statement.statementUpdate)

  // 展示前端接口
  let basePageUrl = '/blogPage'
  app.post(basePageUrl + '/user/login', user.pageLogin)
  app.get(basePageUrl + '/statistics/tagList', statistics.tagList)
  app.get(basePageUrl + '/statistics/articleArchive', statistics.articleArchive)
  app.get(basePageUrl + '/statistics/randomMessage', statistics.randomMessage)
  app.get(basePageUrl + '/article/list', article.articleList)
  app.get(basePageUrl + '/article/detail', article.articleDetail)
  app.get(basePageUrl + '/comment/list', comment.commentList)
  app.get(basePageUrl + '/statement/list', statement.statementList)
  app.get(basePageUrl + '/project/list', project.projectList)
  app.get(basePageUrl + '/link/list', link.linkList)
  app.post(basePageUrl + '/message/add', message.messageAdd)
  app.get('/file/down', upload.downFile)
}
