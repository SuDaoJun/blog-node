const Router = require('koa-router')
const router =  new Router()
const { articleList, articleDetail, articleAdd, articleLike, articleUpdate, articleDel} = require('../controllers/article')

const baseUrl = '/blogAdmin'
const basePageUrl = '/blogPage'

router.get(baseUrl + '/article/list', articleList)
router.get(baseUrl + '/article/detail', articleDetail)
router.post(baseUrl + '/article/add', articleAdd)
router.put(baseUrl + '/article/like', articleLike)
router.put(baseUrl + '/article/update', articleUpdate)
router.delete(baseUrl + '/article/del/:id', articleDel)
router.get(basePageUrl + '/article/list', articleList)
router.get(basePageUrl + '/article/detail', articleDetail)

module.exports = router