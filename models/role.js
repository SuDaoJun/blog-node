const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');
const roleSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      validate: (val)=> {
        return val.length < 20
      }
    },
    description: {
      type: String,
      validate: (val)=> {
        return val.length < 60
      }
    },
    type: {
      type: String,
      default: '4',
    },
    // 状态 0 禁用 ，1 启用
    status: {
      type: String,
      default: '1',
    },
    functionList: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FunctionOper',
      }
    ],
    menuList: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Menu',
      }
    ],
    createUser: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User', 
      required: true 
    },
    updateUser: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User',
    },
    createTime: {
      type: String,
      required: true,
      default: () => moment().format('YYYY-MM-DD HH:mm:ss')
    },
    updateTime: {
      type: String,
      default: () => moment().format('YYYY-MM-DD HH:mm:ss')
    }
  }, {
  versionKey: false,
  collection: 'role'
})

module.exports = mongoose.model('Role', roleSchema);