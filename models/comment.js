const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');
const commentSchema = new Schema(
  {
    // 评论所在的文章 id
    articleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Article',
      required: true
    },
    // 评论内容
    content: {
      type: String,
      required: true
    },
    // 是否置顶
    isTop: {
      type: Boolean,
      default: false
    },
    // 状态 => 0 待审核 / 1 通过  防止垃圾评论
    status: { 
      type: String, 
      enum: ['0', '1'],
      default: '1'
    },
    // 建立评论用户
    createUser: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User', 
      required: true 
    },
    // 只包含启用的回复评论总数
    replyCommentNum: {
      type: Number,
      default: 0
    },
    //回复评论列表 包含所有回复评论
    replyCommentList: [{
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'ReplyComment'
    }],
    createTime: {
      type: String,
      default: () => moment().format('YYYY-MM-DD HH:mm:ss')
    },
    topUpdateTime: {
      type: String,
      default: () => moment().format('YYYY-MM-DD HH:mm:ss')
    }
  }, {
  versionKey: false,
  collection: 'comment'
})

module.exports = mongoose.model('Comment', commentSchema);