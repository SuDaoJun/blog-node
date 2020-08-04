const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');
const accessSchema = new Schema(
  {
    userName: {
      type: String,
      default: ''
    },
    accessTime: {
      type: String,
      default: () => moment().format('YYYY-MM-DD HH:mm:ss')
    }
  }, {
  versionKey: false,
  collection: 'accessUser'
})

module.exports = mongoose.model('AccessUser', accessSchema);