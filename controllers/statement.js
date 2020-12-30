const Statement = require("../models/statement");
const CONSTANT = require('../config/constant');
const RES_CODE = CONSTANT.RES_CODE
const utils = require('../config/utils');

class StatementCtl{
  async statementList(ctx){
    let pageObj = {
      limit: 7,
      skip: 0,
      sort: {
        'sortNum': '1'
      }
    }
    let docs = await Statement.find({},null,pageObj)
    docs?utils.responseClient(ctx, RES_CODE.reqSuccess, "获取励志语句成功", docs):utils.responseClient(ctx, RES_CODE.dataFail, "获取励志语句失败")
  }
  async statementAdd(ctx){
    let req = ctx.request
    let dataList = req.body
    if(dataList && dataList.length > 0){
      let docs = await Statement.insertMany(dataList)
      docs?utils.responseClient(ctx, RES_CODE.reqSuccess, "新增励志语句成功",docs):utils.responseClient(ctx, RES_CODE.dataFail, "新增励志语句失败")
    }else{
      utils.responseClient(ctx, RES_CODE.statusFail, "传递数据为数组对象")
    }
  }
  async statementUpdate(ctx){
    let req = ctx.request
    let body = req.body
    let idArr = body.idArr
    let dataList = body.dataList
    if(dataList && dataList.length > 0){
      await Statement.deleteMany({ _id: { $in: idArr}})
      let docs = await Statement.insertMany(dataList)
      docs?utils.responseClient(ctx, RES_CODE.reqSuccess, "编辑励志语句成功",docs):utils.responseClient(ctx, RES_CODE.dataFail, "编辑励志语句失败")
    }else{
      utils.responseClient(ctx, RES_CODE.statusFail, "传递参数有误")
    }
  }
}

module.exports = new StatementCtl()