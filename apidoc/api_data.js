define({ "api": [
  {
    "type": "request",
    "url": "/",
    "title": "头部请求",
    "name": "headerInfo",
    "group": "APIINFO",
    "description": "<p>请求头部token登录身份验证和请求方式描述</p>",
    "version": "0.0.0",
    "filename": "apiDesc/api/common.js",
    "groupTitle": "系统说明",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户登录后返回的token令牌，没有返回前缀Bearer 。</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>默认为表单格式，application/x-www-form-urlencoded;charset=UTF-8</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "头部请求:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTWVzc2FnZSI6eyJpZCI6IjVlNzBjZGYyYjE4NjdhNTA3NGRkYTM1ZSIsIm5hbWUiOiJzZGoiLCJhdmF0YXJJZCI6IjkxODRhNTU4OTIxNjBkZGYyYTI2M2YyYWE2ZGE4OGQ5IiwiZnVuY3Rpb25MaXN0IjpbIjVlODM0ZjIzZmI2OTMwNWFhMDkxZTgyNCIsIjVlODM0ZjJhZmI2OTMwNWFhMDkxZTgyNSIsIjVlODM0ZjMxZmI2OTMwNWFhMDkxZTgyNiIsIjVlOTljMTdkZDFiYTcyOWE3OGIwMTZiNiIsIjVlODM0ZjUxZmI2OTMwNWFhMDkxZTgyNyIsIjVlODM0ZjVhZmI2OTMwNWFhMDkxZTgyOCIsIjVlODM0ZjYxZmI2OTMwNWFhMDkxZTgyOSIsIjVlOTljMWMwZDFiYTcyOWE3OGIwMTZiNyIsIjVlODM0ZjZmZmI2OTMwNWFhMDkxZTgyYSIsIjVlODM0Zjc3ZmI2OTMwNWFhMDkxZTgyYiIsIjVlODM0ZjdlZmI2OTMwNWFhMDkxZTgyYyIsIjVlOTljMWNjZDFiYTcyOWE3OGIwMTZiOCIsIjVlODM0Zjg4ZmI2OTMwNWFhMDkxZTgyZCIsIjVlODM0ZjkwZmI2OTMwNWFhMDkxZTgyZSIsIjVlODM0Zjk3ZmI2OTMwNWFhMDkxZTgyZiIsIjVlOTljMWQ5ZDFiYTcyOWE3OGIwMTZiOSIsIjVlODM0ZjllZmI2OTMwNWFhMDkxZTgzMCIsIjVlODM0ZmFmZmI2OTMwNWFhMDkxZTgzMSIsIjVlODM0ZmI1ZmI2OTMwNWFhMDkxZTgzMiIsIjVlOTljMWUyZDFiYTcyOWE3OGIwMTZiYSIsIjVlODM0ZmJkZmI2OTMwNWFhMDkxZTgzMyIsIjVlODM0ZmM0ZmI2OTMwNWFhMDkxZTgzNCIsIjVlODM0ZmNiZmI2OTMwNWFhMDkxZTgzNSIsIjVlOTljMWVkZDFiYTcyOWE3OGIwMTZiYiIsIjVlODM0ZmYyZmI2OTMwNWFhMDkxZTgzNiIsIjVlOTljMjVhZDFiYTcyOWE3OGIwMTZiYyIsIjVlOTljMjgwZDFiYTcyOWE3OGIwMTZiZCIsIjVlOTljMjg3ZDFiYTcyOWE3OGIwMTZiZSIsIjVlN2UwNmE4MDg0OWI3MDhkNDE0ZGEwMSIsIjVlODM1MDM5ZmI2OTMwNWFhMDkxZTgzOCIsIjVlODM1MDNmZmI2OTMwNWFhMDkxZTgzOSIsIjVlOTljMmI0ZDFiYTcyOWE3OGIwMTZiZiIsIjVlOTljOGE5ZDFiYTcyOWE3OGIwMTZjMSIsIjVlYTZmYTI0NWZiNWQyNTY3YzZjYWQ1NCIsIjVlODM1MDVkZmI2OTMwNWFhMDkxZTgzYSIsIjVlODM1MDY3ZmI2OTMwNWFhMDkxZTgzYiIsIjVlODM1MDZkZmI2OTMwNWFhMDkxZTgzYyIsIjVlOTljMmMyZDFiYTcyOWE3OGIwMTZjMCIsIjVlOTljYjg1ZDFiYTcyOWE3OGIwMTZjMiJdLCJyb2xlSWQiOiI1ZTgxZmVmYmNlOGUyNjBhMzhkMGI1NzciLCJtYXJrIjoiNTYzZjQwNGU2MjkwOTRhMTAifSwiaWF0IjoxNjA5MTYwMTE2LCJleHAiOjE2MTE3NTIxMTZ9.UVWKgG-GCkA7Wa8TvwcnVUYAl5SIsIjyCQZSb_8O8WzchsfXt6W82Eg-YuB6ezcDbNI5XhPdSE_S_nV8kIcOJtDHsLUaGFOoKvBLGYEUAoGQp2r3jTOVBM20K9bxPdJlMmcin1CCxX_4sc_B6SyOtBHsoOyPbQLgS_x216yskjA\",\n \"Content-Type\": \"application/x-www-form-urlencoded;charset=UTF-8\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "token失效或错误:",
          "content": "{\n \"code\": 403,\n \"msg\": \"登录已过期,请重新登录\",\n \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "request",
    "url": "/",
    "title": "列表请求",
    "name": "pageInfo",
    "group": "APIINFO",
    "description": "<p>请求列表分页和排序参数，列表查询可根据返回的字段进行模糊查询，请求字段名同返回字段一致</p>",
    "version": "0.0.0",
    "filename": "apiDesc/api/common.js",
    "groupTitle": "系统说明",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "currentPage",
            "description": "<p>列表数据页码，默认为1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "pageSize",
            "description": "<p>列页每页展示的条数，默认为10</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sortBy",
            "description": "<p>排序字段参数，默认为createTime</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sortOrders",
            "description": "<p>-1或asc代表降序，1或desc代表升序，默认为-1</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n \"code\": \"10000\",\n \"msg\": \"获取列表数据成功\",\n \"data\": {\n   \"count\": 0,\n   \"data\": []\n }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/blogAdmin/article/add",
    "title": "文章新建",
    "name": "articleAdd",
    "group": "ARTICLE",
    "version": "0.0.0",
    "filename": "apiDesc/api/article.js",
    "groupTitle": "文章模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>文章标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>文章描述</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contentType",
            "description": "<p>文章编辑器类型，0-富文本，1-markdown</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>文章内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>文章发布状态：0-草稿，1-已发布，默认为0</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tags",
            "description": "<p>文章标签ID，逗号相隔如1,6,7</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "imgId",
            "description": "<p>封面图片ID</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "返回错误码code": [
          {
            "group": "BACKERRORPARAM",
            "type": "String",
            "optional": false,
            "field": "10001",
            "description": "<p>文章标题已存在</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"文章新增成功\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "DELETE",
    "url": "/blogAdmin/article/del/:id",
    "title": "文章删除",
    "name": "articleDel",
    "group": "ARTICLE",
    "version": "0.0.0",
    "filename": "apiDesc/api/article.js",
    "groupTitle": "文章模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": ":id",
            "description": "<p>文章ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"删除文章成功\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/blogAdmin/article/detail",
    "title": "管理界面文章详情",
    "name": "articleDetail",
    "group": "ARTICLE",
    "version": "0.0.0",
    "filename": "apiDesc/api/article.js",
    "groupTitle": "文章模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>文章ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "返回参数": [
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "contentType",
            "description": "<p>文章编辑器类型，0-富文本，1-markdown</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>文章统计对象</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "meta.viewTotal",
            "description": "<p>文章浏览总数</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "meta.likeTotal",
            "description": "<p>文章点赞总数</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "meta.commentTotal",
            "description": "<p>文章评论总数</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "meta.txtTotal",
            "description": "<p>文章字数总数</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "Object[]",
            "optional": false,
            "field": "linkUser",
            "description": "<p>点赞用户列表</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "Object[]",
            "optional": false,
            "field": "commentList",
            "description": "<p>评论用户列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n  \"code\": \"10000\",\n  \"msg\": \"获取文章详情成功\",\n  \"data\": {\n    \"meta\": {\n      \"viewTotal\": 90,\n      \"likeTotal\": 1,\n      \"commentTotal\": 1,\n      \"txtTotal\": 949\n    },\n    \"contentType\": \"0\",\n    \"imgId\": \"5e70cdf2b1867a5078888888\",\n    \"status\": \"1\",\n    \"tags\": [\n      {\n        \"bgColor\": \"#74A762\",\n        \"_id\": \"5e70cdf2b1867a5078888888\",\n        \"name\": \"node\"\n      }\n    ],\n    \"linkUser\": [\n      {\n        \"avatarId\": \"5e70cdf2b1867a5078888888\",\n        \"_id\": \"5e70cdf2b1867a5078888888\",\n        \"name\": \"sdj\"\n      }\n    ],\n    \"commentList\": [\n      {\n        \"isTop\": false,\n        \"status\": \"1\",\n        \"replyCommentNum\": 0,\n        \"replyCommentList\": [],\n        \"_id\": \"5f311d5c6ada83490c117a75\",\n        \"articleId\": \"5ec13327002a493ca863e23f\",\n        \"content\": \"haha\",\n        \"createUser\": {\n          \"avatarId\": \"5e70cdf2b1867a5078888888\",\n          \"_id\": \"5e70cdf2b1867a5078888888\",\n          \"name\": \"sdj\"\n        },\n        \"createTime\": \"2020-08-10 18:11:40\",\n        \"topUpdateTime\": \"2020-08-10 18:11:40\"\n      }\n    ],\n    \"_id\": \"5ec13327002a493ca863e23f\",\n    \"title\": \"node 知识点\",\n    \"description\": \"node 知识点\",\n    \"content\": \"<p>请求参数</p>\",\n    \"createUser\": {\n      \"avatarId\": \"5e70cdf2b1867a5078888888\",\n      \"_id\": \"5e70cdf2b1867a5078888888\",\n      \"name\": \"sdj\"\n    },\n    \"updateUser\": {\n      \"avatarId\": \"5e70cdf2b1867a5078888888\",\n      \"_id\": \"5e70cdf2b1867a5078888888\",\n      \"name\": \"sdj\"\n    },\n    \"createTime\": \"2020-05-17 20:50:47\",\n    \"updateTime\": \"2020-08-10 18:12:42\"\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "PUT",
    "url": "/blogAdmin/article/like",
    "title": "文章点赞",
    "name": "articleLike",
    "group": "ARTICLE",
    "version": "0.0.0",
    "filename": "apiDesc/api/article.js",
    "groupTitle": "文章模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>文章ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>点赞状态，0-取消点赞，1-点赞</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "返回错误码code": [
          {
            "group": "BACKERRORPARAM",
            "type": "String",
            "optional": false,
            "field": "10001",
            "description": "<p>已点赞，不要重复点赞</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"文章点赞成功\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/blogAdmin/article/list",
    "title": "管理界面文章列表",
    "name": "articleList",
    "description": "<p>后台管理页面获取文章页面，超级管理员可以获取所有文章列表，其他用户只可以获取自己以及子账号下文章</p>",
    "group": "ARTICLE",
    "version": "0.0.0",
    "filename": "apiDesc/api/article.js",
    "groupTitle": "文章模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "返回参数": [
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>文章发布状态：0-草稿，1-已发布</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "imgId",
            "description": "<p>文章封面ID</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>文章唯一标识ID</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>文章标题</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>文章描述</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "Object",
            "optional": false,
            "field": "createUser",
            "description": "<p>文章创建对象</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "Object",
            "optional": false,
            "field": "tags",
            "description": "<p>文章标签</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "tags.name",
            "description": "<p>文章标签名称</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "tags.bgColor",
            "description": "<p>文章标签显示背景</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>文章统计对象</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "meta.viewTotal",
            "description": "<p>文章浏览总数</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "meta.likeTotal",
            "description": "<p>文章点赞总数</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "meta.commentTotal",
            "description": "<p>文章评论总数</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "meta.txtTotal",
            "description": "<p>文章字数总数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n  \"code\": \"10000\",\n  \"msg\": \"获取文章列表成功\",\n  \"data\": {\n    \"count\": 1,\n    \"data\": [\n      {\n        \"meta\": {\n          \"viewTotal\": 68,\n          \"likeTotal\": 1,\n          \"commentTotal\": 0,\n          \"txtTotal\": 27555\n        },\n        \"imgId\": \"5e70cdf2b1867a5078888888\",\n        \"status\": \"1\",\n        \"tags\": [\n          {\n            \"bgColor\": \"#B5B506\",\n            \"_id\": \"5e70cdf2b1867a5078888888\",\n            \"name\": \"javascript\"\n          }\n        ],\n        \"_id\": \"5e70cdf2b1867a5078888888\",\n        \"title\": \"测试\",\n        \"description\": \"测试\",\n        \"createUser\": {\n          \"mark\": \"5e70cdf2b1867a5078888888\",\n          \"_id\": \"5e70cdf2b1867a5078888888\",\n          \"name\": \"sdj\"\n        },\n        \"createTime\": \"2020-08-12 09:23:00\"\n      }\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/blogPage/article/detail",
    "title": "展示界面文章详情",
    "name": "articlePageDetail",
    "group": "ARTICLE",
    "version": "0.0.0",
    "filename": "apiDesc/api/article.js",
    "groupTitle": "文章模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>无需token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>文章ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "返回参数": [
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "contentType",
            "description": "<p>文章编辑器类型，0-富文本，1-markdown</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>文章统计对象</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "meta.viewTotal",
            "description": "<p>文章浏览总数</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "meta.likeTotal",
            "description": "<p>文章点赞总数</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "meta.commentTotal",
            "description": "<p>文章评论总数</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "meta.txtTotal",
            "description": "<p>文章字数总数</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "Object[]",
            "optional": false,
            "field": "linkUser",
            "description": "<p>点赞用户列表</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "Object[]",
            "optional": false,
            "field": "commentList",
            "description": "<p>评论用户列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n  \"code\": \"10000\",\n  \"msg\": \"获取文章详情成功\",\n  \"data\": {\n    \"meta\": {\n      \"viewTotal\": 90,\n      \"likeTotal\": 1,\n      \"commentTotal\": 1,\n      \"txtTotal\": 949\n    },\n    \"contentType\": \"0\",\n    \"imgId\": \"5e70cdf2b1867a5078888888\",\n    \"status\": \"1\",\n    \"tags\": [\n      {\n        \"bgColor\": \"#74A762\",\n        \"_id\": \"5e70cdf2b1867a5078888888\",\n        \"name\": \"node\"\n      }\n    ],\n    \"linkUser\": [\n      {\n        \"avatarId\": \"5e70cdf2b1867a5078888888\",\n        \"_id\": \"5e70cdf2b1867a5078888888\",\n        \"name\": \"sdj\"\n      }\n    ],\n    \"commentList\": [\n      {\n        \"isTop\": false,\n        \"status\": \"1\",\n        \"replyCommentNum\": 0,\n        \"replyCommentList\": [],\n        \"_id\": \"5f311d5c6ada83490c117a75\",\n        \"articleId\": \"5ec13327002a493ca863e23f\",\n        \"content\": \"haha\",\n        \"createUser\": {\n          \"avatarId\": \"5e70cdf2b1867a5078888888\",\n          \"_id\": \"5e70cdf2b1867a5078888888\",\n          \"name\": \"sdj\"\n        },\n        \"createTime\": \"2020-08-10 18:11:40\",\n        \"topUpdateTime\": \"2020-08-10 18:11:40\"\n      }\n    ],\n    \"_id\": \"5ec13327002a493ca863e23f\",\n    \"title\": \"node 知识点\",\n    \"description\": \"node 知识点\",\n    \"content\": \"<p>请求参数</p>\",\n    \"createUser\": {\n      \"avatarId\": \"5e70cdf2b1867a5078888888\",\n      \"_id\": \"5e70cdf2b1867a5078888888\",\n      \"name\": \"sdj\"\n    },\n    \"updateUser\": {\n      \"avatarId\": \"5e70cdf2b1867a5078888888\",\n      \"_id\": \"5e70cdf2b1867a5078888888\",\n      \"name\": \"sdj\"\n    },\n    \"createTime\": \"2020-05-17 20:50:47\",\n    \"updateTime\": \"2020-08-10 18:12:42\"\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/blogPage/article/list",
    "title": "展示界面文章列表",
    "name": "articlePageList",
    "description": "<p>前端管理页面显示所有状态为已发布的文章</p>",
    "group": "ARTICLE",
    "version": "0.0.0",
    "filename": "apiDesc/api/article.js",
    "groupTitle": "文章模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>无需token认证授权</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "返回参数": [
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>文章发布状态：0-草稿，1-已发布</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "imgId",
            "description": "<p>文章封面ID</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>文章唯一标识ID</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>文章标题</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>文章描述</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "Object",
            "optional": false,
            "field": "createUser",
            "description": "<p>文章创建对象</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "Object",
            "optional": false,
            "field": "tags",
            "description": "<p>文章标签</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "tags.name",
            "description": "<p>文章标签名称</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "tags.bgColor",
            "description": "<p>文章标签显示背景</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>文章统计对象</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "meta.viewTotal",
            "description": "<p>文章浏览总数</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "meta.likeTotal",
            "description": "<p>文章点赞总数</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "meta.commentTotal",
            "description": "<p>文章评论总数</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "meta.txtTotal",
            "description": "<p>文章字数总数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n  \"code\": \"10000\",\n  \"msg\": \"获取文章列表成功\",\n  \"data\": {\n    \"count\": 1,\n    \"data\": [\n      {\n        \"meta\": {\n          \"viewTotal\": 68,\n          \"likeTotal\": 1,\n          \"commentTotal\": 0,\n          \"txtTotal\": 27555\n        },\n        \"imgId\": \"5e70cdf2b1867a5078888888\",\n        \"status\": \"1\",\n        \"tags\": [\n          {\n            \"bgColor\": \"#B5B506\",\n            \"_id\": \"5e70cdf2b1867a5078888888\",\n            \"name\": \"javascript\"\n          }\n        ],\n        \"_id\": \"5e70cdf2b1867a5078888888\",\n        \"title\": \"测试\",\n        \"description\": \"测试\",\n        \"createUser\": {\n          \"mark\": \"5e70cdf2b1867a5078888888\",\n          \"_id\": \"5e70cdf2b1867a5078888888\",\n          \"name\": \"sdj\"\n        },\n        \"createTime\": \"2020-08-12 09:23:00\"\n      }\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "PUT",
    "url": "/blogAdmin/article/update",
    "title": "文章编辑",
    "name": "articleUpdate",
    "group": "ARTICLE",
    "version": "0.0.0",
    "filename": "apiDesc/api/article.js",
    "groupTitle": "文章模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>文章ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>文章标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>文章描述</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "contentType",
            "description": "<p>文章编辑器类型，0-富文本，1-markdown</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "content",
            "description": "<p>文章内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "status",
            "description": "<p>文章发布状态：0-草稿，1-已发布，默认为0</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tags",
            "description": "<p>文章标签ID，逗号相隔如1,6,7</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "imgId",
            "description": "<p>封面图片ID</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "返回错误码code": [
          {
            "group": "BACKERRORPARAM",
            "type": "String",
            "optional": false,
            "field": "10001",
            "description": "<p>文章标题已存在</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"文章更新成功\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/blogAdmin/comment/add",
    "title": "一级评论新增",
    "name": "commentAdd",
    "group": "COMMENT",
    "version": "0.0.0",
    "filename": "apiDesc/api/comment.js",
    "groupTitle": "评论模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "articleId",
            "description": "<p>文章ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>评论内容</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"文章评论新增成功\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "DELETE",
    "url": "/blogAdmin/comment/del/:id",
    "title": "一级评论删除",
    "name": "commentDel",
    "group": "COMMENT",
    "version": "0.0.0",
    "filename": "apiDesc/api/comment.js",
    "groupTitle": "评论模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": ":id",
            "description": "<p>评论ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"删除文章评论成功\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/blogAdmin/comment/list",
    "title": "管理界面评论列表",
    "name": "commentList",
    "description": "<p>文章一级评论列表</p>",
    "group": "COMMENT",
    "version": "0.0.0",
    "filename": "apiDesc/api/comment.js",
    "groupTitle": "评论模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "返回参数": [
          {
            "group": "BACKPARAM",
            "type": "Boolean",
            "optional": false,
            "field": "isTop",
            "description": "<p>置顶状态：true-置顶</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>评论显示状态：0-待审核，1-审核通过</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "Number",
            "optional": false,
            "field": "replyCommentNum",
            "description": "<p>回复评论条数</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "Objrct[]",
            "optional": false,
            "field": "replyCommentList",
            "description": "<p>回复评论列表</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>评论内容</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>评论标识ID</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "topUpdateTime",
            "description": "<p>置顶更新时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n  \"code\": \"10000\",\n  \"msg\": \"获取评论列表成功\",\n  \"data\": {\n    \"count\": 1,\n    \"data\": [\n      {\n        \"isTop\": false,\n        \"status\": \"1\",\n        \"replyCommentNum\": 1,\n        \"replyCommentList\": [\n          {\n            \"status\": \"1\",\n            \"_id\": \"5e70cdf2b1867a5078888888\",\n            \"articleId\": \"5e70cdf2b1867a5078888888\",\n            \"commentId\": \"5e70cdf2b1867a5078888888\",\n            \"toUser\": {\n              \"avatarId\": \"5e70cdf2b1867a5078888888\",\n              \"_id\": \"5e70cdf2b1867a5078888888\",\n              \"name\": \"sdj\"\n            },\n            \"content\": \"asdsadsasa\",\n            \"replyUser\": {\n              \"avatarId\": \"5e70cdf2b1867a5078888888\",\n              \"_id\": \"5e70cdf2b1867a5078888888\",\n              \"name\": \"sdj\"\n            },\n            \"createTime\": \"2020-08-10 22:17:12\"\n          }\n        ],\n        \"_id\": \"5e70cdf2b1867a5078888888\",\n        \"articleId\": {\n          \"_id\": \"5e70cdf2b1867a5078888888\",\n          \"title\": \"移动端知识点\"\n        },\n        \"content\": \"sda\",\n        \"createUser\": {\n          \"avatarId\": \"5e70cdf2b1867a5078888888\",\n          \"_id\": \"5e70cdf2b1867a5078888888\",\n          \"name\": \"sdj\"\n        },\n        \"createTime\": \"2020-08-10 22:16:46\",\n        \"topUpdateTime\": \"2020-08-10 22:17:28\"\n      }\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/blogPage/comment/list",
    "title": "展示界面评论列表",
    "name": "commentPageList",
    "description": "<p>文章一级评论l列表</p>",
    "group": "COMMENT",
    "version": "0.0.0",
    "filename": "apiDesc/api/comment.js",
    "groupTitle": "评论模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "返回参数": [
          {
            "group": "BACKPARAM",
            "type": "Boolean",
            "optional": false,
            "field": "isTop",
            "description": "<p>置顶状态：true-置顶</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>评论显示状态：0-待审核，1-审核通过</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "Number",
            "optional": false,
            "field": "replyCommentNum",
            "description": "<p>回复评论条数</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "Objrct[]",
            "optional": false,
            "field": "replyCommentList",
            "description": "<p>回复评论列表</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>评论内容</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>评论标识ID</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "topUpdateTime",
            "description": "<p>置顶更新时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n  \"code\": \"10000\",\n  \"msg\": \"获取评论列表成功\",\n  \"data\": {\n    \"count\": 1,\n    \"data\": [\n      {\n        \"isTop\": false,\n        \"status\": \"1\",\n        \"replyCommentNum\": 1,\n        \"replyCommentList\": [\n          {\n            \"status\": \"1\",\n            \"_id\": \"5e70cdf2b1867a5078888888\",\n            \"articleId\": \"5e70cdf2b1867a5078888888\",\n            \"commentId\": \"5e70cdf2b1867a5078888888\",\n            \"toUser\": {\n              \"avatarId\": \"5e70cdf2b1867a5078888888\",\n              \"_id\": \"5e70cdf2b1867a5078888888\",\n              \"name\": \"sdj\"\n            },\n            \"content\": \"asdsadsasa\",\n            \"replyUser\": {\n              \"avatarId\": \"5e70cdf2b1867a5078888888\",\n              \"_id\": \"5e70cdf2b1867a5078888888\",\n              \"name\": \"sdj\"\n            },\n            \"createTime\": \"2020-08-10 22:17:12\"\n          }\n        ],\n        \"_id\": \"5e70cdf2b1867a5078888888\",\n        \"articleId\": {\n          \"_id\": \"5e70cdf2b1867a5078888888\",\n          \"title\": \"移动端知识点\"\n        },\n        \"content\": \"sda\",\n        \"createUser\": {\n          \"avatarId\": \"5e70cdf2b1867a5078888888\",\n          \"_id\": \"5e70cdf2b1867a5078888888\",\n          \"name\": \"sdj\"\n        },\n        \"createTime\": \"2020-08-10 22:16:46\",\n        \"topUpdateTime\": \"2020-08-10 22:17:28\"\n      }\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "PUT",
    "url": "/blogAdmin/comment/sticky",
    "title": "一级评论置顶",
    "name": "commentSticky",
    "group": "COMMENT",
    "version": "0.0.0",
    "filename": "apiDesc/api/comment.js",
    "groupTitle": "评论模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "commentId",
            "description": "<p>评论标识ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "isTop",
            "description": "<p>评论置顶状态：1或true为置顶，0或false取消置顶</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"评论置顶更换成功\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "PUT",
    "url": "/blogAdmin/comment/update",
    "title": "一级评论编辑",
    "name": "commentUpdate",
    "group": "COMMENT",
    "version": "0.0.0",
    "filename": "apiDesc/api/comment.js",
    "groupTitle": "评论模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "commentId",
            "description": "<p>评论标识ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "content",
            "description": "<p>评论内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "status",
            "description": "<p>评论状态</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"一级评论内容更新成功\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/blogAdmin/link/add",
    "title": "链接新增",
    "name": "linkAdd",
    "group": "LINK",
    "version": "0.0.0",
    "filename": "apiDesc/api/link.js",
    "groupTitle": "链接模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>链接名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "linkAddress",
            "description": "<p>链接地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "color",
            "description": "<p>链接颜色</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "返回错误码code": [
          {
            "group": "BACKERRORPARAM",
            "type": "String",
            "optional": false,
            "field": "10001",
            "description": "<p>友情链接名称已存在</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"友情链接新增成功\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "DELETE",
    "url": "/blogAdmin/link/del/:id",
    "title": "链接删除",
    "name": "linkDel",
    "group": "LINK",
    "version": "0.0.0",
    "filename": "apiDesc/api/link.js",
    "groupTitle": "链接模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>链接标识ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"删除友情链接成功\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/blogAdmin/link/list",
    "title": "管理界面链接列表",
    "name": "linkList",
    "group": "LINK",
    "version": "0.0.0",
    "filename": "apiDesc/api/link.js",
    "groupTitle": "链接模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "返回参数": [
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>链接标识ID</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>链接背景颜色</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>链接名称</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "linkAddress",
            "description": "<p>链接地址</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n  \"code\": \"10000\",\n  \"msg\": \"获取友情链接列表成功\",\n  \"data\": {\n    \"count\": 1,\n    \"data\": [\n      {\n        \"color\": \"#F7D699\",\n        \"_id\": \"5e70cdf2b1867a5078888888\",\n        \"name\": \"咚子\",\n        \"linkAddress\": \"http://dzblog.cn/\",\n        \"createTime\": \"2020-05-07 14:51:04\",\n        \"updateTime\": \"2020-05-07 15:05:03\"\n      }\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/blogPage/link/list",
    "title": "展示界面链接列表",
    "name": "linkPageList",
    "group": "LINK",
    "version": "0.0.0",
    "filename": "apiDesc/api/link.js",
    "groupTitle": "链接模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>无需token认证授权</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "返回参数": [
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>链接标识ID</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>链接背景颜色</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>链接名称</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "linkAddress",
            "description": "<p>链接地址</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n  \"code\": \"10000\",\n  \"msg\": \"获取友情链接列表成功\",\n  \"data\": {\n    \"count\": 1,\n    \"data\": [\n      {\n        \"color\": \"#F7D699\",\n        \"_id\": \"5e70cdf2b1867a5078888888\",\n        \"name\": \"咚子\",\n        \"linkAddress\": \"http://dzblog.cn/\",\n        \"createTime\": \"2020-05-07 14:51:04\",\n        \"updateTime\": \"2020-05-07 15:05:03\"\n      }\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "PUT",
    "url": "/blogAdmin/link/update",
    "title": "链接编辑",
    "name": "linkUpdate",
    "group": "LINK",
    "version": "0.0.0",
    "filename": "apiDesc/api/link.js",
    "groupTitle": "链接模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>链接标识ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>链接名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "linkAddress",
            "description": "<p>链接地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "color",
            "description": "<p>链接颜色</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "返回错误码code": [
          {
            "group": "BACKERRORPARAM",
            "type": "String",
            "optional": false,
            "field": "10001",
            "description": "<p>友情链接名称已存在</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"更新功能信息成功\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/blogAdmin/functionOper/add",
    "title": "功能新增",
    "name": "functionAdd",
    "group": "MENUFUNCTION",
    "version": "0.0.0",
    "filename": "apiDesc/api/menuFunction.js",
    "groupTitle": "菜单功能模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "menuId",
            "description": "<p>归属菜单ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>功能名称</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "返回错误码code": [
          {
            "group": "BACKERRORPARAM",
            "type": "String",
            "optional": false,
            "field": "10001",
            "description": "<p>功能名称已存在</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"功能新增成功\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "DELETE",
    "url": "/blogAdmin/functionOper/del/:id",
    "title": "功能删除",
    "name": "functionDelete",
    "group": "MENUFUNCTION",
    "version": "0.0.0",
    "filename": "apiDesc/api/menuFunction.js",
    "groupTitle": "菜单功能模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>功能标识ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"删除功能信息成功\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/blogAdmin/functionOper/list",
    "title": "功能列表",
    "name": "functionList",
    "group": "MENUFUNCTION",
    "version": "0.0.0",
    "filename": "apiDesc/api/menuFunction.js",
    "groupTitle": "菜单功能模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "返回参数": [
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>功能标识ID</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>功能名称</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "Object",
            "optional": false,
            "field": "menuId",
            "description": "<p>归属菜单</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n  \"code\": \"10000\",\n  \"msg\": \"获取功能列表成功\",\n  \"data\": {\n    \"count\": 3,\n    \"data\": [\n      {\n        \"_id\": \"5e70cdf2b1867a5078888888\",\n        \"title\": \"删除项目\",\n        \"menuId\": {\n          \"_id\": \"5e70cdf2b1867a5078888888\",\n          \"title\": \"项目管理\"\n        },\n        \"createTime\": \"2020-03-31 22:11:35\"\n      },\n      {\n        \"_id\": \"5e70cdf2b1867a5078888888\",\n        \"title\": \"编辑项目\",\n        \"menuId\": {\n          \"_id\": \"5e70cdf2b1867a5078888888\",\n          \"title\": \"项目管理\"\n        },\n        \"createTime\": \"2020-03-31 22:11:28\"\n      },\n      {\n        \"_id\": \"5e70cdf2b1867a5078888888\",\n        \"title\": \"新增项目\",\n        \"menuId\": {\n          \"_id\": \"5e70cdf2b1867a5078888888\",\n          \"title\": \"项目管理\"\n        },\n        \"createTime\": \"2020-03-31 22:11:20\"\n      }\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "PUT",
    "url": "/blogAdmin/functionOper/update",
    "title": "功能编辑",
    "name": "functionUpdate",
    "group": "MENUFUNCTION",
    "version": "0.0.0",
    "filename": "apiDesc/api/menuFunction.js",
    "groupTitle": "菜单功能模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>功能标识ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>功能名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "menuId",
            "description": "<p>归属菜单ID</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "返回错误码code": [
          {
            "group": "BACKERRORPARAM",
            "type": "String",
            "optional": false,
            "field": "10001",
            "description": "<p>功能名称已存在</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"更新功能信息成功\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/blogAdmin/menu/add",
    "title": "菜单新增",
    "name": "menuAdd",
    "group": "MENUFUNCTION",
    "version": "0.0.0",
    "filename": "apiDesc/api/menuFunction.js",
    "groupTitle": "菜单功能模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>菜单名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parentId",
            "description": "<p>父级菜单ID，默认0为顶级系统菜单</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>菜单描述</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "返回错误码code": [
          {
            "group": "BACKERRORPARAM",
            "type": "String",
            "optional": false,
            "field": "10001",
            "description": "<p>菜单标题已存在</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"菜单新增成功\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "DELETE",
    "url": "/blogAdmin/menu/del/:id",
    "title": "菜单删除",
    "name": "menuDelete",
    "group": "MENUFUNCTION",
    "version": "0.0.0",
    "filename": "apiDesc/api/menuFunction.js",
    "groupTitle": "菜单功能模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>菜单标识ID</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "返回错误码code": [
          {
            "group": "BACKERRORPARAM",
            "type": "String",
            "optional": false,
            "field": "10001",
            "description": "<p>菜单存在功能列表，请先删除功能列表</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"删除菜单成功\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/blogAdmin/menu/list",
    "title": "菜单列表",
    "name": "menuList",
    "group": "MENUFUNCTION",
    "version": "0.0.0",
    "filename": "apiDesc/api/menuFunction.js",
    "groupTitle": "菜单功能模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "返回参数": [
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>菜单名称</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>菜单描述</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "parentId",
            "description": "<p>父级菜单ID</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "Object",
            "optional": false,
            "field": "supMenu",
            "description": "<p>父级菜单对象</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "Object[]",
            "optional": false,
            "field": "functionList",
            "description": "<p>功能列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n  \"code\": \"10000\",\n  \"msg\": \"获取菜单列表成功\",\n  \"data\": {\n    \"count\": 12,\n    \"data\": [\n      {\n        \"parentId\": \"5e70cdf2b1867a5078888888\",\n        \"functionList\": [\n          {\n            \"_id\": \"5e70cdf2b1867a5078888888\",\n            \"title\": \"新增项目\",\n            \"menuId\": \"5e70cdf2b1867a5078888888\",\n            \"createTime\": \"2020-03-31 22:11:20\"\n          },\n          {\n            \"_id\": \"5e70cdf2b1867a5078888888\",\n            \"title\": \"编辑项目\",\n            \"menuId\": \"5e70cdf2b1867a5078888888\",\n            \"createTime\": \"2020-03-31 22:11:28\"\n          },\n          {\n            \"_id\": \"5e70cdf2b1867a5078888888\",\n            \"title\": \"删除项目\",\n            \"menuId\": \"5e70cdf2b1867a5078888888\",\n            \"createTime\": \"2020-03-31 22:11:35\"\n          },\n          {\n            \"_id\": \"5e70cdf2b1867a5078888888\",\n            \"title\": \"浏览项目\",\n            \"menuId\": \"5e70cdf2b1867a5078888888\",\n            \"createTime\": \"2020-04-17 22:48:57\"\n          }\n        ],\n        \"_id\": \"5e70cdf2b1867a5078888888\",\n        \"title\": \"项目管理\",\n        \"description\": \"项目管理\",\n        \"createTime\": \"2020-03-24 21:58:08\",\n        \"supMenu\": {\n          \"parentId\": \"0\",\n          \"functionList\": [\n\n          ],\n          \"_id\": \"5e70cdf2b1867a5078888888\",\n          \"title\": \"系统菜单\",\n          \"description\": \"系统菜单\",\n          \"createTime\": \"2020-03-24 05:27:22\"\n        }\n      },\n      {\n        \"parentId\": \"0\",\n        \"functionList\": [\n\n        ],\n        \"_id\": \"5e70cdf2b1867a5078888888\",\n        \"title\": \"系统菜单\",\n        \"description\": \"系统菜单\",\n        \"createTime\": \"2020-03-24 05:27:22\"\n      }\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/blogAdmin/menu/tree",
    "title": "菜单功能树",
    "name": "menuTree",
    "description": "<p>菜单功能数据从扁平结构转为树型结构数据展示</p>",
    "group": "MENUFUNCTION",
    "version": "0.0.0",
    "filename": "apiDesc/api/menuFunction.js",
    "groupTitle": "菜单功能模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "返回参数": [
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>菜单名称</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>菜单描述</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "parentId",
            "description": "<p>父级菜单ID</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "Object[]",
            "optional": false,
            "field": "children",
            "description": "<p>子级树结构</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "Object[]",
            "optional": false,
            "field": "functionList",
            "description": "<p>功能列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n  \"code\": \"10000\",\n  \"msg\": \"获取菜单功能树成功\",\n  \"data\": [\n    {\n      \"parentId\": \"0\",\n      \"functionList\": [],\n      \"_id\": \"5e70cdf2b1867a5078888888\",\n      \"title\": \"系统菜单\",\n      \"description\": \"系统菜单\",\n      \"createTime\": \"2020-03-24 05:27:22\",\n      \"children\": [\n        {\n          \"parentId\": \"5e70cdf2b1867a5078888888\",\n          \"functionList\": [\n            {\n              \"_id\": \"5e70cdf2b1867a5078888888\",\n              \"title\": \"新增项目\",\n              \"menuId\": \"5e70cdf2b1867a5078888888\",\n              \"createTime\": \"2020-03-31 22:11:20\"\n            },\n            {\n              \"_id\": \"5e70cdf2b1867a5078888888\",\n              \"title\": \"编辑项目\",\n              \"menuId\": \"5e70cdf2b1867a5078888888\",\n              \"createTime\": \"2020-03-31 22:11:28\"\n            },\n            {\n              \"_id\": \"5e70cdf2b1867a5078888888\",\n              \"title\": \"删除项目\",\n              \"menuId\": \"5e70cdf2b1867a5078888888\",\n              \"createTime\": \"2020-03-31 22:11:35\"\n            },\n            {\n              \"_id\": \"5e70cdf2b1867a5078888888\",\n              \"title\": \"浏览项目\",\n              \"menuId\": \"5e70cdf2b1867a5078888888\",\n              \"createTime\": \"2020-04-17 22:48:57\"\n            }\n          ],\n          \"_id\": \"5e70cdf2b1867a5078888888\",\n          \"title\": \"项目管理\",\n          \"description\": \"项目管理\",\n          \"createTime\": \"2020-03-24 21:58:08\",\n          \"supMenu\": {\n            \"parentId\": \"0\",\n            \"functionList\": [],\n            \"_id\": \"5e70cdf2b1867a5078888888\",\n            \"title\": \"系统菜单\",\n            \"description\": \"系统菜单\",\n            \"createTime\": \"2020-03-24 05:27:22\"\n          }\n        }]\n        }\n      ]\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "PUT",
    "url": "/blogAdmin/menu/update",
    "title": "菜单编辑",
    "name": "menuUpdate",
    "group": "MENUFUNCTION",
    "version": "0.0.0",
    "filename": "apiDesc/api/menuFunction.js",
    "groupTitle": "菜单功能模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>菜单标识ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>菜单名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "parentId",
            "description": "<p>父级菜单ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>菜单描述</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "返回错误码code": [
          {
            "group": "BACKERRORPARAM",
            "type": "String",
            "optional": false,
            "field": "10001",
            "description": "<p>菜单标题已存在</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"更新菜单信息成功\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/blogAdmin/message/add",
    "title": "管理界面留言新增",
    "name": "messageAdd",
    "group": "MESSAGE",
    "version": "0.0.0",
    "filename": "apiDesc/api/message.js",
    "groupTitle": "留言模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>留言内容</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"留言新增成功\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "DELETE",
    "url": "/blogAdmin/message/del/:id",
    "title": "留言删除",
    "name": "messageDel",
    "group": "MESSAGE",
    "version": "0.0.0",
    "filename": "apiDesc/api/message.js",
    "groupTitle": "留言模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>留言标识ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"删除留言信息成功\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/blogAdmin/message/list",
    "title": "管理界面留言列表",
    "name": "messageList",
    "group": "MESSAGE",
    "version": "0.0.0",
    "filename": "apiDesc/api/message.js",
    "groupTitle": "留言模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "返回参数": [
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>留言标识ID</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>留言状态：0-待审核，1-通过</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>留言内容</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "Object",
            "optional": false,
            "field": "createUser",
            "description": "<p>创建者</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"获取留言列表成功\",\n    \"data\": {\n        \"count\": 2,\n        \"data\": [\n            {\n                \"status\": \"1\",\n                \"_id\": \"5e70cdf2b1867a5078888888\",\n                \"content\": \"哈哈\",\n                \"createUser\": {\n                    \"avatarId\": \"5e70cdf2b1867a5078888888\",\n                    \"_id\": \"5e70cdf2b1867a5078888888\",\n                    \"name\": \"sdj\",\n                    \"createTime\": \"2020-03-17 21:17:38\"\n                },\n                \"createTime\": \"2020-12-22 09:34:46\"\n            },\n            {\n                \"status\": \"1\",\n                \"_id\": \"5e70cdf2b1867a5078888888\",\n                \"content\": \"haha\",\n                \"createUser\": {\n                    \"avatarId\": \"5e70cdf2b1867a5078888888\",\n                    \"_id\": \"5e70cdf2b1867a5078888888\",\n                    \"name\": \"sdj\",\n                    \"createTime\": \"2020-03-17 21:17:38\"\n                },\n                \"createTime\": \"2020-08-26 13:47:21\"\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/blogPage/message/add",
    "title": "展示界面留言新增",
    "name": "messagePageAdd",
    "group": "MESSAGE",
    "version": "0.0.0",
    "filename": "apiDesc/api/message.js",
    "groupTitle": "留言模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>留言内容</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"留言新增成功\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/blogPage/message/list",
    "title": "展示界面留言列表",
    "name": "messagePageList",
    "description": "<p>只显示审核通过的留言</p>",
    "group": "MESSAGE",
    "version": "0.0.0",
    "filename": "apiDesc/api/message.js",
    "groupTitle": "留言模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>无需token认证授权</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "返回参数": [
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>留言标识ID</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>留言状态：0-待审核，1-通过</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>留言内容</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "Object",
            "optional": false,
            "field": "createUser",
            "description": "<p>创建者</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"获取留言列表成功\",\n    \"data\": {\n        \"count\": 2,\n        \"data\": [\n            {\n                \"status\": \"1\",\n                \"_id\": \"5e70cdf2b1867a5078888888\",\n                \"content\": \"哈哈\",\n                \"createUser\": {\n                    \"avatarId\": \"5e70cdf2b1867a5078888888\",\n                    \"_id\": \"5e70cdf2b1867a5078888888\",\n                    \"name\": \"sdj\",\n                    \"createTime\": \"2020-03-17 21:17:38\"\n                },\n                \"createTime\": \"2020-12-22 09:34:46\"\n            },\n            {\n                \"status\": \"1\",\n                \"_id\": \"5e70cdf2b1867a5078888888\",\n                \"content\": \"haha\",\n                \"createUser\": {\n                    \"avatarId\": \"5e70cdf2b1867a5078888888\",\n                    \"_id\": \"5e70cdf2b1867a5078888888\",\n                    \"name\": \"sdj\",\n                    \"createTime\": \"2020-03-17 21:17:38\"\n                },\n                \"createTime\": \"2020-08-26 13:47:21\"\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "PUT",
    "url": "/blogAdmin/message/update",
    "title": "留言编辑",
    "name": "messageUpdate",
    "group": "MESSAGE",
    "version": "0.0.0",
    "filename": "apiDesc/api/message.js",
    "groupTitle": "留言模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>留言标识ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "content",
            "description": "<p>留言内容</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"更新留言信息成功\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/blogAdmin/project/add",
    "title": "项目新增",
    "name": "projectAdd",
    "group": "PROJECT",
    "version": "0.0.0",
    "filename": "apiDesc/api/project.js",
    "groupTitle": "项目模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>项目名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>项目描述</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "linkUrl",
            "description": "<p>项目地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "imgId",
            "description": "<p>项目封面图片ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "startTime",
            "description": "<p>项目开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "endTime",
            "description": "<p>项目结束时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "status",
            "description": "<p>项目状态：1-已完成 2-进行中 3-已废弃，默认为2</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "返回错误码code": [
          {
            "group": "BACKERRORPARAM",
            "type": "String",
            "optional": false,
            "field": "10001",
            "description": "<p>项目名称已存在</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"项目新增成功\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "DELETE",
    "url": "/blogAdmin/project/del/:id",
    "title": "项目删除",
    "name": "projectDel",
    "group": "PROJECT",
    "version": "0.0.0",
    "filename": "apiDesc/api/project.js",
    "groupTitle": "项目模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>项目标识ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"删除项目信息成功\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/blogAdmin/project/list",
    "title": "管理界面项目列表",
    "name": "projectList",
    "group": "PROJECT",
    "version": "0.0.0",
    "filename": "apiDesc/api/project.js",
    "groupTitle": "项目模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "返回参数": [
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>项目标识ID</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>项目状态：1-已完成 2-进行中 3-已废弃</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "imgId",
            "description": "<p>项目封面图片ID</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "linkUrl",
            "description": "<p>项目地址</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "startTime",
            "description": "<p>项目开始时间</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "endTime",
            "description": "<p>项目结束时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"获取项目列表成功\",\n    \"data\": {\n        \"count\": 1,\n        \"data\": [\n            {\n                \"imgId\": \"5e70cdf2b1867a5078888888\",\n                \"status\": \"2\",\n                \"endTime\": \"\",\n                \"_id\": \"5e70cdf2b1867a5078888888\",\n                \"name\": \"blog-node\",\n                \"linkUrl\": \"https://gitee.com/sdj_work/blog-node\",\n                \"startTime\": \"2020-03-10\",\n                \"description\": \"博客 node\",\n                \"createTime\": \"2020-05-18 14:56:44\",\n                \"updateTime\": \"2020-05-18 14:56:44\"\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/blogPage/project/list",
    "title": "展示界面项目列表",
    "name": "projectPageList",
    "group": "PROJECT",
    "version": "0.0.0",
    "filename": "apiDesc/api/project.js",
    "groupTitle": "项目模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>无需token认证授权</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "返回参数": [
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>项目标识ID</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>项目状态：1-已完成 2-进行中 3-已废弃</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "imgId",
            "description": "<p>项目封面图片ID</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "linkUrl",
            "description": "<p>项目地址</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "startTime",
            "description": "<p>项目开始时间</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "endTime",
            "description": "<p>项目结束时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"获取项目列表成功\",\n    \"data\": {\n        \"count\": 1,\n        \"data\": [\n            {\n                \"imgId\": \"5e70cdf2b1867a5078888888\",\n                \"status\": \"2\",\n                \"endTime\": \"\",\n                \"_id\": \"5e70cdf2b1867a5078888888\",\n                \"name\": \"blog-node\",\n                \"linkUrl\": \"https://gitee.com/sdj_work/blog-node\",\n                \"startTime\": \"2020-03-10\",\n                \"description\": \"博客 node\",\n                \"createTime\": \"2020-05-18 14:56:44\",\n                \"updateTime\": \"2020-05-18 14:56:44\"\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "PUT",
    "url": "/blogAdmin/project/update",
    "title": "项目编辑",
    "name": "projectUpdate",
    "group": "PROJECT",
    "version": "0.0.0",
    "filename": "apiDesc/api/project.js",
    "groupTitle": "项目模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>项目标识ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>项目名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>项目描述</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "linkUrl",
            "description": "<p>项目地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "imgId",
            "description": "<p>项目封面图片ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "startTime",
            "description": "<p>项目开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "endTime",
            "description": "<p>项目结束时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "status",
            "description": "<p>项目状态：1-已完成 2-进行中 3-已废弃</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "返回错误码code": [
          {
            "group": "BACKERRORPARAM",
            "type": "String",
            "optional": false,
            "field": "10001",
            "description": "<p>项目名称已存在</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"更新项目信息成功\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/blogAdmin/replyComment/add",
    "title": "评论回复新增",
    "name": "replyCommentAdd",
    "group": "REPLYCOMMENT",
    "version": "0.0.0",
    "filename": "apiDesc/api/replyComment.js",
    "groupTitle": "评论回复模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "articleId",
            "description": "<p>文章ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "commentId",
            "description": "<p>一级评论ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>评论内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "toUser",
            "description": "<p>评论对象用户ID，即对谁评论</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"回复评论添加成功\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "DELETE",
    "url": "/blogAdmin/replyComment/del/:id",
    "title": "评论回复删除",
    "name": "replyCommentDel",
    "group": "REPLYCOMMENT",
    "version": "0.0.0",
    "filename": "apiDesc/api/replyComment.js",
    "groupTitle": "评论回复模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": ":id",
            "description": "<p>评论回复ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"删除回复评论成功\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/blogAdmin/replyComment/list",
    "title": "评论回复列表",
    "name": "replyCommentList",
    "group": "REPLYCOMMENT",
    "version": "0.0.0",
    "filename": "apiDesc/api/replyComment.js",
    "groupTitle": "评论回复模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "返回参数": [
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>评论显示状态：0-待审核，1-审核通过</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>回复评论ID</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "articleId",
            "description": "<p>文章ID</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "commentId",
            "description": "<p>一级评论ID</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>评论内容</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "Object",
            "optional": false,
            "field": "toUser",
            "description": "<p>被评论者</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "Object",
            "optional": false,
            "field": "replyUser",
            "description": "<p>评论者</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"获取回复评论列表成功\",\n    \"data\": {\n        \"count\": 1,\n        \"data\": [\n           {\n             \"status\": \"1\",\n             \"_id\": \"5e70cdf2b1867a5078888888\",\n             \"articleId\": \"5e70cdf2b1867a5078888888\",\n             \"commentId\": \"5e70cdf2b1867a5078888888\",\n             \"toUser\": {\n                 \"avatarId\": \"5e70cdf2b1867a5078888888\",\n                 \"_id\": \"5e70cdf2b1867a5078888888\",\n                 \"name\": \"sdj\"\n             },\n             \"content\": \"ss\",\n             \"replyUser\": {\n                 \"avatarId\": \"5e70cdf2b1867a5078888888\",\n                 \"_id\": \"5e70cdf2b1867a5078888888\",\n                 \"name\": \"sdj\"\n             },\n             \"createTime\": \"2020-12-22 17:51:02\"\n           }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "PUT",
    "url": "/blogAdmin/replyComment/update",
    "title": "评论回复编辑",
    "name": "replyCommentUpdate",
    "group": "REPLYCOMMENT",
    "version": "0.0.0",
    "filename": "apiDesc/api/replyComment.js",
    "groupTitle": "评论回复模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "replayId",
            "description": "<p>回复评论标识ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "content",
            "description": "<p>评论内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "status",
            "description": "<p>评论显示状态：0-待审核，1-审核通过</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"回复评论更新成功\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/blogAdmin/role/add",
    "title": "角色新增",
    "name": "roleAdd",
    "group": "ROLE",
    "version": "0.0.0",
    "filename": "apiDesc/api/role.js",
    "groupTitle": "角色模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>角色名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>角色描述</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "返回错误码code": [
          {
            "group": "BACKERRORPARAM",
            "type": "String",
            "optional": false,
            "field": "10001",
            "description": "<p>角色名称已存在</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"角色新增成功\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/blogAdmin/role/getAuth",
    "title": "角色权限列表",
    "name": "roleAuthList",
    "description": "<p>查询属于该角色的菜单功能权限</p>",
    "group": "ROLE",
    "version": "0.0.0",
    "filename": "apiDesc/api/role.js",
    "groupTitle": "角色模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "返回参数": [
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>功能标识ID</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "menuId",
            "description": "<p>菜单标识ID</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>功能标题</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"获取角色权限成功\",\n    \"data\": [\n        {\n            \"_id\": \"5e70cdf2b1867a5078888888\",\n            \"title\": \"新增文章\",\n            \"menuId\": \"5e70cdf2b1867a5078888888\",\n            \"createTime\": \"2020-03-31 22:09:39\"\n        },\n        {\n            \"_id\": \"5e70cdf2b1867a5078888888\",\n            \"title\": \"编辑文章\",\n            \"menuId\": \"5e70cdf2b1867a5078888888\",\n            \"createTime\": \"2020-03-31 22:09:46\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "DELETE",
    "url": "/blogAdmin/role/del/:id",
    "title": "角色删除",
    "name": "roleDel",
    "group": "ROLE",
    "version": "0.0.0",
    "filename": "apiDesc/api/role.js",
    "groupTitle": "角色模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>角色标识ID</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "返回错误码code": [
          {
            "group": "BACKERRORPARAM",
            "type": "String",
            "optional": false,
            "field": "10008",
            "description": "<p>该角色暂不支持删除，只能删除type为4的角色，1-超级管理员 2-管理员 3-普通用户 4-其它角色</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"删除角色成功\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/blogAdmin/role/list",
    "title": "角色列表",
    "name": "roleList",
    "group": "ROLE",
    "version": "0.0.0",
    "filename": "apiDesc/api/role.js",
    "groupTitle": "角色模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "返回参数": [
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>角色标识ID</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>角色状态：0-禁用 1-启用</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>角色类型：1-超级管理员 2-管理员 3-普通用户 4-其它角色</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>角色名称</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>角色描述</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String[]",
            "optional": false,
            "field": "functionList",
            "description": "<p>角色功能权限列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n  \"code\": \"10000\",\n  \"msg\": \"获取角色列表成功\",\n  \"data\": {\n    \"count\": 1,\n    \"data\": [\n      {\n        \"type\": \"2\",\n        \"status\": \"1\",\n        \"functionList\": [\n          \"5e70cdf2b1867a5078888888\"\n        ],\n        \"_id\": \"5e70cdf2b1867a5078888888\",\n        \"name\": \"管理员\",\n        \"description\": \"拥有后台部分操作权限\",\n        \"createTime\": \"2020-03-30 22:15:41\"\n      }\n    ]\n  }\n}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "PUT",
    "url": "/blogAdmin/role/updateMuchUser",
    "title": "用户绑定角色",
    "name": "roleMuchUser",
    "description": "<p>批量导入用户或移除用户到某角色</p>",
    "group": "ROLE",
    "version": "0.0.0",
    "filename": "apiDesc/api/role.js",
    "groupTitle": "角色模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roleId",
            "description": "<p>角色标识ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ids",
            "description": "<p>所选用户列表，用户ID用逗号相隔，如2,5,7</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>操作类型， 1-移除用户 0-导入用户 默认为0</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "返回错误码code": [
          {
            "group": "BACKERRORPARAM",
            "type": "String",
            "optional": false,
            "field": "10008",
            "description": "<p>所传用户或角色为空</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"用户角色操作成功\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "PUT",
    "url": "/blogAdmin/role/update",
    "title": "角色编辑",
    "name": "roleUpdate",
    "group": "ROLE",
    "version": "0.0.0",
    "filename": "apiDesc/api/role.js",
    "groupTitle": "角色模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>角色标识ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>角色名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>角色描述</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "返回错误码code": [
          {
            "group": "BACKERRORPARAM",
            "type": "String",
            "optional": false,
            "field": "10001",
            "description": "<p>角色名称已存在</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"更新角色信息成功\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/blogAdmin/role/userList",
    "title": "角色用户列表",
    "name": "roleUserList",
    "description": "<p>查询属于该角色的所用用户</p>",
    "group": "ROLE",
    "version": "0.0.0",
    "filename": "apiDesc/api/role.js",
    "groupTitle": "角色模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roleId",
            "description": "<p>角色标识ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>查询用户分类 1-属于该角色用户 0-不属于该角色用户 默认为0</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>用户名称</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "返回参数": [
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>用户标识ID</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "roleId",
            "description": "<p>角色标识ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n  \"code\": \"10000\",\n  \"msg\": \"获取角色用户列表成功\",\n  \"data\": {\n    \"count\": 1,\n    \"data\": [\n      {\n        \"_id\": \"5e70cdf2b1867a5078888888\",\n        \"name\": \"sdj\",\n        \"email\": \"1251662462@qq.com\",\n        \"phone\": \"18473481958\",\n        \"roleId\": \"5e70cdf2b1867a5078888888\"\n      }\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "PUT",
    "url": "/blogAdmin/role/setAuth",
    "title": "角色权限编辑",
    "name": "setAuthUpdate",
    "group": "ROLE",
    "version": "0.0.0",
    "filename": "apiDesc/api/role.js",
    "groupTitle": "角色模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>角色标识ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "functionList",
            "description": "<p>功能列表，功能ID用逗号相隔，如2,5,7</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "menuList",
            "description": "<p>菜单列表，菜单ID用逗号相隔，如2,5,7</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"角色赋值权限成功\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/blogAdmin/statement/add",
    "title": "励志语句新增",
    "name": "statementAdd",
    "group": "STATEMENT",
    "version": "0.0.0",
    "filename": "apiDesc/api/statement.js",
    "groupTitle": "励志语句模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>需要设置值为application/json;charset=UTF-8</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "请求参数:",
          "content": "[{\n     \"title\": \"星期一\",\n     \"sortNum\": 1\n   },\n   {\n     \"title\": \"星期二\",\n     \"sortNum\": 2\n   },\n   {\n     \"title\": \"星期三\",\n     \"sortNum\": 3\n   },\n   {\n     \"title\": \"星期四\",\n     \"sortNum\": 4\n   },\n   {\n     \"title\": \"星期五\",\n     \"sortNum\": 5\n   },\n   {\n     \"title\": \"星期六\",\n     \"sortNum\": 6\n   },\n   {\n     \"title\": \"星期日\",\n     \"sortNum\": 7\n   }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "返回错误码code": [
          {
            "group": "BACKERRORPARAM",
            "type": "String",
            "optional": false,
            "field": "10008",
            "description": "<p>传递数据格式为数组对象</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"新增励志语句成功\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/blogAdmin/statement/list",
    "title": "管理界面励志语句列表",
    "name": "statementList",
    "description": "<p>查看星期一到星期天的励志语句</p>",
    "group": "STATEMENT",
    "version": "0.0.0",
    "filename": "apiDesc/api/statement.js",
    "groupTitle": "励志语句模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "返回参数": [
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>励志语句标识ID</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>励志语句标题</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "sortNum",
            "description": "<p>励志语句代表星期，1表示星期一，以此类推</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n  \"code\": \"10000\",\n  \"msg\": \"获取励志语句成功\",\n  \"data\": [\n    {\n      \"title\": \"家人闲坐，灯火可亲\",\n      \"sortNum\": 1,\n      \"_id\": \"5e70cdf2b1867a5078888888\"\n    },\n    {\n      \"title\": \"情不知所起，一往而深\",\n      \"sortNum\": 2,\n      \"_id\": \"5e70cdf2b1867a5078888888\"\n    },\n    {\n      \"title\": \"笑看风云淡，坐对云起时\",\n      \"sortNum\": 3,\n      \"_id\": \"5e70cdf2b1867a5078888888\"\n    },\n    {\n      \"title\": \"不乱于心，不困于情，不畏将来，不念过往，如此安好\",\n      \"sortNum\": 4,\n      \"_id\": \"5e70cdf2b1867a5078888888\"\n    },\n    {\n      \"title\": \"生活最佳状态是冷冷清清地风风火火\",\n      \"sortNum\": 5,\n      \"_id\": \"5e70cdf2b1867a5078888888\"\n    },\n    {\n      \"title\": \"愿你成为自己喜欢的模样，不抱怨，不将就\",\n      \"sortNum\": 6,\n      \"_id\": \"5e70cdf2b1867a5078888888\"\n    },\n    {\n      \"title\": \"梦想不大， 道路很长，开始了就别停下\",\n      \"sortNum\": 7,\n      \"_id\": \"5e70cdf2b1867a5078888888\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/blogPage/statement/list",
    "title": "展示界面励志语句",
    "name": "statementPageList",
    "description": "<p>根据当前星期显示对应的励志语句</p>",
    "group": "STATEMENT",
    "version": "0.0.0",
    "filename": "apiDesc/api/statement.js",
    "groupTitle": "励志语句模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>无需token认证授权</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "返回参数": [
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>励志语句标识ID</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>励志语句标题</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "sortNum",
            "description": "<p>励志语句代表星期，1表示星期一，以此类推</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n  \"code\": \"10000\",\n  \"msg\": \"获取励志语句成功\",\n  \"data\": [\n    {\n      \"title\": \"家人闲坐，灯火可亲\",\n      \"sortNum\": 1,\n      \"_id\": \"5e70cdf2b1867a5078888888\"\n    },\n    {\n      \"title\": \"情不知所起，一往而深\",\n      \"sortNum\": 2,\n      \"_id\": \"5e70cdf2b1867a5078888888\"\n    },\n    {\n      \"title\": \"笑看风云淡，坐对云起时\",\n      \"sortNum\": 3,\n      \"_id\": \"5e70cdf2b1867a5078888888\"\n    },\n    {\n      \"title\": \"不乱于心，不困于情，不畏将来，不念过往，如此安好\",\n      \"sortNum\": 4,\n      \"_id\": \"5e70cdf2b1867a5078888888\"\n    },\n    {\n      \"title\": \"生活最佳状态是冷冷清清地风风火火\",\n      \"sortNum\": 5,\n      \"_id\": \"5e70cdf2b1867a5078888888\"\n    },\n    {\n      \"title\": \"愿你成为自己喜欢的模样，不抱怨，不将就\",\n      \"sortNum\": 6,\n      \"_id\": \"5e70cdf2b1867a5078888888\"\n    },\n    {\n      \"title\": \"梦想不大， 道路很长，开始了就别停下\",\n      \"sortNum\": 7,\n      \"_id\": \"5e70cdf2b1867a5078888888\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "PUT",
    "url": "/blogAdmin/statement/update",
    "title": "励志语句编辑",
    "name": "statementUpdate",
    "group": "STATEMENT",
    "version": "0.0.0",
    "filename": "apiDesc/api/statement.js",
    "groupTitle": "励志语句模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>需要设置值为application/json;charset=UTF-8</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "请求参数:",
          "content": "{\n  \"idArr\": [\n    \"5e70cdf2b1867a5078888888\",\n    \"5e70cdf2b1867a5078888888\",\n    \"5e70cdf2b1867a5078888888\",\n    \"5e70cdf2b1867a5078888888\",\n    \"5e70cdf2b1867a5078888888\",\n    \"5e70cdf2b1867a5078888888\",\n    \"5e70cdf2b1867a5078888888\"\n  ],\n  \"dataList\": [\n    {\n      \"title\": \"家人闲坐，灯火可亲\",\n      \"sortNum\": 1\n    },\n    {\n      \"title\": \"情不知所起，一往而深\",\n      \"sortNum\": 2\n    },\n    {\n      \"title\": \"笑看风云淡，坐对云起时\",\n      \"sortNum\": 3\n    },\n    {\n      \"title\": \"不乱于心，不困于情，不畏将来，不念过往，如此安好\",\n      \"sortNum\": 4\n    },\n    {\n      \"title\": \"生活最佳状态是冷冷清清地风风火火\",\n      \"sortNum\": 5\n    },\n    {\n      \"title\": \"愿你成为自己喜欢的模样，不抱怨，不将就\",\n      \"sortNum\": 6\n    },\n    {\n      \"title\": \"梦想不大， 道路很长，开始了就别停下\",\n      \"sortNum\": 7\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "返回错误码code": [
          {
            "group": "BACKERRORPARAM",
            "type": "String",
            "optional": false,
            "field": "10008",
            "description": "<p>参数格式错误</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"编辑励志语句成功\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/blogAdmin/statistics/accessUserList",
    "title": "访客排名统计",
    "name": "accessUserListStatistics",
    "group": "STATISTICS",
    "version": "0.0.0",
    "filename": "apiDesc/api/statistics.js",
    "groupTitle": "统计模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>查询类型，day-天 month-月 其它-星期，默认星期</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "返回参数": [
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>代表意义，day-小时 month-月份 其它-星期（1代表星期一）</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>统计数量</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"获取访客人数排名统计\",\n    \"data\": [\n       {\n           \"_id\": \"05\",\n           \"count\": 2\n       },\n       {\n           \"_id\": \"06\",\n           \"count\": 1\n       }\n    ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/blogAdmin/statistics/accessUserStatistics",
    "title": "访客统计",
    "name": "accessUserStatistics",
    "group": "STATISTICS",
    "version": "0.0.0",
    "filename": "apiDesc/api/statistics.js",
    "groupTitle": "统计模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>查询类型，day-天 week-周 month-月 year-年 其它-时间选择，默认时间选择</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "startTime",
            "description": "<p>开始时间，默认为此时</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "endTime",
            "description": "<p>结束时间</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "返回参数": [
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>代表意义，day-小时 week-星期（1代表星期一） month-日期 year-月份 其它-日期</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>统计数量</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"获取访客用户统计\",\n    \"data\": [\n       {\n           \"_id\": \"14\",\n           \"count\": 1\n       },\n       {\n           \"_id\": \"15\",\n           \"count\": 2\n       }\n    ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/blogPage/statistics/articleArchive",
    "title": "文章归档统计",
    "name": "articleArchive",
    "group": "STATISTICS",
    "version": "0.0.0",
    "filename": "apiDesc/api/statistics.js",
    "groupTitle": "统计模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>无需token认证授权</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "返回参数": [
          {
            "group": "BACKPARAM",
            "type": "Object",
            "optional": false,
            "field": "_id",
            "description": "<p>文章对象</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "_id.id",
            "description": "<p>文章标识ID</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "_id.month",
            "description": "<p>文章发布月份</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "_id.title",
            "description": "<p>文章标题</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "_id.createTime",
            "description": "<p>文章创建时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n  \"code\": \"10000\",\n  \"msg\": \"获取文章归档统计\",\n  \"data\": [\n    {\n      \"_id\": {\n        \"id\": \"5e70cdf2b1867a5078888888\",\n        \"month\": \"2020-08\",\n        \"title\": \"express博客\",\n        \"createTime\": \"2020-08-24 21:35:28\"\n      }\n    },\n    {\n      \"_id\": {\n        \"id\": \"5e70cdf2b1867a5078888888\",\n        \"month\": \"2020-05\",\n        \"title\": \"node 知识点\",\n        \"createTime\": \"2020-05-17 20:50:47\"\n      }\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/blogAdmin/statistics/articleImgStatistics",
    "title": "文章图片统计",
    "name": "articleImgStatistics",
    "group": "STATISTICS",
    "version": "0.0.0",
    "filename": "apiDesc/api/statistics.js",
    "groupTitle": "统计模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "number",
            "description": "<p>获取文章图片数量，默认为10</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "返回参数": [
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>文章标识ID</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "imgId",
            "description": "<p>文章封面图片ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n  \"code\": \"10000\",\n  \"msg\": \"获取文章图片列表失败\",\n  \"data\": [\n    {\n      \"_id\": \"5e70cdf2b1867a5078888888\",\n      \"imgId\": \"6a045d7ecbeb3ab06c5f587578d9304c\"\n    },\n    {\n      \"_id\": \"5e70cdf2b1867a5078888888\",\n      \"imgId\": \"70837163b778d76ac0a6a366323d85b3\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/blogAdmin/statistics/articleList",
    "title": "文章排名统计",
    "name": "articleListStatistics",
    "group": "STATISTICS",
    "version": "0.0.0",
    "filename": "apiDesc/api/statistics.js",
    "groupTitle": "统计模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>查询类型，day-天 month-月 其它-星期，默认星期</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "返回参数": [
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>代表意义，day-小时 month-月份 其它-星期（1代表星期一）</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>统计数量</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"获取访客人数排名统计\",\n    \"data\": [\n       {\n           \"_id\": \"3\",\n           \"count\": 2\n       },\n       {\n           \"_id\": \"2\",\n           \"count\": 1\n       }\n    ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/blogAdmin/statistics/articleStatistics",
    "title": "文章统计",
    "name": "articleStatistics",
    "group": "STATISTICS",
    "version": "0.0.0",
    "filename": "apiDesc/api/statistics.js",
    "groupTitle": "统计模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>查询类型，day-天 week-周 month-月 year-年 其它-时间选择，默认时间选择</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "startTime",
            "description": "<p>开始时间，默认为此时</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "endTime",
            "description": "<p>结束时间</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "返回参数": [
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>代表意义，day-小时 week-星期（1代表星期一） month-日期 year-月份 其它-日期</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>统计数量</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"获取文章统计\",\n    \"data\": [\n       {\n           \"_id\": \"2020-05-16\",\n           \"count\": 1\n       },\n       {\n           \"_id\": \"2020-05-18\",\n           \"count\": 2\n       }\n    ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/blogAdmin/statistics/countTotal",
    "title": "统计总数",
    "name": "countTotal",
    "group": "STATISTICS",
    "version": "0.0.0",
    "filename": "apiDesc/api/statistics.js",
    "groupTitle": "统计模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "返回参数": [
          {
            "group": "BACKPARAM",
            "type": "Number",
            "optional": false,
            "field": "accessUserTotal",
            "description": "<p>访客总数</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "Number",
            "optional": false,
            "field": "userTotal",
            "description": "<p>用户总数</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "Number",
            "optional": false,
            "field": "articleTotal",
            "description": "<p>文章总数</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "Number",
            "optional": false,
            "field": "messageTotal",
            "description": "<p>留言总数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"获取统计列表成功\",\n    \"data\": {\n        \"accessUserTotal\": 63,\n        \"userTotal\": 7,\n        \"articleTotal\": 8,\n        \"messageTotal\": 20\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/blogAdmin/statistics/messageList",
    "title": "留言排名统计",
    "name": "messageListStatistics",
    "group": "STATISTICS",
    "version": "0.0.0",
    "filename": "apiDesc/api/statistics.js",
    "groupTitle": "统计模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>查询类型，day-天 month-月 其它-星期，默认星期</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "返回参数": [
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>代表意义，day-小时 month-月份 其它-星期（1代表星期一）</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>统计数量</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"获取访客人数排名统计\",\n    \"data\": [\n       {\n           \"_id\": \"3\",\n           \"count\": 2\n       },\n       {\n           \"_id\": \"2\",\n           \"count\": 1\n       }\n    ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/blogAdmin/statistics/messageStatistics",
    "title": "留言统计",
    "name": "messageStatistics",
    "group": "STATISTICS",
    "version": "0.0.0",
    "filename": "apiDesc/api/statistics.js",
    "groupTitle": "统计模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>查询类型，day-天 week-周 month-月 year-年 其它-时间选择，默认时间选择</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "startTime",
            "description": "<p>开始时间，默认为此时</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "endTime",
            "description": "<p>结束时间</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "返回参数": [
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>代表意义，day-小时 week-星期（1代表星期一） month-日期 year-月份 其它-日期</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>统计数量</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"获取留言统计\",\n    \"data\": [\n       {\n           \"_id\": \"05\",\n           \"count\": 1\n       },\n       {\n           \"_id\": \"06\",\n           \"count\": 2\n       }\n    ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/blogPage/statistics/tagList",
    "title": "展示页面标签排名统计",
    "name": "pageTagList",
    "group": "STATISTICS",
    "version": "0.0.0",
    "filename": "apiDesc/api/statistics.js",
    "groupTitle": "统计模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>无需token认证授权</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "返回参数": [
          {
            "group": "BACKPARAM",
            "type": "Object",
            "optional": false,
            "field": "_id",
            "description": "<p>标签对象</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "_id.id",
            "description": "<p>标签标识ID</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "_id.name",
            "description": "<p>标签名称</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "_id.description",
            "description": "<p>标签描述</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "_id.bgColor",
            "description": "<p>标签背景颜色</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>统计数量</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n  \"code\": \"10000\",\n  \"msg\": \"获取文章标签统计\",\n  \"data\": [\n    {\n      \"_id\": {\n        \"id\": \"5e70cdf2b1867a5078888888\",\n        \"name\": \"node\",\n        \"description\": \"node\",\n        \"bgColor\": \"#74A762\"\n      },\n      \"count\": 2\n    },\n    {\n      \"_id\": {\n        \"id\": \"5e70cdf2b1867a5078888888\",\n        \"name\": \"微信小程序\",\n        \"description\": \"微信小程序\",\n        \"bgColor\": \"#409EFF\"\n      },\n      \"count\": 1\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/blogPage/statistics/randomArticle",
    "title": "随机获取文章",
    "name": "randomArticle",
    "group": "STATISTICS",
    "version": "0.0.0",
    "filename": "apiDesc/api/statistics.js",
    "groupTitle": "统计模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>无需token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "number",
            "description": "<p>随机获取文章数量，默认为10</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "返回参数": [
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>文章标识ID</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>文章标题</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": " {\n    \"code\": \"10000\",\n    \"msg\": \"随机获取文章成功\",\n    \"data\": [\n        {\n            \"_id\": \"5f334474cc24fd17ecd5d03f\",\n            \"title\": \"测试\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/blogPage/statistics/randomMessage",
    "title": "随机获取留言",
    "name": "randomMessage",
    "group": "STATISTICS",
    "version": "0.0.0",
    "filename": "apiDesc/api/statistics.js",
    "groupTitle": "统计模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>无需token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "number",
            "description": "<p>随机获取留言数量，默认为10</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "返回参数": [
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>留言标识ID</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>留言内容</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "Object",
            "optional": false,
            "field": "createUser",
            "description": "<p>创建者对象</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n  \"code\": \"10000\",\n  \"msg\": \"随机获取留言列表\",\n  \"data\": [\n    {\n      \"_id\": \"5e70cdf2b1867a5078888888\",\n      \"content\": \"与你相遇，好幸运\",\n      \"createUser\": [\n        {\n          \"name\": \"sdj\",\n          \"avatarId\": \"9184a55892160ddf2a263f2aa6da88d9\"\n        }\n      ],\n      \"createTime\": \"2020-05-12 22:55:30\"\n    },\n    {\n      \"_id\": \"5e70cdf2b1867a5078888888\",\n      \"content\": \"目之所及，皆是回忆，心之所想，皆是过往\",\n      \"createUser\": [\n        {\n          \"name\": \"sdj\",\n          \"avatarId\": \"9184a55892160ddf2a263f2aa6da88d9\"\n        }\n      ],\n      \"createTime\": \"2020-05-12 16:22:10\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/blogAdmin/statistics/tagList",
    "title": "后台页面标签排名统计",
    "name": "tagListStatistics",
    "group": "STATISTICS",
    "version": "0.0.0",
    "filename": "apiDesc/api/statistics.js",
    "groupTitle": "统计模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "返回参数": [
          {
            "group": "BACKPARAM",
            "type": "Object",
            "optional": false,
            "field": "_id",
            "description": "<p>标签对象</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "_id.id",
            "description": "<p>标签标识ID</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "_id.name",
            "description": "<p>标签名称</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "_id.description",
            "description": "<p>标签描述</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "_id.bgColor",
            "description": "<p>标签背景颜色</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>统计数量</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n  \"code\": \"10000\",\n  \"msg\": \"获取文章标签统计\",\n  \"data\": [\n    {\n      \"_id\": {\n        \"id\": \"5e70cdf2b1867a5078888888\",\n        \"name\": \"node\",\n        \"description\": \"node\",\n        \"bgColor\": \"#74A762\"\n      },\n      \"count\": 2\n    },\n    {\n      \"_id\": {\n        \"id\": \"5e70cdf2b1867a5078888888\",\n        \"name\": \"微信小程序\",\n        \"description\": \"微信小程序\",\n        \"bgColor\": \"#409EFF\"\n      },\n      \"count\": 1\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/blogPage/statistics/userHistory",
    "title": "用户操作统计",
    "name": "userHistory",
    "description": "<p>查看用户浏览、点赞以及评论过的文章</p>",
    "group": "STATISTICS",
    "version": "0.0.0",
    "filename": "apiDesc/api/statistics.js",
    "groupTitle": "统计模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>用户操作类型，1-浏览文章 2-点赞文章 3-评论文章，默认为1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "currentPage",
            "description": "<p>列表数据页码，默认为1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "pageSize",
            "description": "<p>列页每页展示的条数，默认为10</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "返回参数": [
          {
            "group": "BACKPARAM",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>统计总数</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>历史统计对象</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "data._id",
            "description": "<p>历史统计标识ID</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "data.updateTime",
            "description": "<p>历史统计更新时间</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "Object",
            "optional": false,
            "field": "data.article",
            "description": "<p>文章详情对象</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"获取用户操作历史统计\",\n    \"data\": {\n       \"data\": [\n           {\n               \"_id\": \"5fe1a023bbc48f428c01ad7b\",\n               \"updateTime\": \"2020-12-29 17:31:55\",\n               \"article\": [\n                   {\n                       \"_id\": \"5ec13327002a493ca863e23f\",\n                       \"meta\": {\n                           \"viewTotal\": 90,\n                           \"likeTotal\": 1,\n                           \"commentTotal\": 4,\n                           \"txtTotal\": 949\n                       },\n                       \"imgId\": \"9c6ea64ab980fa18e78a0328ed5f02d9\",\n                       \"title\": \"node 知识点\",\n                       \"description\": \"node 知识点\",\n                       \"createTime\": \"2020-05-17 20:50:47\"\n                   }\n               ]\n           }\n       ],\n       \"count\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "返回错误码code": [
          {
            "group": "BACKERRORPARAM",
            "type": "String",
            "optional": false,
            "field": "10007",
            "description": "<p>用户不存在</p>"
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/blogAdmin/statistics/userList",
    "title": "用户排名统计",
    "name": "userListStatistics",
    "group": "STATISTICS",
    "version": "0.0.0",
    "filename": "apiDesc/api/statistics.js",
    "groupTitle": "统计模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>查询类型，day-天 month-月 其它-星期，默认星期</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "返回参数": [
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>代表意义，day-小时 month-月份 其它-星期（1代表星期一）</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>统计数量</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"获取访客人数排名统计\",\n    \"data\": [\n       {\n           \"_id\": \"05\",\n           \"count\": 2\n       },\n       {\n           \"_id\": \"06\",\n           \"count\": 1\n       }\n    ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/blogAdmin/statistics/userStatistics",
    "title": "用户统计",
    "name": "userStatistics",
    "group": "STATISTICS",
    "version": "0.0.0",
    "filename": "apiDesc/api/statistics.js",
    "groupTitle": "统计模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>查询类型，day-天 week-周 month-月 year-年 其它-时间选择，默认时间选择</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "startTime",
            "description": "<p>开始时间，默认为此时</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "endTime",
            "description": "<p>结束时间</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "返回参数": [
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>代表意义，day-小时 week-星期（1代表星期一） month-日期 year-月份 其它-日期</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>统计数量</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"获取用户统计\",\n    \"data\": [\n       {\n           \"_id\": \"1\",\n           \"count\": 1\n       },\n       {\n           \"_id\": \"2\",\n           \"count\": 2\n       }\n    ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/blogAdmin/tag/add",
    "title": "标签新增",
    "name": "tagAdd",
    "group": "TAG",
    "version": "0.0.0",
    "filename": "apiDesc/api/tag.js",
    "groupTitle": "标签模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>标签名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>标签描述</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "bgColor",
            "description": "<p>标签背景色</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "返回错误码code": [
          {
            "group": "BACKERRORPARAM",
            "type": "String",
            "optional": false,
            "field": "10001",
            "description": "<p>标签已存在</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"标签新增成功\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "DELETE",
    "url": "/blogAdmin/tag/del/:id",
    "title": "标签删除",
    "name": "tagDel",
    "group": "TAG",
    "version": "0.0.0",
    "filename": "apiDesc/api/tag.js",
    "groupTitle": "标签模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>标签标识ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"删除标签成功\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/blogAdmin/tag/list",
    "title": "标签列表",
    "name": "tagList",
    "group": "TAG",
    "version": "0.0.0",
    "filename": "apiDesc/api/tag.js",
    "groupTitle": "标签模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "返回参数": [
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>标签标识ID</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>标签名称</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>标签描述</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "bgColor",
            "description": "<p>标签背景色</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "Object",
            "optional": false,
            "field": "createUser",
            "description": "<p>创建者</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n  \"code\": \"10000\",\n  \"msg\": \"获取标签列表成功\",\n  \"data\": {\n    \"count\": 1,\n    \"data\": [\n      {\n        \"description\": \"vue\",\n        \"bgColor\": \"#41B883\",\n        \"_id\": \"5e70cdf2b1867a5078888888\",\n        \"name\": \"vue\",\n        \"createUser\": {\n          \"_id\": \"5e70cdf2b1867a5078888888\",\n          \"name\": \"sdj\"\n        },\n        \"createTime\": \"2020-05-13 10:41:40\",\n        \"updateTime\": \"2020-05-18 09:50:53\"\n      }\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "PUT",
    "url": "/blogAdmin/tag/update",
    "title": "标签编辑",
    "name": "tagUpdate",
    "group": "TAG",
    "version": "0.0.0",
    "filename": "apiDesc/api/tag.js",
    "groupTitle": "标签模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>项目标识ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>标签名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>标签描述</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "bgColor",
            "description": "<p>标签背景色</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "返回错误码code": [
          {
            "group": "BACKERRORPARAM",
            "type": "String",
            "optional": false,
            "field": "10001",
            "description": "<p>标签已存在</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"更新标签成功\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "DELETE",
    "url": "/blogAdmin/file/del/:sourceId",
    "title": "资源删除",
    "name": "fileDel",
    "group": "UPLOAD",
    "version": "0.0.0",
    "filename": "apiDesc/api/upload.js",
    "groupTitle": "上传模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sourceId",
            "description": "<p>资源标识ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"删除资源成功\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/blogAdmin/file/down",
    "title": "资源下载",
    "name": "fileDown",
    "group": "UPLOAD",
    "version": "0.0.0",
    "filename": "apiDesc/api/upload.js",
    "groupTitle": "上传模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>无需token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "返回参数": [
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "downId",
            "description": "<p>资源标识ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "图片资源文件",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/blogAdmin/file/upload",
    "title": "资源上传",
    "name": "fileUpload",
    "group": "UPLOAD",
    "version": "0.0.0",
    "filename": "apiDesc/api/upload.js",
    "groupTitle": "上传模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>需要设置值为multipart/form-data;charset=UTF-8</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "返回参数": [
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "file",
            "description": "<p>上传文件名字</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "返回参数": [
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "sourceId",
            "description": "<p>资源标识ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n  \"code\": \"10000\",\n  \"msg\": \"上传成功\",\n  \"data\": {\n    \"_id\": \"5e70cdf2b1867a5078888888\",\n    \"sourceId\": \"1609317978655\",\n    \"name\": \"timg (1).jpg\",\n    \"type\": \"image/jpeg\",\n    \"url\": \"http://sdjblog.cn:3000/blogAdmin/file/down?downId=1609317978655\"\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/blogAdmin/user/add",
    "title": "新增用户",
    "name": "addUser",
    "description": "<p>超级管理员创建的账号为管理员，管理员创建的账户为普通用户</p>",
    "group": "USER",
    "version": "0.0.0",
    "filename": "apiDesc/api/user.js",
    "groupTitle": "用户模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>手机</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "roleId",
            "description": "<p>角色类型，默认为普通用户</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "返回错误码code": [
          {
            "group": "BACKERRORPARAM",
            "type": "String",
            "optional": false,
            "field": "10001",
            "description": "<p>用户名已存在</p>"
          },
          {
            "group": "BACKERRORPARAM",
            "type": "String",
            "optional": false,
            "field": "10008",
            "description": "<p>邮箱已存在</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"添加用户成功\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/blogAdmin/user/login",
    "title": "管理界面用户登录",
    "name": "adminLogin",
    "group": "USER",
    "version": "0.0.0",
    "filename": "apiDesc/api/user.js",
    "groupTitle": "用户模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>无需token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "randomCode",
            "description": "<p>随机验证码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "返回参数": [
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>身份验证，没有返回前缀Bearer ，传递时需要加上</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>用户信息</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "user.status",
            "description": "<p>用户状态：0-禁用，1-启用</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "user.avatarId",
            "description": "<p>头像ID</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "user.mark",
            "description": "<p>账户归属标识</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "user._id",
            "description": "<p>用户唯一标识ID</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "user.name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "user.phone",
            "description": "<p>手机号码</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "user.info",
            "description": "<p>个性签名</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "Object",
            "optional": false,
            "field": "user.roleId",
            "description": "<p>角色对象</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "user.roleId.type",
            "description": "<p>角色类型</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "user.roleId.status",
            "description": "<p>角色状态：0-禁用，1-启用</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String[]",
            "optional": false,
            "field": "user.roleId.functionList",
            "description": "<p>角色功能权限</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String[]",
            "optional": false,
            "field": "user.roleId.menuList",
            "description": "<p>角色菜单权限</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "user.roleId._id",
            "description": "<p>角色唯一标识ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n  \"code\": \"10000\",\n  \"msg\": \"登录成功\",\n  \"data\": {\n   \"user\": {\n     \"status\": \"1\",\n     \"avatarId\": \"9184a55892160ddf2a263f2aa6da88d9\",\n     \"mark\": \"563f404e629094a33\",\n     \"_id\": \"5e70cdf2b1867a5078888888\",\n     \"name\": \"sdj\",\n     \"email\": \"1251662462@qq.com\",\n     \"phone\": \"18473481958\",\n     \"roleId\": {\n       \"type\": \"1\",\n       \"status\": \"1\",\n       \"functionList\": [\n         \"5e70cdf2b1867a5078888888\"\n       ],\n       \"menuList\": [\n         \"5e70cdf2b1867a5078888888\"\n       ],\n       \"_id\": \"5e70cdf2b1867a5078888888\",\n       \"name\": \"超级管理员\",\n       \"description\": \"拥有后台全部操作权限\",\n       \"createUser\": \"5e70cdf2b1867a5078888888\",\n       \"updateUser\": \"5e70cdf2b1867a5078888888\",\n       \"createTime\": \"2020-03-30 22:15:23\",\n       \"updateTime\": \"2020-04-27 23:30:36\"\n     },\n     \"createTime\": \"2020-03-17 21:17:38\",\n     \"updateTime\": \"2020-12-23 22:51:29\",\n     \"info\": \"haha\"\n   },\n   \"token\": \"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTWVzc2FnZSI6eyJpZCI6IjVlNzBjZGYyYjE4NjdhNTA3NGRkYTM1ZSIsIm5hbWUiOiJzZGoiLCJhdmF0YXJJZCI6IjkxODRhNTU4OTIxNjBkZGYyYTI2M2YyYWE2ZGE4OGQ5IiwiZnVuY3Rpb25MaXN0IjpbIjVlODM0ZjIzZmI2OTMwNWFhMDkxZTgyNCIsIjVlODM0ZjJhZmI2OTMwNWFhMDkxZTgyNSIsIjVlODM0ZjMxZmI2OTMwNWFhMDkxZTgyNiIsIjVlOTljMTdkZDFiYTcyOWE3OGIwMTZiNiIsIjVlODM0ZjUxZmI2OTMwNWFhMDkxZTgyNyIsIjVlODM0ZjVhZmI2OTMwNWFhMDkxZTgyOCIsIjVlODM0ZjYxZmI2OTMwNWFhMDkxZTgyOSIsIjVlOTljMWMwZDFiYTcyOWE3OGIwMTZiNyIsIjVlODM0ZjZmZmI2OTMwNWFhMDkxZTgyYSIsIjVlODM0Zjc3ZmI2OTMwNWFhMDkxZTgyYiIsIjVlODM0ZjdlZmI2OTMwNWFhMDkxZTgyYyIsIjVlOTljMWNjZDFiYTcyOWE3OGIwMTZiOCIsIjVlODM0Zjg4ZmI2OTMwNWFhMDkxZTgyZCIsIjVlODM0ZjkwZmI2OTMwNWFhMDkxZTgyZSIsIjVlODM0Zjk3ZmI2OTMwNWFhMDkxZTgyZiIsIjVlOTljMWQ5ZDFiYTcyOWE3OGIwMTZiOSIsIjVlODM0ZjllZmI2OTMwNWFhMDkxZTgzMCIsIjVlODM0ZmFmZmI2OTMwNWFhMDkxZTgzMSIsIjVlODM0ZmI1ZmI2OTMwNWFhMDkxZTgzMiIsIjVlOTljMWUyZDFiYTcyOWE3OGIwMTZiYSIsIjVlODM0ZmJkZmI2OTMwNWFhMDkxZTgzMyIsIjVlODM0ZmM0ZmI2OTMwNWFhMDkxZTgzNCIsIjVlODM0ZmNiZmI2OTMwNWFhMDkxZTgzNSIsIjVlOTljMWVkZDFiYTcyOWE3OGIwMTZiYiIsIjVlODM0ZmYyZmI2OTMwNWFhMDkxZTgzNiIsIjVlOTljMjVhZDFiYTcyOWE3OGIwMTZiYyIsIjVlOTljMjgwZDFiYTcyOWE3OGIwMTZiZCIsIjVlOTljMjg3ZDFiYTcyOWE3OGIwMTZiZSIsIjVlN2UwNmE4MDg0OWI3MDhkNDE0ZGEwMSIsIjVlODM1MDM5ZmI2OTMwNWFhMDkxZTgzOCIsIjVlODM1MDNmZmI2OTMwNWFhMDkxZTgzOSIsIjVlOTljMmI0ZDFiYTcyOWE3OGIwMTZiZiIsIjVlOTljOGE5ZDFiYTcyOWE3OGIwMTZjMSIsIjVlYTZmYTI0NWZiNWQyNTY3YzZjYWQ1NCIsIjVlODM1MDVkZmI2OTMwNWFhMDkxZTgzYSIsIjVlODM1MDY3ZmI2OTMwNWFhMDkxZTgzYiIsIjVlODM1MDZkZmI2OTMwNWFhMDkxZTgzYyIsIjVlOTljMmMyZDFiYTcyOWE3OGIwMTZjMCIsIjVlOTljYjg1ZDFiYTcyOWE3OGIwMTZjMiJdLCJyb2xlSWQiOiI1ZTgxZmVmYmNlOGUyNjBhMzhkMGI1NzciLCJtYXJrIjoiNTYzZjQwNGU2MjkwOTRhMTAifSwiaWF0IjoxNjA5MjI3NjIyLCJleHAiOjE2MTE4MTk2MjJ9.Tq13RH6Rag-b4U4VORloG6DPe9hc1Tt09Y5xlANYlUEuwbOLtdBkD9ZqhTGRjPppYZFbiK97cMdvoflk1zreKDZ2xJ9OPqabkIwihGGKT8bKOey7nYS7H5xmmyMizgn_jYGBRsrlj8xXEhZwAn03s2Np9lJ6goKhlFsDTsV4r_Y\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "返回错误码code": [
          {
            "group": "BACKERRORPARAM",
            "type": "String",
            "optional": false,
            "field": "10002",
            "description": "<p>邮箱或用户名不存在</p>"
          },
          {
            "group": "BACKERRORPARAM",
            "type": "String",
            "optional": false,
            "field": "10003",
            "description": "<p>密码错误</p>"
          },
          {
            "group": "BACKERRORPARAM",
            "type": "String",
            "optional": false,
            "field": "10008",
            "description": "<p>用户处于禁用状态</p>"
          },
          {
            "group": "BACKERRORPARAM",
            "type": "String",
            "optional": false,
            "field": "10006",
            "description": "<p>随机验证码错误或超过有效期10分钟</p>"
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/blogAdmin/user/resetPwd",
    "title": "忘记密码",
    "name": "forgetPwd",
    "group": "USER",
    "version": "0.0.0",
    "filename": "apiDesc/api/user.js",
    "groupTitle": "用户模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>无需token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "randomCode",
            "description": "<p>随机验证码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emailCode",
            "description": "<p>邮箱验证码</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "返回错误码code": [
          {
            "group": "BACKERRORPARAM",
            "type": "String",
            "optional": false,
            "field": "10002",
            "description": "<p>邮箱不存在</p>"
          },
          {
            "group": "BACKERRORPARAM",
            "type": "String",
            "optional": false,
            "field": "10006",
            "description": "<p>随机验证码错误或超过有效期10分钟</p>"
          },
          {
            "group": "BACKERRORPARAM",
            "type": "String",
            "optional": false,
            "field": "10004",
            "description": "<p>邮箱验证码错误</p>"
          },
          {
            "group": "BACKERRORPARAM",
            "type": "String",
            "optional": false,
            "field": "10005",
            "description": "<p>邮箱验证码有效期已过期</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"重置密码成功\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/blogAdmin/user/list",
    "title": "用户列表",
    "name": "getUser",
    "description": "<p>超级管理员显示所有用户，管理员只显示子账户</p>",
    "group": "USER",
    "version": "0.0.0",
    "filename": "apiDesc/api/user.js",
    "groupTitle": "用户模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "返回参数": [
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>用户状态：0-禁用，1-启用</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "avatarId",
            "description": "<p>头像ID</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "mark",
            "description": "<p>账户归属标识</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>用户唯一标识ID</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号码</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "info",
            "description": "<p>个性签名</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "Object",
            "optional": false,
            "field": "roleId",
            "description": "<p>角色对象</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "roleId.type",
            "description": "<p>角色类型</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "roleId.status",
            "description": "<p>角色状态：0-禁用，1-启用</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String[]",
            "optional": false,
            "field": "roleId.functionList",
            "description": "<p>角色功能权限</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String[]",
            "optional": false,
            "field": "roleId.menuList",
            "description": "<p>角色菜单权限</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "roleId._id",
            "description": "<p>角色唯一标识ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n  \"code\": \"10000\",\n  \"msg\": \"获取用户列表成功\",\n  \"data\": {\n    \"count\": 1,\n    \"data\": [\n      {\n        \"status\": \"1\",\n        \"avatarId\": \"9184a55892160ddf2a263f2aa6da88d9\",\n        \"mark\": \"563f404e629094a33\",\n        \"_id\": \"5e70cdf2b1867a5078888888\",\n        \"name\": \"sdj\",\n        \"email\": \"1251662462@qq.com\",\n        \"phone\": \"18473481958\",\n        \"roleId\": {\n          \"type\": \"1\",\n          \"status\": \"1\",\n          \"functionList\": [\n            \"5e70cdf2b1867a5078888888\"\n          ],\n          \"menuList\": [\n            \"5e70cdf2b1867a5078888888\"\n          ],\n          \"_id\": \"5e70cdf2b1867a5078888888\",\n          \"name\": \"超级管理员\",\n          \"description\": \"拥有后台全部操作权限\",\n          \"createUser\": \"5e70cdf2b1867a5078888888\",\n          \"updateUser\": \"5e70cdf2b1867a5078888888\",\n          \"createTime\": \"2020-03-30 22:15:23\",\n          \"updateTime\": \"2020-04-27 23:30:36\"\n        },\n        \"createTime\": \"2020-03-17 21:17:38\",\n        \"updateTime\": \"2020-12-23 22:51:29\",\n        \"info\": \"haha\"\n      }\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/blogAdmin/user/modifyPwd",
    "title": "修改密码",
    "name": "modifyPwd",
    "group": "USER",
    "version": "0.0.0",
    "filename": "apiDesc/api/user.js",
    "groupTitle": "用户模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>旧密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newPassword",
            "description": "<p>新密码</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "返回错误码code": [
          {
            "group": "BACKERRORPARAM",
            "type": "String",
            "optional": false,
            "field": "10002",
            "description": "<p>用户不存在</p>"
          },
          {
            "group": "BACKERRORPARAM",
            "type": "String",
            "optional": false,
            "field": "10008",
            "description": "<p>密码错误</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"修改密码成功\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/blogPage/user/login",
    "title": "展示界面用户登录",
    "name": "pageLogin",
    "group": "USER",
    "version": "0.0.0",
    "filename": "apiDesc/api/user.js",
    "groupTitle": "用户模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>无需token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "返回参数": [
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>身份验证，没有返回前缀Bearer ，传递时需要加上</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>用户信息</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "user.status",
            "description": "<p>用户状态：0-禁用，1-启用</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "user.avatarId",
            "description": "<p>头像ID</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "user.mark",
            "description": "<p>账户归属标识</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "user._id",
            "description": "<p>用户唯一标识ID</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "user.name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "user.phone",
            "description": "<p>手机号码</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "user.info",
            "description": "<p>个性签名</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "Object",
            "optional": false,
            "field": "user.roleId",
            "description": "<p>角色对象</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "user.roleId.type",
            "description": "<p>角色类型</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "user.roleId.status",
            "description": "<p>角色状态：0-禁用，1-启用</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String[]",
            "optional": false,
            "field": "user.roleId.functionList",
            "description": "<p>角色功能权限</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String[]",
            "optional": false,
            "field": "user.roleId.menuList",
            "description": "<p>角色菜单权限</p>"
          },
          {
            "group": "BACKPARAM",
            "type": "String",
            "optional": false,
            "field": "user.roleId._id",
            "description": "<p>角色唯一标识ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n  \"code\": \"10000\",\n  \"msg\": \"登录成功\",\n  \"data\": {\n   \"user\": {\n     \"status\": \"1\",\n     \"avatarId\": \"9184a55892160ddf2a263f2aa6da88d9\",\n     \"mark\": \"563f404e629094a33\",\n     \"_id\": \"5e70cdf2b1867a5078888888\",\n     \"name\": \"sdj\",\n     \"email\": \"1251662462@qq.com\",\n     \"phone\": \"18473481958\",\n     \"roleId\": {\n       \"type\": \"1\",\n       \"status\": \"1\",\n       \"functionList\": [\n         \"5e70cdf2b1867a5078888888\"\n       ],\n       \"menuList\": [\n         \"5e70cdf2b1867a5078888888\"\n       ],\n       \"_id\": \"5e70cdf2b1867a5078888888\",\n       \"name\": \"超级管理员\",\n       \"description\": \"拥有后台全部操作权限\",\n       \"createUser\": \"5e70cdf2b1867a5078888888\",\n       \"updateUser\": \"5e70cdf2b1867a5078888888\",\n       \"createTime\": \"2020-03-30 22:15:23\",\n       \"updateTime\": \"2020-04-27 23:30:36\"\n     },\n     \"createTime\": \"2020-03-17 21:17:38\",\n     \"updateTime\": \"2020-12-23 22:51:29\",\n     \"info\": \"haha\"\n   },\n   \"token\": \"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTWVzc2FnZSI6eyJpZCI6IjVlNzBjZGYyYjE4NjdhNTA3NGRkYTM1ZSIsIm5hbWUiOiJzZGoiLCJhdmF0YXJJZCI6IjkxODRhNTU4OTIxNjBkZGYyYTI2M2YyYWE2ZGE4OGQ5IiwiZnVuY3Rpb25MaXN0IjpbIjVlODM0ZjIzZmI2OTMwNWFhMDkxZTgyNCIsIjVlODM0ZjJhZmI2OTMwNWFhMDkxZTgyNSIsIjVlODM0ZjMxZmI2OTMwNWFhMDkxZTgyNiIsIjVlOTljMTdkZDFiYTcyOWE3OGIwMTZiNiIsIjVlODM0ZjUxZmI2OTMwNWFhMDkxZTgyNyIsIjVlODM0ZjVhZmI2OTMwNWFhMDkxZTgyOCIsIjVlODM0ZjYxZmI2OTMwNWFhMDkxZTgyOSIsIjVlOTljMWMwZDFiYTcyOWE3OGIwMTZiNyIsIjVlODM0ZjZmZmI2OTMwNWFhMDkxZTgyYSIsIjVlODM0Zjc3ZmI2OTMwNWFhMDkxZTgyYiIsIjVlODM0ZjdlZmI2OTMwNWFhMDkxZTgyYyIsIjVlOTljMWNjZDFiYTcyOWE3OGIwMTZiOCIsIjVlODM0Zjg4ZmI2OTMwNWFhMDkxZTgyZCIsIjVlODM0ZjkwZmI2OTMwNWFhMDkxZTgyZSIsIjVlODM0Zjk3ZmI2OTMwNWFhMDkxZTgyZiIsIjVlOTljMWQ5ZDFiYTcyOWE3OGIwMTZiOSIsIjVlODM0ZjllZmI2OTMwNWFhMDkxZTgzMCIsIjVlODM0ZmFmZmI2OTMwNWFhMDkxZTgzMSIsIjVlODM0ZmI1ZmI2OTMwNWFhMDkxZTgzMiIsIjVlOTljMWUyZDFiYTcyOWE3OGIwMTZiYSIsIjVlODM0ZmJkZmI2OTMwNWFhMDkxZTgzMyIsIjVlODM0ZmM0ZmI2OTMwNWFhMDkxZTgzNCIsIjVlODM0ZmNiZmI2OTMwNWFhMDkxZTgzNSIsIjVlOTljMWVkZDFiYTcyOWE3OGIwMTZiYiIsIjVlODM0ZmYyZmI2OTMwNWFhMDkxZTgzNiIsIjVlOTljMjVhZDFiYTcyOWE3OGIwMTZiYyIsIjVlOTljMjgwZDFiYTcyOWE3OGIwMTZiZCIsIjVlOTljMjg3ZDFiYTcyOWE3OGIwMTZiZSIsIjVlN2UwNmE4MDg0OWI3MDhkNDE0ZGEwMSIsIjVlODM1MDM5ZmI2OTMwNWFhMDkxZTgzOCIsIjVlODM1MDNmZmI2OTMwNWFhMDkxZTgzOSIsIjVlOTljMmI0ZDFiYTcyOWE3OGIwMTZiZiIsIjVlOTljOGE5ZDFiYTcyOWE3OGIwMTZjMSIsIjVlYTZmYTI0NWZiNWQyNTY3YzZjYWQ1NCIsIjVlODM1MDVkZmI2OTMwNWFhMDkxZTgzYSIsIjVlODM1MDY3ZmI2OTMwNWFhMDkxZTgzYiIsIjVlODM1MDZkZmI2OTMwNWFhMDkxZTgzYyIsIjVlOTljMmMyZDFiYTcyOWE3OGIwMTZjMCIsIjVlOTljYjg1ZDFiYTcyOWE3OGIwMTZjMiJdLCJyb2xlSWQiOiI1ZTgxZmVmYmNlOGUyNjBhMzhkMGI1NzciLCJtYXJrIjoiNTYzZjQwNGU2MjkwOTRhMTAifSwiaWF0IjoxNjA5MjI3NjIyLCJleHAiOjE2MTE4MTk2MjJ9.Tq13RH6Rag-b4U4VORloG6DPe9hc1Tt09Y5xlANYlUEuwbOLtdBkD9ZqhTGRjPppYZFbiK97cMdvoflk1zreKDZ2xJ9OPqabkIwihGGKT8bKOey7nYS7H5xmmyMizgn_jYGBRsrlj8xXEhZwAn03s2Np9lJ6goKhlFsDTsV4r_Y\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "返回错误码code": [
          {
            "group": "BACKERRORPARAM",
            "type": "String",
            "optional": false,
            "field": "10002",
            "description": "<p>邮箱或用户名不存在</p>"
          },
          {
            "group": "BACKERRORPARAM",
            "type": "String",
            "optional": false,
            "field": "10003",
            "description": "<p>密码错误</p>"
          },
          {
            "group": "BACKERRORPARAM",
            "type": "String",
            "optional": false,
            "field": "10008",
            "description": "<p>用户处于禁用状态</p>"
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/blogAdmin/user/register",
    "title": "注册用户",
    "name": "registerUser",
    "group": "USER",
    "version": "0.0.0",
    "filename": "apiDesc/api/user.js",
    "groupTitle": "用户模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>无需token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>手机</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>注册类型，type存在不为空则注册类型为普通用户，否则为后台管理员</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "randomCode",
            "description": "<p>随机验证码，注册类型为后台管理员必填</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "emailCode",
            "description": "<p>邮箱验证码，注册类型为后台管理员必填</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "返回错误码code": [
          {
            "group": "BACKERRORPARAM",
            "type": "String",
            "optional": false,
            "field": "10001",
            "description": "<p>用户名已存在</p>"
          },
          {
            "group": "BACKERRORPARAM",
            "type": "String",
            "optional": false,
            "field": "10008",
            "description": "<p>邮箱已存在</p>"
          },
          {
            "group": "BACKERRORPARAM",
            "type": "String",
            "optional": false,
            "field": "10006",
            "description": "<p>随机验证码错误或超过有效期10分钟</p>"
          },
          {
            "group": "BACKERRORPARAM",
            "type": "String",
            "optional": false,
            "field": "10004",
            "description": "<p>邮箱验证码错误</p>"
          },
          {
            "group": "BACKERRORPARAM",
            "type": "String",
            "optional": false,
            "field": "10005",
            "description": "<p>邮箱验证码有效期已过期</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"注册成功\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/blogAdmin/user/sendEmail",
    "title": "获取邮箱验证码",
    "name": "sendEmail",
    "description": "<p>邮箱验证码有效期为10分钟</p>",
    "group": "USER",
    "version": "0.0.0",
    "filename": "apiDesc/api/user.js",
    "groupTitle": "用户模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>无需token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>发送类型：注册发送-add  忘记密码发送-update</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "返回错误码code": [
          {
            "group": "BACKERRORPARAM",
            "type": "String",
            "optional": false,
            "field": "10001",
            "description": "<p>邮箱账号已存在，type为add</p>"
          },
          {
            "group": "BACKERRORPARAM",
            "type": "String",
            "optional": false,
            "field": "10007",
            "description": "<p>邮箱账号不存在，type为update</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"发送验证码成功\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/blogAdmin/user/setPwd",
    "title": "重置密码",
    "name": "setPwd",
    "group": "USER",
    "version": "0.0.0",
    "filename": "apiDesc/api/user.js",
    "groupTitle": "用户模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>用户ID</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "返回错误码code": [
          {
            "group": "BACKERRORPARAM",
            "type": "String",
            "optional": false,
            "field": "10002",
            "description": "<p>用户不存在</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"重置密码成功\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "PUT",
    "url": "/blogAdmin/user/update",
    "title": "更新用户",
    "name": "updateUser",
    "group": "USER",
    "version": "0.0.0",
    "filename": "apiDesc/api/user.js",
    "groupTitle": "用户模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>用户标识ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "status",
            "description": "<p>用户状态：禁用-0，1-启用</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "avatarId",
            "description": "<p>头像ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>手机</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "info",
            "description": "<p>个性签名</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "返回错误码code": [
          {
            "group": "BACKERRORPARAM",
            "type": "String",
            "optional": false,
            "field": "10001",
            "description": "<p>用户名已存在</p>"
          },
          {
            "group": "BACKERRORPARAM",
            "type": "String",
            "optional": false,
            "field": "10008",
            "description": "<p>邮箱已存在</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n  \"code\": \"10000\",\n  \"msg\": \"更新用户信息成功\",\n  \"data\": {\n    \"status\": \"1\",\n    \"avatarId\": \"9184a55892160ddf2a263f2aa6da88d9\",\n    \"mark\": \"563f404e629094a33\",\n    \"_id\": \"5e70cdf2b1867a5078888888\",\n    \"name\": \"sdj\",\n    \"email\": \"1251662462@qq.com\",\n    \"phone\": \"18473481958\",\n    \"roleId\": {\n      \"type\": \"1\",\n      \"status\": \"1\",\n      \"functionList\": [\n        \"5e70cdf2b1867a5078888888\"\n      ],\n      \"menuList\": [\n        \"5e70cdf2b1867a5078888888\"\n      ],\n      \"_id\": \"5e70cdf2b1867a5078888888\",\n      \"name\": \"超级管理员\",\n      \"description\": \"拥有后台全部操作权限\",\n      \"createUser\": \"5e70cdf2b1867a5078888888\",\n      \"updateUser\": \"5e70cdf2b1867a5078888888\",\n      \"createTime\": \"2020-03-30 22:15:23\",\n      \"updateTime\": \"2020-04-27 23:30:36\"\n    },\n    \"createTime\": \"2020-03-17 21:17:38\",\n    \"updateTime\": \"2020-12-23 22:51:29\",\n    \"info\": \"haha\"\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/blogAdmin/user/getCode",
    "title": "随机验证码",
    "name": "userCode",
    "description": "<p>随机验证码有效期为10分钟</p>",
    "group": "USER",
    "version": "0.0.0",
    "filename": "apiDesc/api/user.js",
    "groupTitle": "用户模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>无需token认证授权</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "svg格式文件",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "DELETE",
    "url": "/blogAdmin/user/del/:id",
    "title": "用户删除",
    "name": "userDel",
    "group": "USER",
    "version": "0.0.0",
    "filename": "apiDesc/api/user.js",
    "groupTitle": "用户模块",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>需要token认证授权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": ":id",
            "description": "<p>用户ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"code\": \"10000\",\n    \"msg\": \"用户删除成功\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  }
] });
