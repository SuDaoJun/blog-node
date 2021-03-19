## 前言

此 blog-node 项目是基于 koa 搭建，采用了主流的前后端分离思想，提供符合 RESTful 风格的 API 接口

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
- [x] 励志语言管理
- [x] 统计管理
- [x] 标签管理
- [x] 上传文件管理
- [x] 用户管理
- [x] 角色管理
- [x] API文档管理

## node技术

- bcryptjs （密码加密）
- connect-history-api-fallback  （支持前端history模式）
- jsonwebtoken  （提供token用户验证）
- koa （node框架）
- koa-body （解析json和表单数据）
- koa-logger  （日志记录）
- koa-router  （路由中间件）
- koa-static  （静态资源中间件）
- koa2-cors  （跨域处理）
- moment  （时间格式处理）
- mongoose    （mongodb操作）
- nodemailer  （邮件发送）
- svg-captcha  （验证码）

## 主要项目结构

```

- apiDesc API文档注释形式，可单独在接口设置或统一处理
- apidoc 通过注释形式生成API文档
- config
  - connect   mongodb数据库连接
  - constant  常量数据
  - globalHandle  路由拦截验证token
  - jwt   token生成以及校验封装
  - utils   响应回复、数据库操作请求、发送邮件、验证码和时间格式化等一些常用方法封装
- controllers
  - article 文章增删改查、详情和点赞
  - comment 一级评论增删改查和置顶评论
  - baseController 封装解决class无法获取this指向问题
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
- routers 路由请求
- models 模式类型，定义文档的字段属性以及校验
- mongodb mongodb数据集合备份（初始化恢复数据，包括菜单、角色和test用户）
- static 图片和资源
- apidoc.json apidoc文档配置，输出名称、版本和顺序等
- app.js 初始化以及配置

```

## 说明

- 默认超级管理员，账户：test，密码：123456

- 开发环境使用 nodeman，一旦报错，程序断开，生产环境使用 pm2，把 node 设置为进程，不会因报错而断开服务

- 全局安装npm install apidoc@0.25.0 -g（0.26.0版本会出现测试请求无法隐藏），npm run apidoc生成apidoc文档，本地访问为 **[http://localhost:3000/](http://localhost:3000/)** ，线上为 **[http://sdjblog.cn:3000/](http://sdjblog.cn:3000/)**

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

**项目系列文章：**

> [Vue+Nuxt 博客展示](https://juejin.cn/post/6940629661147725861)

> [Vue+uniapp 博客展示](https://juejin.cn/post/6941182524303343624)

> [Vue+ElementUI 后台博客管理](https://juejin.cn/post/6935733545029599262)

> [node + koa + mongodb 博客接口开发](https://juejin.cn/post/6937589228423348238)

> [node + express + mongodb 博客接口开发](https://juejin.cn/post/6865113400251432967)
