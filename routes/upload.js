
let fs = require("fs");
let path = require("path");
const Source = require("../models/source");
const CONSTANT = require('../config/constant');
const RES_CODE = CONSTANT.RES_CODE
const utils = require('../config/utils');

exports.uploadList = (req, res) => {
  let conditions =  utils.blurSelect(req.query)
  let pageObj =  utils.pageSelect(req.query)
  Source.countDocuments(conditions,function (err, count){
    if (err) {
      return utils.severErr(err, res)
    }
    Source.find(conditions,null,pageObj,function (error, docs){
      if(error){
        return utils.severErr(error, res)
      }
      if (docs) {
        let data = {
          count,
          data: docs
        }
        utils.responseClient(res, RES_CODE.reqSuccess, "获取资源列表成功", data)
      } else {
        utils.responseClient(res, RES_CODE.dataFail, "获取资源列表失败")
      }
    })
  })
}

exports.uploadFile = (req, res) => {
  if(req.file){
    fs.readFile(req.file.path, (err, data) => {
      //读取失败，说明没有上传成功
      if (err) {
        return utils.severErr(err, res)
      }
      let imgAddress = path.join(__dirname, `../${req.file.destination}/` + req.file.filename + '.' + req.file.mimetype.split('/')[1])
      let imgUrl = req.protocol + '://'+ req.headers.host + '/blogAdmin/file/down?downId=' + req.file.filename
      fs.writeFile(imgAddress, data, (err) => {
        if (err) {
          return utils.severErr(err, res)
        }
        const newSource = new Source({
          sourceId: req.file.filename,
          name: req.file.originalname,
          type: req.file.mimetype,
          url: imgUrl
        })
        newSource.save(function (err, source){
          if(err){
            return utils.severErr(err, res)
          }
          utils.responseClient(res, RES_CODE.reqSuccess, "上传成功", source)
          // 删除二进制文件
          fs.unlink(path.join(__dirname, '../static/img/' + req.file.filename), function(unErr){
            // console.log(unErr)
          })
        })
      })
    })
  }else{
    utils.responseClient(res, RES_CODE.dataFail, "获取文件失败")
  }
}
exports.downFile = (req, res) => {
  let sourceId = req.query.downId
  Source.findOne({
    sourceId
  }).exec(function (err, source){
    if(err){
      return utils.severErr(err, res)
    }
    if(source){
      let imgUrl = `../static/img/${source.sourceId}.${source.type.split('/')[1]}`
      //读取文件
      // fs.readFile(path.join(__dirname, imgUrl), "binary", function (err, data) {
      //   if (err) {
      //     console.log(err)
      //   } else {
      //     res.write(data, "binary")
      //     res.end();
      //   }
      // })
      //下载文件
      res.download(path.join(__dirname, imgUrl), function(err){
        if (err) {
          return utils.severErr(err, res)
        } else {
          // decrement a download credit, etc.
        }
      });
    }else{
      utils.responseClient(res, RES_CODE.dataFail, "获取资源失败")
    }
  })
}
exports.delFile = (req, res) => {
  let sourceId = req.params.sourceId
  Source.findOneAndRemove({
    sourceId
  }, function(err, doc){
    if(err){
      return utils.severErr(err, res)
    }
    if(doc){
      fs.unlink(path.join(__dirname, `../static/img/${doc.sourceId}.${doc.type.split('/')[1]}`), function(unErr){
        console.log(unErr)
        utils.responseClient(res, RES_CODE.reqSuccess, "删除资源成功")
      })
    }else{
      utils.responseClient(res, RES_CODE.dataFail, "删除资源失败")
    }
  })
}