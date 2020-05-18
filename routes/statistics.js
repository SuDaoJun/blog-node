const User = require("../models/user")
const AccessUser = require("../models/accessUser")
const Article = require("../models/article")
const Message = require("../models/message")
// const Tag = require("../models/tag")
const CONSTANT = require('../config/constant')
const RES_CODE = CONSTANT.RES_CODE
const utils = require('../config/utils')

// 统计用户数量 使用Promise
function userCount() {
  return new Promise((resolve, reject) => {
    User.countDocuments(null, function (err, count) {
      if (err) {
        reject(err)
      }
      resolve(count)
    })
  })
}
// 统计文章数量 使用async await
async function articleCount() {
  return await Article.countDocuments({ status: '1' })
}
// 统计访客总数
async function accessUserCount() {
  return await AccessUser.countDocuments()
}
// 统计留言数量
function messageCount() {
  return new Promise((resolve, reject) => {
    Message.countDocuments({ status: '1' }, function (err, count) {
      if (err) {
        reject(err)
      }
      resolve(count)
    })
  })
}

// 统计用户、文章、留言总数
exports.countTotalNum = async (req, res) => {
  let data = {}
  data.accessUserTotal = await accessUserCount()
  data.userTotal = await userCount()
  data.articleTotal = await articleCount()
  data.messageTotal = await messageCount()
  utils.responseClient(res, RES_CODE.reqSuccess, "获取统计列表成功", data)
}
// type: day-日 week-周 month-月 year-年 其它-时间选择
// 统计访客用户 
exports.accessUserStatistics = (req, res) => {
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
  AccessUser.aggregate([
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
  ]).exec(function (err, data) {
    if (err) {
      return utils.severErr(err, res)
    }
    utils.responseClient(res, RES_CODE.reqSuccess, "获取访客用户统计", data)
  })
}
// 统计用户数量 
exports.userStatistics = (req, res) => {
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
  User.aggregate([
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
  ]).exec(function (err, data) {
    if (err) {
      return utils.severErr(err, res)
    }
    utils.responseClient(res, RES_CODE.reqSuccess, "获取用户统计", data)
  })
}
// 统计文章数量 
exports.articleStatistics = (req, res) => {
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
  Article.aggregate([
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
  ]).exec(function (err, data) {
    if (err) {
      return utils.severErr(err, res)
    }
    utils.responseClient(res, RES_CODE.reqSuccess, "获取文章统计", data)
  })
}
// 统计留言数量 
exports.messageStatistics = (req, res) => {
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
  Message.aggregate([
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
  ]).exec(function (err, data) {
    if (err) {
      return utils.severErr(err, res)
    }
    utils.responseClient(res, RES_CODE.reqSuccess, "获取留言统计", data)
  })
}
// 获取排名最多列表
// 时间字符串转换时间格式，使用new Date("$time")全部会转换成1970-01-01T00:00:00.000Z，
exports.accessUserList = (req, res) => {
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
  AccessUser.aggregate([
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
  ]).exec(function (err, data) {
    if (err) {
      return utils.severErr(err, res)
    }
    utils.responseClient(res, RES_CODE.reqSuccess, "获取访客人数排名统计", data)
  })
}
exports.userList = (req, res) => {
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
  User.aggregate([
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
  ]).exec(function (err, data) {
    if (err) {
      return utils.severErr(err, res)
    }
    utils.responseClient(res, RES_CODE.reqSuccess, "获取用户人数排名统计", data)
  })
}
exports.articleList = (req, res) => {
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
  Article.aggregate([
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
  ]).exec(function (err, data) {
    if (err) {
      return utils.severErr(err, res)
    }
    utils.responseClient(res, RES_CODE.reqSuccess, "获取文章排名统计", data)
  })
}
exports.messageList = (req, res) => {
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
  Message.aggregate([
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
  ]).exec(function (err, data) {
    if (err) {
      return utils.severErr(err, res)
    }
    utils.responseClient(res, RES_CODE.reqSuccess, "获取留言排名统计", data)
  })
}
exports.tagList = (req, res) => {
  Article.aggregate([
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
        'articleTag.bgColor': 1
      }
    },
    {
      $group: {
        _id: {
          "id": "$articleTag._id",
          "name": "$articleTag.name",
          "bgColor": "$articleTag.bgColor"
        },
        count: { $sum: 1 }
      }
    },
    {
      $sort: { count: -1 }
    }
  ]).exec(function (err, data) {
    if (err) {
      return utils.severErr(err, res)
    }
    utils.responseClient(res, RES_CODE.reqSuccess, "获取文章标签统计", data)
  })
}
// 文章按月归档
exports.articleArchive = (req, res) => {
  Article.aggregate([
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
  ]).exec(function (err, data) {
    if (err) {
      return utils.severErr(err, res)
    }
    utils.responseClient(res, RES_CODE.reqSuccess, "获取文章归档统计", data)
  })
}
// 随机获取n条留言数
exports.randomMessage = (req, res) => {
  let num = parseInt(req.query.num) || 10
  Message.aggregate([
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
  ]).exec(function (err, data) {
    if (err) {
      return utils.severErr(err, res)
    }
    utils.responseClient(res, RES_CODE.reqSuccess, "随机获取留言列表", data)
  })
}