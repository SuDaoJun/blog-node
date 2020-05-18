const Statement = require("../models/statement");
const CONSTANT = require('../config/constant');
const RES_CODE = CONSTANT.RES_CODE
const utils = require('../config/utils');

exports.statementList = (req, res) => {
  Statement.find({}).sort({'sortNum': '1'}).exec(function (error, docs){
    if(error){
      return utils.severErr(error, res)
    }
    if (docs) {
      utils.responseClient(res, RES_CODE.reqSuccess, "获取励志语句成功", docs)
    } else {
      utils.responseClient(res, RES_CODE.dataFail, "获取励志语句失败")
    }
  })
}

exports.statementAdd = (req, res) => {
  let dataList = req.body
  if(dataList && dataList.length > 0){
    Statement.insertMany(dataList, function(error, docs){
      if(error){
         return utils.severErr(error, res)
       }
       if (docs) {
         utils.responseClient(res, RES_CODE.reqSuccess, "新增励志语句成功",docs)
       } else {
         utils.responseClient(res, RES_CODE.dataFail, "新增励志语句失败")
       }
    })
  }else{
    utils.responseClient(res, RES_CODE.statusFail, "传递数据为数组对象")
  }
}

exports.statementUpdate = (req, res) => {
  let body = req.body
  let idArr = body.idArr
  let dataList = body.dataList
  if(dataList && dataList.length > 0){
    Statement.deleteMany({ _id: { $in: idArr}}, function(err) {
      if(err){
        return utils.severErr(error, res)
      }
      Statement.insertMany(dataList, function(error, docs){
        if(error){
           return utils.severErr(error, res)
         }
         if (docs) {
           utils.responseClient(res, RES_CODE.reqSuccess, "编辑励志语句成功",docs)
         } else {
           utils.responseClient(res, RES_CODE.dataFail, "编辑励志语句失败")
         }
      })
    })
  }else{
    utils.responseClient(res, RES_CODE.statusFail, "传递参数有误")
  }
}