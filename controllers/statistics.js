const User = require("../models/user")
const AccessUser = require("../models/accessUser")
const Article = require("../models/article")
const Message = require("../models/message")
const Tag = require("../models/tag")
const History = require("../models/history")
const CONSTANT = require('../config/constant')
const RES_CODE = CONSTANT.RES_CODE
const utils = require('../config/utils')
const mongoose = require('mongoose');

class StatisticsCtr{
  // 统计用户、文章、留言总数
  async countTotalNum(ctx){
    let data = {}
    data.accessUserTotal = await AccessUser.countDocuments()
    data.userTotal = await User.countDocuments()
    data.articleTotal = await Article.countDocuments()
    data.messageTotal = await Message.countDocuments()
    utils.responseClient(ctx, RES_CODE.reqSuccess, "获取统计列表成功", data)
  }
  // type: day-日 week-周 month-月 year-年 其它-时间选择
  // 统计访客用户 
  async accessUserStatistics(ctx){
    let req = ctx.request
    let { type, startTime, endTime } = req.query
    startTime = startTime || utils.currentDayDate('day')
    let options = {}
    if (type === 'day') {
      options.startTime = startTime
      options.endTime = startTime
      options.substrData = ["$accessTime", 11, 2]
    } else if (type === 'week') {
      let weekArr = utils.weekFirstLast(startTime)
      options.startTime = weekArr[0]
      options.endTime = weekArr[1]
      options.substrData = ["$accessTime", 0, 10]
    } else if (type === 'month') {
      let monthArr = utils.monthFirstLast(startTime)
      options.startTime = monthArr[0]
      options.endTime = monthArr[1]
      options.substrData = ["$accessTime", 0, 10]
    } else if (type === 'year') {
      let yearArr = utils.yearFirstLast(startTime)
      options.startTime = yearArr[0]
      options.endTime = yearArr[1]
      options.substrData = ["$accessTime", 5, 2]
    } else {
      options.startTime = startTime
      options.endTime = endTime
      options.substrData = ["$accessTime", 0, 10]
    }
    let data = await AccessUser.aggregate([
      {
        $match: {
          accessTime: { '$gte': options.startTime + ' 00:00:00', '$lt': options.endTime + ' 23:59:59' }
        }
      },
      {
        $project: {
          hour: {
            $substr: options.substrData
          }
        },
      },
      {
        $group: {
          _id: "$hour",
          count: { $sum: 1 }
        }
      },
      {
        $sort: { _id: 1 }
      }
    ])
    data?utils.responseClient(ctx, RES_CODE.reqSuccess, "获取访客用户统计", data):utils.responseClient(ctx, RES_CODE.dataFail, "获取访客用户统计失败")
  }
  // 统计用户数量 
  async userStatistics (ctx) {
    let req = ctx.request
    let { type, startTime, endTime } = req.query
    startTime = startTime || utils.currentDayDate('day')
    let options = {}
    if (type === 'day') {
      options.startTime = startTime
      options.endTime = startTime
      options.substrData = ["$createTime", 11, 2]
    } else if (type === 'week') {
      let weekArr = utils.weekFirstLast(startTime)
      options.startTime = weekArr[0]
      options.endTime = weekArr[1]
      options.substrData = ["$createTime", 0, 10]
    } else if (type === 'month') {
      let monthArr = utils.monthFirstLast(startTime)
      options.startTime = monthArr[0]
      options.endTime = monthArr[1]
      options.substrData = ["$createTime", 0, 10]
    } else if (type === 'year') {
      let yearArr = utils.yearFirstLast(startTime)
      options.startTime = yearArr[0]
      options.endTime = yearArr[1]
      options.substrData = ["$createTime", 5, 2]
    } else {
      options.startTime = startTime
      options.endTime = endTime
      options.substrData = ["$createTime", 0, 10]
    }
    let data = await User.aggregate([
      {
        $match: {
          createTime: { '$gte': options.startTime + ' 00:00:00', '$lt': options.endTime + ' 23:59:59' }
        }
      },
      {
        $project: {
          hour: {
            $substr: options.substrData
          }
        },
      },
      {
        $group: {
          _id: "$hour",
          count: { $sum: 1 }
        }
      },
      {
        $sort: { _id: 1 }
      }
    ])
    data?utils.responseClient(ctx, RES_CODE.reqSuccess, "获取用户统计", data):utils.responseClient(ctx, RES_CODE.dataFail, "获取用户统计失败")
  }
  // 统计文章数量 
  async articleStatistics(ctx){
    let req = ctx.request
    let { type, startTime, endTime } = req.query
    startTime = startTime || utils.currentDayDate('day')
    let options = {}
    if (type === 'day') {
      options.startTime = startTime
      options.endTime = startTime
      options.substrData = ["$createTime", 11, 2]
    } else if (type === 'week') {
      let weekArr = utils.weekFirstLast(startTime)
      options.startTime = weekArr[0]
      options.endTime = weekArr[1]
      options.substrData = ["$createTime", 0, 10]
    } else if (type === 'month') {
      let monthArr = utils.monthFirstLast(startTime)
      options.startTime = monthArr[0]
      options.endTime = monthArr[1]
      options.substrData = ["$createTime", 0, 10]
    } else if (type === 'year') {
      let yearArr = utils.yearFirstLast(startTime)
      options.startTime = yearArr[0]
      options.endTime = yearArr[1]
      options.substrData = ["$createTime", 5, 2]
    } else {
      options.startTime = startTime
      options.endTime = endTime
      options.substrData = ["$createTime", 0, 10]
    }
    let data = await Article.aggregate([
      {
        $match: {
          status: '1',
          createTime: { '$gte': options.startTime + ' 00:00:00', '$lt': options.endTime + ' 23:59:59' }
        }
      },
      {
        $project: {
          hour: {
            $substr: options.substrData
          }
        },
      },
      {
        $group: {
          _id: "$hour",
          count: { $sum: 1 }
        }
      },
      {
        $sort: { _id: 1 }
      }
    ])
    data?utils.responseClient(ctx, RES_CODE.reqSuccess, "获取文章统计", data):utils.responseClient(ctx, RES_CODE.dataFail, "获取文章统计失败")
  }
  // 统计留言数量 
  async messageStatistics(ctx){
    let req = ctx.request
    let { type, startTime, endTime } = req.query
    startTime = startTime || utils.currentDayDate('day')
    let options = {}
    if (type === 'day') {
      options.startTime = startTime
      options.endTime = startTime
      options.substrData = ["$createTime", 11, 2]
    } else if (type === 'week') {
      let weekArr = utils.weekFirstLast(startTime)
      options.startTime = weekArr[0]
      options.endTime = weekArr[1]
      options.substrData = ["$createTime", 0, 10]
    } else if (type === 'month') {
      let monthArr = utils.monthFirstLast(startTime)
      options.startTime = monthArr[0]
      options.endTime = monthArr[1]
      options.substrData = ["$createTime", 0, 10]
    } else if (type === 'year') {
      let yearArr = utils.yearFirstLast(startTime)
      options.startTime = yearArr[0]
      options.endTime = yearArr[1]
      options.substrData = ["$createTime", 5, 2]
    } else {
      options.startTime = startTime
      options.endTime = endTime
      options.substrData = ["$createTime", 0, 10]
    }
    let data = await Message.aggregate([
      {
        $match: {
          status: '1',
          createTime: { '$gte': options.startTime + ' 00:00:00', '$lt': options.endTime + ' 23:59:59' }
        }
      },
      {
        $project: {
          hour: {
            $substr: options.substrData
          }
        },
      },
      {
        $group: {
          _id: "$hour",
          count: { $sum: 1 }
        }
      },
      {
        $sort: { _id: 1 }
      }
    ])
    data?utils.responseClient(ctx, RES_CODE.reqSuccess, "获取留言统计", data):utils.responseClient(ctx, RES_CODE.dataFail, "获取留言统计失败")
  }
  // 获取排名最多列表
  // 时间字符串转换时间格式，使用new Date("$time")全部会转换成1970-01-01T00:00:00.000Z，
  async accessUserList(ctx){
    let req = ctx.request
    let { type } = req.query
    let date = null
    if(type === 'day'){
      date = {
        $substr: ["$accessTime", 11, 2]
      }
    }else if(type === 'month'){
      date = {
        $substr: ["$accessTime", 5, 2]
      }
    }else{
      date = {
        $isoDayOfWeek: {
          $dateFromString: {
            dateString: "$accessTime"
          }
        }
      }
    }
    let data = await AccessUser.aggregate([
      {
        $project: {
          date
        }
      },
      {
        $group: {
          _id: "$date",
          count: { $sum: 1 }
        }
      },
      {
        $sort: { count: -1 }
      }
    ])
    data?utils.responseClient(ctx, RES_CODE.reqSuccess, "获取访客人数排名统计", data):utils.responseClient(ctx, RES_CODE.dataFail, "获取访客人数排名统计失败")
  }
  async userList(ctx){
    let req = ctx.request
    let { type } = req.query
    let date = null
    if(type === 'day'){
      date = {
        $substr: ["$createTime", 11, 2]
      }
    }else if(type === 'month'){
      date = {
        $substr: ["$createTime", 5, 2]
      }
    }else{
      date = {
        $isoDayOfWeek: {
          $dateFromString: {
            dateString: "$createTime"
          }
        }
      }
    }
    let data = await User.aggregate([
      {
        $project: {
          date
        }
      },
      {
        $group: {
          _id: "$date",
          count: { $sum: 1 }
        }
      },
      {
        $sort: { count: -1 }
      }
    ])
    data?utils.responseClient(ctx, RES_CODE.reqSuccess, "获取用户人数排名统计", data):utils.responseClient(ctx, RES_CODE.dataFail, "获取用户人数排名统计失败")
  }
  async articleList(ctx){
    let req = ctx.request
    let { type } = req.query
    let date = null
    if(type === 'day'){
      date = {
        $substr: ["$createTime", 11, 2]
      }
    }else if(type === 'month'){
      date = {
        $substr: ["$createTime", 5, 2]
      }
    }else{
      date = {
        $isoDayOfWeek: {
          $dateFromString: {
            dateString: "$createTime"
          }
        }
      }
    }
    let data = await Article.aggregate([
      {
        $match: {
          status: '1'
        }
      },
      {
        $project: {
          date,
          createTime: 1
        }
      },
      {
        $group: {
          _id: "$date",
          count: { $sum: 1 }
        }
      },
      {
        $sort: { count: -1 }
      }
    ])
    data?utils.responseClient(ctx, RES_CODE.reqSuccess, "获取文章排名统计", data):utils.responseClient(ctx, RES_CODE.dataFail, "获取文章排名统计失败")
  }
  async messageList(ctx){
    let req = ctx.request
    let { type } = req.query
    let date = null
    if(type === 'day'){
      date = {
        $substr: ["$createTime", 11, 2]
      }
    }else if(type === 'month'){
      date = {
        $substr: ["$createTime", 5, 2]
      }
    }else{
      date = {
        $isoDayOfWeek: {
          $dateFromString: {
            dateString: "$createTime"
          }
        }
      }
    }
    let data = await Message.aggregate([
      {
        $match: {
          status: '1'
        }
      },
      {
        $project: {
          date
        }
      },
      {
        $group: {
          _id: "$date",
          count: { $sum: 1 }
        }
      },
      {
        $sort: { count: -1 }
      }
    ])
    data?utils.responseClient(ctx, RES_CODE.reqSuccess, "获取留言排名统计", data):utils.responseClient(ctx, RES_CODE.dataFail, "获取留言排名统计失败")
  }
  async tagList(ctx){
    let data = await Article.aggregate([
      {
        $match: {
          status: '1'
        }
      },
      {
        $lookup: {
          from: 'tag',
          localField: 'tags',
          foreignField: '_id',
          as: 'articleTag'
        }
      },
      {
        $unwind: "$articleTag"
      },
      {
        $project: {
          title: 1,
          'articleTag._id': 1,
          'articleTag.name': 1,
          'articleTag.description': 1,
          'articleTag.bgColor': 1
        }
      },
      {
        $group: {
          _id: {
            "id": "$articleTag._id",
            "name": "$articleTag.name",
            "description": "$articleTag.description",
            "bgColor": "$articleTag.bgColor"
          },
          count: { $sum: 1 }
        }
      },
      {
        $sort: { count: -1 }
      }
    ])
    data?utils.responseClient(ctx, RES_CODE.reqSuccess, "获取文章标签统计", data):utils.responseClient(ctx, RES_CODE.dataFail, "获取文章标签统计失败")
  }
  // 文章按月归档
  async articleArchive(ctx){
    let data = await Article.aggregate([
      {
        $match: {
          status: '1'
        }
      },
      {
        $project: {
          date: {
            $substr: ["$createTime", 0, 7]
          },
          createTime: 1,
          title: 1,
        }
      },
      {
        $group: {
          _id: {
            "id": "$_id",
            "month": "$date",
            "title": "$title",
            "createTime": "$createTime"
          }
        }
      },
      {
        $sort: { '_id.createTime': -1 }
      }
    ])
    data?utils.responseClient(ctx, RES_CODE.reqSuccess, "获取文章归档统计", data):utils.responseClient(ctx, RES_CODE.dataFail, "获取文章归档统计失败")
  }
  // 随机获取n条留言数
  async randomMessage(ctx){
    let req = ctx.request
    let num = parseInt(req.query.num) || 10
    let data = await Message.aggregate([
      {
        $match: {
          status: '1'
        }
      },
      {
        $sample: {
          size: num
        }
      },
      {
        $lookup: {
          from: 'user',
          localField: 'createUser',
          foreignField: '_id',
          as: 'createUser'
        }
      },
      {
        $project: {
          content: 1,
          createTime: 1,
          'createUser.name': 1,
          'createUser.avatarId': 1
        }
      },
    ])
    data?utils.responseClient(ctx, RES_CODE.reqSuccess, "随机获取留言列表", data):utils.responseClient(ctx, RES_CODE.dataFail, "随机获取留言列表失败")
  }
  // 随机获取n条文章数
  async randomArticle(ctx){
    let req = ctx.request
    let num = parseInt(req.query.num) || 10
    let data = await Article.aggregate([
      {
        $match: {
          status: '1'
        }
      },
      {
        $sample: {
          size: num
        }
      },
      {
        $project: {
          title: 1
        }
      },
    ])
    data?utils.responseClient(ctx, RES_CODE.reqSuccess, "随机获取文章成功", data):utils.responseClient(ctx, RES_CODE.dataFail, "随机获取文章失败")
  }
  // 用户浏览、点赞和评论历史数据
  async userHistory(ctx){
    let req = ctx.request;
    let { type } = req.query;
    if(!req.tokenMessage){
      return utils.responseClient(ctx, RES_CODE.dataNot, "用户不存在")
    }
    let userId = req.tokenMessage.userMessage.id;
    let pageObj =  utils.pageSelect(req.query);
    let conditions = {
      userId: mongoose.Types.ObjectId(userId)
    }
    conditions.type = type?type:'1'
    let count = await History.countDocuments(conditions);
    let data = await History.aggregate([
      {
        $match: conditions
      },
      {
        $lookup: {
          from: 'article',
          localField: 'articleId',
          foreignField: '_id',
          as: 'article'
        }
      },
      {
        $project: {
          updateTime: 1,
          'article._id': 1,
          'article.title': 1,
          'article.description': 1,
          'article.imgId': 1,
          'article.meta': 1,
          'article.createTime': 1
        }
      },
      {
        $sort: { 'updateTime': -1 }
      },
      {
        $skip: pageObj.skip
      },
      {
        $limit: pageObj.limit
      }
    ])
    let docs = {
      data,
      count: count || 0
    }
    data?utils.responseClient(ctx, RES_CODE.reqSuccess, "获取用户操作历史统计", docs):utils.responseClient(ctx, RES_CODE.dataFail, "获取用户操作历史失败")
  }
  // 文章图片列表
  async articleImgStatistics(ctx){
    let req = ctx.request
    let num = parseInt(req.query.num) || 10
    let data = await Article.aggregate([
      {
        $match: {
          status: '1'
        }
      },
      {
        $project: {
          imgId: 1
        }
      },
      {
        $sort: { 'createTime': -1 }
      },
      {
        $limit: num
      }
    ])
    data?utils.responseClient(ctx, RES_CODE.reqSuccess, "获取文章图片列表失败", data):utils.responseClient(ctx, RES_CODE.dataFail, "文章图片列表失败")
  }
}
module.exports = new StatisticsCtr()