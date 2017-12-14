const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const config = require('../config/config.js');
const compose = require('composable-middleware');
var log4js=require('../log4js/logger.js');

const validateJwt = expressJwt({
    secret: config.session.secret
})

module.exports.isAuthenticated = () => {
    return compose()
        .use(function (req, res, next) {
            log4js.info(JSON.stringify(req.headers));
            // allow access_token to be passed through query parameter as well
            if (req.query && req.query.hasOwnProperty('access_token')) {
                req.headers.authorization = `Bearer ${req.query.access_token}`;
            }
            if(req.body && req.body.hasOwnProperty('access_token')) {
                req.headers.authorization = `Bearer ${req.body.access_token}`;
            }
            // IE11 forgets to set Authorization header sometimes. Pull from cookie instead.
            if (req.query && typeof req.headers.authorization === 'undefined') {
                req.headers.authorization = `Bearer ${req.cookies.token}`;
            }
            //验证是否服务端生成的token
            var token = req.headers.authorization.split('Bearer')[1];
            log4js.info("【token-token："+token+"】");
            //验证token是否过期
            validateJwt(req, res, next);

        })
        // Attach user to request
        .use(function (req, res, next) {

        });
}

module.exports.hasRole = (roleRequired) => {
    if (!roleRequired) {
        throw new Error('必须输入身份名称');
    }

    return compose()
        .use(this.isAuthenticated())
        .use(function meetsRequirements(req, res, next) {
            return next();
            //return res.status(403).send('没有访问权限');
        });
}

module.exports.signToken = (id, role) => {
    return jwt.sign({_id: id, role}, config.session.secret, {
        expiresIn: 60 * 60 * 5 // 过期时间 表示5小时过期
    })
}