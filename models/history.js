const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');
const history = new Schema(
  {
    userId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User',
      required: true 
    },
    // 状态 => 1 浏览文章 / 2 点赞文章 /  3 评论文章
    type: { 
      type: String, 
      enum: ['1', '2', '3'],
      default: '1'
    },
    articleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Article',
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
  collection: 'history'
})

module.exports = mongoose.model('History', history);