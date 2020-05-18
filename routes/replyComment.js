const replyComment = require("../models/replyComment");
const Comment = require("../models/comment");
const CONSTANT = require('../config/constant');
const RES_CODE = CONSTANT.RES_CODE
const utils = require('../config/utils');

exports.replyCommentList = (req, res) => {
  let conditions = utils.blurSelect(req.query)
  let pageObj = utils.pageSelect(req.query)
  if(!pageObj.sort){
    pageObj.sort = {
      createTime: '-1'
    }
  }
  replyComment.countDocuments(conditions, function (err, count) {
    if (err) {
      return utils.severErr(err, res)
    }
    let fields = {
    };
    replyComment.find(conditions, fields, pageObj, function (error, docs) {
      if (error) {
        return utils.severErr(error, res)
      }
      if (docs) {
        let data = {
          count,
          data: docs
        }
        utils.responseClient(res, RES_CODE.reqSuccess, "获取回复评论列表成功", data)
      } else {
        utils.responseClient(res, RES_CODE.dataFail, "获取回复评论列表失败")
      }
    }).populate([
      { path: 'replyUser', select: '_id name avatarId' },
      { path: 'toUser', select: '_id name avatarId' },
    ])
  })
}

//添加回复评论
exports.replyCommentAdd = (req, res) => {
  let { commentId } = req.body
  let conditions = utils.completeSelect(req.body)
  let userMessage = req.tokenMessage.userMessage
  conditions.replyUser = userMessage.id
  let newReplyComment = new replyComment(conditions)
  newReplyComment.save(function (err, addResult) {
    if (err) {
      return utils.severErr(err, res)
    }
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
     Comment.findByIdAndUpdate(commentId, conditions, { new: true }, function (errs, updateResult) {
       if (errs) {
         return utils.severErr(errs, res)
       }
       updateResult ? utils.responseClient(res, RES_CODE.reqSuccess, "回复评论添加成功", updateResult) : utils.responseClient(res, RES_CODE.dataFail, "回复评论添加失败")
     }).populate([
       { path: 'articleId', select: '_id title' },
       { path: 'replyCommentList', populate: [
         {path: 'replyUser', select: '_id name avatarId'}, 
         {path: 'toUser', select: '_id name avatarId'}
       ]},
       { path: 'createUser', select: '_id name avatarId' }
     ])
    } else {
      utils.responseClient(res, RES_CODE.dataFail, "新增回复评论失败")
    }
  })
}

exports.replyCommentDel = (req, res) => {
  let { id } = req.params
  replyComment.findByIdAndRemove(id, function (err, docs) {
    if (err) {
      return utils.severErr(err, res)
    }
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
      Comment.findByIdAndUpdate(docs.commentId, conditions, { new: true }, function (errs, updateResult) {
        if (errs) {
          return utils.severErr(errs, res)
        }
        updateResult ? utils.responseClient(res, RES_CODE.reqSuccess, "删除回复评论成功",updateResult) : utils.responseClient(res, RES_CODE.dataFail, "删除回复评论失败")
      }).populate([
        { path: 'articleId', select: '_id title' },
        { path: 'replyCommentList', populate: [
          {path: 'replyUser', select: '_id name avatarId'}, 
          {path: 'toUser', select: '_id name avatarId'}
        ]},
        { path: 'createUser', select: '_id name avatarId' }
      ])
    } else {
      utils.responseClient(res, RES_CODE.dataFail, "删除回复评论失败")
    }
  })
}

exports.replyCommentUpdate = (req, res) => {
  let { replayId, status, content} = req.body
  if(content){
    replyComment.findByIdAndUpdate(replayId, { content }, { new: true }, function (error, doc) {
      if (error) {
        return utils.severErr(error, res)
      }
      doc?utils.responseClient(res, RES_CODE.reqSuccess, "回复评论更新成功") : utils.responseClient(res, RES_CODE.dataFail, "回复评论更新失败")
    })
  }else{
    replyComment.findById(replayId, function (error, fineResult) {
      if (error) {
        return utils.severErr(error, res)
      }
      if (fineResult) {
        if(fineResult.status === status){
          return utils.responseClient(res, RES_CODE.statusFail, "该更新状态正处于当前状态")
        }
        replyComment.findByIdAndUpdate(replayId, { status }, { new: true }, function (errs, updateResult) {
          if (errs) {
            return utils.severErr(errs, res)
          }
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
            Comment.findByIdAndUpdate(updateResult.commentId, conditions, { new: true }, function (errs, docs) {
              if (errs) {
                return utils.severErr(errs, res)
              }
              docs ? utils.responseClient(res, RES_CODE.reqSuccess, "回复评论更新成功",updateResult) : utils.responseClient(res, RES_CODE.dataFail, "回复评论更新失败")
            })
          }else{
            utils.responseClient(res, RES_CODE.dataFail, "回复评论更新失败")
          }
        })
      } else {
        utils.responseClient(res, RES_CODE.dataNot, "评论回复id不存在")
      }
    })
  }
}