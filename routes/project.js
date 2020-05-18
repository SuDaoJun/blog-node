const Project = require("../models/project");
const CONSTANT = require('../config/constant');
const RES_CODE = CONSTANT.RES_CODE
const utils = require('../config/utils');

exports.projectList = (req, res) => {
  let conditions =  utils.blurSelect(req.query)
  let pageObj =  utils.pageSelect(req.query)
  if(req.url.indexOf('blogPage') === -1){
    let userMessage = req.tokenMessage.userMessage
    if(!userMessage.functionList.includes('5e99c1d9d1ba729a78b016b9')){
      return utils.responseClient(res, RES_CODE.dataFail, "无该功能权限")
    }
  }
  Project.countDocuments(conditions,function (err, count){
    if (err) {
      return utils.severErr(err, res)
    }
    Project.find(conditions,null,pageObj,function (error, docs){
      if(error){
        return utils.severErr(error, res)
      }
      if (docs) {
        let data = {
          count,
          data: docs
        }
        utils.responseClient(res, RES_CODE.reqSuccess, "获取项目列表成功", data)
      } else {
        utils.responseClient(res, RES_CODE.dataFail, "获取项目列表失败")
      }
    })
  })
}

exports.projectAdd = (req, res) => {
  let body = req.body
  let userMessage = req.tokenMessage.userMessage
  if(!userMessage.functionList.includes('5e834f88fb69305aa091e82d')){
    return utils.responseClient(res, RES_CODE.dataFail, "无该功能权限")
  }
  let conditions =  utils.completeSelect(body)
  let newProject = new Project(conditions)
  Project.findOne({
    name: body.name
  }).exec(function (err, docs){
    if(err){
      return utils.severErr(err, res)
    }
    if (docs) {
      utils.responseClient(res, RES_CODE.dataAlready, "项目名称已存在")
    } else {
      newProject.save(function(err, doc){
        if(err){
          return utils.severErr(err, res)
        }
        if(doc){
          utils.responseClient(res, RES_CODE.reqSuccess, "项目新增成功")
        }else{
          utils.responseClient(res, RES_CODE.dataFail, "项目新增失败")
        }
      })
    }
  })
}

exports.projectUpdate = (req, res) => {
  let body = req.body
  let userMessage = req.tokenMessage.userMessage
  if(!userMessage.functionList.includes('5e834f90fb69305aa091e82e')){
    return utils.responseClient(res, RES_CODE.dataFail, "无该功能权限")
  }
  let conditions =  utils.completeSelect(body)
  conditions.updateTime = utils.currentDayDate()
  if(body.name){
    Project.find({
      name: body.name
    }).exec(function(error,doc){
      if(error){
        return utils.severErr(error, res)
      }
      if(doc.length === 1 && doc[0]._id.toString() != body.id){
        return utils.responseClient(res, RES_CODE.dataAlready, "项目名称已存在")
      }
      Project.findByIdAndUpdate(body.id, conditions, {new: true}, function (err,docs){
        if(err){
          return utils.severErr(err, res)
        }
        docs?utils.responseClient(res, RES_CODE.reqSuccess, "更新项目信息成功"):utils.responseClient(res, RES_CODE.dataFail, "更新项目信息失败")
      })
    })
  }else{
    Project.findByIdAndUpdate(body.id, conditions, {new: true}, function (err,docs){
      if(err){
        return utils.severErr(err, res)
      }
      docs?utils.responseClient(res, RES_CODE.reqSuccess, "更新项目信息成功"):utils.responseClient(res, RES_CODE.dataFail, "更新项目信息失败")
    })
  }
}

exports.projectDel = (req, res) => {
  let userMessage = req.tokenMessage.userMessage
  if(!userMessage.functionList.includes('5e834f97fb69305aa091e82f')){
    return utils.responseClient(res, RES_CODE.dataFail, "无该功能权限")
  }
  Project.findByIdAndRemove(req.params.id,function (err, docs){
    if(err){
      return utils.severErr(err, res)
    }
    docs?utils.responseClient(res, RES_CODE.reqSuccess, "删除项目信息成功"):utils.responseClient(res, RES_CODE.dataFail, "删除项目信息失败")
  })
}