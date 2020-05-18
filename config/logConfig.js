const log4js = require('log4js')
log4js.configure({
  "appenders": {
    "out": {
      "type": "stdout"
    },
    "reqInfo": {
      "type": "dateFile",
      "filename": "logs/info",
      "pattern": "yyyy-MM-dd.log",
      "daysToKeep": 10,
      "alwaysIncludePattern": true
    },
    "resError": {
      "type": "dateFile",
      "filename": "logs/error",
      "pattern": "yyyy-MM-dd.log",
      "alwaysIncludePattern": true
    }
  },
  "categories": {
      default: { appenders: ['out'], level: 'info' },
      reqInfo: {appenders: ['out', 'reqInfo'], level: 'info'},
      resError: {appenders: ['out', 'resError'], level: 'error' }
  },
  "replaceConsole": true
});

let logger = log4js.getLogger('resError')
let reqLogger = log4js.getLogger('reqInfo')

exports.logger = logger

exports.use = function (app) {
  //页面请求日志,用auto的话,默认级别是WARN
  //这样会自动记录每次请求信息，放在其他use上面
  app.use(log4js.connectLogger(reqLogger, {level: 'INFO'}));
}