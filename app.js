const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-body')
const cors = require('koa2-cors')
// const history = require('connect-history-api-fallback')
const router = require('./routers')
const logger = require("koa-logger"); 
const utils = require('./config/utils')

// 跨域处理
app.use(
  cors({
      origin: function(ctx) { //设置允许来自指定域名请求
          return '*'; //只允许http://localhost:3000这个域名的请求
      },
      maxAge: 5, //指定本次预检请求的有效期，单位为秒。
      credentials: false, //是否允许发送Cookie
      allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
      allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
      exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
  })
)
app.use(logger());
// error handler
onerror(app)
// 前端使用history模式
// app.use(history({
//   htmlAcceptHeaders: ['text/html', 'application/xhtml+xml']
// }))
// middlewares
app.use(bodyparser({
  multipart:true,
  jsonLimit: '30mb',
  formLimit: '30mb',
}))
app.use(json())
app.use(require('koa-static')(__dirname + '/static'))
app.use(require('koa-static')(__dirname + '/views'))
app.use(require('koa-static')(__dirname + '/apidoc'))

// logger
// app.use(async (ctx, next) => {
//   const start = new Date()
//   await next()
//   const ms = new Date() - start
//   console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
// })

// 配置
require("./config/globalHandle")(app)   // 检查token
require("./config/connect")   // MongoDB数据库连接

// 初始化路由
router(app)
// error-handling
app.on('error', (err, ctx) => {
  utils.severErr(err, ctx)
});

module.exports = app
