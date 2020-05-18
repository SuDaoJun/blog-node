const Link = require("../models/link");
const CONSTANT = require('../config/constant');
const RES_CODE = CONSTANT.RES_CODE
const utils = require('../config/utils');

exports.linkList = (req, res) => {
  let conditions =  utils.blurSelect(req.query)
  let pageObj =  utils.pageSelect(req.query)
  if(req.url.indexOf('blogPage') === -1){
    let userMessage = req.tokenMessage.userMessage
    if(!userMessage.functionList.includes('5e99c1e2d1ba729a78b016ba')){
      return utils.responseClient(res, RES_CODE.dataFail, "无该功能权限")
    }
  }
  Link.countDocuments(conditions,function (err, count){
    if (err) {
      return utils.severErr(err, res)
    }
    Link.find(conditions,null,pageObj,function (error, docs){
      if(error){
        return utils.severErr(error, res)
      }
      if (docs) {
        let data = {
          count,
          data: docs
        }
        utils.responseClient(res, RES_CODE.reqSuccess, "获取友情链接列表成功", data)
      } else {
        utils.responseClient(res, RES_CODE.dataFail, "获取友情链接列表失败")
      }
    })
  })
}

exports.linkAdd = (req, res) => {
  let body = req.body
  let userMessage = req.tokenMessage.userMessage
  if(!userMessage.functionList.includes('5e834f9efb69305aa091e830')){
    return utils.responseClient(res, RES_CODE.dataFail, "无该功能权限")
  }
  let conditions =  utils.completeSelect(body)
  let newCource = new Link(conditions)
  Link.findOne({
    name: body.name
  }).exec(function (err, docs){
    if(err){
      return utils.severErr(err, res)
    }
    if (docs) {
      utils.responseClient(res, RES_CODE.dataAlready, "友情链接标题已存在")
    } else {
      newCource.save(function(err, doc){
        if(err){
          return utils.severErr(err, res)
        }
        if(doc){
          utils.responseClient(res, RES_CODE.reqSuccess, "友情链接新增成功")
        }else{
          utils.responseClient(res, RES_CODE.dataFail, "友情链接新增失败")
        }
      })
    }
  })
}

exports.linkUpdate = (req, res) => {
  let body = req.body
  let userMessage = req.tokenMessage.userMessage
  if(!userMessage.functionList.includes('5e834faffb69305aa091e831')){
    return utils.responseClient(res, RES_CODE.dataFail, "无该功能权限")
  }
  let conditions =  utils.completeSelect(body)
  conditions.updateTime = utils.currentDayDate()
  if(body.name){
    Link.find({
      name: body.name
    }).exec(function(error,doc){
      if(error){
        return utils.severErr(error, res)
      }
      if(doc.length === 1 && doc[0]._id.toString() != body.id){
        return utils.responseClient(res, RES_CODE.dataAlready, "友情链接标题已存在")
      }
      Link.findByIdAndUpdate(body.id, conditions, {new: true}, function (err,docs){
        if(err){
          return utils.severErr(err, res)
        }
        docs?utils.responseClient(res, RES_CODE.reqSuccess, "更新友情链接成功"):utils.responseClient(res, RES_CODE.dataFail, "更新友情链接失败")
      })
    })
  }else{
    Link.findByIdAndUpdate(body.id, conditions, {new: true}, function (err,docs){
      if(err){
        return utils.severErr(err, res)
      }
      docs?utils.responseClient(res, RES_CODE.reqSuccess, "更新友情链接成功"):utils.responseClient(res, RES_CODE.dataFail, "更新友情链接失败")
    })
  }
}

exports.linkDel = (req, res) => {
  let userMessage = req.tokenMessage.userMessage
  if(!userMessage.functionList.includes('5e834fb5fb69305aa091e832')){
    return utils.responseClient(res, RES_CODE.dataFail, "无该功能权限")
  }
  Link.findByIdAndRemove(req.params.id,function (err, docs){
    if(err){
      return utils.severErr(err, res)
    }
    docs?utils.responseClient(res, RES_CODE.reqSuccess, "删除友情链接成功"):utils.responseClient(res, RES_CODE.dataFail, "删除友情链接失败")
  })
}