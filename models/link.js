const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');
const linkSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      validate: (val)=> {
        return val.length < 40
      }
    },
    linkAddress: {
      type: String,
      required: true,
      validate: (val)=> {
        return val.length < 40
      }
    },
    color: {
      type: String,
      default: '#409EFF'
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
  collection: 'link'
})

module.exports = mongoose.model('Link', linkSchema);