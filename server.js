/////////////////////////////////////////////////////////////////
//File Name: server.js
//Description: starts the server sie web services
//Author: Lenah Chacha
//Email: lenah.chacha@gmail.com
///////////////////////////////////////////////////////////////

/*    DO NOT TOUCH */
// VAriable declaration
var express = require('express');

const path = require('path');

var app = express();

var server = require('http').Server(app);



//const flash = require('connect-flash')


//var owasp = require('owasp-password-strength-test')
// ALL GET routes go here
IPADDRESS = "127.0.0.1"
PORT = process.env.PORT || 3000

//var router = express.Router();


app.set('views', __dirname + '/views/production');

app.set('view engine', 'pug');



// Built in Middleware
// Serve static files like images css files and javascript files 
// The virtual path allows one to load by http://localhost:3000/static/images/kitten.jpg

app.use(express.static(path.join(__dirname, './public')));





app.use(function(err, req, res, next) {
    console.log("error  : ",err);
});

/* DO NOT TOUCH ABOVE THIS */

// Route for the main page 
app.get('/', function(req, res, next){
	
	res.sendfile("./views/production/index.html")
});

app.get('/tables', function(req, res, next){
	
	res.sendfile("./views/production/tables.html")
});


app.get('/tabledynamics', function(req, res, next){
	
	res.sendfile("./views/production/tables_dynamic.html")
});

app.get('/forms', function(req, res, next){
	
	res.sendfile("./views/production/form.html")
});

app.get('/contactcsos', function(req, res, next){
	
	res.sendfile("./views/production/arduino_registration.html")
});

//Template for adding a html page

//  app.get('/the_name_of_the_page', function(req,re,next){
//      	res.sednfile("./views/production/the_name_of_html_file")
//  });









/* DO NOT TOUCH BELOW THIS */

// Start the server running on port 3000 locally
server.listen(PORT, function(){
	console.log('Server running at port %d', PORT);
});


