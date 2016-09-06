exports.setRequestUrl = function(app){
    var objIndex = require('../controller/index');
    var objMessage = require('../controller/message');

    app.get('/', objIndex.index);
    app.post('/message/add', objMessage.add);
    app.post('/message/reply/:id', objMessage.reply);
    app.get('/message/delete/:id', objMessage.delete);
}
