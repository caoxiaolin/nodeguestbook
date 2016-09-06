var Schema = require('mongoose').Schema;
var messageSchema = Schema({
    username:String,
    email:String,
    content:String,
    create_date: { type: Date, default: Date.now }
});

module.exports = db.model('message', messageSchema);
