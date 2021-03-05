## 前言

此 blog-node 项目是基于 express 搭建，采用了主流的前后端分离思想，提供符合 RESTful 风格的 API 接口（后续部分功能在基于koa中版本实现）

## 功能描述

### 已经实现功能

- [x] 文章管理
- [x] 评论管理
- [x] 评论回复管理
- [x] 菜单管理
- [x] 功能管理
- [x] 友情链接管理
- [x] 留言管理
- [x] 项目管理
- [x] 角色管理
- [x] 励志语言管理
- [x] 统计管理
- [x] 标签管理
- [x] 上传资源管理
- [x] 用户管理

## node技术

- bcryptjs （密码加密）
- body-parser （解析json和表单数据）
- connect-history-api-fallback  （支持前端history模式）
- express （node框架）
- jsonwebtoken  （提供token用户验证）
- log4js  （日志记录）
- mongoose    （mongodb操作）
- multer  （文件上传）
- nodemailer  （邮件发送）
- svg-captcha  （验证码）

## 主要项目结构

```
- config
  - connect   mongodb数据库连接
  - constant  常量数据
  - globalHandle  cors允许跨域以及路由拦截验证token
  - jwt   token生成以及校验封装
  - logConfig   日志提示封装
  - utils   响应回复、数据库操作请求、发送邮件、验证码和时间格式化等一些常用方法封装
- routes
  - article 文章增删改查、详情和点赞
  - comment 一级评论增删改查和置顶评论
  - functionOper 功能列表增删改查
  - index 引入所有路由接口
  - link 友情链接增删改查
  - menu 菜单功能增删改查以及权限列表树形结构数据
  - message 留言增删改查
  - project 项目增删改查
  - replyComment 回复评论增删改查
  - role 角色增删改查、获取和设置角色权限列表、批量导入和移除用户
  - statement 前端博客显示励志语句增改查
  - statistics 访客、用户、文章、留言按年月日周或时间段统计以及排名
  - tag 文章标签增删改查
  - upload 上传资源增删查以及下载
  - user 用户增删改查、登录注册和邮件发送、验证码获取
- models 模式类型，定义文档的字段属性以及校验
- mongodb mongodb数据集合备份（初始化恢复数据，包括菜单、角色和test用户）
- static 图片和资源
- app.js 初始化以及配置
```

## 说明

- 默认超级管理员，账户：test，密码：123456

- 开发环境使用 nodeman，一旦报错，程序断开，生产环境使用 pm2，把 node 设置为进程，不会因报错而断开服务


## Build Setup ( 建立安装 )

```
数据库mongodb安装，mongodb按教程安装下载，然后配置：
1、下载mongodb在D:\mongodb位置（自定义），data文件夹下新建db文件夹
2、在D:\mongodb\bin中执行.\mongod --dbpath D:\mongodb\data\db，查看是否安装成功
3、配置文件安装服务，mongod -config " D:\mongodb\bin\mongod.cfg" -install -serviceName "MongoDB"
4、在D:\mongodb\bin中执行./mongo或配置系统变量使用mongo来创建超级用户：
use admin
db.createUser({user:"admin",pwd:"123456",roles:["root"]})
5、新建数据库：
use blogNode
db.createUser({user:"admin",pwd:"123456",roles:[{role:"dbOwner",db:"blogNode"}]})
(dbOwner：该数据库的所有者，具有该数据库的全部权限)
6、在mongod.cfg中配置需要权限认证，重启服务
security:
  authorization: enabled
7、安装navicat for mongodb 可视化数据库，导入恢复mongodb的数据  
8、全局安装npm install -g nodemon来监听重启
9、安装依赖，npm install
10、启动服务，npm run dev，默认端口3000

```

**项目地址：**

> [前台展示：https://gitee.com/sdj_work/blog-page（Vue/Nuxt/uni-app）](https://gitee.com/sdj_work/blog-page)

> [管理后台：https://gitee.com/sdj_work/blog-admin（Vue/React）](https://gitee.com/sdj_work/blog-admin)

> [后端Node：https://gitee.com/sdj_work/blog-node（Express/Koa）](https://gitee.com/sdj_work/blog-node)

> [博客地址：https://sdjBlog.cn/](https://sdjBlog.cn/)
