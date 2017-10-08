/*
 * Created by davicente on 2017/10/07  
 */

var utilsDB = require('./utils');
var ObjectID = require('mongodb').ObjectID;

var db = utilsDB.getDbConnection();
var usersCollection;
db.createCollection('users', function(err, collection) {
    if(err) {
        console.log('Error creating users collection');
    }
    usersCollection = collection;
    console.log('Collection created');
});

exports.createUser = function(name, desc, img, callback) {
    usersCollection.insert({name: name, desc: desc, img: img}, {w:1}, callback);
}

exports.getUsers = function(callback) {
    usersCollection.find().toArray(callback);
}

exports.updateUserDescription = function(userId, desc, callback) {
    usersCollection.update({_id: ObjectID(userId)}, {$set:{desc: desc}}, {w:1}, callback);
}

exports.deleteUser = function(userId, callback) {
    usersCollection.remove({_id: ObjectID(userId)}, {w:1}, callback);
}
