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
 
app.listen(port);
console.log('Server active on port: ',port);