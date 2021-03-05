const Router = require('koa-router')
const router =  new Router()
const { roleList, roleUserList, roleAdd, roleUpdate, setRoleAuth, updateMuchUser, getRoleAuth, roleDel} = require('../controllers/role')

const baseUrl = '/blogAdmin'

router.get(baseUrl + '/role/list', roleList)
router.get(baseUrl + '/role/userList', roleUserList)
router.post(baseUrl + '/role/add', roleAdd)
router.put(baseUrl + '/role/update', roleUpdate)
router.put(baseUrl + '/role/setAuth', setRoleAuth)
router.put(baseUrl + '/role/updateMuchUser', updateMuchUser)
router.get(baseUrl + '/role/getAuth', getRoleAuth)
router.delete(baseUrl + '/role/del/:id', roleDel)

module.exports = router
