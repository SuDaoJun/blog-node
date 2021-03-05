const Router = require('koa-router')
const router =  new Router()
const { projectList, projectAdd, projectUpdate, projectDel} = require('../controllers/project')

const baseUrl = '/blogAdmin'
const basePageUrl = '/blogPage'

router.get(baseUrl + '/project/list', projectList)
router.post(baseUrl + '/project/add', projectAdd)
router.put(baseUrl + '/project/update', projectUpdate)
router.delete(baseUrl + '/project/del/:id', projectDel)
router.get(basePageUrl + '/project/list', projectList)

module.exports = router