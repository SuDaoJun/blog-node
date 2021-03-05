let fs = require("fs");
let path = require("path");
const Source = require("../models/source");
const CONSTANT = require('../config/constant');
const RES_CODE = CONSTANT.RES_CODE
const utils = require('../config/utils');
const send = require('koa-send');

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
    let file = ctx.request.files.file
    if(file){
      // 创建可读流
      const reader = fs.createReadStream(file.path);
      let timeValue = utils.timeValue() 
      let filePath = path.join(__dirname, '../static/img/') + `${timeValue}.${file.type.split('/')[1]}`;
      let imgUrl = ctx.protocol + '://'+ ctx.headers.host + '/blogAdmin/file/down?downId=' + timeValue
      // 创建可写流
      const upStream = fs.createWriteStream(filePath);
      // 可读流通过管道写入可写流
      reader.pipe(upStream);
      const newSource = new Source({
        sourceId: timeValue,
        name: file.name,
        type: file.type,
        url: imgUrl
      })
      let source = await newSource.save()
      source?utils.responseClient(ctx, RES_CODE.reqSuccess, "上传成功", source):utils.responseClient(ctx, RES_CODE.dataFail, "上传失败")
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
      let pathUrl = `static/img/${source.sourceId}.${source.type.split('/')[1]}`
      //下载文件
      ctx.attachment(pathUrl)
      await send(ctx, pathUrl)
    }else{
      utils.responseClient(ctx, RES_CODE.dataFail, "获取资源失败")
    }
  }
  async delFile (ctx){
    let sourceId = ctx.params.sourceId
    let doc = await Source.findOneAndRemove({
      sourceId
    })
    if(doc){
      fs.unlink(path.join(__dirname, `../static/img/${doc.sourceId}.${doc.type.split('/')[1]}`), function(unErr){
      })
      utils.responseClient(ctx, RES_CODE.reqSuccess, "删除资源成功")
    }else{
      utils.responseClient(ctx, RES_CODE.dataFail, "删除资源失败")
    }
  }
}

module.exports = new UploadCtr()
