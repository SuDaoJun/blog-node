## 前言

此 blog-node 项目是基于 express 搭建，采用了主流的前后端分离思想，提供符合 RESTful 风格的 API 接口

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

### 待实现

- [ ] 使用 koa 重构

## node技术

- bcryptjs （密码加密）
- body-parser （解析json和表单数据）
- connect-history-api-fallback  （支持前端history模式）
- express
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
- static 图片和资源
- app.js 初始话以及配置
```

## 说明

- 开发环境使用 nodeman，一旦报错，程序断开，生产环境使用 pm2，把 node 设置为进程，不会因报错而断开服务


## Build Setup ( 建立安装 )

```
# install dependencies
npm install

# port: 3000
npm run dev

```

**项目地址：**

> [前台展示: https://github.com/SuDaoJun/blog-page](https://github.com/SuDaoJun/blog-page)

> [管理后台：https://github.com/SuDaoJun/blog-admin](https://github.com/SuDaoJun/blog-admin)

> [后端：https://github.com/SuDaoJun/blog-node](https://github.com/SuDaoJun/blog-node)

> [博客地址：http://sdjBlog.cn/](http://sdjBlog.cn/)
