const mongoose = require('mongoose');
const moment = require('moment');
const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    validate: (val)=> {
      return val.length < 10
    }
  },
  email: {
    type: String,
    required: true,
    match: /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/i
  },
  phone: {
    type: String,
    match: /^1[3|4|5|6|7|8|9][0-9]\d{4,8}$/
  },
  password: {
    type: String,
    select: false,    //   返回对象数据中不会显示这个字段信息
    required: true
  },
  info: {
    type: String,
    validate: (val)=> {
      return val.length < 40
    }
  },
  status: {
    type: String,
    default: '1',
    enum: ['0', '1']
  },
  avatarId: {
    type: String,
    default: ''
  },
  mark: {
    type: String,
    default: 'xxxxxx4xxxyxxxxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    })
  },
  roleId: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role',
  },
  createTime: {
    type: String,
    default: () => moment().format('YYYY-MM-DD HH:mm:ss')
  },
  updateTime: {
    type: String,
    default: () => moment().format('YYYY-MM-DD HH:mm:ss')
  }
}, {
  versionKey: false,
  collection: 'user'  //生成 collection 的自定义名称，默认会以复数形式
  // timestamps: { createdAt: 'createTime', updatedAt: 'updateTime' }
})

module.exports = mongoose.model('User', userSchema);