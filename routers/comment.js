const Router = require('koa-router')
const router =  new Router()
const { commentList, commentAdd, commentUpdate, commentSticky, commentDel} = require('../controllers/comment')

const baseUrl = '/blogAdmin'
const basePageUrl = '/blogPage'

router.get(baseUrl + '/comment/list', commentList)
router.post(baseUrl + '/comment/add', commentAdd)
router.put(baseUrl + '/comment/update', commentUpdate)
router.put(baseUrl + '/comment/sticky', commentSticky)
router.delete(baseUrl + '/comment/del/:id', commentDel)
router.get(basePageUrl + '/comment/list', commentList)

module.exports = router