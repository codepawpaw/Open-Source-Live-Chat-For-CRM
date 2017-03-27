
var express = require('express'),
  routes = require('./routes'),
  api = require('./routes/api'),
  http = require('http'),
  path = require('path');

var app = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.logger('dev'));
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static(__dirname + '/public')); 
app.use(app.router);

// development only
if (app.get('env') === 'development') {
  app.use(express.errorHandler());
}

// production only
if (app.get('env') === 'production') {
  // TODO
};


// serve index and view partials
app.get('/', routes.index);

app.get('/customer_chat_widget', function (req, res) {
	  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/customer_chat_widget');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
	   res.sendfile('public/chat.html');
});
//app.get('/partials/:name', routes.partials);


// redirect all others to the index (HTML5 history)
app.get('*', routes.index);

var server = http.createServer(app);
server.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});

var io = require('socket.io').listen(server);
io.sockets.on('connection', require('./routes/socket'));
module.exports.io = io;
exports = module.exports = app;