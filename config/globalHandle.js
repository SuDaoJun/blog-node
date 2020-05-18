const JwtUtil = require('./jwt');
const CONSTANT = require('./constant');
const HTTP_CODE = CONSTANT.HTTP_CODE
const utils = require('./utils');
module.exports = app => {
  app.all("*", (req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
      res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
      if(req.method == 'OPTIONS') {
          res.sendStatus(200); // 让options请求快速返回
      }
      else{
          next();
      }
  })
  // 利用 Express 中间件功能实现接口请求拦截
  let whitelist = [
    '/blogAdmin/user/login', 
    '/blogAdmin/user/register', 
    '/blogAdmin/user/getCode', 
    '/blogAdmin/user/resetPwd', 
    '/blogAdmin/user/sendEmail', 
    '/blogAdmin/file/down', 
    '/blogAdmin/file/down/',

    '/blogPage/user/login',
    '/blogPage/statistics/tagList',
    '/blogPage/statistics/articleArchive',
    '/blogPage/statistics/randomMessage',
    '/blogPage/article/list',
    '/blogPage/article/detail',
    '/blogPage/comment/list',
    '/blogPage/statement/list',
    '/blogPage/project/list',
    '/blogPage/link/list',
    '/file/down', 
    '/file/down/',
  ]
  app.use(function(req, res, next) {
    let url = req.url.indexOf('?') > -1?req.url.split('?')[0]:req.url
    if (!whitelist.includes(url)) {
        let token = req.headers.authorization;
        if(token){
            let jwt = new JwtUtil(token);
            let result = jwt.verifyToken();
            req.tokenMessage = result
            // 如果考验通过就next，否则就返回登陆信息不正确
            if (result == 'err') {
               utils.responseClient(res, HTTP_CODE.unauthorized, '登录已过期,请重新登录', null, HTTP_CODE.unauthorized)
            } else {
                next();
            }
        }else{
            utils.responseClient(res, HTTP_CODE.unauthorized, 'token不存在', null, HTTP_CODE.unauthorized)
        }
    } else {
      next();
    }
  });
}