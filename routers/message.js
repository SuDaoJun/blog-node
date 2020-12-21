const Router = require('koa-router')
const router =  new Router()
const { messageList, messageAdd, messageUpdate, messageDel} = require('../controllers/message')

const baseUrl = '/blogAdmin'
const basePageUrl = '/blogPage'

router.get(baseUrl + '/message/list', messageList)
router.get(basePageUrl + '/message/list', messageList)
router.post(baseUrl + '/message/add', messageAdd)
router.put(baseUrl + '/message/update', messageUpdate)
router.delete(baseUrl + '/message/del/:id', messageDel)
router.post(basePageUrl + '/message/add', messageAdd)

module.exports = router