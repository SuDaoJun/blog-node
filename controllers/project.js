const Project = require("../models/project");
const CONSTANT = require('../config/constant');
const RES_CODE = CONSTANT.RES_CODE
const utils = require('../config/utils');

class ProjectCtl{
  async projectList(ctx){
    let req = ctx.request
    let conditions =  utils.blurSelect(req.query)
    let pageObj =  utils.pageSelect(req.query)
    if(req.url.indexOf('blogPage') === -1){
      let userMessage = req.tokenMessage.userMessage
      if(!userMessage.functionList.includes('5e99c1d9d1ba729a78b016b9')){
        return utils.responseClient(ctx, RES_CODE.dataFail, "无该功能权限")
      }
    }
    if(!pageObj.sort){
      pageObj.sort = {
        createTime: '-1'
      }
    }
    let count = await Project.countDocuments(conditions)
    let docs = await Project.find(conditions,null,pageObj)
    if (docs) {
      let data = {
        count,
        data: docs
      }
      utils.responseClient(ctx, RES_CODE.reqSuccess, "获取项目列表成功", data)
    } else {
      utils.responseClient(ctx, RES_CODE.dataFail, "获取项目列表失败")
    }
  }
  async projectAdd (ctx){
    let req = ctx.request
    let body = req.body
    let userMessage = req.tokenMessage.userMessage
    if(!userMessage.functionList.includes('5e834f88fb69305aa091e82d')){
      return utils.responseClient(ctx, RES_CODE.dataFail, "无该功能权限")
    }
    let conditions =  utils.completeSelect(body)
    let newProject = new Project(conditions)
    let docs = await Project.findOne({
      name: body.name
    })
    if (docs) {
      utils.responseClient(ctx, RES_CODE.dataAlready, "项目名称已存在")
    } else {
     let doc = await newProject.save()
     if(doc){
       utils.responseClient(ctx, RES_CODE.reqSuccess, "项目新增成功")
     }else{
       utils.responseClient(ctx, RES_CODE.dataFail, "项目新增失败")
     }
    }
  }
  async projectUpdate(ctx){
    let req = ctx.request
    let body = req.body
    let userMessage = req.tokenMessage.userMessage
    if(!userMessage.functionList.includes('5e834f90fb69305aa091e82e')){
      return utils.responseClient(ctx, RES_CODE.dataFail, "无该功能权限")
    }
    let conditions =  utils.completeSelect(body)
    conditions.updateTime = utils.currentDayDate()
    if(body.name){
      let doc = await Project.find({
        name: body.name
      })
      if(doc.length === 1 && doc[0]._id.toString() != body.id){
        return utils.responseClient(ctx, RES_CODE.dataAlready, "项目名称已存在")
      }
    }
    let docs = await Project.findByIdAndUpdate(body.id, conditions, {new: true})
    docs?utils.responseClient(ctx, RES_CODE.reqSuccess, "更新项目信息成功"):utils.responseClient(ctx, RES_CODE.dataFail, "更新项目信息失败")
  }
  async projectDel (ctx){
    let req = ctx.request
    let userMessage = req.tokenMessage.userMessage
    if(!userMessage.functionList.includes('5e834f97fb69305aa091e82f')){
      return utils.responseClient(ctx, RES_CODE.dataFail, "无该功能权限")
    }
    let docs = await Project.findByIdAndRemove(ctx.params.id)
    docs?utils.responseClient(ctx, RES_CODE.reqSuccess, "删除项目信息成功"):utils.responseClient(ctx, RES_CODE.dataFail, "删除项目信息失败")
  }
}
module.exports = new ProjectCtl()