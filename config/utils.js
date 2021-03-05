const nodemailer = require('nodemailer');
const moment = require('moment');
const CONSTANT = require('./constant');
const svgCaptcha = require("svg-captcha");
const RES_CODE = CONSTANT.RES_CODE;
const HTTP_CODE = CONSTANT.HTTP_CODE;

// 响应客户端
function responseClient(ctx, code = RES_CODE.dataFail, msg = "服务器错误", data = null,httpCode = HTTP_CODE.ok) {
  let responseData = {};
  responseData.code = code;
  responseData.msg = msg;
  responseData.data = data;
  ctx.status = httpCode
  ctx.body = responseData
}
// 错误请求返回
function severErr(err, ctx) {
  let errObj = {
    msg: '服务器错误',
    code: HTTP_CODE.severError,
    data: err
  }
  ctx.status = HTTP_CODE.severError
  ctx.body = errObj
}

let ignoreAttr = ['currentPage', 'pageSize', 'sortBy', 'sortOrders']
// 循环对象判断属性是否存在,模糊查询
function blurSelect(obj){
  let conditions = {}
  if(JSON.stringify(obj) !== '{}'){
    for(let attr in obj){
      if(!ignoreAttr.includes(attr)){
        if(attr === 'id'){
          obj[attr]? conditions['_id'] = obj[attr] : null
        }else if(attr === 'createTime' || attr === 'startTime' || attr === 'endTime'){
          let arr = obj[attr].split(',')
          if(arr.length === 2){
            conditions[attr] = {
              "$gte": arr[0].indexOf('00:00:00') > -1?arr[0]:arr[0] + ' 00:00:00',
              "$lte": arr[1].indexOf('23:59:59') > -1?arr[1]:arr[1] + ' 23:59:59'
            }
          }
        }else{
          if(obj[attr]){
            if(obj[attr].length === 24){
              conditions[attr] = obj[attr]
            }else{
              let reg = new RegExp(obj[attr], 'i')
              conditions[attr] = {
                $regex: reg
              }
            }
          }
        }
      }
    }
  }
  return conditions
}

// 循环对象判断属性是否存在，精准匹配
function completeSelect(obj){
  let conditions = {}
  if(JSON.stringify(obj) !== '{}'){
    for(let attr in obj){
      if(!ignoreAttr.includes(attr)){
        if(attr === 'id'){
          // obj[attr]? conditions['_id'] = obj[attr] : null
        }else{
          obj[attr]? conditions[attr] = obj[attr] : null
        }
      }
    }
  }
  return conditions
}
//返回分页查询对象
function pageSelect(obj){
  let pageSize = Math.max(parseInt(obj.pageSize),1) || 10;
  let currentPage = Math.max(parseInt(obj.currentPage),1) || 1;
  let pageObj = {
    limit: pageSize,
    skip: (currentPage-1) * pageSize
  }
  if(obj.sortBy){
    let sortBy = obj.sortBy;
    let sortOrders = obj.sortOrders;
    let order = 'desc';
    if(sortOrders === '1' || sortOrders === 1 || sortOrders === 'asc' || sortOrders === 'ascending'){
      order = 'asc';
    }
    pageObj.sort = {
      [sortBy]: order
    }
  }
  return pageObj
}
function objProp(data, path){
  if (!data || !path) {
    return null
  }
  let tempArr = path.split('.');
  for (let i = 0; i < tempArr.length; i++) {
    let key = tempArr[i]
    if (data[key]) {
      data = data[key]
    } else {
      return null
    }
  }
  return data
}
// 转化时间戳
function timeValue(time = '') {
  if(time){
    return moment(time).valueOf()
  }else{
    return moment().valueOf()
  }
}
// 当前时间
function currentDayDate(type = 'time'){
  if(type === 'day'){
    return moment().format('YYYY-MM-DD')
  }else{
    return moment().format('YYYY-MM-DD HH:mm:ss')
  }
}
// 获取本周星期一和星期天
function weekFirstLast(date){
  let week = moment(date).format('E')
  let arr = [moment(date).subtract(week-1, 'days').format('YYYY-MM-DD'),moment(date).add(7-week, 'days').format('YYYY-MM-DD')]
  return arr
}
// 获取本月第一天和最后一天
function monthFirstLast(date){
  let arr = [moment(date).startOf('month').format('YYYY-MM-DD'),moment(date).endOf('month').format('YYYY-MM-DD')]
  return arr
}
// 获取本年第一天和最后一天
function yearFirstLast(date){
  let arr = [moment(date).startOf('year').format('YYYY-MM-DD'),moment(date).endOf('year').format('YYYY-MM-DD')]
  return arr
}
// 获取传递时间当前周数组7个日期
function weekArry(date){
  let week = moment(date).format('E')
  let arr = []
  for(let i = 1; i < 8; i++){
    let data = moment(date).subtract(week-i, 'days').format('YYYY-MM-DD')
    arr.push(data)
  }
  return arr
}
// 时间差
function timeDiff(startTime, endTime, type = 'minute'){
  let sTime = moment(startTime)
  let eTime = moment(endTime)
  return eTime.diff(sTime, type)
}
// 获取文章字数
function getPostWordCount(text) {
  let len = 0;
  // 先将回车换行符做特殊处理
  text = text.replace(/(rn+|s+|  +)/g,"蓓"); // 书 = 云
  // 处理英文字符数字，连续字母、数字、英文符号视为一个单词
  text = text.replace(/[x00-xff]/g,"m");    
  // 合并字符m，连续字母、数字、英文符号视为一个单词
  text = text.replace(/m+/g,"*");
     // 去掉回车换行符
  text = text.replace(/蓓+/g,"");
  // 返回字数
  len = text.length
  return len;
}

// 邮件发送
//创建发送邮件的请求对象
let transporter = nodemailer.createTransport({
  host: 'smtp.163.com',    //发送端邮箱类型（163邮箱）
  port: 465,      //端口号
  secure: true, 
  auth: {
      user: 'sdj__work@163.com', // 发送方的邮箱地址（自己的）
      pass: 'sdj527' // mtp 验证码
  }
});
function sendEmail(mail,code) {
  let mailObj = {
      from: '"sdj" <sdj__work@163.com>',   // 邮件名称和发件人邮箱地址
      to: 'sdj__work@163.com, ' + mail,   //收件人邮箱地址（这里的mail是封装后方法的参数，代表收件人的邮箱地址），出现504.可以抄送一份给自己
      // to: mail,   //收件人邮箱地址（这里的mail是封装后方法的参数，代表收件人的邮箱地址）
      subject: '邮箱验证码',   //邮件标题
      // html: '',
      text: '您的验证码：'+ code + ' ( 有效期十分钟 )'
  }
  // 发送邮件(封装成一个promise对象)，方便后面调用该方法
  return new Promise((resolve, reject)=>{
      transporter.sendMail(mailObj, (err, data) => {
          if(err){
              reject(err)    //出错
          }else{
              resolve(data)    //成功
          }
      })
  })
}

// 随机验证码svg图片
function createCode() {
  return svgCaptcha.create({
      size: 4,
      ignoreChars: "0o1iIl",
      noise: 1,
      color: true,
      background: "transparent",
      fontSize: 60
  });
}
module.exports = {
  responseClient,
  blurSelect,
  completeSelect,
  pageSelect,
  sendEmail,
  currentDayDate,
  timeDiff,
  timeValue,
  weekArry,
  weekFirstLast,
  monthFirstLast,
  yearFirstLast,
  getPostWordCount,
  objProp,
  createCode,
  severErr
};
