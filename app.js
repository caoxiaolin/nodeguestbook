var express = require("express"),
    router  = require("./libs/router"),
    mongo   = require("mongoose"),
    config  = require("./config"),
    http    = require("http"),
    path    = require("path");

global.db = mongo.createConnection(config.db);

var app = express();

app.engine('.html', require('ejs').__express);
app.use(express.static(path.join(__dirname, 'public')));

router.setRequestUrl(app);

http.createServer(app).listen(config.port, function(){
  console.log("Express server listening on port " + config.port);
});
