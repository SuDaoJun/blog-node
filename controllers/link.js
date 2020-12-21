const Link = require("../models/link");
const CONSTANT = require('../config/constant');
const RES_CODE = CONSTANT.RES_CODE
const utils = require('../config/utils');

class LinkCtl{
  async linkList(ctx) {
    let req = ctx.request
    let conditions =  utils.blurSelect(req.query)
    let pageObj =  utils.pageSelect(req.query)
    if(req.url.indexOf('blogPage') === -1){
      let userMessage = req.tokenMessage.userMessage
      if(!userMessage.functionList.includes('5e99c1e2d1ba729a78b016ba')){
        return utils.responseClient(ctx, RES_CODE.dataFail, "无该功能权限")
      }
    }
    if(!pageObj.sort){
      pageObj.sort = {
        createTime: '-1'
      }
    }
    let count = await Link.countDocuments(conditions)
    let docs = await Link.find(conditions,null,pageObj)
    if (docs) {
      let data = {
        count,
        data: docs
      }
      utils.responseClient(ctx, RES_CODE.reqSuccess, "获取友情链接列表成功", data)
    } else {
      utils.responseClient(ctx, RES_CODE.dataFail, "获取友情链接列表失败")
    }
  }
  async linkAdd(ctx){
    let req = ctx.request
    let body = req.body
    let userMessage = req.tokenMessage.userMessage
    if(!userMessage.functionList.includes('5e834f9efb69305aa091e830')){
      return utils.responseClient(ctx, RES_CODE.dataFail, "无该功能权限")
    }
    let conditions =  utils.completeSelect(body)
    let newCource = new Link(conditions)
    let docs = await Link.findOne({
      name: body.name
    })
    if (docs) {
      utils.responseClient(ctx, RES_CODE.dataAlready, "友情链接标题已存在")
    } else {
      let doc = await newCource.save()
      if(doc){
        utils.responseClient(ctx, RES_CODE.reqSuccess, "友情链接新增成功")
      }else{
        utils.responseClient(ctx, RES_CODE.dataFail, "友情链接新增失败")
      }
    }
  }
  async linkUpdate(ctx){
    let req = ctx.request
    let body = req.body
    let userMessage = req.tokenMessage.userMessage
    if(!userMessage.functionList.includes('5e834faffb69305aa091e831')){
      return utils.responseClient(ctx, RES_CODE.dataFail, "无该功能权限")
    }
    let conditions =  utils.completeSelect(body)
    conditions.updateTime = utils.currentDayDate()
    if(body.name){
      let doc = await Link.find({
        name: body.name
      })
      if(doc.length === 1 && doc[0]._id.toString() != body.id){
        return utils.responseClient(ctx, RES_CODE.dataAlready, "友情链接标题已存在")
      }
      let docs = await Link.findByIdAndUpdate(body.id, conditions, {new: true})
      docs?utils.responseClient(ctx, RES_CODE.reqSuccess, "更新友情链接成功"):utils.responseClient(ctx, RES_CODE.dataFail, "更新友情链接失败")
    }else{
      let docs = await Link.findByIdAndUpdate(body.id, conditions, {new: true})
      docs?utils.responseClient(ctx, RES_CODE.reqSuccess, "更新友情链接成功"):utils.responseClient(ctx, RES_CODE.dataFail, "更新友情链接失败")
    }
  }
  async linkDel(ctx){
    let userMessage = ctx.request.tokenMessage.userMessage
    if(!userMessage.functionList.includes('5e834fb5fb69305aa091e832')){
      return utils.responseClient(ctx, RES_CODE.dataFail, "无该功能权限")
    }
    let docs = await Link.findByIdAndRemove(ctx.params.id)
    docs?utils.responseClient(ctx, RES_CODE.reqSuccess, "删除友情链接成功"):utils.responseClient(ctx, RES_CODE.dataFail, "删除友情链接失败")
  }
}
module.exports = new LinkCtl()