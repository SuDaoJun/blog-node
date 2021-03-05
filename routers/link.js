const Router = require('koa-router')
const router =  new Router()
const { linkList, linkAdd, linkUpdate, linkDel } = require('../controllers/link')

const baseUrl = '/blogAdmin'
const basePageUrl = '/blogPage'

router.get(baseUrl + '/link/list', linkList)
router.post(baseUrl + '/link/add', linkAdd)
router.put(baseUrl + '/link/update', linkUpdate)
router.delete(baseUrl + '/link/del/:id', linkDel)
router.get(basePageUrl + '/link/list', linkList)

module.exports = router