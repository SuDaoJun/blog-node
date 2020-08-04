const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');
const functionOperSchema = new Schema(
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
    menuId: { 
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Menu'
    },
    createTime: {
      type: String,
      required: true,
      default: () => moment().format('YYYY-MM-DD HH:mm:ss')
    }
  }, {
  versionKey: false,
  collection: 'functionOper'
})
module.exports = mongoose.model('FunctionOper', functionOperSchema);