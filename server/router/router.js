var Until=require('../Util/until.js');
var Config=require('../config/config.js');
var sha1 = require('sha1');
var soap = require('soap');
var fs=require('fs');

// routes/index.js
module.exports = function (app) {

    app.get('/',function(req, res,next){
        console.log(__dirname);
        res.render('index.html');  
    });

    app.get('/index',function(req, res,next){
        res.send('反向代理 nodejs root ~~~'); 
    });

    app.post('/fw', function(req, res,next) {
        return res.send("fw api"); 
    });


    app.post('/SendAcVerifyInfo',function(req, res,next){
        return res.send("SendAcVerifyInfo api"); 
    });


    app.use(function(req, res, next) {
        //判断是主动导向404页面，还是传来的前端路由。
    　　 //如果是前端路由则如下处理
        fs.readFile('./server/index.html','utf-8', function(err, data){
            if(err){
                console.log(err);
                res.send('后台错误');
                return next();
            } else {
                console.log(data);
                res.writeHead(200, {
                    'Content-type': 'text/html',
                    'Connection':'keep-alive'
                });
                res.end(data);
                return next();
            }
        })
    });

};
