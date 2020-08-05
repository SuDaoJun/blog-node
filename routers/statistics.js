const Router = require('koa-router')
const router =  new Router()
const { countTotalNum, accessUserStatistics, userStatistics, articleStatistics, messageStatistics, accessUserList, userList, articleList, messageList, tagList, articleArchive, randomMessage} = require('../controllers/statistics')

const baseUrl = '/blogAdmin'
const basePageUrl = '/blogPage'

router.get(baseUrl + '/statistics/countTotal', countTotalNum)
router.get(baseUrl + '/statistics/accessUserStatistics', accessUserStatistics)
router.get(baseUrl + '/statistics/userStatistics', userStatistics)
router.get(baseUrl + '/statistics/articleStatistics', articleStatistics)
router.get(baseUrl + '/statistics/messageStatistics', messageStatistics)
router.get(baseUrl + '/statistics/accessUserList', accessUserList)
router.get(baseUrl + '/statistics/userList', userList)
router.get(baseUrl + '/statistics/articleList', articleList)
router.get(baseUrl + '/statistics/messageList', messageList)
router.get(baseUrl + '/statistics/tagList', tagList)
router.get(basePageUrl + '/statistics/tagList', tagList)
router.get(basePageUrl + '/statistics/articleArchive', articleArchive)
router.get(basePageUrl + '/statistics/randomMessage', randomMessage)

module.exports = router