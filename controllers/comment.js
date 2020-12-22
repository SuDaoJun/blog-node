const BaseController = require('./baseController')
const Comment = require("../models/comment");
const Article = require("../models/article");
const ReplyCommentList = require("../models/replyComment");
const History = require("../models/history");
const CONSTANT = require('../config/constant');
const RES_CODE = CONSTANT.RES_CODE
const utils = require('../config/utils');

class CommentCtl extends BaseController{
  constructor() {
    super()
  }
  async commentList(ctx){
    let req = ctx.request
    let conditions = utils.blurSelect(req.query)
    let pageObj = utils.pageSelect(req.query)
    if(!pageObj.sort){
      pageObj.sort = {
        isTop: '-1',
        topUpdateTime: '-1'
      }
    }
    let count = await Comment.countDocuments(conditions)
    let docs = await Comment.find(conditions, null, pageObj).populate([
      { path: 'articleId', select: '_id title' },
      { path: 'replyCommentList', populate: [
        {path: 'replyUser', select: '_id name avatarId'}, 
        {path: 'toUser', select: '_id name avatarId'}
      ]},
      { path: 'createUser', select: '_id name avatarId' }
    ])
    if (docs) {
      let data = {
        count,
        data: docs
      }
      utils.responseClient(ctx, RES_CODE.reqSuccess, "获取评论列表成功", data)
    } else {
      utils.responseClient(ctx, RES_CODE.dataFail, "获取评论列表失败")
    }
  }
  //文章添加一级评论
  async commentAdd (ctx){
    let req = ctx.request
    let { articleId } = req.body
    let conditions = utils.completeSelect(req.body)
    let userMessage = req.tokenMessage.userMessage
    conditions.createUser = userMessage.id
    let newComment = new Comment(conditions)
    let addResult = await newComment.save()
    if (addResult) {
      if(addResult.status === '1'){
        let updateResult = await Article.findByIdAndUpdate(articleId, {$inc: { 'meta.commentTotal': 1}, $push: {commentList: addResult._id }}, { new: true })
        if(updateResult){
          utils.responseClient(ctx, RES_CODE.reqSuccess, "文章评论新增成功", updateResult)
          this.historyHandle({
            userId: userMessage.id,
            articleId,
            type: '3'
          })
        }else{
          utils.responseClient(ctx, RES_CODE.dataFail, "文章新增评论失败")
        }
      }else{
        utils.responseClient(ctx, RES_CODE.reqSuccess, "文章评论新增成功", addResult)
      }
    } else {
      utils.responseClient(ctx, RES_CODE.dataFail, "文章新增评论失败")
    }
  }
  async commentUpdate (ctx){
    let req = ctx.request
    let { commentId, status, content} = req.body
    if(content){
      let doc = await Comment.findByIdAndUpdate(commentId, { content }, { new: true })
      doc?utils.responseClient(ctx, RES_CODE.reqSuccess, "一级评论内容更新成功") : utils.responseClient(ctx, RES_CODE.dataFail, "一级评论内容更新失败")
    }else{
      let fineResult = await Comment.findById(commentId)
      if (fineResult) {
        if(fineResult.status === status){
          return utils.responseClient(ctx, RES_CODE.statusFail, "该更新状态正处于当前状态")
        }
        let updateResult = await Comment.findByIdAndUpdate(commentId, { status }, { new: true })
        if(updateResult){
          let conditions = null
          if(status === "0"){
            conditions = {
              $inc: {
                "meta.commentTotal": -1
              },
              $pull: {
                commentList: commentId
              }
            }
          }else if(status === "1"){
            conditions = {
              $inc: {
                "meta.commentTotal": 1
              },
              $push: {
                commentList: commentId
              }
            }
          }
          let docs = await Article.findByIdAndUpdate(updateResult.articleId, conditions, { new: true })
          docs ? utils.responseClient(ctx, RES_CODE.reqSuccess, "一级评论内容更新成功",updateResult) : utils.responseClient(ctx, RES_CODE.dataFail, "一级评论内容更新失败")
        }else{
          utils.responseClient(ctx, RES_CODE.dataFail, "一级评论内容更新失败")
        }
      } else {
        utils.responseClient(ctx, RES_CODE.dataNot, "评论id不存在")
      }
    }
  }
  // 置顶评论，根据isTop和topUpdateTime排序
  async commentSticky(ctx){
    let req = ctx.request
    let { commentId, isTop} = req.body
    isTop = isTop === '1' || isTop == 'true'?true:false
    let updateResult = await Comment.findByIdAndUpdate(commentId, { isTop, topUpdateTime: utils.currentDayDate() }, { new: true })
    updateResult?utils.responseClient(ctx, RES_CODE.reqSuccess, "置顶更换成功", updateResult):utils.responseClient(ctx, RES_CODE.dataFail, "置顶更换失败")
  }
  // 删除一级评论
  async commentDel(ctx){
    let { id } = ctx.params
    let docs = await Comment.findByIdAndRemove(id)
    if (docs) {
      if(docs.status === '1'){
        let updateResult = await Article.findByIdAndUpdate(docs.articleId, {$inc: {'meta.commentTotal': -1}, $pull: {commentList: id}}, { new: true })
        if(updateResult){
          utils.responseClient(ctx, RES_CODE.reqSuccess, "删除文章评论成功")
          if(docs.replyCommentList.length > 0){
            await ReplyCommentList.deleteMany({commentId: id})
          }
        }else{
          utils.responseClient(ctx, RES_CODE.dataFail, "删除文章评论失败")
        }
      }else{
        utils.responseClient(ctx, RES_CODE.reqSuccess, "删除文章评论成功")
      }
    } else {
      utils.responseClient(ctx, RES_CODE.dataFail, "删除文章评论失败")
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
module.exports = new CommentCtl().resolve()