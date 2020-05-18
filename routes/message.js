const Message = require("../models/message");
const CONSTANT = require('../config/constant');
const RES_CODE = CONSTANT.RES_CODE
const utils = require('../config/utils');

exports.messageList = (req, res) => {
  let conditions =  utils.blurSelect(req.query)
  let pageObj =  utils.pageSelect(req.query)
  let userMessage = req.tokenMessage.userMessage
  if(!userMessage.functionList.includes('5e99c1edd1ba729a78b016bb')){
    return utils.responseClient(res, RES_CODE.dataFail, "无该功能权限")
  }
  Message.countDocuments(conditions,function (err, count){
    if (err) {
      return utils.severErr(err, res)
    }
    Message.find(conditions,null,pageObj,function (error, docs){
      if(error){
        return utils.severErr(error, res)
      }
      if (docs) {
        let data = {
          count,
          data: docs
        }
        utils.responseClient(res, RES_CODE.reqSuccess, "获取留言列表成功", data)
      } else {
        utils.responseClient(res, RES_CODE.dataFail, "获取留言列表失败")
      }
    }).populate([
      { path: 'createUser' }
    ])
  })
}

exports.messageAdd = (req, res) => {
  let body = req.body
  let conditions =  utils.completeSelect(body)
  let userMessage = req.tokenMessage.userMessage
  if(!userMessage.functionList.includes('5e834fbdfb69305aa091e833')){
    return utils.responseClient(res, RES_CODE.dataFail, "无该功能权限")
  }
  conditions.createUser = userMessage.id
  let newMessage = new Message(conditions)
  Message.findOne({
    content: body.content
  }).exec(function (err, docs){
    if(err){
      return utils.severErr(err, res)
    }
    if (docs) {
      utils.responseClient(res, RES_CODE.dataAlready, "留言内容已存在")
    } else {
      newMessage.save(function(err, doc){
        if(err){
          return utils.severErr(err, res)
        }
        if(doc){
          let data = {
            _id: doc._id,
            content: doc.content,
            createTime: doc.createTime,
            createUser: [{
              name: userMessage.name,
              avatarId: userMessage.avatarId
            }]
          }
          utils.responseClient(res, RES_CODE.reqSuccess, "留言新增成功", data)
        }else{
          utils.responseClient(res, RES_CODE.dataFail, "留言新增失败")
        }
      })
    }
  })
}

exports.messageUpdate = (req, res) => {
  let body = req.body
  let conditions =  utils.completeSelect(body)
  let userMessage = req.tokenMessage.userMessage
  if(!userMessage.functionList.includes('5e834fc4fb69305aa091e834')){
    return utils.responseClient(res, RES_CODE.dataFail, "无该功能权限")
  }
  Message.findByIdAndUpdate(body.id, conditions, {new: true}, function (err,docs){
    if(err){
      return utils.severErr(err, res)
    }
    docs?utils.responseClient(res, RES_CODE.reqSuccess, "更新留言信息成功", docs):utils.responseClient(res, RES_CODE.dataFail, "更新留言信息失败")
  })
}

exports.messageDel = (req, res) => {
  let userMessage = req.tokenMessage.userMessage
  if(!userMessage.functionList.includes('5e834fcbfb69305aa091e835')){
    return utils.responseClient(res, RES_CODE.dataFail, "无该功能权限")
  }
  Message.findByIdAndRemove(req.params.id,function (err, docs){
    if(err){
      return utils.severErr(err, res)
    }
    docs?utils.responseClient(res, RES_CODE.reqSuccess, "删除留言信息成功"):utils.responseClient(res, RES_CODE.dataFail, "删除留言信息失败")
  })
}