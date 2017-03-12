const token = require('./token');
var xmlparser = require('express-xml-bodyparser');

let routers = function routers(app) {
    //allow custom header and CORS
    app.all('*', function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
        res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

        if (req.method == 'OPTIONS') {
            res.send(200);
            /让options请求快速返回/
        } else {
            next();
        }
    });

    app.get('/', function(req, res, next) {
        res.render('index', { title: 'Express',date:new Date()});
    });

    app.get('/getData', function(req, res, next) {
        res.send({ title: 'Express' });
    });


    app.post('/api/v1/auth/login', function(req, res, next) {
        res.send({ "message": "Logged in" });
    });

    app.get('/api/v1/users/me', function(req, res, next) {
        res.send({ "username": "admin", "email": "admin@localhost", "role": "admin", "groups": [], "type": 0, "status": true, "firstname": "", "lastname": "", "notificationenabled": false });
    });

    // app.get('/token', function(req, res, next) {
    //     token(req, res);
    // });

    // app.post('/token', xmlparser({ trim: false, explicitArray: false }), function(req, res) {
    //     console.log(req.body);
    //     data = '<xml>'+
    //                 '<ToUserName><![CDATA['+req.body.tousername+']]></ToUserName>'+
    //                 '<FromUserName><![CDATA[${req.fromusername}]]></FromUserName>'+
    //                 '<CreateTime>1348831860</CreateTime>'+
    //                 '<MsgType><![CDATA[text]]></MsgType>'+
    //                 '<Content><![CDATA[this is a test]]></Content>'+
    //                 '<MsgId>1234567890123456</MsgId>'+
    //             '</xml>';
    //     res.writeHead(200, { 'Content-Type': 'application/xml' });
    //     res.end(data);
    // })
}

module.exports = routers;