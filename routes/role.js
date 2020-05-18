const Role = require("../models/role");
const User = require("../models/user");
const CONSTANT = require('../config/constant');
const RES_CODE = CONSTANT.RES_CODE
const utils = require('../config/utils');

exports.roleList = (req, res) => {
  let conditions =  utils.blurSelect(req.query)
  let pageObj =  utils.pageSelect(req.query)
  let userMessage = req.tokenMessage.userMessage
  if(!userMessage.functionList.includes('5e99c2c2d1ba729a78b016c0')){
    return utils.responseClient(res, RES_CODE.dataFail, "无该功能权限")
  }
  Role.countDocuments(conditions,function (err, count){
    if (err) {
      return utils.severErr(err, res)
    }
    let fields = {
      _id: 1,
      type: 1,
      status: 1,
      name: 1,
      functionList: 1,
      description: 1,
      createTime: 1
    }
    Role.find(conditions,fields,pageObj,function (error, docs){
      if(error){
        return utils.severErr(error, res)
      }
      if (docs) {
        let data = {
          count,
          data: docs
        }
        utils.responseClient(res, RES_CODE.reqSuccess, "获取角色列表成功", data)
      } else {
        utils.responseClient(res, RES_CODE.dataFail, "获取角色列表失败")
      }
    })
  })
}

exports.roleAdd = (req, res) => {
  let body = req.body
  let conditions =  utils.completeSelect(body)
  let userMessage = req.tokenMessage.userMessage
  if(!userMessage.functionList.includes('5e83505dfb69305aa091e83a')){
    return utils.responseClient(res, RES_CODE.dataFail, "无该功能权限")
  }
  conditions.createUser = userMessage.id
  conditions.updateUser = userMessage.id
  let newRole = new Role(conditions)
  Role.findOne({
    name: body.name
  }).exec(function (err, docs){
    if(err){
      return utils.severErr(err, res)
    }
    if (docs) {
      utils.responseClient(res, RES_CODE.dataAlready, "角色名称已存在")
    } else {
      newRole.save(function(err, doc){
        if(err){
          return utils.severErr(err, res)
        }
        if(doc){
          utils.responseClient(res, RES_CODE.reqSuccess, "角色新增成功")
        }else{
          utils.responseClient(res, RES_CODE.dataFail, "角色新增失败")
        }
      })
    }
  })
}

exports.roleUpdate = (req, res) => {
  let body = req.body
  let conditions =  utils.completeSelect(body)
  conditions.updateTime = utils.currentDayDate()
  conditions.updateUser = req.tokenMessage.userMessage.id
  let userMessage = req.tokenMessage.userMessage
  if(!userMessage.functionList.includes('5e835067fb69305aa091e83b')){
    return utils.responseClient(res, RES_CODE.dataFail, "无该功能权限")
  }
  if(body.name){
    Role.find({
      name: body.name
    }).exec(function(error,doc){
      if(error){
        return utils.severErr(error, res)
      }
      if(doc.length === 1 && doc[0]._id.toString() != body.id){
        return utils.responseClient(res, RES_CODE.dataAlready, "角色名称已存在")
      }
      Role.findByIdAndUpdate(body.id, conditions, {new: true}, function (err,docs){
        if(err){
          return utils.severErr(err, res)
        }
        docs?utils.responseClient(res, RES_CODE.reqSuccess, "更新角色信息成功",docs):utils.responseClient(res, RES_CODE.dataFail, "更新角色信息失败")
      })
    })
  }else{
    Role.findByIdAndUpdate(body.id, conditions, {new: true}, function (err,docs){
      if(err){
        return utils.severErr(err, res)
      }
      docs?utils.responseClient(res, RES_CODE.reqSuccess, "更新角色信息成功",docs):utils.responseClient(res, RES_CODE.dataFail, "更新角色信息失败")
    })
  }
}

