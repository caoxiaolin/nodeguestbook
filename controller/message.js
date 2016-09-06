"use strict";

var messageModel = require('../models/message.js');

exports.add = function(req, res, next){
    messageModel.create({username: req.body.username, email: req.body.email, content: req.body.content}, function(err, result) {
        if (err) return next(err);
        res.send(result);
    });
}

exports.reply = function(req,res,next){
        res.send("");
}

exports.delete = function(req,res,next){
        res.send("");
}
