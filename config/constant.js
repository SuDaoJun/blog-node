exports.HTTP_CODE = {
	ok: 200,  //请求已成功
	badRequest: 400, // 语义有误或请求参数有误
	unauthorized: 403, // 请求需要token验证，未登录状态
	notFound: 404, // 请求失败，请求所希望得到的资源未被在服务器上发现
  severError: 500, // 服务器错误
}

exports.RES_CODE = {
	reqSuccess: '10000',  //返回成功
	dataAlready: '10001',
	dataFail: '10002',
	pwdFail: '10003',
	codeFail: '10004',
	timeOver: '10005',
	randomFail: '10006',
	dataNot: '10007',
	statusFail: '10008',
}

exports.OPERATE_TYPE = {
	addOperate: 'add',
	updateOperate: 'update'
}

exports.ROLE_TYPE = {
	superRole: '5e81fefbce8e260a38d0b577',
  adminRole: '5e81ff0dce8e260a38d0b578',
  ordinaryRole: '5e81ff2dce8e260a38d0b579',
}
