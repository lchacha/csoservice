/////////////////////////////////////////////////////////////////
//File Name: server.js
//Description: starts the server sie web services
//Author: Lenah Chacha
//Email: lenah.chacha@gmail.com
///////////////////////////////////////////////////////////////

// VAriable declaration
var app = require('express')();

const path = require('path');

var express = require('express');

var server = require('http').Server(app);

var bodyParser = require('body-parser');

//var router = express.Router();

var pug = require('pug');

app.set('views', __dirname + './views/production');

app.set('view engine', 'pug');

app.use(bodyParser.json());

var urlencodedParser = bodyParser.urlencoded({ extended: false })

var io = require('socket.io')(server);


var mqtt = require('mqtt')


// Built in Middleware
// Serve static files like images css files and javascript files 
// The virtual path allows one to load by http://localhost:3000/static/images/kitten.jpg
app.use(express.static(path.join(__dirname, './public')));



// Other file
var application = require("./controllers/applicationsController.js")
var raspberryPi = require("./controllers/piController.js");
var arduino = require("./controllers/arduinoController.js");
var sensor = require("./controllers/sensorController.js");
var user = require("./controllers/userController.js")
var sha256 = require('js-sha256');
var addApp = require("./controllers/appController.js");
var role = require("./controllers/roleController.js");
var devLog = require ("./controllers/deviceLogController.js");

// ALL GET routes go here
IPADDRESS = "127.0.0.1"
PORT = "8000"
// Route for the main page 
app.get('/', function(req, res){
	var username = "Lenah";
	res.sendFile(path.resolve('./views/production/index.html'));
	//res.render('index', {user:username});
});

app.get('/applications', function(req, res){
	var apps = new application();

	apps.getAllApps(function (callback){
		console.log("Applications in server")
		console.log(callback)
		res.status(200).send(callback);
	})
	//res.sendFile(path.resolve('./views/production/index.html'));
});

app.get('/datatables', function(req, res){
	res.sendFile(path.resolve('./views/production/applications.html'));
});

app.get('/application/:appname', function(req, res){
	//initializes the application
	iotApp = new application();

	var appname = req.params.appname;


	iotApp.getApplicationData(appname, function(response){
		console.log(response)
		res.send(response)
	})
	
});


app.get('/raspBerryPis/:appID', function(req, res){
	var newRaspberryPi = new raspberryPi();

	var appname = req.params.appID;
	console.log("server PIS " +appname)
	newRaspberryPi.getPis(appname, function(response){
		console.log(response)
		res.send(response)
	})

});

app.get('/sensors/:appID', function(req, res){

	var newSensor = new sensor();

	var appname = req.params.appID;
	console.log("server SENSOR " +appname)
	newSensor.getSensor(appname, function(response){
		console.log(response)
		res.send(response)
	})
});

app.get('/arduinos/:appID', function(req, res){

	var NewArduino = new arduino();

	var appname = req.params.appID;
	console.log("server ARDUINO " +appname)
	NewArduino.getArduino(appname, function(response){
		console.log(response)
		res.send(response)
	})
});

app.get('/systemEvents', function(req, res){

	var apps = new application();

	apps.getallActiveEvents(function (callback){
		console.log("system in server")
		console.log(callback)
		res.status(200).send(callback);
	})
});

//combo box applications
app.get('/applications', function(req, res){
	//initializes the application
	iotApp = new application();
	var appname = req.params;
	iotApp.getAllApps(appname, function(response){
		console.log(response)
		res.send(response)
	})
	
});

//combo box raspberry pis
app.get('/pis', function(req, res){
	//initializes the application
	pi_s = new raspberryPi();
	var newPiList = req.params;
	pi_s.getPiData(newPiList, function(response){
		console.log(response)
		res.send(response)
	})
	
});

//arduino combo box
app.get('/arduinos', function(req, res){
	//initializes the application
	console.log("pis combo")
	arduinos = new arduino();
	var newArduinoList = req.params;
	arduinos.getArduinoData(newArduinoList, function(response){
		console.log(response)
		res.send(response)
	})
	
});

//role combo box
app.get('/role', function(req, res){
	//initializes the application
	roles = new role();
	var newRoleList = req.params;
	roles.getRoleData(newRoleList, function(response){
		console.log(response)
		res.send(response)
	})
	
});

app.get('/sensor_registration', function(req, res){
	res.sendFile(path.resolve('./views/production/sensor_registration.html'))
});

app.get('/arduino_registration', function(req, res){
	res.sendFile(path.resolve('./views/production/arduino_registration.html'))
});

app.get('/app_registration', function(req, res){
	console.log("registering PI")
	res.sendFile(path.resolve('./views/production/app_registration.html'))
});

app.get('/pi_registration', function(req, res){
	res.sendFile(path.resolve('./views/production/pi_registration.html'))
});

app.get('/lot_registration', function(req, res){
	res.sendFile(path.resolve('./views/production/lot_registration.html'))
});

app.get('/bay_registration', function(req, res){
	res.sendFile(path.resolve('./views/production/bay_registration.html'))
});

app.get('/form', function(req, res){
	res.send(path.resolve('./views/production/testInsert.html'));
});

app.get('/users', function(req, res){
	res.sendFile(path.resolve('./views/production/user_profile.html'))
});


