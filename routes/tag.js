const Tag = require("../models/tag");
const CONSTANT = require('../config/constant');
const RES_CODE = CONSTANT.RES_CODE
const ROLE_TYPE = CONSTANT.ROLE_TYPE
const utils = require('../config/utils');

exports.tagList = (req, res) => {
  let conditions =  utils.blurSelect(req.query)
  let pageObj =  utils.pageSelect(req.query)
  let userMessage = req.tokenMessage.userMessage
  if(userMessage.roleId !== ROLE_TYPE.superRole){
    conditions['createUser.mark'] = userMessage.mark
  }
  Tag.countDocuments(conditions,function (err, count){
    if (err) {
      return utils.severErr(err, res)
    }
    Tag.find(conditions,null,pageObj,function (error, docs){
      if(error){
        return utils.severErr(error, res)
      }
      if (docs) {
        let data = {
          count,
          data: docs
        }
        utils.responseClient(res, RES_CODE.reqSuccess, "获取标签列表成功", data)
      } else {
        utils.responseClient(res, RES_CODE.dataFail, "获取标签列表失败")
      }
    }).populate([
      { path: 'createUser', select: '_id name' }
    ])
  })
}

exports.tagAdd = (req, res) => {
  let body = req.body
  let conditions =  utils.completeSelect(body)
  let userMessage = req.tokenMessage.userMessage
  conditions.createUser = userMessage.id
  let newTag = new Tag(conditions)
  Tag.findOne({
    name: body.name
  }).exec(function (err, docs){
    if(err){
      return utils.severErr(err, res)
    }
    if (docs) {
      utils.responseClient(res, RES_CODE.dataAlready, "标签已存在")
    } else {
      newTag.save(function(err, tag){
        if(err){
          return utils.severErr(err, res)
        }
        if(tag){
          utils.responseClient(res, RES_CODE.reqSuccess, "标签新增成功")
        }else{
          utils.responseClient(res, RES_CODE.dataFail, "标签新增失败")
        }
      })
    }
  })
}

exports.tagUpdate = (req, res) => {
  let body = req.body
  let conditions =  utils.completeSelect(body)
  conditions.updateTime = utils.currentDayDate()
  if(body.name){
    Tag.find({
      name: body.name
    }).exec(function(error,doc){
      if(error){
        return utils.severErr(error, res)
      }
      if(doc.length === 1 && doc[0]._id.toString() != body.id){
        return utils.responseClient(res, RES_CODE.dataAlready, "标签已存在")
      }
      Tag.findByIdAndUpdate(body.id, conditions, {new: true}, function (err,docs){
        if(err){
          return utils.severErr(err, res)
        }
        docs?utils.responseClient(res, RES_CODE.reqSuccess, "更新标签成功"):utils.responseClient(res, RES_CODE.dataFail, "更新标签失败")
      })
    })
  }else{
    Tag.findByIdAndUpdate(body.id, conditions, {new: true}, function (err,docs){
      if(err){
        return utils.severErr(err, res)
      }
      docs?utils.responseClient(res, RES_CODE.reqSuccess, "更新标签成功"):utils.responseClient(res, RES_CODE.dataFail, "更新标签失败")
    })
  }
}

exports.tagDel = (req, res) => {
  Tag.findByIdAndRemove(req.params.id,function (err, docs){
    if(err){
      return utils.severErr(err, res)
    }
    docs?utils.responseClient(res, RES_CODE.reqSuccess, "删除标签成功"):utils.responseClient(res, RES_CODE.dataFail, "删除标签失败")
  })
}