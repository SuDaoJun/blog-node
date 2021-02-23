const Role = require("../models/role");
const User = require("../models/user");
const CONSTANT = require('../config/constant');
const RES_CODE = CONSTANT.RES_CODE
const utils = require('../config/utils');

class RoleCtl{
  async roleList(ctx){
    let req = ctx.request
    let conditions =  utils.blurSelect(req.query)
    let pageObj =  utils.pageSelect(req.query)
    let userMessage = req.tokenMessage.userMessage
    if(!pageObj.sort){
      pageObj.sort = {
        createTime: '-1'
      }
    }
    if(!userMessage.functionList.includes('5e99c2c2d1ba729a78b016c0')){
      return utils.responseClient(ctx, RES_CODE.dataFail, "无该功能权限")
    }
    let count = await Role.countDocuments(conditions)
    let fields = {
      _id: 1,
      type: 1,
      status: 1,
      name: 1,
      functionList: 1,
      description: 1,
      createTime: 1
    }
    let docs = await Role.find(conditions,fields,pageObj)
    if (docs) {
      let data = {
        count,
        data: docs
      }
      utils.responseClient(ctx, RES_CODE.reqSuccess, "获取角色列表成功", data)
    } else {
      utils.responseClient(ctx, RES_CODE.dataFail, "获取角色列表失败")
    }
  }
  // 根据角色查询用户
  async roleUserList(ctx) {
    let req = ctx.request
    let {roleId, type, name} = req.query
    let pageObj =  utils.pageSelect(req.query)
    let fields = {
      _id: 1,
      name: 1,
      email: 1,
      phone: 1,
      roleId: 1
    }
    let conditions = {}
    if(name){
      let reg = new RegExp(name, 'i')
      conditions.name = {
        $regex: reg
      }
    }
    // 1打开属于该角色用户列表,即移除用户
    if(type === '1'){
      conditions.roleId = roleId
    }else{
      conditions.roleId = {
        $ne: roleId
      }
    }
    let count = await User.countDocuments(conditions)
    let docs = await User.find(conditions,fields,pageObj)
    if (docs) {
      let data = {
        count,
        data: docs
      }
      utils.responseClient(ctx, RES_CODE.reqSuccess, "获取用户列表成功", data)
    } else {
      utils.responseClient(ctx, RES_CODE.dataFail, "获取用户列表失败")
    }
  }
  async roleAdd(ctx){
    let req = ctx.request
    let body = req.body
    let conditions =  utils.completeSelect(body)
    let userMessage = req.tokenMessage.userMessage
    if(!userMessage.functionList.includes('5e83505dfb69305aa091e83a')){
      return utils.responseClient(ctx, RES_CODE.dataFail, "无该功能权限")
    }
    conditions.createUser = userMessage.id
    conditions.updateUser = userMessage.id
    let newRole = new Role(conditions)
    let docs = await Role.findOne({
      name: body.name
    })
    if (docs) {
      utils.responseClient(ctx, RES_CODE.dataAlready, "角色名称已存在")
    } else {
      let doc = await newRole.save()
      if(doc){
        utils.responseClient(ctx, RES_CODE.reqSuccess, "角色新增成功")
      }else{
        utils.responseClient(ctx, RES_CODE.dataFail, "角色新增失败")
      }
    }
  }
  async roleUpdate(ctx){
    let req = ctx.request
    let body = req.body
    let conditions =  utils.completeSelect(body)
    conditions.updateTime = utils.currentDayDate()
    conditions.updateUser = req.tokenMessage.userMessage.id
    let userMessage = req.tokenMessage.userMessage
    if(!userMessage.functionList.includes('5e835067fb69305aa091e83b')){
      return utils.responseClient(ctx, RES_CODE.dataFail, "无该功能权限")
    }
    if(body.name){
      let doc = await Role.find({
        name: body.name
      })
      if(doc.length === 1 && doc[0]._id.toString() != body.id){
        return utils.responseClient(ctx, RES_CODE.dataAlready, "角色名称已存在")
      }
    }
    let docs = await Role.findByIdAndUpdate(body.id, conditions, {new: true})
    docs?utils.responseClient(ctx, RES_CODE.reqSuccess, "更新角色信息成功",docs):utils.responseClient(ctx, RES_CODE.dataFail, "更新角色信息失败")
  }
  async roleDel(ctx){
    let id = ctx.params.id
    let req = ctx.request
    let userMessage = req.tokenMessage.userMessage
    if(!userMessage.functionList.includes('5e83506dfb69305aa091e83c')){
      return utils.responseClient(ctx, RES_CODE.dataFail, "无该功能权限")
    }
    let doc = await Role.findById(id)
    if(doc){
      if(doc.type === '4'){
        let docs = await Role.findByIdAndRemove(id)
        docs?utils.responseClient(ctx, RES_CODE.reqSuccess, "删除角色成功"):utils.responseClient(ctx, RES_CODE.dataFail, "删除角色失败")
      }else{
        utils.responseClient(ctx, RES_CODE.statusFail, "该角色暂不支持删除")
      }
    }else{
      utils.responseClient(ctx, RES_CODE.dataFail, "删除角色失败")
    }
  }
  // 获取角色权限列表
  async getRoleAuth (ctx){
    let req = ctx.request
    let userMessage = req.tokenMessage.userMessage
    if(!userMessage.functionList.includes('5e99cb85d1ba729a78b016c2')){
      return utils.responseClient(ctx, RES_CODE.dataFail, "无该功能权限")
    }
    let docs = await Role.findById(req.query.roleId).populate([
      { path: 'functionList'}
    ])
    if (docs) {
      let data = docs.functionList
      utils.responseClient(ctx, RES_CODE.reqSuccess, "获取角色权限成功", data)
    } else {
      utils.responseClient(ctx, RES_CODE.dataFail, "获取角色权限列表失败")
    }
  }
  // 给角色设置菜单功能
  async setRoleAuth(ctx){
    let req = ctx.request
    let {id, functionList, menuList} = req.body
    let userMessage = req.tokenMessage.userMessage
    if(!userMessage.functionList.includes('5e99cb85d1ba729a78b016c2')){
      return utils.responseClient(ctx, RES_CODE.dataFail, "无该功能权限")
    }
    functionList = functionList?functionList.split(','):[]
    menuList = menuList?menuList.split(','):[]
    let docs = await Role.findByIdAndUpdate(id, {functionList, menuList, updateTime: utils.currentDayDate()}, {new: true})
    docs?utils.responseClient(ctx, RES_CODE.reqSuccess, "角色赋值权限成功"):utils.responseClient(ctx, RES_CODE.dataFail, "角色赋值权限失败")
  }
  // 批量导入用户角色或移除用户角色
  async updateMuchUser(ctx){
    let req = ctx.request
    let {roleId, type, ids} = req.body
    let userMessage = req.tokenMessage.userMessage
    if(!userMessage.functionList.includes('5e99cb85d1ba729a78b016c2')){
      return utils.responseClient(ctx, RES_CODE.dataFail, "无该功能权限")
    }
    if(ids && roleId){
      let idArr = ids.split(',')
      let conditions = {
        _id: {$in: idArr}
      }
      let doc = {}
      // 1-移除用户
      if(type === '1'){
        doc = {
          roleId: null
        }
      }else{
        doc = {
          roleId
        }
      }
      let docs = await User.update(conditions,doc,{multi: true})
      docs?utils.responseClient(ctx, RES_CODE.reqSuccess, "用户角色操作成功"):utils.responseClient(ctx, RES_CODE.dataFail, "用户角色操作失败")
    }else{
      utils.responseClient(ctx, RES_CODE.statusFail, "所传用户或角色为空")
    }
  }
}
module.exports = new RoleCtl()