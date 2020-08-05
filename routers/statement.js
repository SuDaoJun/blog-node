const Router = require('koa-router')
const router =  new Router()
const { statementList, statementAdd, statementUpdate} = require('../controllers/statement')

const baseUrl = '/blogAdmin'
const basePageUrl = '/blogPage'

router.get(baseUrl + '/statement/list', statementList)
router.post(baseUrl + '/statement/add', statementAdd)
router.put(baseUrl + '/statement/update', statementUpdate)
router.get(basePageUrl + '/statement/list', statementList)

module.exports = router