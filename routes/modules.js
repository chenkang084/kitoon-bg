let routers = function routers(app) {

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