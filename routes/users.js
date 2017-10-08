/**
 * Created by siro on 18/07/17.
 */

var usersDB = require('../db/users');

exports.getUsers = function(req, res) {
    usersDB.getUsers(function(err, users) {
        res.send(users);
    });
}

exports.addUser = function(req, res) {
    var name = req.body.name;
    var desc = req.body.desc;
    var img = req.body.img;

    usersDB.createUser(name, desc, img, function(err, result) {
        res.status(201).send();
    });
}

exports.updateUser = function(req, res) {
    var userId = req.params.userId;
    var desc = req.body.desc;

    usersDB.updateUserDescription(userId, desc, function(err, result) {
        res.send();
    });
}

exports.deleteUser = function(req, res) {
    var userId = req.params.userId;

    usersDB.deleteUser(userId, function(err, result) {
        res.status(204).send();
    });
}