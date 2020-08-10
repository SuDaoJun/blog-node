const Comment = require("../models/comment");
const ReplyComment = require("../models/replyComment");
const Article = require("../models/article");
const CONSTANT = require('../config/constant');
const RES_CODE = CONSTANT.RES_CODE
const utils = require('../config/utils');

exports.commentList = (req, res) => {
  let conditions = utils.blurSelect(req.query)
  let pageObj = utils.pageSelect(req.query)
  if(!pageObj.sort){
    pageObj.sort = {
      isTop: '-1',
      topUpdateTime: '-1'
    }
  }
  Comment.countDocuments(conditions, function (err, count) {
    if (err) {
      return utils.severErr(err, res)
    }
    let fields = {
    };
    Comment.find(conditions, fields, pageObj, function (error, docs) {
      if (error) {
        return utils.severErr(error, res)
      }
      if (docs) {
        let data = {
          count,
          data: docs
        }
        utils.responseClient(res, RES_CODE.reqSuccess, "获取评论列表成功", data)
      } else {
        utils.responseClient(res, RES_CODE.dataFail, "获取评论列表失败")
      }
    }).populate([
      { path: 'articleId', select: '_id title' },
      { path: 'replyCommentList', populate: [
        {path: 'replyUser', select: '_id name avatarId'}, 
        {path: 'toUser', select: '_id name avatarId'}
      ]},
      { path: 'createUser', select: '_id name avatarId' }
    ])
  })
}

//文章添加一级评论
exports.commentAdd = (req, res) => {
  let { articleId } = req.body
  let conditions = utils.completeSelect(req.body)
  let userMessage = req.tokenMessage.userMessage
  conditions.createUser = userMessage.id
  let newComment = new Comment(conditions)
  newComment.save(function (err, addResult) {
    if (err) {
      return utils.severErr(err, res)
    }
    if (addResult) {
      if(addResult.status === '1'){
        Article.findByIdAndUpdate(articleId, {$inc: { 'meta.commentTotal': 1}, $push: {commentList: addResult._id }}, { new: true }, function (errs, updateResult) {
          if (errs) {
            return utils.severErr(errs, res)
          }
          updateResult ? utils.responseClient(res, RES_CODE.reqSuccess, "文章评论新增成功", updateResult) : utils.responseClient(res, RES_CODE.dataFail, "文章新增评论失败")
        })
      }else{
        utils.responseClient(res, RES_CODE.reqSuccess, "文章评论新增成功", addResult)
      }
    } else {
      utils.responseClient(res, RES_CODE.dataFail, "文章新增评论失败")
    }
  })
}

exports.commentUpdate = (req, res) => {
  let { commentId, status, content} = req.body
  if(content){
    Comment.findByIdAndUpdate(commentId, { content }, { new: true }, function (error, doc) {
      if (error) {
        return utils.severErr(error, res)
      }
      doc?utils.responseClient(res, RES_CODE.reqSuccess, "一级评论内容更新成功") : utils.responseClient(res, RES_CODE.dataFail, "一级评论内容更新失败")
    })
  }else{
    Comment.findById(commentId, function (error, fineResult) {
      if (error) {
        return utils.severErr(error, res)
      }
      if (fineResult) {
        if(fineResult.status === status){
          return utils.responseClient(res, RES_CODE.statusFail, "该更新状态正处于当前状态")
        }
        Comment.findByIdAndUpdate(commentId, { status }, { new: true }, function (errs, updateResult) {
          if (errs) {
            return utils.severErr(errs, res)
          }
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
            Article.findByIdAndUpdate(updateResult.articleId, conditions, { new: true }, function (errs, docs) {
              if (errs) {
                return utils.severErr(errs, res)
              }
              docs ? utils.responseClient(res, RES_CODE.reqSuccess, "一级评论内容更新成功",updateResult) : utils.responseClient(res, RES_CODE.dataFail, "一级评论内容更新失败")
            })
          }else{
            utils.responseClient(res, RES_CODE.dataFail, "一级评论内容更新失败")
          }
        })
      } else {
        utils.responseClient(res, RES_CODE.dataNot, "评论id不存在")
      }
    })
  }
}
// 置顶评论，根据isTop和topUpdateTime排序
exports.commentSticky = (req, res) => {
  let { commentId, isTop} = req.body
  isTop = isTop === '1' || isTop == 'true'?true:false
  Comment.findByIdAndUpdate(commentId, { isTop, topUpdateTime: utils.currentDayDate() }, { new: true }, function (errs, updateResult) {
    if (errs) {
      return utils.severErr(errs, res)
    }
    updateResult?utils.responseClient(res, RES_CODE.reqSuccess, "置顶更换成功", updateResult):utils.responseClient(res, RES_CODE.dataFail, "置顶更换失败")
  })
}
// 删除一级评论及其回复评论
exports.commentDel = (req, res) => {
  let { id } = req.params
  Comment.findByIdAndRemove(id, function (err, docs) {
    if (err) {
      return utils.severErr(err, res)
    }
    if (docs) {
      if(docs.status === '1'){
        Article.findByIdAndUpdate(docs.articleId, {$inc: {'meta.commentTotal': -1}, $pull: {commentList: id}}, { new: true }, function (errs, updateResult) {
          if (errs) {
            return utils.severErr(errs, res)
          }
          updateResult ? utils.responseClient(res, RES_CODE.reqSuccess, "删除文章评论成功") : utils.responseClient(res, RES_CODE.dataFail, "删除文章评论失败")
        })
      }else{
        utils.responseClient(res, RES_CODE.reqSuccess, "删除文章评论成功")
      }
      if(docs.replyCommentList.length > 0){
        ReplyComment.deleteMany({commentId: id}, function(removeErr, removeDoc){})
      }
    } else {
      utils.responseClient(res, RES_CODE.dataFail, "删除文章评论失败")
    }
  })
}