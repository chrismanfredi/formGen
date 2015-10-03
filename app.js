var express = require('express'),
	app = express(),
	exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var port = process.env.PORT || 3000;
 
app.get('/', function (req, res) {
  res.render('home');
})

app.use('/www', express.static('www'));
app.use(express.static(__dirname + '/bower_components'));
 
app.listen(port);
console.log("Server Active on port: ", port);