const Router = require('koa-router')
const router =  new Router()
const { tagList, tagAdd, tagUpdate, tagDel} = require('../controllers/tag')

const baseUrl = '/blogAdmin'

router.get(baseUrl + '/tag/list', tagList)
router.post(baseUrl + '/tag/add', tagAdd)
router.put(baseUrl + '/tag/update', tagUpdate)
router.delete(baseUrl + '/tag/del/:id', tagDel)

module.exports = router