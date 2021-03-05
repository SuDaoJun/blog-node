const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');
const articleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      validate: (val) => {
        return val.length < 60
      }
    },
    // 文章描述
    description: {
      type: String,
      required: true,
      validate: (val) => {
        return val.length < 100
      }
    },
    // 文章编辑器 => 0 富文本，1 markdown
    contentType: {
      type: String,
      default: '0',
      enum: ['0', '1']
    },
    // markdown内容
    markContent: {
      type: String
    },
    // 富文本
    content: {
      type: String,
      required: true
    },
    // 封面图片
    imgId: {
      type: String,
      default: ''
    },
    // 文章发布状态 => 0 草稿，1 已发布
    status: {
      type: String,
      default: '0',
      enum: ['0', '1']
    },
    tags: [
      { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Tag', 
        required: true 
      }
    ],
    //点赞用户
    linkUser: [
      { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
      }
    ],
    commentList: [
      { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Comment'
      }
    ],     
    createUser: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User' 
    },
    updateUser: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User' 
    },
    // 其他元信息
    meta: {
      viewTotal: { type: Number, default: 0 },
      likeTotal: { type: Number, default: 0 },
      commentTotal: { type: Number, default: 0 },
      txtTotal: { type: Number, default: 0 }
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
  collection: 'article'
})

module.exports = mongoose.model('Article', articleSchema);