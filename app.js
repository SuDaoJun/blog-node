var createError = require('http-errors');
var express = require('express');
var path = require('path');
var fs = require('fs');
var FileStreamRotator = require('file-stream-rotator');
// var logger = require('morgan');
const bodyParser = require("body-parser");
const ejs = require('ejs');
const HTTP_CODE = require("./config/constant").HTTP_CODE;
const utils = require('./config/utils');
// 前端使用history模式
let history = require('connect-history-api-fallback');
let app = express();
app.use(history({
  htmlAcceptHeaders: ['text/html', 'application/xhtml+xml']
}))

//设置静态文件托管放于全局接口拦截之前，避免验证token
app.use(express.static(path.join(__dirname, 'views')));
// 文件上传static
app.use('/static',express.static(path.join(__dirname,"/static")))
// 中间件
app.use(bodyParser.json({limit: '30mb'}));   //处理json数据
app.use(bodyParser.urlencoded({limit: '30mb', extended:true}));  //处理 form 表单数据
//记录日志
const log = require('./config/logConfig.js')
log.use(app)
// let logDirectory = __dirname + '/public/log';
// fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
// let accessLogStream = FileStreamRotator.getStream({
//   date_format: 'YYYY-MM-DD',
//   filename: logDirectory + '/%DATE%.log',
//   frequency: 'daily',
//   verbose: false
// });
// app.use(logger('dev'));
// app.use(logger('combined', {stream: accessLogStream}));

// 配置
require("./config/globalHandle")(app);   // 全局接口拦截来设置cors跨域和检查token
require("./config/connect");   // MongoDB数据库连接

// view engine setup 设置模板引擎的存放目录与用的什么模板引擎
// app.set('views', path.join(__dirname, 'views/'));
// app.engine('.html', ejs.renderFile);
// app.set('view engine', 'html');

//将路由文件引入
const route = require('./routes/index');

//初始化所有路由
route(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(HTTP_CODE.notFound));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  console.log(err)
  utils.severErr(err, res)
  // res.status(err.status || HTTP_CODE.severError);
  // res.render('error');
});


module.exports = app;
