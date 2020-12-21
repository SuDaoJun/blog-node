const Menu = require("../models/menu");
const FunctionOper = require("../models/functionOper");
const CONSTANT = require('../config/constant');
const BaseController = require('./baseController')
const RES_CODE = CONSTANT.RES_CODE
const utils = require('../config/utils');

class MenuCtl extends BaseController{
  constructor() {
    super()
  }
  async menuList(ctx){
    let req = ctx.request
    let conditions =  utils.blurSelect(req.query)
    let pageObj =  utils.pageSelect(req.query)
    let userMessage = req.tokenMessage.userMessage
    if(!userMessage.functionList.includes('5e834ff2fb69305aa091e836')){
      return utils.responseClient(ctx, RES_CODE.dataFail, "无该功能权限")
    }
    if(!pageObj.sort){
      pageObj.sort = {
        createTime: '-1'
      }
    }
    let count = await Menu.countDocuments(conditions)
    let docs = await Menu.find(conditions,null,pageObj).populate([
      { path: 'functionList' },
      { path: 'supMenu' }
    ])
    if (docs) {
      let data = {
        count,
        data: docs
      }
      utils.responseClient(ctx, RES_CODE.reqSuccess, "获取菜单列表成功", data)
    } else {
      utils.responseClient(ctx, RES_CODE.dataFail, "获取菜单列表失败")
    }
  }
  async menuTree(ctx){
    let req = ctx.request
    let userMessage = req.tokenMessage.userMessage
    if(!userMessage.functionList.includes('5e834ff2fb69305aa091e836')){
      return utils.responseClient(ctx, RES_CODE.dataFail, "无该功能权限")
    }
    let docs = await Menu.find(null).sort({createTime:1}).populate([
      { path: 'functionList' },
      { path: 'supMenu' }
    ])
    if (docs) {
      let data = this.treeData(docs)
      utils.responseClient(ctx, RES_CODE.reqSuccess, "获取菜单列表成功", data)
    } else {
      utils.responseClient(ctx, RES_CODE.dataFail, "获取菜单树列表失败")
    }
  }
  async menuAdd(ctx){
    let req = ctx.request
    let body = req.body
    let userMessage = req.tokenMessage.userMessage
    if(!userMessage.functionList.includes('5e99c25ad1ba729a78b016bc')){
      return utils.responseClient(ctx, RES_CODE.dataFail, "无该功能权限")
    }
    let conditions =  utils.completeSelect(body)
    if(conditions.parentId && conditions.parentId !== '0'){
      conditions.supMenu = conditions.parentId
    }
    let newMenu = new Menu(conditions)
    let docs = await Menu.findOne({
      title: body.title
    })
    if (docs) {
      utils.responseClient(ctx, RES_CODE.dataAlready, "菜单标题已存在")
    } else {
      let doc = await newMenu.save()
      doc?utils.responseClient(ctx, RES_CODE.reqSuccess, "菜单新增成功"):utils.responseClient(ctx, RES_CODE.dataFail, "菜单新增失败")
    }
  }
  async menuUpdate(ctx){
    let req = ctx.request
    let body = req.body
    let conditions =  utils.completeSelect(body)
    let userMessage = req.tokenMessage.userMessage
    if(!userMessage.functionList.includes('5e99c280d1ba729a78b016bd')){
      return utils.responseClient(ctx, RES_CODE.dataFail, "无该功能权限")
    }
    if(conditions.parentId && conditions.parentId !== '0'){
      conditions.supMenu = conditions.parentId
    }
    if(body.id && body.supMenu && body.id === body.supMenu){
      return utils.responseClient(ctx, RES_CODE.statusFail, "上级菜单不可选本身")
    }
    if(body.title){
      let doc = await Menu.find({
        title: body.title
      })
      if(doc.length === 1 && doc[0]._id.toString() != body.id){
        return utils.responseClient(ctx, RES_CODE.dataAlready, "菜单标题已存在")
      }
    }
    let docs = await Menu.findByIdAndUpdate(body.id, conditions, {new: true})
    docs?utils.responseClient(ctx, RES_CODE.reqSuccess, "更新菜单信息成功"):utils.responseClient(ctx, RES_CODE.dataFail, "更新菜单信息失败")
  }
  async menuDel(ctx){
    let req = ctx.request
    let id = ctx.params.id
    let userMessage = req.tokenMessage.userMessage
    if(!userMessage.functionList.includes('5e99c287d1ba729a78b016be')){
      return utils.responseClient(ctx, RES_CODE.dataFail, "无该功能权限")
    }
    let doc = await Menu.findById(id)
    if(doc && doc.functionList.length === 0){
      let docs = await Menu.findByIdAndRemove(id)
      docs?utils.responseClient(ctx, RES_CODE.reqSuccess, "删除菜单成功"):utils.responseClient(ctx, RES_CODE.dataFail, "删除菜单失败")
    }else{
      utils.responseClient(ctx, RES_CODE.dataAlready, "该菜单存在功能列表，请先删除功能")
    }
  }
  // 扁平数据转树形结构数据
  treeData(source){
    let cloneData = JSON.parse(JSON.stringify(source))    // 对源数据深度克隆
    return cloneData.filter(father=>{               
      let branchArr = cloneData.filter(child=>father._id == child.parentId)    //返回每一项的子级数组
      branchArr.length>0 ? father.children = branchArr : ''   //如果存在子级，则给父级添加一个children属性，并赋值
      return father.parentId=='0';      //返回第一层
    })
  }
}
module.exports = new MenuCtl().resolve()