exports.roleDel = (req, res) => {
  let id = req.params.id
  let userMessage = req.tokenMessage.userMessage
  if(!userMessage.functionList.includes('5e83506dfb69305aa091e83c')){
    return utils.responseClient(res, RES_CODE.dataFail, "无该功能权限")
  }
  Role.findById(id, function (error,doc){
    if(error){
      return utils.severErr(error, res)
    }
    if(doc){
      if(doc.type === '4'){
        Role.findByIdAndRemove(req.params.id,function (err, docs){
          if(err){
            return utils.severErr(err, res)
          }
          docs?utils.responseClient(res, RES_CODE.reqSuccess, "删除角色成功"):utils.responseClient(res, RES_CODE.dataFail, "删除角色失败")
        })
      }else{
        utils.responseClient(res, RES_CODE.statusFail, "该角色暂不支持删除")
      }
    }else{
      utils.responseClient(res, RES_CODE.dataFail, "删除角色失败")
    }
  })
}
// 获取角色权限列表
exports.getRoleAuth = (req, res) => {
  let userMessage = req.tokenMessage.userMessage
  if(!userMessage.functionList.includes('5e99cb85d1ba729a78b016c2')){
    return utils.responseClient(res, RES_CODE.dataFail, "无该功能权限")
  }
  Role.findById(req.query.roleId,function (error, docs){
    if(error){
      return utils.severErr(error, res)
    }
    if (docs) {
      let data = docs.functionList
      utils.responseClient(res, RES_CODE.reqSuccess, "获取角色权限成功", data)
    } else {
      utils.responseClient(res, RES_CODE.dataFail, "获取角色权限列表失败")
    }
  }).populate([
    { path: 'functionList'}
  ])
}
// 给角色设置菜单功能
exports.setRoleAuth = (req, res) => {
  let {id, functionList, menuList} = req.body
  let userMessage = req.tokenMessage.userMessage
  if(!userMessage.functionList.includes('5e99cb85d1ba729a78b016c2')){
    return utils.responseClient(res, RES_CODE.dataFail, "无该功能权限")
  }
  functionList = functionList?functionList.split(','):[]
  menuList = menuList?menuList.split(','):[]
  Role.findByIdAndUpdate(id, {functionList, menuList, updateTime: utils.currentDayDate()}, {new: true}, function (err,docs){
    if(err){
      return utils.severErr(err, res)
    }
    docs?utils.responseClient(res, RES_CODE.reqSuccess, "角色赋值权限成功"):utils.responseClient(res, RES_CODE.dataFail, "角色赋值权限失败")
  })
}
// 根据角色查询用户
exports.roleUserList = (req, res) => {
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
  User.countDocuments(conditions,function (err, count){
    if (err) {
      return utils.severErr(err, res)
    }
    User.find(conditions,fields,pageObj,function (error, docs){
      if(error){
        return utils.severErr(error, res)
      }
      if (docs) {
        let data = {
          count,
          data: docs
        }
        utils.responseClient(res, RES_CODE.reqSuccess, "获取用户列表成功", data)
      } else {
        utils.responseClient(res, RES_CODE.dataFail, "获取用户列表失败")
      }
    })
  })
}
// 批量导入用户角色或移除用户角色
exports.updateMuchUser = (req, res) => {
  let {roleId, type, ids} = req.body
  let userMessage = req.tokenMessage.userMessage
  if(!userMessage.functionList.includes('5e99cb85d1ba729a78b016c2')){
    return utils.responseClient(res, RES_CODE.dataFail, "无该功能权限")
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
    User.update(conditions,doc,{multi: true},function (error, docs){
      if(error){
        return utils.severErr(error, res)
      }
      if (docs) {
        utils.responseClient(res, RES_CODE.reqSuccess, "用户角色操作成功")
      } else {
        utils.responseClient(res, RES_CODE.dataFail, "用户角色操作失败")
      }
    })
  }else{
    utils.responseClient(res, RES_CODE.statusFail, "所传用户和角色为空")
  }
}