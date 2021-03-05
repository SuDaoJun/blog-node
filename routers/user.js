const Router = require('koa-router')
const router =  new Router()
const { getRandomCode, login, userList, register, userAdd, userUpdate, resetPwd, setPwd, modifyPwd, sendEmail, userDel, pageLogin} = require('../controllers/user')

const baseUrl = '/blogAdmin'
const basePageUrl = '/blogPage'

router.get(baseUrl + '/user/list', userList)
router.post(baseUrl + '/user/register', register)
router.post(baseUrl + '/user/add', userAdd)
router.put(baseUrl + '/user/update', userUpdate)
router.post(baseUrl + '/user/login', login)
router.post(baseUrl + '/user/resetPwd', resetPwd)
router.post(baseUrl + '/user/setPwd', setPwd)
router.post(baseUrl + '/user/modifyPwd', modifyPwd)
router.post(baseUrl + '/user/sendEmail', sendEmail)
router.get(baseUrl + '/user/getCode', getRandomCode)
router.delete(baseUrl + '/user/del/:id', userDel)
router.post(basePageUrl + '/user/login', pageLogin)

module.exports = router
