const Router = require('koa-router')
const router =  new Router()
const { replyCommentList, replyCommentAdd, replyCommentUpdate, replyCommentDel} = require('../controllers/replyComment')

const baseUrl = '/blogAdmin'

router.get(baseUrl + '/replyComment/list', replyCommentList)
router.post(baseUrl + '/replyComment/add', replyCommentAdd)
router.put(baseUrl + '/replyComment/update', replyCommentUpdate)
router.delete(baseUrl + '/replyComment/del/:id', replyCommentDel)

module.exports = router