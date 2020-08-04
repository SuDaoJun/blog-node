const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');
const projectSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      validate: (val)=> {
        return val.length < 30
      }
    },
    description: {
      type: String,
      required: true,
      validate: (val)=> {
        return val.length < 60
      }
    },
    imgId: {
      type: String,
      default: ''
    },
    linkUrl: {
      type: String,
      required: true
    },
    // 状态 1 已完成 ，2 进行中， 3 已废弃
    status: {
      type: String,
      default: '2',
      enum: ['1', '2', '3']
    },
    startTime: {
      type: String,
      default: () => moment().format('YYYY-MM-DD')
    },
    endTime: {
      type: String,
      default: ''
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
  collection: 'project'
})

module.exports = mongoose.model('Project', projectSchema);