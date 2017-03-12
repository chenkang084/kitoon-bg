var wechat = require('wechat');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
let routers = require('./routes/modules.js');
var settings = require('./settings');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

var config = {
  token: 'mygame',
  appid: 'wxdee062ba0c93c45b',
  encodingAESKey: 'hxlqJhRy5fVRU2xcl4dyJ0qC8MaUc5NgUCnlvEAVUes',
  checkSignature: true // 可选，默认为true。由于微信公众平台接口调试工具在明文模式下不发送签名，所以如要使用该测试工具，请将其设置为false
};

var app = express();
routers(app);

app.use(express.query());
app.use('/token', wechat(config, function (req, res, next) {
  // 微信输入信息都在req.weixin上
  var message = req.weixin;
//   if (message.FromUserName === 'diaosi') {
//     // 回复屌丝(普通回复)
//     res.reply('hehe');
//   } else if (message.FromUserName === 'text') {
//     //你也可以这样回复text类型的信息
//     res.reply({
//       content: 'text object',
//       type: 'text'
//     });
//   } else if (message.FromUserName === 'hehe') {
//     // 回复一段音乐
//     res.reply({
//       type: "music",
//       content: {
//         title: "来段音乐吧",
//         description: "一无所有",
//         musicUrl: "http://mp3.com/xx.mp3",
//         hqMusicUrl: "http://mp3.com/xx.mp3",
//         thumbMediaId: "thisThumbMediaId"
//       }
//     });
//   } else {
//     // 回复高富帅(图文回复)
//     res.reply([
//       {
//         title: '你来我家接我吧',
//         description: '这是女神与高富帅之间的对话',
//         picurl: 'http://nodeapi.cloudfoundry.com/qrcode.jpg',
//         url: 'http://nodeapi.cloudfoundry.com/'
//       }
//     ]);
//   }

    var arr = ['你好，欢迎光临！','hello Li Longlong','我现在只会随便说说...','waiting, i am developing ...']

    var index = Math.floor((Math.random()*arr.length));

    res.reply(arr[index]);
}));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', index);
// app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;