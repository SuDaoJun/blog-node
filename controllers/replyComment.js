const BaseController = require('./baseController')
const replyComment = require("../models/replyComment");
const Comment = require("../models/comment");
const CONSTANT = require('../config/constant');
const History = require("../models/history");
const RES_CODE = CONSTANT.RES_CODE
const utils = require('../config/utils');

class ReplyCommentCtl extends BaseController{
  constructor() {
    super()
  }
  async replyCommentList(ctx){
    let req = ctx.request
    let conditions = utils.blurSelect(req.query)
    let pageObj = utils.pageSelect(req.query)
    if(!pageObj.sort){
      pageObj.sort = {
        createTime: '-1'
      }
    }
    let count = await replyComment.countDocuments(conditions)
    let docs = await replyComment.find(conditions, null, pageObj).populate([
      { path: 'replyUser', select: '_id name avatarId' },
      { path: 'toUser', select: '_id name avatarId' },
    ])
    if (docs) {
      let data = {
        count,
        data: docs
      }
      utils.responseClient(ctx, RES_CODE.reqSuccess, "获取回复评论列表成功", data)
    } else {
      utils.responseClient(ctx, RES_CODE.dataFail, "获取回复评论列表失败")
    }
  }
  //添加回复评论
  async replyCommentAdd(ctx){
    let req = ctx.request
    let { commentId } = req.body
    let conditions = utils.completeSelect(req.body)
    let userMessage = req.tokenMessage.userMessage
    conditions.replyUser = userMessage.id
    let newReplyComment = new replyComment(conditions)
    let addResult = await newReplyComment.save()
    if (addResult) {
     let conditions = null
     if(addResult.status === '1'){
      conditions = {
        $inc: {
          replyCommentNum: 1
        },
        $push: {
          replyCommentList: {
            $each: [addResult._id],
            $position: 0
          }
        }
      }
     }else{
      conditions = {
        $push: {
          replyCommentList: {
            $each: [addResult._id],
            $position: 0
          }
        }
      }
     }
     let updateResult = await Comment.findByIdAndUpdate(commentId, conditions, { new: true }).populate([
       { path: 'articleId', select: '_id title' },
       { path: 'replyCommentList', populate: [
         {path: 'replyUser', select: '_id name avatarId'}, 
         {path: 'toUser', select: '_id name avatarId'}
       ]},
       { path: 'createUser', select: '_id name avatarId' }
     ])
     if(updateResult){
      utils.responseClient(ctx, RES_CODE.reqSuccess, "回复评论添加成功", updateResult)
      this.historyHandle({
        userId: userMessage.id,
        articleId: updateResult.articleId._id,
        type: '3'
      })
     }else{
      utils.responseClient(ctx, RES_CODE.dataFail, "回复评论添加失败")
     }
    } else {
      utils.responseClient(ctx, RES_CODE.dataFail, "新增回复评论失败")
    }
  }
  async replyCommentUpdate(ctx){
    let req = ctx.request
    let { replayId, status, content} = req.body
    if(content){
      let doc = await replyComment.findByIdAndUpdate(replayId, { content }, { new: true })
      doc?utils.responseClient(ctx, RES_CODE.reqSuccess, "回复评论更新成功") : utils.responseClient(ctx, RES_CODE.dataFail, "回复评论更新失败")
    }else if(status){
      let fineResult = await replyComment.findById(replayId)
      if (fineResult) {
        if(fineResult.status === status){
          return utils.responseClient(ctx, RES_CODE.statusFail, "该更新状态正处于当前状态")
        }
        let updateResult = await replyComment.findByIdAndUpdate(replayId, { status }, { new: true })
        if(updateResult){
          let conditions = null
          if(status === "0"){
            conditions = {
              $inc: {
                replyCommentNum: -1
              }
            }
          }else if(status === "1"){
            conditions = {
              $inc: {
                replyCommentNum: 1
              }
            }
          }
          let docs = await Comment.findByIdAndUpdate(updateResult.commentId, conditions, { new: true })
          docs ? utils.responseClient(ctx, RES_CODE.reqSuccess, "回复评论更新成功",updateResult) : utils.responseClient(ctx, RES_CODE.dataFail, "回复评论更新失败")
        }else{
          utils.responseClient(ctx, RES_CODE.dataFail, "回复评论更新失败")
        }
      } else {
        utils.responseClient(ctx, RES_CODE.dataNot, "评论回复id不存在")
      }
    }else{
      utils.responseClient(ctx, RES_CODE.dataFail, "回复评论更新失败")
    }
  }
  async replyCommentDel(ctx) {
    let { id } = ctx.params
    let docs = await replyComment.findByIdAndRemove(id)
    if (docs) {
      let conditions = null
      if(docs.status === '1'){
       conditions = {
         $inc: {
           replyCommentNum: -1
         },
         $pull: {
           replyCommentList: id
         }
       }
      }else{
       conditions = {
         $pull: {
           replyCommentList: id
         }
       }
      }
      let updateResult = await Comment.findByIdAndUpdate(docs.commentId, conditions, { new: true }).populate([
        { path: 'articleId', select: '_id title' },
        { path: 'replyCommentList', populate: [
          {path: 'replyUser', select: '_id name avatarId'}, 
          {path: 'toUser', select: '_id name avatarId'}
        ]},
        { path: 'createUser', select: '_id name avatarId' }
      ])
      updateResult ? utils.responseClient(ctx, RES_CODE.reqSuccess, "删除回复评论成功",updateResult) : utils.responseClient(ctx, RES_CODE.dataFail, "删除回复评论失败")
    } else {
      utils.responseClient(ctx, RES_CODE.dataFail, "删除回复评论失败")
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
module.exports = new ReplyCommentCtl().resolve()