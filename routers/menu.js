const Router = require('koa-router')
const router =  new Router()
const { menuList, menuTree, menuAdd, menuUpdate, menuDel} = require('../controllers/menu')

const baseUrl = '/blogAdmin'

router.get(baseUrl + '/menu/list', menuList)
router.get(baseUrl + '/menu/tree', menuTree)
router.post(baseUrl + '/menu/add', menuAdd)
router.put(baseUrl + '/menu/update', menuUpdate)
router.delete(baseUrl + '/menu/del/:id', menuDel)

module.exports = router