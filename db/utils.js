/*
 * Created by davicente on 2017/10/07  
 */

var MongoClient = require('mongodb').MongoClient;


var db;

exports.getDbConnection = function(){
    return db;
};

exports.connectDB = function(callback) {
    MongoClient.connect("mongodb://localhost:27017/NodeMongoDB", function(err, dbConnection) {
        db = dbConnection;
        callback(err, dbConnection);
    });
}