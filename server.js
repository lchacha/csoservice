/////////////////////////////////////////////////////////////////
//File Name: server.js
//Description: starts the server sie web services
//Author: Lenah Chacha
//Email: lenah.chacha@gmail.com
///////////////////////////////////////////////////////////////


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



// Route for the main page 

app.get('/', function(req, res, next){
	
	res.sendfile("./views/production/index.html")
});


// Start the server running on port 80
server.listen(PORT, function(){
	console.log('Server running at port %d', PORT);
});

