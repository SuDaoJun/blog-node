const bcrypt = require("bcryptjs");
const User = require("../models/user");
const AccessUser = require("../models/accessUser");
const JwtUtil = require('../config/jwt');
const CONSTANT = require('../config/constant');
const RES_CODE = CONSTANT.RES_CODE
const OPERATE_TYPE = CONSTANT.OPERATE_TYPE
const ROLE_TYPE = CONSTANT.ROLE_TYPE
const utils = require('../config/utils');
const emailCodeList = new Map(); //缓存邮箱验证码信息列表
const randomCodeList = new Map(); //缓存随机验证码信息

// 随机验证码验证
function randomCodeFind(req) {
  let { randomCode } = req.body;
  let result = true;
  if (randomCode) {
    let getRandomCode = randomCodeList.get(randomCode.toUpperCase())
    if (getRandomCode && utils.timeDiff(getRandomCode.createTime, utils.currentDayDate()) <= 10) {
      result = false
    } else {
      randomCodeList.delete(randomCode.toUpperCase())
    }
  }
  return result
}
// 邮箱验证码验证
function emailCodeFind(req, res) {
  let { email, emailCode } = req.body;
  let getEmailCode = emailCodeList.get(email)
  let result = false;
  if (getEmailCode) {
    if (getEmailCode.email === email && getEmailCode.code === emailCode) {
      let diffTime = utils.timeDiff(getEmailCode.createTime, utils.currentDayDate())
      if (diffTime <= 10) {
        result = true;
      } else {
        emailCodeList.delete(email)
        utils.responseClient(res, RES_CODE.timeOver, "邮箱验证码有效期已超时" + (diffTime - 10) + '分钟')
      }
    } else {
      utils.responseClient(res, RES_CODE.codeFail, "邮箱验证码错误")
    }
  } else {
    utils.responseClient(res, RES_CODE.codeFail, "邮箱验证码错误")
  }
  return result
}
//密码加密
function pwdBcrypt(password) {
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
// 用户注册
exports.register = (req, res) => {
  let {name, email, phone, password, type} = req.body;
  if(!type){
    if (randomCodeFind(req)) {
      return utils.responseClient(res, RES_CODE.randomFail, "随机验证码错误或超过有效期10分钟")
    }
  }
  User.findOne({ $or: [{ name }, { email }] }).exec(function (err, user) {
    if (err) {
      return utils.severErr(err, res)
    }
    if (user) {
      if (user.name === name) {
        utils.responseClient(res, RES_CODE.dataAlready, "用户名已存在")
      } else if (user.email === email) {
        utils.responseClient(res, RES_CODE.statusFail, "邮箱已存在")
      }
    } else {
      if(type){
        const newUser = new User({
          name,
          email,
          phone,
          password,
          roleId: ROLE_TYPE.ordinaryRole
        })
        //密码加密  需npm install bcryptjs
        pwdBcrypt(password).then((data) => {
          newUser.password = data
          newUser.save(function (error, user) {
            if (error) {
              return utils.severErr(err, res)
            }
            user ? utils.responseClient(res, RES_CODE.reqSuccess, "注册成功") : utils.responseClient(res, RES_CODE.dataFail, "注册失败")
          })
        })
      }else{
        if (emailCodeFind(req, res)) {
          const newUser = new User({
            name,
            email,
            phone,
            password,
            roleId: ROLE_TYPE.adminRole
          })
          //密码加密  需npm install bcryptjs
          pwdBcrypt(password).then((data) => {
            newUser.password = data
            newUser.save(function (error, user) {
              if (error) {
                return utils.severErr(err, res)
              }
              user ? utils.responseClient(res, RES_CODE.reqSuccess, "注册成功") : utils.responseClient(res, RES_CODE.dataFail, "注册失败")
            })
          })
        }
      }
    }
  })
}
// 用户后台登录
exports.login = (req, res) => {
  const { name, password } = req.body;
  if (randomCodeFind(req)) {
    return utils.responseClient(res, RES_CODE.randomFail, "随机验证码错误或超过有效期10分钟")
  }
  // 查询数据库
  User.findOne({ $or: [{ name }, { email: name }] }, "+password").populate([
    { path: 'roleId' }
  ]).exec(function (err, user) {
    if (err) {
      return utils.severErr(err, res)
    }
    if (!user) {
      return utils.responseClient(res, RES_CODE.dataFail, "邮箱或用户名不存在")
    }
    if (user.status === '0') {
      return utils.responseClient(res, RES_CODE.statusFail, "该用户处于禁用状态")
    }
    bcrypt.compare(password, user.password)
      .then(isMatch => {
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
          utils.responseClient(res, RES_CODE.reqSuccess, "登录成功", data)
          let accessTime = utils.currentDayDate().split(' ')[0]
          AccessUser.find({ userName:  user.name}, function (error, doc) {
            if (error) {
              console.log(error)
            }
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
          })
        } else {
          utils.responseClient(res, RES_CODE.pwdFail, "密码错误")
        }
      })
  })
};
exports.pageLogin = (req, res) => {
  const { name, password } = req.body;
  // 查询数据库
  User.findOne({ $or: [{ name }, { email: name }] }, "+password").populate([
    { path: 'roleId' }
  ]).exec(function (err, user) {
    if (err) {
      return utils.severErr(err, res)
    }
    if (!user) {
      return utils.responseClient(res, RES_CODE.dataFail, "邮箱或用户名不存在")
    }
    if (user.status === '0') {
      return utils.responseClient(res, RES_CODE.statusFail, "该用户处于禁用状态")
    }
    bcrypt.compare(password, user.password)
      .then(isMatch => {
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
          utils.responseClient(res, RES_CODE.reqSuccess, "登录成功", data)
          let accessTime = utils.currentDayDate().split(' ')[0]
          AccessUser.find({ userName:  user.name}, function (error, doc) {
            if (error) {
              console.log(error)
            }
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
          })
        } else {
          utils.responseClient(res, RES_CODE.pwdFail, "密码错误")
        }
      })
  })
};
//用户列表
exports.userList = (req, res) => {
  let conditions = utils.blurSelect(req.query)
  let pageObj = utils.pageSelect(req.query)
  let userMessage = req.tokenMessage.userMessage
  if (userMessage.roleId !== ROLE_TYPE.superRole) {
    conditions.mark = userMessage.mark
  }
  User.countDocuments(conditions, function (err, count) {
    if (err) {
      return utils.severErr(err, res)
    }
    User.find(conditions, null, pageObj, function (error, docs) {
      if (error) {
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
    }).populate([
      { path: 'roleId' }
    ])
  })
}
//用户新增
exports.userAdd = (req, res) => {
  let { name, email, phone, password, roleId } = req.body;
  User.findOne({ $or: [{ name }, { email }] }).exec(function (err, user) {
    if (err) {
      return utils.severErr(err, res)
    }
    if (user) {
      if (user.name === name) {
        utils.responseClient(res, RES_CODE.dataAlready, "用户名已存在")
      } else if (user.email === email) {
        utils.responseClient(res, RES_CODE.statusFail, "邮箱已存在")
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
      pwdBcrypt(password).then((data) => {
        newUser.password = data
        newUser.save(function (error, user) {
          if (error) {
            return utils.severErr(err, res)
          }
          user ? utils.responseClient(res, RES_CODE.reqSuccess, "添加用户成功") : utils.responseClient(res, RES_CODE.dataFail, "添加用户失败")
        })
      })
    }
  })
}
//用户更新信息 
exports.userUpdate = (req, res) => {
  let body = req.body
  let conditions = utils.completeSelect(body)
  conditions.updateTime = utils.currentDayDate()
  if (body.name || body.email) {
    User.find({ $or: [{ name: body.name }, { email: body.email }] }).exec(function (error, doc) {
      if (error) {
        return utils.severErr(error, res)
      }
      if (doc.length === 1 && doc[0]._id.toString() !== body.id) {
        if (doc[0].name === body.name) {
          return utils.responseClient(res, RES_CODE.dataAlready, "用户名已存在")
        } else if (doc[0].email === body.email) {
          return utils.responseClient(res, RES_CODE.statusFail, "邮箱已存在")
        }
      } else if (doc.length === 2) {
        for (let i = 0; i < doc.length; i++) {
          if (doc[i]._id.toString() === body.id) {
            if (doc[i].name !== body.name) {
              return utils.responseClient(res, RES_CODE.dataAlready, "用户名已存在")
            } else if (doc[i].email !== body.email) {
              return utils.responseClient(res, RES_CODE.statusFail, "邮箱已存在")
            }
          }
        }
      }
      User.findByIdAndUpdate(body.id, conditions, { new: true }, function (err, docs) {
        if (err) {
          return utils.severErr(err, res)
        }
        docs ? utils.responseClient(res, RES_CODE.reqSuccess, "更新用户信息成功", docs) : utils.responseClient(res, RES_CODE.dataFail, "更新用户信息失败")
      }).populate([
        { path: 'roleId' }
      ])
    })
  } else {
    User.findByIdAndUpdate(body.id, conditions, { new: true }, function (err, docs) {
      if (err) {
        return utils.severErr(err, res)
      }
      docs ? utils.responseClient(res, RES_CODE.reqSuccess, "更新用户信息成功", docs) : utils.responseClient(res, RES_CODE.dataFail, "更新用户信息失败")
    }).populate([
      { path: 'roleId' }
    ])
  }
}
// 用户删除
exports.userDel = (req, res) => {
  let id = req.params.id
  User.findByIdAndRemove(id, function (err, user) {
    if (err) {
      return utils.severErr(err, res)
    }
    user ? utils.responseClient(res, RES_CODE.reqSuccess, "用户删除成功") : utils.responseClient(res, RES_CODE.dataFail, "用户删除失败")
  })
}
//登录用户统计人数
exports.accessUserList = (req, res) => {
  let conditions = utils.blurSelect(req.query)
  let pageObj = utils.pageSelect(req.query)
  AccessUser.countDocuments(conditions, function (err, count) {
    if (err) {
      return utils.severErr(err, res)
    }
    AccessUser.find(conditions, null, pageObj, function (error, docs) {
      if (error) {
        return utils.severErr(error, res)
      }
      if (docs) {
        let data = {
          count,
          data: docs
        }
        utils.responseClient(res, RES_CODE.reqSuccess, "获取用登录用户列表成功", data)
      } else {
        utils.responseClient(res, RES_CODE.dataFail, "获取登录用户列表失败")
      }
    })
  })
}
// 忘记密码
exports.resetPwd = (req, res) => {
  const { email, password } = req.body;
  if (randomCodeFind(req)) {
    return utils.responseClient(res, RES_CODE.randomFail, "随机验证码错误或超过有效期10分钟")
  }
  // 查询数据库
  User.findOne({ email }).exec(function (err, user) {
    if (err) {
      return utils.severErr(err, res)
    }
    if (!user) {
      return utils.responseClient(res, RES_CODE.dataFail, "邮箱不存在")
    }
    if (emailCodeFind(req, res)) {
      pwdBcrypt(password).then((data) => {
        let hashPwd = data
        User.findOneAndUpdate({ email }, { password: hashPwd, updateTime: utils.currentDayDate() }, function (err, docs) {
          if (err) {
            return utils.severErr(err, res)
          }
          utils.responseClient(res, RES_CODE.reqSuccess, "重置密码成功")
        })
      })
    }
  })
};
// 修改密码
exports.modifyPwd = (req, res) => {
  const { userId, password, newPassword } = req.body;
  User.findById(userId, "+password").exec(function (error, user) {
    if (error) {
      return utils.severErr(error, res)
    }
    if (!user) {
      return utils.responseClient(res, RES_CODE.dataFail, "用户不存在")
    }
    bcrypt.compare(password, user.password)
      .then(isMatch => {
        if (isMatch) {
          pwdBcrypt(newPassword).then((data) => {
            let hashPwd = data
            User.findByIdAndUpdate(userId, { password: hashPwd, updateTime: utils.currentDayDate() }, { new: true }, function (err, docs) {
              if (err) {
                return utils.severErr(err, res)
              }
              utils.responseClient(res, RES_CODE.reqSuccess, "修改密码成功")
            })
          })
        } else {
          utils.responseClient(res, RES_CODE.pwdFail, "密码错误")
        }
      })
  })
};
// 邮件发送
exports.sendEmail = (req, res) => {
  const { email, type } = req.body;
  User.findOne({
    email
  }).exec(function (err, user) {
    if (err) {
      return utils.severErr(err, res)
    }
    if (type === OPERATE_TYPE.addOperate) {
      if (user) {
        return utils.responseClient(res, RES_CODE.dataAlready, "该邮箱账号已存在")
      }
    } else if (type === OPERATE_TYPE.updateOperate) {
      if (!user) {
        return utils.responseClient(res, RES_CODE.dataNot, "该邮箱账号不存在")
      }
    }
    let code = Math.random().toString().substring(2, 6);
    utils.sendEmail(email, code)
      .then((data) => {
        let createTime = utils.currentDayDate();
        let codeObj = {
          code,
          email,
          createTime,
        }
        emailCodeList.set(email, codeObj)
        utils.responseClient(res, RES_CODE.reqSuccess, "发送验证码成功")
      })
      .catch((err) => {
        utils.responseClient(res, RES_CODE.pwdFail, "发送验证码失败", err)
      })
  })
};

// 验证码
exports.getCode = (req, res) => {
  let code = utils.createCode();
  res.type('svg')
  let text = code.text.toUpperCase();
  let codeObj = {
    code: text,
    createTime: utils.currentDayDate()
  }
  randomCodeList.set(text, codeObj)
  res.status(200).send(code.data);
  // utils.responseClient(res, RES_CODE.reqSuccess, "随机验证码")
};
