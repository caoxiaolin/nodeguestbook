var express = require("express"),
    bodyParser = require('body-parser'),
    router  = require("./libs/router"),
    mongo   = require("mongoose"),
    config  = require("./config"),
    http    = require("http"),
    path    = require("path");

global.db = mongo.createConnection(config.db);

var app = express();

app.engine('.html', require('ejs').__express);
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

router.setRequestUrl(app);

app.listen(config.port, function() {
    console.log('listening on http://localhost:' + config.port);
});
