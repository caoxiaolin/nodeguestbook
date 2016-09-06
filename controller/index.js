"use strict";

var messageModel = require('../models/message.js'),
    moment       = require('moment');

exports.index = function(req, res, next){
    messageModel.find(function(err, result){
        if (err){
            return next(err);
        }
        res.render('index.html', {messageList : result, moment : moment});
    }).sort({"_id":-1});
}
