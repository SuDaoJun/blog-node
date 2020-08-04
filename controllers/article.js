const Article = require("../models/article");
const Tag = require("../models/tag");
const CONSTANT = require('../config/constant');
const RES_CODE = CONSTANT.RES_CODE
const ROLE_TYPE = CONSTANT.ROLE_TYPE
const utils = require('../config/utils');

class ArticleCtl{
  async articleList(ctx){
    let req = ctx.request
    let conditions =  utils.blurSelect(req.query)
    let pageObj =  utils.pageSelect(req.query)
    if(req.url.indexOf('blogPage') === -1){
      let userMessage = req.tokenMessage.userMessage
      if(userMessage.roleId !== ROLE_TYPE.superRole){
        conditions['createUser.mark'] = userMessage.mark
      }
    }else{
      conditions.status = '1'
    }
    if(!pageObj.sort){
      pageObj.sort = {
        createTime: '-1'
      }
    }
    let count = await Article.countDocuments(conditions)
    let fields = {
      _id: 1,
      title: 1,
      description: 1,
      imgId: 1,
      status: 1,
      meta: 1,
      createUser: 1,
      createTime: 1,
    }
    let docs = await Article.find(conditions, fields, pageObj).populate([
      { path: 'tags', select: '_id name bgColor' },
      { path: 'createUser', select: '_id name mark' }
    ])
    if (docs) {
      let data = {
        count,
        data: docs
      }
      utils.responseClient(ctx, RES_CODE.reqSuccess, "获取文章列表成功", data)
    } else {
      utils.responseClient(ctx, RES_CODE.dataFail, "获取文章列表失败")
    }
  }
}

module.exports = new ArticleCtl()