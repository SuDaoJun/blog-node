const Router = require('koa-router')
const router =  new Router()
const { uploadFile, uploadList, downFile, delFile} = require('../controllers/upload')

const baseUrl = '/blogAdmin'

router.post(baseUrl + '/file/upload', uploadFile);
router.get(baseUrl + '/file/list', uploadList)
router.get(baseUrl + '/file/down', downFile)
router.delete(baseUrl + '/file/del/:sourceId', delFile)

module.exports = router