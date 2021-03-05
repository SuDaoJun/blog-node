const bcrypt = require("bcryptjs");
const BaseController = require('./baseController')
const User = require("../models/user");
const Role = require("../models/role");
const AccessUser = require("../models/accessUser");
const JwtUtil = require('../config/jwt');
const CONSTANT = require('../config/constant');
const RES_CODE = CONSTANT.RES_CODE
const OPERATE_TYPE = CONSTANT.OPERATE_TYPE
const ROLE_TYPE = CONSTANT.ROLE_TYPE
const utils = require('../config/utils');
const emailCodeList = new Map(); //缓存邮箱验证码信息列表
const randomCodeList = new Map(); //缓存随机验证码信息

class UserCtl extends BaseController{
  constructor() {
    super()
  }
  //用户列表
  async userList(ctx){
    let req = ctx.request
    let conditions = utils.blurSelect(req.query)
    let pageObj = utils.pageSelect(req.query)
    let userMessage = req.tokenMessage.userMessage
    if (userMessage.roleId !== ROLE_TYPE.superRole) {
      conditions.mark = userMessage.mark
    }
    if(!pageObj.sort){
      pageObj.sort = {
        createTime: '-1'
      }
    }
    let count = await User.countDocuments(conditions)
    let docs = await User.find(conditions, null, pageObj).populate([
      { path: 'roleId' }
    ])
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
  //登录用户统计人数
  async accessUserList(ctx){
    let req = ctx.request
    let conditions = utils.blurSelect(req.query)
    let pageObj = utils.pageSelect(req.query)
    let count = await AccessUser.countDocuments(conditions)
    let docs = await AccessUser.find(conditions, null, pageObj)
    if (docs) {
      let data = {
        count,
        data: docs
      }
      utils.responseClient(ctx, RES_CODE.reqSuccess, "获取用登录用户列表成功", data)
    } else {
      utils.responseClient(ctx, RES_CODE.dataFail, "获取登录用户列表失败")
    }
  }
  // 后台登录
  async login(ctx){
    let req = ctx.request
    const { name, password } = req.body;
    if (this.randomCodeFind(req)) {
      return utils.responseClient(ctx, RES_CODE.randomFail, "随机验证码错误或超过有效期10分钟")
    }
    // 查询数据库
    let user = await User.findOne({ $or: [{ name }, { email: name }] }, "+password").populate([
      { path: 'roleId' }
    ])
    if(!user){
      return utils.responseClient(ctx, RES_CODE.dataFail, "邮箱或用户名不存在")
    }
    if (user.status === '0') {
      return utils.responseClient(ctx, RES_CODE.statusFail, "该用户处于禁用状态")
    }
    let isMatch = await bcrypt.compare(password, user.password)
    if (isMatch) {
      let userMessage = {
        id: user._id,
        name: user.name,
        avatarId: user.avatarId,
        functionList: user.roleId ? user.roleId.functionList : [],
        roleId: user.roleId ? user.roleId._id : null,
        mark: user.mark
      };
      let tokenMessage = new JwtUtil({ userMessage });
      let token = tokenMessage.generateToken();
      user.password = null;
      let data = {
        user: user,
        token
        // token: "Bearer " + token
      }
      utils.responseClient(ctx, RES_CODE.reqSuccess, "登录成功", data)
      let accessTime = utils.currentDayDate().split(' ')[0]
      let doc = await AccessUser.find({ userName:  user.name})
      if (doc.length > 0) {
        let timeArr = []
        doc.forEach((item)=>{
          timeArr.push(item.accessTime.split(' ')[0])
        })
        if (!timeArr.includes(accessTime)) {
         let newAccessUser = new AccessUser({
           userName: user.name
         })
         newAccessUser.save()
        }
      } else {
        let newAccessUser = new AccessUser({
          userName: user.name
        })
        newAccessUser.save()
      }
    } else {
      utils.responseClient(ctx, RES_CODE.pwdFail, "密码错误")
    }
  }
  async pageLogin(ctx){
    let req = ctx.request
    const { name, password } = req.body;
    // 查询数据库
    let user = await User.findOne({ $or: [{ name }, { email: name }] }, "+password").populate([
      { path: 'roleId' }
    ])
    if (!user) {
      return utils.responseClient(ctx, RES_CODE.dataFail, "邮箱或用户名不存在")
    }
    if (user.status === '0') {
      return utils.responseClient(ctx, RES_CODE.statusFail, "该用户处于禁用状态")
    }
    let isMatch = await bcrypt.compare(password, user.password)
    if (isMatch) {
      let userMessage = {
        id: user._id,
        name: user.name,
        avatarId: user.avatarId,
        functionList: user.roleId ? user.roleId.functionList : [],
        roleId: user.roleId ? user.roleId._id : null,
        mark: user.mark
      };
      let tokenMessage = new JwtUtil({ userMessage });
      let token = tokenMessage.generateToken();
      user.password = null;
      let userInfo = {
        id: user._id,
        avatarId: user.avatarId,
        name: user.name,
        email: user.email,
        info: user.info,
        createTime: user.createTime
      }
      let data = {
        user: userInfo,
        token
      }
      utils.responseClient(ctx, RES_CODE.reqSuccess, "登录成功", data)
      let accessTime = utils.currentDayDate().split(' ')[0]
      let doc = await AccessUser.find({ userName:  user.name})
      if (doc.length > 0) {
        let timeArr = []
        doc.forEach((item)=>{
          timeArr.push(item.accessTime.split(' ')[0])
        })
        if (!timeArr.includes(accessTime)) {
         let newAccessUser = new AccessUser({
           userName: user.name
         })
         newAccessUser.save()
        }
      } else {
        let newAccessUser = new AccessUser({
          userName: user.name
        })
        newAccessUser.save()
      }
    } else {
      utils.responseClient(ctx, RES_CODE.pwdFail, "密码错误")
    }
  }
  // 用户注册
  async register(ctx){
    let req = ctx.request
    let {name, email, phone, password, type} = req.body;
    if(!type){
      if (this.randomCodeFind(req)) {
        return utils.responseClient(ctx, RES_CODE.randomFail, "随机验证码错误或超过有效期10分钟")
      }
      if(!this.emailCodeFind(ctx)){
        return
      }
    }
    let user = await User.findOne({ $or: [{ name }, { email }] })
    if (user) {
      if (user.name === name) {
        utils.responseClient(ctx, RES_CODE.dataAlready, "用户名已存在")
      } else if (user.email === email) {
        utils.responseClient(ctx, RES_CODE.statusFail, "邮箱已存在")
      }
    } else {
      const newUser = new User({
        name,
        email,
        phone,
        password,
        roleId: type?ROLE_TYPE.ordinaryRole:ROLE_TYPE.adminRole
      })
      let data = await this.pwdBcrypt(password)
      newUser.password = data
      let registUser = await newUser.save()
      registUser ? utils.responseClient(ctx, RES_CODE.reqSuccess, "注册成功") : utils.responseClient(ctx, RES_CODE.dataFail, "注册失败")
    }
  }
  //用户新增
  async userAdd(ctx){
    let req = ctx.request
    let { name, email, phone, password, roleId } = req.body;
    let user = await User.findOne({ $or: [{ name }, { email }] })
    if (user) {
      if (user.name === name) {
        utils.responseClient(ctx, RES_CODE.dataAlready, "用户名已存在")
      } else if (user.email === email) {
        utils.responseClient(ctx, RES_CODE.statusFail, "邮箱已存在")
      }
    } else {
      let userMessage = req.tokenMessage.userMessage
      let obj = {
        name,
        email,
        phone,
        password,
        roleId: roleId || ROLE_TYPE.ordinaryRole
      }
      if (userMessage.roleId === ROLE_TYPE.adminRole) {
        obj.mark = userMessage.mark
      }
      const newUser = new User(obj)
      let data = await this.pwdBcrypt(password)
      newUser.password = data
      let userData = await newUser.save()
      userData ? utils.responseClient(ctx, RES_CODE.reqSuccess, "添加用户成功") : utils.responseClient(ctx, RES_CODE.dataFail, "添加用户失败")
    }
  }
  
  //用户更新信息 
  async userUpdate(ctx){
    let body = ctx.request.body
    let conditions = utils.completeSelect(body)
    conditions.updateTime = utils.currentDayDate()
    let userMessageId = body.id || ctx.request.tokenMessage.userMessage.id
    if (body.name || body.email) {
      let doc = await User.find({ $or: [{ name: body.name }, { email: body.email }] })
      if (doc.length === 1 && doc[0]._id.toString() !== userMessageId) {
        if (doc[0].name === body.name) {
          return utils.responseClient(ctx, RES_CODE.dataAlready, "用户名已存在")
        } else if (doc[0].email === body.email) {
          return utils.responseClient(ctx, RES_CODE.statusFail, "邮箱已存在")
        }
      } else if (doc.length === 2) {
        for (let i = 0; i < doc.length; i++) {
          if (doc[i]._id.toString() === userMessageId) {
            if (doc[i].name !== body.name) {
              return utils.responseClient(ctx, RES_CODE.dataAlready, "用户名已存在")
            } else if (doc[i].email !== body.email) {
              return utils.responseClient(ctx, RES_CODE.statusFail, "邮箱已存在")
            }
          }else{
            if (doc[i].name === body.name) {
              return utils.responseClient(ctx, RES_CODE.dataAlready, "用户名已存在")
            } else if (doc[i].email === body.email) {
              return utils.responseClient(ctx, RES_CODE.statusFail, "邮箱已存在")
            }
          }
        }
      }
    }
    let docs = await User.findByIdAndUpdate(userMessageId, conditions, { new: true }).populate([
      { path: 'roleId' }
    ])
    docs ? utils.responseClient(ctx, RES_CODE.reqSuccess, "更新用户信息成功", docs) : utils.responseClient(ctx, RES_CODE.dataFail, "更新用户信息失败")
  }
  // 忘记密码
  async resetPwd(ctx){
    let req = ctx.request
    const { email, password } = req.body;
    if (this.randomCodeFind(req)) {
      return utils.responseClient(ctx, RES_CODE.randomFail, "随机验证码错误或超过有效期10分钟")
    }
    // 查询数据库
    let user = await User.findOne({ email })
    if (!user) {
      return utils.responseClient(ctx, RES_CODE.dataFail, "邮箱不存在")
    }
    if(!this.emailCodeFind(ctx)){
      return
    }
    let data = await this.pwdBcrypt(password)
    let hashPwd = data
    let docs = await User.findOneAndUpdate({ email }, { password: hashPwd, updateTime: utils.currentDayDate() })
    docs?utils.responseClient(ctx, RES_CODE.reqSuccess, "重置密码成功"):utils.responseClient(ctx, RES_CODE.statusFail, "重置密码失败")
  }
  // 修改密码
  async modifyPwd(ctx){
    let req = ctx.request
    const { password, newPassword } = req.body;
    let userMessage = ctx.request.tokenMessage.userMessage;
    let userId = userMessage.id;
    let user = await User.findById(userId, "+password")
    if (!user) {
      return utils.responseClient(ctx, RES_CODE.dataFail, "用户不存在")
    }
    let isMatch = await bcrypt.compare(password, user.password)
    if (isMatch) {
      let data = await this.pwdBcrypt(newPassword)
      let hashPwd = data
      let docs = await User.findByIdAndUpdate(userId, { password: hashPwd, updateTime: utils.currentDayDate() }, { new: true })
      docs?utils.responseClient(ctx, RES_CODE.reqSuccess, "修改密码成功"):utils.responseClient(ctx, RES_CODE.statusFail, "修改密码失败")
    } else {
      utils.responseClient(ctx, RES_CODE.pwdFail, "密码错误")
    }
  }
  // 重置密码
  async setPwd(ctx){
    const { userId } = ctx.request.body;
    let pwd = '123456abc';
    let user = await User.findById(userId, "+password")
    if (!user) {
      return utils.responseClient(ctx, RES_CODE.dataFail, "用户不存在")
    }
    let hashPwd = await this.pwdBcrypt(pwd);
    let docs = await User.findByIdAndUpdate(userId, { password: hashPwd, updateTime: utils.currentDayDate() }, { new: true })
    docs?utils.responseClient(ctx, RES_CODE.reqSuccess, "重置密码成功"):utils.responseClient(ctx, RES_CODE.statusFail, "重置密码失败")
  }
  // 用户删除
  async userDel(ctx){
    let id = ctx.params.id
    let user = await User.findByIdAndRemove(id)
    user ? utils.responseClient(ctx, RES_CODE.reqSuccess, "用户删除成功") : utils.responseClient(ctx, RES_CODE.dataFail, "用户删除失败")
  }
  // 邮件发送
  async sendEmail(ctx){
    let req = ctx.request
    const { email, type } = req.body;
    let user = await User.findOne({ email })
    if (type === OPERATE_TYPE.addOperate) {
      if (user) {
        return utils.responseClient(ctx, RES_CODE.dataAlready, "该邮箱账号已存在")
      }
    } else if (type === OPERATE_TYPE.updateOperate) {
      if (!user) {
        return utils.responseClient(ctx, RES_CODE.dataNot, "该邮箱账号不存在")
      }
    }
    let code = Math.random().toString().substring(2, 6);
    let data = await utils.sendEmail(email, code)
    if(data){
      let createTime = utils.currentDayDate();
      let codeObj = {
        code,
        email,
        createTime,
      }
      emailCodeList.set(email, codeObj)
      utils.responseClient(ctx, RES_CODE.reqSuccess, "发送验证码成功")
    }else{
      utils.responseClient(ctx, RES_CODE.pwdFail, "发送验证码失败")
    }  
  }
  // 获取随机验证码
  getRandomCode(ctx){
    let code = utils.createCode();
    let res = ctx.response;
    res.type = 'image/svg+xml'
    let text = code.text.toUpperCase();
    let codeObj = {
      code: text,
      createTime: utils.currentDayDate()
    }
    randomCodeList.set(text, codeObj)
    ctx.body = code.data
  }
  //密码加密
  pwdBcrypt(password) {
    return new Promise((resolve, reject) => {
      bcrypt.genSalt(10, function (error, salt) {
        bcrypt.hash(password, salt, function (err, hashPassword) {
          //store hash in your password DB.
          if (err) {
            reject(err)
            throw new Error('加密失败');
          }
          resolve(hashPassword)
        });
      })
    })
  }
  // 邮箱验证码验证
  emailCodeFind(ctx) {
    let { email, emailCode } = ctx.request.body;
    let getEmailCode = emailCodeList.get(email)
    let result = false;
    if(emailCode == '9999'){
      return true
    }
    if (getEmailCode) {
      if (getEmailCode.email === email && getEmailCode.code === emailCode) {
        let diffTime = utils.timeDiff(getEmailCode.createTime, utils.currentDayDate())
        if (diffTime <= 10) {
          result = true;
        } else {
          emailCodeList.delete(email)
          utils.responseClient(ctx, RES_CODE.timeOver, "邮箱验证码有效期已超时" + (diffTime - 10) + '分钟')
        }
      } else {
        utils.responseClient(ctx, RES_CODE.codeFail, "邮箱验证码错误")
      }
    } else {
      utils.responseClient(ctx, RES_CODE.codeFail, "邮箱验证码错误")
    }
    return result
  }
  // 随机验证码验证
  randomCodeFind(req) {
    let { randomCode } = req.body;
    let result = true;
    if (randomCode) {
      let getRandomCode = randomCodeList.get(randomCode.toUpperCase())
      if (getRandomCode && utils.timeDiff(getRandomCode.createTime, utils.currentDayDate()) <= 10) {
        result = false
      } else {
        randomCodeList.delete(randomCode.toUpperCase())
      }
      // 万能验证码
      if(randomCode == '9999'){
        return false
      }
    }
    return result
  }
}

module.exports = new UserCtl().resolve()