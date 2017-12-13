'use strict';
var http=require('http');
var express=require('express');
var path=require('path');
var ejs=require('ejs');
var bodyParser = require('body-parser');
var logger = require('morgan');
var app=express();
var log4js=require('./lib/log4js/logger.js');
var config=require('./lib/config/config.js');

app.use(bodyParser.urlencoded({extended:false}));
app.use(logger('dev'));
app.engine('.html',ejs.__express);
app.set('view engine','html');
app.set('views',path.join(__dirname));
app.use(express.static(__dirname));
var routes = require('./router/router.js')(app);

const PORT = parseInt(process.env.LEANCLOUD_APP_PORT || config.port);
var server = http.createServer(app);
let _s='';
if(process.env.NODE_ENV.indexOf('production')>-1){
    server.listen(PORT, function(){
        _s='App (production) is now running on port '+PORT;
        console.log(_s);
        log4js.info(_s);
    });

}else{
    server.listen(PORT, function(){
        _s='App (dev) is now running on port '+PORT;
        console.log(_s);
        log4js.info(_s);
    });
}




