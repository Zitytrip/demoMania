var fs = require('fs'),
    express = require('express'),
    hbs = require('hbs'),

    config = require('./config'),  // THIS IS NOT "CONFIG" module, it is my own fuckup.
    conf = config.development;

var app = express();
hbs.registerPartials(__dirname + '/views/partials/');
// set the view engine to use handlebars
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {
    res.locals = {
        some_value: 'foo bar',
        list: ['cat', 'dog']
    }
    res.sendFile(__dirname + '/public/index.html');
});

var port = conf.server.port;
app.listen(port);
console.log("demoMania listening on port " + port);

