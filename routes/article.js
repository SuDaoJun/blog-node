const Article = require("../models/article");
const CONSTANT = require('../config/constant');
const RES_CODE = CONSTANT.RES_CODE
const ROLE_TYPE = CONSTANT.ROLE_TYPE
const utils = require('../config/utils');

exports.articleList = (req, res) => {
  let conditions =  utils.blurSelect(req.query)
  let pageObj =  utils.pageSelect(req.query)
  if(req.url.indexOf('blogPage') === -1){
    let userMessage = req.tokenMessage.userMessage
    if(userMessage.roleId !== ROLE_TYPE.superRole){
      conditions['createUser.mark'] = userMessage.mark
    }
  }else{
    conditions.status = '1'
  }
  if(!pageObj.sort){
    pageObj.sort = {
      createTime: '-1'
    }
  }
  Article.countDocuments(conditions,function (err, count){
    if (err) {
      return utils.severErr(err, res)
    }
    let fields = {
      _id: 1,
      title: 1,
      description: 1,
      imgId: 1,
      status: 1,
      meta: 1,
      createUser: 1,
      createTime: 1,
    }
    Article.find(conditions, fields, pageObj, function (error, docs){
      if(error){
        return utils.severErr(error, res)
      }
      if (docs) {
        let data = {
          count,
          data: docs
        }
        utils.responseClient(res, RES_CODE.reqSuccess, "获取文章列表成功", data)
      } else {
        utils.responseClient(res, RES_CODE.dataFail, "获取文章列表失败")
      }
    }).populate([
      { path: 'tags', select: '_id name bgColor' },
      { path: 'createUser', select: '_id name mark' }
    ])
  })
}

exports.articleAdd = (req, res) => {
  let body = req.body
  let conditions =  utils.completeSelect(body)
  let userMessage = req.tokenMessage.userMessage
  conditions.tags = conditions.tags?conditions.tags.split(','):[]
  conditions.createUser = userMessage.id
  conditions.updateUser = userMessage.id
  conditions['meta.txtTotal'] = utils.getPostWordCount(body.content)
  let newArticle = new Article(conditions)
  Article.findOne({
    title: body.title
  }).exec(function (err, docs){
    if(err){
      return utils.severErr(err, res)
    }
    if (docs) {
      utils.responseClient(res, RES_CODE.dataAlready, "文章标题已存在")
    } else {
      newArticle.save(function(err, doc){
        if(err){
          return utils.severErr(err, res)
        }
        doc?utils.responseClient(res, RES_CODE.reqSuccess, "文章新增成功"):utils.responseClient(res, RES_CODE.dataFail, "文章新增失败")
      })
    }
  })
}

exports.articleUpdate = (req, res) => {
  let body = req.body
  let conditions =  utils.completeSelect(body)
  conditions.tags = conditions.tags?conditions.tags.split(','):[]
  Article.find({
    title: body.title
  }).exec(function(error,doc){
    if(error){
      return utils.severErr(error, res)
    }
    if(doc.length === 1 && doc[0]._id.toString() != body.id){
      return utils.responseClient(res, RES_CODE.dataAlready, "文章标题已存在")
    }
    conditions.updateTime = utils.currentDayDate()
    conditions.updateUser = req.tokenMessage.userMessage.id
    if(body.content){
      conditions['meta.txtTotal'] = utils.getPostWordCount(body.content)
    }
    Article.findByIdAndUpdate(body.id, conditions, {new: true}, function (err,docs){
      if(err){
        return utils.severErr(err, res)
      }
      docs?utils.responseClient(res, RES_CODE.reqSuccess, "更新文章成功"):utils.responseClient(res, RES_CODE.dataFail, "更新文章失败")
    })
  })
}

exports.articleDel = (req, res) => {
  Article.findByIdAndRemove(req.params.id,function (err, docs){
    if(err){
      return utils.severErr(err, res)
    }
    docs?utils.responseClient(res, RES_CODE.reqSuccess, "删除文章成功"):utils.responseClient(res, RES_CODE.dataFail, "删除文章失败")
  })
}

exports.articleDetail = (req, res) => {
  Article.findByIdAndUpdate(req.query.id, {$inc: {'meta.viewTotal': 1}}, {new: true}, function (err,doc){
    if(err){
      return utils.severErr(err, res)
    }
    if(doc){
      utils.responseClient(res, RES_CODE.reqSuccess, "获取文章详情成功", doc)
    }else{
      utils.responseClient(res, RES_CODE.dataFail, "获取文章详情失败")
    }
  }).populate([
    { path: 'tags', select: '_id name bgColor' },
    { path: 'linkUser', select: '_id avatarId name' },
    { 
      path: 'commentList', 
      populate: {path: 'createUser', select: '_id avatarId name'}  //文章评论分页需要单独查评论列表
    },
    { path: 'createUser', select: '_id avatarId name' },
    { path: 'updateUser', select: '_id avatarId name' }
  ])
}

exports.articleLike = (req, res) => {
  let userMessage = req.tokenMessage.userMessage
  let {type, id} = req.body
  if(type === '1'){
    // 点赞
    Article.findById(id, function (error,docs){
      if(error){
        return utils.severErr(error, res)
      }
      if(docs){
        let likeTotal = docs.meta.likeTotal + 1;
        // 判断是否已经点赞过
        if(docs.linkUser.includes(userMessage.id)){
          return utils.responseClient(res, RES_CODE.dataAlready, "已点赞，不要重复点赞")
        }
        docs.linkUser.push(userMessage.id);
        Article.findByIdAndUpdate(id, {'meta.likeTotal': likeTotal, linkUser: docs.linkUser}, {new: true}, function (err,doc){
          if(err){
            return utils.severErr(err, res)
          }
          doc?utils.responseClient(res, RES_CODE.reqSuccess, "文章点赞成功"):utils.responseClient(res, RES_CODE.dataFail, "文章点赞失败")
        })
      }else{
        utils.responseClient(res, RES_CODE.dataFail, "获取文章失败")
      }
    })
  }else{
    //取消点赞
    Article.findById(id, function (error,docs){
      if(error){
        return utils.severErr(error, res)
      }
      if(docs){
        let likeTotal = docs.meta.likeTotal - 1;
        if(!docs.linkUser.includes(userMessage.id)){
          return utils.responseClient(res, RES_CODE.dataNot, "暂无点赞")
        }
        let linkUser = docs.linkUser.filter((item)=>{
          return item.toString() !== userMessage.id
        })
        Article.findByIdAndUpdate(id, {'meta.likeTotal': likeTotal, linkUser}, {new: true}, function (err,doc){
          if(err){
            return utils.severErr(err, res)
          }
          doc?utils.responseClient(res, RES_CODE.reqSuccess, "取消点赞成功"):utils.responseClient(res, RES_CODE.dataFail, "取消点赞失败")
        })
      }else{
        utils.responseClient(res, RES_CODE.dataFail, "获取文章失败")
      }
    })
  }
}