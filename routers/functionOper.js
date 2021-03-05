const Router = require('koa-router')
const router =  new Router()
const { functionOperList, functionOperAdd, functionOperUpdate, functionOperDel} = require('../controllers/functionOper')

const baseUrl = '/blogAdmin'

router.get(baseUrl + '/functionOper/list', functionOperList)
router.post(baseUrl + '/functionOper/add', functionOperAdd)
router.put(baseUrl + '/functionOper/update', functionOperUpdate)
router.delete(baseUrl + '/functionOper/del/:id', functionOperDel)

module.exports = router