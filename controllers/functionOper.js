const FunctionOper = require("../models/functionOper");
const Menu = require("../models/menu");
const CONSTANT = require('../config/constant');
const RES_CODE = CONSTANT.RES_CODE
const utils = require('../config/utils');

class FunctionOperCtl{
  async functionOperList(ctx){
    let req = ctx.request
    let conditions =  utils.blurSelect(req.query)
    let pageObj =  utils.pageSelect(req.query)
    if(!pageObj.sort){
      pageObj.sort = {
        createTime: '-1'
      }
    }
    let count = await FunctionOper.countDocuments(conditions)
    let docs = await FunctionOper.find(conditions,null,pageObj).populate([
      { path: 'menuId', select: '_id title' }
    ])
    if (docs) {
      let data = {
        count,
        data: docs
      }
      utils.responseClient(ctx, RES_CODE.reqSuccess, "获取功能列表成功", data)
    } else {
      utils.responseClient(ctx, RES_CODE.dataFail, "获取功能列表失败")
    }
  }
  async functionOperAdd(ctx){
    let req = ctx.request
    let {title, menuId} = req.body
    let conditions =  utils.completeSelect(req.body)
    let newFunctionOper = new FunctionOper(conditions)
    let docs = await FunctionOper.findOne({ title })
    if (docs) {
      utils.responseClient(ctx, RES_CODE.dataAlready, "功能标题已存在")
    } else {
      let doc = await newFunctionOper.save()
      if(doc){
        let updateResult = await Menu.findByIdAndUpdate(menuId, {$push: {functionList: doc._id}}, {new: true})
        updateResult?utils.responseClient(ctx, RES_CODE.reqSuccess, "功能新增成功"):utils.responseClient(ctx, RES_CODE.dataFail, "功能新增失败")
      }else{
        utils.responseClient(ctx, RES_CODE.dataFail, "功能新增失败")
      }
    }
  }
  async functionOperUpdate(ctx){
    let req = ctx.request
    let {title, menuId, id} = req.body
    let conditions =  utils.completeSelect(req.body)
    if(title || menuId){
      let doc = await FunctionOper.find({ title })
      if(doc.length === 1 && doc[0]._id.toString() !== id){
        return utils.responseClient(ctx, RES_CODE.dataAlready, "功能标题已存在")
      }
      let findResult = await FunctionOper.findByIdAndUpdate(id, conditions)
      if(findResult){
        // 判断menuId是否改变
        if(menuId && findResult.menuId !== menuId){
          // 删除当前菜单中功能
          let updateResult = await Menu.findByIdAndUpdate(findResult.menuId, {$pull: {functionList: id}}, {new: true})
          if(updateResult){
            // 向新菜单添加功能
            let updateResults = await Menu.findByIdAndUpdate(menuId, {$push: {functionList: id}}, {new: true})
            updateResults?utils.responseClient(ctx, RES_CODE.reqSuccess, "更新功能信息成功"):utils.responseClient(ctx, RES_CODE.dataFail, "更新功能信息失败")
          }else{
            utils.responseClient(ctx, RES_CODE.dataFail, "更新功能信息失败")
          }
        }else{
          utils.responseClient(ctx, RES_CODE.reqSuccess, "更新功能信息成功")
        }
      }else{
        utils.responseClient(ctx, RES_CODE.dataFail, "更新功能信息失败")
      }
    }else{
      let docs = await FunctionOper.findByIdAndUpdate(id, conditions, {new: true})
      docs?utils.responseClient(ctx, RES_CODE.reqSuccess, "更新功能信息成功"):utils.responseClient(ctx, RES_CODE.dataFail, "更新功能信息失败")
    }
  }
  async functionOperDel(ctx){
    let id = ctx.params.id
    let docs = await FunctionOper.findByIdAndRemove(id)
    if(docs){
      let updateResult = await Menu.findByIdAndUpdate(docs.menuId, {$pull: {functionList: id}}, {new: true})
      updateResult?utils.responseClient(ctx, RES_CODE.reqSuccess, "删除功能成功"):utils.responseClient(ctx, RES_CODE.dataFail, "删除功能失败")
    }else{
      utils.responseClient(ctx, RES_CODE.dataFail, "删除功能失败")
    }
  }
}
module.exports = new FunctionOperCtl()