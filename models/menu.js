const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');
const menuSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      validate: (val)=> {
        return val.length < 20
      }
    },
    description: {
      type: String,
      validate: (val)=> {
        return val.length < 40
      }
    },
    supMenu: { 
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Menu'
    },
    parentId: {
      type: String,
      default: '0'
    },
    functionList: [
      {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'FunctionOper'
      }
    ],
    createTime: {
      type: String,
      required: true,
      default: () => moment().format('YYYY-MM-DD HH:mm:ss')
    }
  }, {
  versionKey: false,
  collection: 'menu'
})

module.exports = mongoose.model('Menu', menuSchema);