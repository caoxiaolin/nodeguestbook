exports.setRequestUrl = function(app){
    var objIndex = require('../controller/index');
    var objMessage = require('../controller/message');

    app.get('/', objIndex.index);
    app.post('/message/add', objMessage.add);
    app.post('/message/:id/reply', objMessage.reply);
    app.get('/message/:id/delete', objMessage.delete);
}
