const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');
const tagSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      validate: (val)=> {
        return val.length < 10
      }
    },
    description: {
      type: String,
      default: '',
      validate: (val)=> {
        return val.length < 40
      }
    },
    bgColor: {
      type: String,
      default: '#409EFF'
    },
    createUser: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User', 
      required: true 
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
  collection: 'tag'
})

module.exports = mongoose.model('Tag', tagSchema);