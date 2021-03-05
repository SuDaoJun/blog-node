const Message = require("../models/message");
const CONSTANT = require('../config/constant');
const RES_CODE = CONSTANT.RES_CODE
const utils = require('../config/utils');

class MessageCtl{
  async messageList(ctx){
    let req = ctx.request
    let conditions =  utils.blurSelect(req.query)
    let pageObj =  utils.pageSelect(req.query)
    if(req.url.indexOf('blogPage') === -1){
      let userMessage = req.tokenMessage.userMessage
      if(!userMessage.functionList.includes('5e99c1edd1ba729a78b016bb')){
        return utils.responseClient(ctx, RES_CODE.dataFail, "无该功能权限")
      }
    }else{
      conditions.status = '1'
    }
    if(!pageObj.sort){
      pageObj.sort = {
        createTime: '-1'
      }
    }
    let count = await Message.countDocuments(conditions)
    let docs = await Message.find(conditions,null,pageObj).populate([
      { path: 'createUser', select: '_id name createTime avatarId'}
    ])
    if (docs) {
      let data = {
        count,
        data: docs
      }
      utils.responseClient(ctx, RES_CODE.reqSuccess, "获取留言列表成功", data)
    } else {
      utils.responseClient(ctx, RES_CODE.dataFail, "获取留言列表失败")
    }
  }
  async messageAdd (ctx){
    let req = ctx.request
    let body = req.body
    let conditions =  utils.completeSelect(body)
    let userMessage = req.tokenMessage.userMessage
    if(req.url.indexOf('blogPage') === -1){
      if(!userMessage.functionList.includes('5e834fbdfb69305aa091e833')){
        return utils.responseClient(ctx, RES_CODE.dataFail, "无该功能权限")
      }
    }
    conditions.createUser = userMessage.id
    let newMessage = new Message(conditions)
    let doc = await newMessage.save()
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
      utils.responseClient(ctx, RES_CODE.reqSuccess, "留言新增成功", data)
    }else{
      utils.responseClient(ctx, RES_CODE.dataFail, "留言新增失败")
    }
  }
  async messageUpdate(ctx){
    let req = ctx.request
    let body = req.body
    let conditions =  utils.completeSelect(body)
    let userMessage = req.tokenMessage.userMessage
    if(!userMessage.functionList.includes('5e834fc4fb69305aa091e834')){
      return utils.responseClient(ctx, RES_CODE.dataFail, "无该功能权限")
    }
    let docs = await Message.findByIdAndUpdate(body.id, conditions, {new: true})
    docs?utils.responseClient(ctx, RES_CODE.reqSuccess, "更新留言信息成功", docs):utils.responseClient(ctx, RES_CODE.dataFail, "更新留言信息失败")
  }
  async messageDel(ctx){
    let req = ctx.request
    let userMessage = req.tokenMessage.userMessage
    if(!userMessage.functionList.includes('5e834fcbfb69305aa091e835')){
      return utils.responseClient(ctx, RES_CODE.dataFail, "无该功能权限")
    }
    let docs = await Message.findByIdAndRemove(ctx.params.id)
    docs?utils.responseClient(ctx, RES_CODE.reqSuccess, "删除留言信息成功"):utils.responseClient(ctx, RES_CODE.dataFail, "删除留言信息失败")
  }
}
module.exports = new MessageCtl()