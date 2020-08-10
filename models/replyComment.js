const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');
const replyCommentSchema = new Schema(
  {
    // 评论所在的文章 id
    articleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Article',
      required: true
    },
    commentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
      required: true
    },
    // 谁在评论
    replyUser: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User' 
    },
    // 对谁评论
    toUser: { 
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User' 
    },
    // 评论内容
    content: { 
      type: String, 
      required: true 
    },
    // 状态 => 0 待审核 / 1 通过
    status: { 
      type: String,
      enum: ['0', '1'],
      default: '1' 
    },
    createTime: {
      type: String,
      default: () => moment().format('YYYY-MM-DD HH:mm:ss')
    }
  }, {
  versionKey: false,
  collection: 'replyComment'
})

module.exports = mongoose.model('ReplyComment', replyCommentSchema);