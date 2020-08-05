let fs = require("fs");
let path = require("path");
const Source = require("../models/source");
const CONSTANT = require('../config/constant');
const RES_CODE = CONSTANT.RES_CODE
const utils = require('../config/utils');

class UploadCtr{
  async uploadList(ctx){
    let req = ctx.request
    let conditions =  utils.blurSelect(req.query)
    let pageObj =  utils.pageSelect(req.query)
    let count = await Source.countDocuments(conditions)
    let docs = await Source.find(conditions,null,pageObj)
    if (docs) {
      let data = {
        count,
        data: docs
      }
      utils.responseClient(ctx, RES_CODE.reqSuccess, "获取资源列表成功", data)
    } else {
      utils.responseClient(ctx, RES_CODE.dataFail, "获取资源列表失败")
    }
  }
  async uploadFile(ctx){
    let req = ctx.request.files
    if(req.file){
      fs.readFile(req.file.path, (err, data) => {
        //读取失败，说明没有上传成功
        if (err) {
          return utils.severErr(err, ctx)
        }
        let imgAddress = path.join(__dirname, `../${req.file.destination}/` + req.file.filename + '.' + req.file.type.split('/')[1])
        let imgUrl = ctx.protocol + '://'+ ctx.headers.host + '/blogAdmin/file/down?downId=' + req.file.filename
        console.log(req.file)
        fs.writeFile(imgAddress, data, async (err) => {
          if (err) {
            return utils.severErr(err, ctx)
          }
          const newSource = new Source({
            sourceId: req.file.filename,
            name: req.file.originalname,
            type: req.file.type,
            url: imgUrl
          })
          let source = await newSource.save()
          source?utils.responseClient(ctx, RES_CODE.reqSuccess, "上传成功", source):utils.responseClient(ctx, RES_CODE.dataFail, "上传失败")
          // 删除二进制文件
          fs.unlink(path.join(__dirname, '../static/img/' + req.file.filename), function(unErr){
            // console.log(unErr)
          })
        })
      })
    }else{
      utils.responseClient(ctx, RES_CODE.dataFail, "获取文件失败")
    }
  }
  async downFile(ctx) {
    let req = ctx.request
    let sourceId = req.query.downId
    let source = await Source.findOne({
      sourceId
    })
    if(source){
      let imgUrl = `../static/img/${source.sourceId}.${source.type.split('/')[1]}`
      //读取文件
      // fs.readFile(path.join(__dirname, imgUrl), "binary", function (err, data) {
      //   if (err) {
      //     console.log(err)
      //   } else {
      //     ctx.write(data, "binary")
      //     ctx.end();
      //   }
      // })
      //下载文件
      ctx.response.download(path.join(__dirname, imgUrl), function(err){
        if (err) {
          return utils.severErr(err, ctx)
        } else {
          // decrement a download credit, etc.
        }
      });
    }else{
      utils.responseClient(ctx, RES_CODE.dataFail, "获取资源失败")
    }
  }
  async delFile (ctx){
    let req = ctx.request
    let sourceId = req.params.sourceId
    let doc = await Source.findOneAndRemove({
      sourceId
    })
    if(doc){
      fs.unlink(path.join(__dirname, `../static/img/${doc.sourceId}.${doc.type.split('/')[1]}`), function(unErr){
        utils.responseClient(ctx, RES_CODE.reqSuccess, "删除资源成功")
      })
    }else{
      utils.responseClient(ctx, RES_CODE.dataFail, "删除资源失败")
    }
  }
}

module.exports = new UploadCtr()
