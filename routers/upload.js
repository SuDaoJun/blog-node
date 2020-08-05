const Router = require('koa-router')
const multer = require('koa-multer');
const router =  new Router()
const { uploadFile, uploadList, downFile, delFile} = require('../controllers/upload')

const baseUrl = '/blogAdmin'

router.post(baseUrl + '/file/upload',multer({
  //设置文件存储路径
 dest: './static/img'   //img文件如果不存在则会自己创建一个,single上传单个文件
}).single('file'), uploadFile);
// router.post('/file/upload',multer({
//     //设置文件存储路径
//    dest: './static/img'   //img文件如果不存在则会自己创建一个，array上传多个文件，后面是表示最大支持的文件上传数目
// }).array('file',3), uploadFile);

router.get(baseUrl + '/file/list', uploadList)
router.get(baseUrl + '/file/down', downFile)
router.delete(baseUrl + '/file/del/:sourceId', delFile)
router.get('/file/down', downFile)

module.exports = router