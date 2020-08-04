const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');
const messageSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
      validate: (val) => {
        return val.length < 200
      }
    },
    // 发布状态 => 0 待审核，1 通过
    status: {
      type: String,
      default: '1',
      enum: ['0', '1']
    },
    createUser: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User' 
    },
    createTime: {
      type: String,
      default: () => moment().format('YYYY-MM-DD HH:mm:ss')
    }
  }, {
  versionKey: false,
  collection: 'message'
})

module.exports = mongoose.model('Message', messageSchema);