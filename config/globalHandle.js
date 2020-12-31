const JwtUtil = require('./jwt');
const CONSTANT = require('./constant');
const HTTP_CODE = CONSTANT.HTTP_CODE
const utils = require('./utils');
module.exports = app => {
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
    '/blogPage/statistics/randomArticle',
    '/blogPage/article/list',
    '/blogPage/article/detail',
    '/blogPage/comment/list',
    '/blogPage/statement/list',
    '/blogPage/message/list',
    '/blogPage/project/list',
    '/blogPage/link/list'
  ]
  app.use( async(ctx, next)=> {
    let {request:req, response:res} = ctx
    let url = req.url.indexOf('?') > -1?req.url.split('?')[0]:req.url
    if (!whitelist.includes(url)) {
        let token = req.headers.authorization;
        if(token){
            let jwt = new JwtUtil(token);
            let result = jwt.verifyToken();
            req.tokenMessage = result
            // 如果考验通过就next，否则就返回登陆信息不正确
            if (result == 'err') {
               utils.responseClient(ctx, HTTP_CODE.unauthorized, '登录已过期,请重新登录', null, HTTP_CODE.unauthorized)
            } else {
              await next();
            }
        }else{
            utils.responseClient(ctx, HTTP_CODE.unauthorized, 'token不存在', null, HTTP_CODE.unauthorized)
        }
    } else {
      let token = req.headers.authorization;
      if(token){
        let jwt = new JwtUtil(token);
        let result = jwt.verifyToken();
        req.tokenMessage = result || '';
      }
      await next();
    }
  });
}