// ALL POST routes go here
// ALL POST routes go here
//submit application data
app.post('/submitAppData', function(req, res){

	var uniqueNumber = new Date().getTime();
	var id = 'APP' + uniqueNumber;
	var newApp = {appID:id,appName:req.body.appname,appStatus:req.body.appstatus,appDesciption:req.body.appDesc}

	new_App = new addApp();
	new_App.insertApp(newApp, function(response){
		console.log(response)
		res.send(response)
	 })

});

//submit pi data
app.post('/submitPi', function(req, res){

	var uniqueNumber = new Date().getTime();
	var id = 'PI' + uniqueNumber;
	var newPi = {piID:id,ipaddress:req.body.ipaddress,appID:req.body.application,status:req.body.pistatus,specs:req.body.specs}

	new_Pi = new raspberryPi();
	new_Pi.insertPi(newPi, function(response){
		console.log(response)
		res.send(response)
	 })

});


//submit arduino data
//submit pi data
app.post('/submitArduinoData', function(req, res){

	var uniqueNumber = new Date().getTime();
	var id = 'AD' + uniqueNumber;
	var newArduino= {arduinoID:id,appID:req.body.application,piID:req.body.pi,arduinoDescription:req.body.arduinodesc, status:req.body.ardstatus}

	new_Arduino = new arduino();
	new_Arduino.insertArduino(newArduino, function(response){
		console.log(response)
		res.send(response)
	 })

});
//submit sensor
app.post('/submitsensorData', function(req, res){

	var uniqueNumber = new Date().getTime();
	var id = 'AD' + uniqueNumber;
	var newSensor= {sensorID:id,appID:req.body.application,sensorType:req.body.sensorType,status:req.body.sensorstatus,arduinoID:req.body.arduino,sensorDesc:req.body.sensordesc}
	new_Sensor = new sensor();
	new_Sensor.insertSensor(newSensor, function(response){
		console.log(response)
		res.send(response)
	 })

});
//submit user data
app.post('/submitUserData', function(req, res){
	//encrypt password
	var hashedPass = sha256(req.body.pass);
	//unique username
	var uniqueNumber = new Date().getTime();
	var id = 'USER' + uniqueNumber;
	var newUser = {userID:id,firstName:req.body.first_name,roleID:req.body.role,lastName:req.body.last_name,middlename:req.body.middle_name,phoneNum:req.body.phone,email:req.body.email,carPlate:req.body.car_plate,carModel:req.body.car_model,Gender:req.body.gender,birthday:req.body.birthday,password:hashedPass}
	new_user = new user();
	new_user.createUser(newUser, function(response){
		console.log(response)
		res.send(response)
	 })

});

// ALL POST routes go here

// saves an mqtt event
app.post('/saveMqttEvent', function(req, res){

	console.log("I am sumitting  " + req.body.username)

});







///////////////////////////////////////////////////////////////////////
///// MQTT Client code to connect to the server //////////////////////
///////////// SERVER RUNS ON DEFAULT PORT 1833 ///////////////////////////////
//// RUN THE SERVER FROM PORT 3000 BY ./helpers/commands ////////////
////////////////////////////////////////////////////////////////////

var client = mqtt.connect("mqtt://172.29.52.149");

// var socket = io.connect('http://127.0.0.1:8000')

io.on('connection', function(socket){
	// Code to subscibe to a certain service
	console.log("A new user connected")


	socket.on('subscribe', function(data){
		console.log('Subsribing to '+ data.topic);
		socket.join()
	});
	// // code to 
	// socket.on('subscribe', function(data){
	// 	console.log('Subsribing to '+ data.topic);
	// 	socket.join()
	// });
})

client.on('connect', function(socket){
	client.subscribe('system/+/+/+')
	client.subscribe('$SYS/broker/clients/connected')
	client.subscribe('$SYS/broker/connection/#')
	client.subscribe('$SYS/broker/log/M/subscribe')
	client.subscribe('Application/+/+/+/+/+')
	console.log("please print this")


	
})

// Listen to mqtt message and publish it with socket.io
client.on('message', function(topic, message){

console.log('Jay');
console.log(topic + '=' + message);

	var alerts = io.of('/');
	var eventType = String(message).split('/')[0]
	if (eventType = 'system'){
		var status = String(message).split('/')[4]
		var logTime = String(message).split('/')[6]
		var device = String(message).split('/')[1]
		var deviceID = String(message).split('/')[3]

		alerts.emit('system', {'topic': String(topic), 'device':device, 'eventType': status, 'payload': String(message)})
	}
	if (eventType = 'Application'){
		//var status = String(message).split('/')[4]
		var logTime = String(message).split('/')[6]
		var device = String(message).split('/')[1]
		var deviceID = String(message).split('/')[3]

		alerts.emit('application', {'topic': String(topic), 'device':device, 'payload': String(message)})
	}
	

	//processing the message/status data to the db
	var uniqueNumber = new Date().getTime();
	var id = 'DL' + uniqueNumber; //Devie log unique indentifier
	var newLog= {logID:id,deviceID:deviceID,eventID:'EV001',timeStamp:logTime,message:message,Resolved:'NO',Notes:'Test by Mwatima'}

	new_Log = new devLog();
	new_Log.createLog(newLog, function(response){
	console.log(response)
	 })

})

// Start the server running on port 80
server.listen(8000, IPADDRESS);
