"use strict";

var messageModel = require('../models/message.js');

exports.add = function(req, res, next){
    messageModel.create({username: req.body.username, email: req.body.email, content: req.body.content}, function(err, result) {
        if (err){
            console.log(err);
             return;
        }
        res.send(result);
    });
}

exports.reply = function(req,res,next){
    messageModel.findByIdAndUpdate(req.params.id, {reply : req.body.content}, function(err, result){
        if(err){
            console.log(err);
            return;
        }
        console.log("data update:", result);
        res.send("OK");
    });
}

exports.delete = function(req,res,next){
    messageModel.findByIdAndRemove(req.params.id,function (err, result) {
        if(err){
            console.log(err);
            return;
        }
        console.log("data deleted:", result);
        res.send("OK");
    });
}
