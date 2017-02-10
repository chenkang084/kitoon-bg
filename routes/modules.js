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
        res.render('index', { title: 'Express' });
    });

    app.get('/getData', function(req, res, next) {
        res.send({ title: 'Express' });
    });


    app.post('/api/v1/auth/login', function(req, res, next) {
        res.send({ "message": "Logged in" });
    });

    app.get('/api/v1/users/me', function(req, res, next) {
        res.send({"username":"admin","email":"admin@localhost","role":"admin","groups":[],"type":0,"status":true,"firstname":"","lastname":"","notificationenabled":false});
    });




}

module.exports = routers;