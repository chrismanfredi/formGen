var express 	= require('express'),
	app 		= express(),
	exphbs      = require('express-handlebars'),
	port        = process.env.PORT || 3000;
	// Environmental variable
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));
 
app.get('/', function (req, res) {
  res.render('home');
});

var http = require('http'),
		port = 8080;
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(port);
console.log('Live on Port' + port);
 
app.listen(port);
console.log('Server active on port: ',port);