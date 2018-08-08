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

var bodyParser = require('body-parser');

const session = require('express-session')

//const flash = require('connect-flash')
var mqtt = require('mqtt')

var cookieParser = require('cookie-parser')

//var owasp = require('owasp-password-strength-test')
// ALL GET routes go here
IPADDRESS = "127.0.0.1"
PORT = "3000"

//var router = express.Router();


app.set('views', __dirname + '/views/production');

app.set('view engine', 'pug');



// Built in Middleware
// Serve static files like images css files and javascript files 
// The virtual path allows one to load by http://localhost:3000/static/images/kitten.jpg
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './public')));

app.use(cookieParser())


app.use(session({
				//	path: '/',
				//name: 'metroparking',
				 secret: 'keyboard cat',
				resave : false,
				 saveUninitialized: false,
				 cookie: {httponly: true, secure: false, duration: 30*60*1000, activeDuration: 10*60*1000}
			}))






app.use(function(err, req, res, next) {
    console.log("error  : ",err);
});



//var urlencodedParser = bodyParser.urlencoded({ extended: false })

var io = require('socket.io')(server);



// Other file
var application = require("./controllers/applicationsController.js")
var raspberryPi = require("./controllers/rasperrypiController.js");
var arduino = require("./controllers/arduinoController.js");
var sensor = require("./controllers/sensorController.js");
var User = require("./controllers/userController.js")
var sha256 = require('js-sha256');
var addApp = require("./controllers/appController.js");
var role = require("./controllers/roleController.js");
var devLog = require ("./controllers/deviceLogController.js");
var appParameter = require ("./controllers/paremeterController.js");
var parkingLot = require ("./controllers/parkingLotController.js");
var  parkingBay= require ("./controllers/parkingBayController.js");
var  sector= require ("./controllers/sectorController.js");
var ping = require("ping");
//var pass = require("./helpers/passport.js")

// Route for the main page 


app.get('/', function(req, res, next){
	
//		res.redirect("/login")
	
//	res.render('index');
	res.sendfile("./views/production/index.html")
});


// Start the server running on port 80
server.listen(3000, IPADDRESS);

//Implementing roles
// var roles = require("roles");

// var myApp =  roles.addApplication("iotApp")


// myApp.addRoles("create")
//      .addRoles("remove")
//      .addRoles("view");

// var guestProfile = roles.addProfile("guest"),
//     managerProfile = roles.addProfile("RL1493227380569");

// guestProfile.addRoles("iotApp.view");
// managerProfile.addRoles("iotApp.*"); // this is auto-upd
