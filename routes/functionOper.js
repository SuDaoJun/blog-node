const FunctionOper = require("../models/functionOper");
const Menu = require("../models/menu");
const CONSTANT = require('../config/constant');
const RES_CODE = CONSTANT.RES_CODE
const utils = require('../config/utils');

exports.functionOperList = (req, res) => {
  let conditions =  utils.blurSelect(req.query)
  let pageObj =  utils.pageSelect(req.query)
  FunctionOper.countDocuments(conditions,function (err, count){
    if (err) {
      return utils.severErr(err, res)
    }
    FunctionOper.find(conditions,null,pageObj,function (error, docs){
      if(error){
        return utils.severErr(error, res)
      }
      if (docs) {
        let data = {
          count,
          data: docs
        }
        utils.responseClient(res, RES_CODE.reqSuccess, "获取功能列表成功", data)
      } else {
        utils.responseClient(res, RES_CODE.dataFail, "获取功能列表失败")
      }
    }).populate([
      { path: 'menuId', select: '_id title' }
    ])
  })
}

exports.functionOperAdd = (req, res) => {
  let {title, menuId} = req.body
  let conditions =  utils.completeSelect(req.body)
  let newFunctionOper = new FunctionOper(conditions)
  FunctionOper.findOne({
    title
  }).exec(function (err, docs){
    if(err){
      return utils.severErr(err, res)
    }
    if (docs) {
      utils.responseClient(res, RES_CODE.dataAlready, "功能标题已存在")
    } else {
      newFunctionOper.save(function(err, doc){
        if(err){
          return utils.severErr(err, res)
        }
        if(doc){
          Menu.findByIdAndUpdate(menuId, {$push: {functionList: doc._id}}, {new: true}, function (err,updateResult){
            if(err){
              return utils.severErr(err, res)
            }
            updateResult?utils.responseClient(res, RES_CODE.reqSuccess, "功能新增成功"):utils.responseClient(res, RES_CODE.dataFail, "功能新增失败")
          })
        }else{
          utils.responseClient(res, RES_CODE.dataFail, "功能新增失败")
        }
      })
    }
  })
}

exports.functionOperUpdate = (req, res) => {
  let {title, menuId, id} = req.body
  let conditions =  utils.completeSelect(req.body)
  if(title || menuId){
    FunctionOper.find({
      title
    }).exec(function(error,doc){
      if(error){
        return utils.severErr(error, res)
      }
      if(doc.length === 1 && doc[0]._id.toString() !== id){
        return utils.responseClient(res, RES_CODE.dataAlready, "功能标题已存在")
      }
      FunctionOper.findByIdAndUpdate(id, conditions, function (operErr,findResult){
        if(operErr){
          return utils.severErr(err, operErr)
        }
        if(findResult){
          // 判断menuId是否改变
          if(menuId && findResult.menuId !== menuId){
            // 删除当前菜单中功能
            Menu.findByIdAndUpdate(findResult.menuId, {$pull: {functionList: id}}, {new: true}, function (updateErr,updateResult){
              if(updateErr){
                return utils.severErr(updateErr, res)
              }
              if(updateResult){
                // 向新菜单添加功能
                Menu.findByIdAndUpdate(menuId, {$push: {functionList: id}}, {new: true}, function (updateErrs,updateResults){
                  if(updateErrs){
                    return utils.severErr(updateErrs, res)
                  }
                  updateResults?utils.responseClient(res, RES_CODE.reqSuccess, "更新功能信息成功"):utils.responseClient(res, RES_CODE.dataFail, "更新功能信息失败")
                })
              }else{
                utils.responseClient(res, RES_CODE.dataFail, "更新功能信息失败")
              }
            })
          }else{
            utils.responseClient(res, RES_CODE.reqSuccess, "更新功能信息成功")
          }
        }else{
          utils.responseClient(res, RES_CODE.dataFail, "更新功能信息失败")
        }
      })
    })
  }else{
    FunctionOper.findByIdAndUpdate(id, conditions, {new: true}, function (err,docs){
      if(err){
        return utils.severErr(err, res)
      }
      docs?utils.responseClient(res, RES_CODE.reqSuccess, "更新功能信息成功"):utils.responseClient(res, RES_CODE.dataFail, "更新功能信息失败")
    })
  }
}

exports.functionOperDel = (req, res) => {
  let id = req.params.id
  FunctionOper.findByIdAndRemove(id,function (err, docs){
    if(err){
      return utils.severErr(err, res)
    }
    if(docs){
      Menu.findByIdAndUpdate(docs.menuId, {$pull: {functionList: id}}, {new: true}, function (err,updateResult){
        if(err){
          return utils.severErr(err, res)
        }
        updateResult?utils.responseClient(res, RES_CODE.reqSuccess, "删除功能成功"):utils.responseClient(res, RES_CODE.dataFail, "删除功能失败")
      })
    }else{
      utils.responseClient(res, RES_CODE.dataFail, "删除功能失败")
    }
  })
}