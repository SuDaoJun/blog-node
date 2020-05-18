// 引入模块依赖
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
// 创建 token 类
class Jwt {
    constructor(data) {
        this.data = data;

    }

    //生成token
    generateToken() {
        let data = this.data;
        let cert = fs.readFileSync(path.join(__dirname, '../static/pem/private_key.pem'));//私钥 可以自己生成
        // let token = jwt.sign(data, cert, {expiresIn: '1d',algorithm: 'RS256'});  //1天过期
        let token = jwt.sign(data, cert, {expiresIn: '30d',algorithm: 'RS256'});
        return token;
    }

    // 校验token
    verifyToken() {
        let token = this.data.split(' ')[1]
        let cert = fs.readFileSync(path.join(__dirname, '../static/pem/public_key.pem'));//公钥 可以自己生成
        let res;
        try {
            let result = jwt.verify(token, cert, {algorithm: 'RS256'}) || {};
            res = result || {};
        } catch (e) {
            res = 'err';
        }
        return res;
    }
}
module.exports = Jwt;