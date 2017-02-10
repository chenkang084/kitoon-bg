var settings = require('../settings'),
    Db = require('mongodb').Db,
    Connection = require('mongodb').Connection,
    Server = require('mongodb').Server;

var con = new Db(settings.db, new Server(settings.host, settings.port), { safe: true });
module.exports = con;

con.open(function(err,db){

    db.collection('users',function(err,collection){
        collection.insert({
            name:'jack2',
            age:10
        },{
            safe:true
        },function(){

        })


    })

    db.collection('users',function(err,collection){
        

        let rs = collection.findOne({name:'jack'},function(err,rs){
            console.log(rs);

            console.log(10);
        })

        
    })


});

// con.close();




