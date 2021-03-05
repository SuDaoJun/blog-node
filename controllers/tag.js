const Tag = require("../models/tag");
const CONSTANT = require('../config/constant');
const RES_CODE = CONSTANT.RES_CODE
const ROLE_TYPE = CONSTANT.ROLE_TYPE
const utils = require('../config/utils');

class TagCtr{
  async tagList(ctx){
    let req = ctx.request
    let conditions =  utils.blurSelect(req.query)
    let pageObj =  utils.pageSelect(req.query)
    if(!pageObj.sort){
      pageObj.sort = {
        createTime: '-1'
      }
    }
    let userMessage = req.tokenMessage.userMessage
    if(userMessage.roleId !== ROLE_TYPE.superRole){
      conditions['createUser.mark'] = userMessage.mark
    }
    let count = await Tag.countDocuments(conditions)
    let docs = await Tag.find(conditions,null,pageObj).populate([
      { path: 'createUser', select: '_id name' }
    ])
    if (docs) {
      let data = {
        count,
        data: docs
      }
      utils.responseClient(ctx, RES_CODE.reqSuccess, "获取标签列表成功", data)
    } else {
      utils.responseClient(ctx, RES_CODE.dataFail, "获取标签列表失败")
    }
  }
  async tagAdd(ctx){
    let req = ctx.request
    let body = req.body
    let conditions =  utils.completeSelect(body)
    let userMessage = req.tokenMessage.userMessage
    conditions.createUser = userMessage.id
    let newTag = new Tag(conditions)
    let docs = await Tag.findOne({
      name: body.name
    })
    if (docs) {
      utils.responseClient(ctx, RES_CODE.dataAlready, "标签已存在")
    } else {
      let tag = await newTag.save()
      tag?utils.responseClient(ctx, RES_CODE.reqSuccess, "标签新增成功"):utils.responseClient(ctx, RES_CODE.dataFail, "标签新增失败")
    }
  }
  async tagUpdate(ctx){
    let req = ctx.request
    let body = req.body
    let conditions =  utils.completeSelect(body)
    conditions.updateTime = utils.currentDayDate()
    if(body.name){
      let doc = await Tag.find({
        name: body.name
      })
      if(doc.length === 1 && doc[0]._id.toString() != body.id){
        return utils.responseClient(ctx, RES_CODE.dataAlready, "标签已存在")
      }
    }
    let docs = await Tag.findByIdAndUpdate(body.id, conditions, {new: true})
    docs?utils.responseClient(ctx, RES_CODE.reqSuccess, "更新标签成功"):utils.responseClient(ctx, RES_CODE.dataFail, "更新标签失败")
  }
  async tagDel(ctx){
    let docs = await Tag.findByIdAndRemove(ctx.params.id)
    docs?utils.responseClient(ctx, RES_CODE.reqSuccess, "删除标签成功"):utils.responseClient(ctx, RES_CODE.dataFail, "删除标签失败")
  }
}

module.exports = new TagCtr()