const BaseController = require('./baseController')
const Article = require("../models/article");
const Tag = require("../models/tag");
const Comment = require("../models/comment");
const History = require("../models/history");
const ReplyComment = require("../models/replyComment");
const CONSTANT = require('../config/constant');
const RES_CODE = CONSTANT.RES_CODE
const ROLE_TYPE = CONSTANT.ROLE_TYPE
const utils = require('../config/utils');

class ArticleCtl extends BaseController{
  constructor() {
    super()
  }
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
  async articleDetail(ctx){
    let req = ctx.request;
    let tokenMessage = req.tokenMessage;
    let articleId = req.query.id;
    let doc = await Article.findByIdAndUpdate(articleId, {$inc: {'meta.viewTotal': 1}}, {new: true}).populate([
      { path: 'tags', select: '_id name bgColor' },
      { path: 'linkUser', select: '_id avatarId name' },
      { 
        path: 'commentList', 
        populate: {path: 'createUser', select: '_id avatarId name'}  //文章评论分页需要单独查评论列表
      },
      { path: 'createUser', select: '_id avatarId name' },
      { path: 'updateUser', select: '_id avatarId name' }
    ])
    if(doc){
      utils.responseClient(ctx, RES_CODE.reqSuccess, "获取文章详情成功", doc)
      if(tokenMessage && tokenMessage.userMessage){
        this.historyHandle({
          userId: tokenMessage.userMessage.id,
          articleId,
          type: '1'
        })
      }
    }else{
      utils.responseClient(ctx, RES_CODE.dataFail, "获取文章详情失败")
    }
  }
  async articleAdd(ctx){
    let req = ctx.request
    let body = req.body
    let conditions =  utils.completeSelect(body)
    let userMessage = req.tokenMessage.userMessage
    conditions.tags = conditions.tags?conditions.tags.split(','):[]
    conditions.createUser = userMessage.id
    conditions.updateUser = userMessage.id
    conditions['meta.txtTotal'] = utils.getPostWordCount(body.content)
    let newArticle = new Article(conditions)
    let docs = await Article.findOne({
      title: body.title
    })
    if (docs) {
      utils.responseClient(ctx, RES_CODE.dataAlready, "文章标题已存在")
    } else {
      let doc = await newArticle.save()
      doc?utils.responseClient(ctx, RES_CODE.reqSuccess, "文章新增成功"):utils.responseClient(ctx, RES_CODE.dataFail, "文章新增失败")
    }
  }
  async articleLike(ctx){
    let req = ctx.request
    let userMessage = req.tokenMessage.userMessage
    let {type, id} = req.body
    if(type === '1'){
      // 点赞
      let docs = await Article.findById(id)
      if(docs){
        let likeTotal = docs.meta.likeTotal + 1;
        // 判断是否已经点赞过
        if(docs.linkUser.includes(userMessage.id)){
          return utils.responseClient(ctx, RES_CODE.dataAlready, "已点赞，不要重复点赞")
        }
        docs.linkUser.push(userMessage.id);
        let doc = await Article.findByIdAndUpdate(id, {'meta.likeTotal': likeTotal, linkUser: docs.linkUser}, {new: true})
        if(doc){
          utils.responseClient(ctx, RES_CODE.reqSuccess, "文章点赞成功")
          this.historyHandle({
            userId: userMessage.id,
            articleId: id,
            type: '2'
          })
        }else{
          utils.responseClient(ctx, RES_CODE.dataFail, "文章点赞失败")
        }
      }else{
        utils.responseClient(ctx, RES_CODE.dataFail, "获取文章失败")
      }
    }else{
      //取消点赞
      let docs = await Article.findById(id)
      if(docs){
        let likeTotal = docs.meta.likeTotal - 1;
        if(!docs.linkUser.includes(userMessage.id)){
          return utils.responseClient(ctx, RES_CODE.dataNot, "暂无点赞")
        }
        let linkUser = docs.linkUser.filter((item)=>{
          return item.toString() !== userMessage.id
        })
        let doc = await Article.findByIdAndUpdate(id, {'meta.likeTotal': likeTotal, linkUser}, {new: true})
        if(doc){
          utils.responseClient(ctx, RES_CODE.reqSuccess, "取消点赞成功")
          await History.findOneAndRemove({
            type: '2',
            articleId: id
          })
        }else{
          utils.responseClient(ctx, RES_CODE.dataFail, "取消点赞失败")
        }
      }else{
        utils.responseClient(ctx, RES_CODE.dataFail, "获取文章失败")
      }
    }
  }
  async articleUpdate(ctx){
    let req = ctx.request
    let body = req.body
    let conditions =  utils.completeSelect(body)
    if(conditions.tags){
      conditions.tags = conditions.tags.split(',')
    }
    let doc = await Article.find({
      title: body.title
    })
    if(doc.length === 1 && doc[0]._id.toString() != body.id){
      return utils.responseClient(ctx, RES_CODE.dataAlready, "文章标题已存在")
    }
    conditions.updateTime = utils.currentDayDate()
    conditions.updateUser = req.tokenMessage.userMessage.id
    if(body.content){
      conditions['meta.txtTotal'] = utils.getPostWordCount(body.content)
    }
    let docs = await Article.findByIdAndUpdate(body.id, conditions, {new: true})
    docs?utils.responseClient(ctx, RES_CODE.reqSuccess, "更新文章成功"):utils.responseClient(ctx, RES_CODE.dataFail, "更新文章失败")
  }
  async articleDel (ctx){
    let id = ctx.params.id
    let docs = await Article.findByIdAndRemove(id)
    if(docs){
      utils.responseClient(ctx, RES_CODE.reqSuccess, "删除文章成功")
      await Comment.deleteMany({articleId: id})
      await ReplyComment.deleteMany({articleId: id})
      await History.deleteMany({articleId: id})
    }else{
      utils.responseClient(ctx, RES_CODE.dataFail, "删除文章失败")
    }
  }
  async historyHandle(historyData){
    let historyResult = await History.findOne(historyData)
    if(historyResult){
      let updateTimeObj = {
        updateTime: utils.currentDayDate()
      }
      await History.findByIdAndUpdate(historyResult._id, updateTimeObj, {new: true})
    }else{
      new History(historyData).save();
    }
  }
}
module.exports = new ArticleCtl().resolve()