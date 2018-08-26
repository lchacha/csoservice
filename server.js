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

require('dotenv').config();

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

app.get('/app/:targetPage', function(req, res, next){
	var page = req.params.targetPage 

	res.sendfile("./views/production/" + page)
});


app.get('/tabledynamics', function(req, res, next){
	
	res.sendfile("./views/production/tables_dynamic.html")
});

app.get('/forms', function(req, res, next){
	
	res.sendfile("./views/production/form.html")
});

app.get('/contactcsos', function(req, res, next){
	
	res.sendfile("./views/production/contactcsos.html")
});


app.get('/orgform', function(req, res, next){
	res.sendfile("./views/production/orgform.html")
});


//Template for adding a html page

//  app.get('/the_name_of_the_page', function(req,re,next){
//      	res.sednfile("./views/production/the_name_of_html_file")
//  });



/* DO NOT TOUCH BELOW THIS */

// Start the database, confirm that it is up and then start the server for the application
var organization = require("./controllers/organizationController.js") 
var person = require("./controllers/personController.js")
var WorkingGroup = require("./controllers/coalitionController.js")


app.post('/entity/:type', (req,res,next) => {
	var type = req.params.type

	if (type == "organization")
	{
		
		newOrg = new organization()
		newOrg.saveOrganization("1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17", "18","19", function(err){
			console.log("error occured")
			next(err)
		},
		function(success){
			console.log("success")
			res.send("success again" )
		})
	
	}
	if (type == "person")
	{
		newPerson = new person()
		newPerson.savePerson("Mr", "Lenah", "Chacha", " Female", "blablabla", "Eating", "coodinator", "lenah.chacha@gmail.com", "+254 123456789", function(err){
			console.log(err)
			next(err)
		},
		function(success){
			console.log(success)
			res.send("success")
		})
	}
	if (type == "workingGroup")
	{
		wg = new WorkingGroup()
		members = "{ICJ, Host}"
		wg.saveCoalition("bla", "bla", "bla", members, function(err){
			console.log("error saving coalition")
			next(err)
		}, function(success){
			console.log("success saving Coalition")
			res.send("success")
		})	
	}
})

app.get('/organization', (req, res, next) => {
		org = new organization()
		org.getAllOrganization(function(err){
			console.log()
			next(err)
		}, function(success){
			console.log(success)
			res.send(success.rows)
		})
})

app.get('/coalition', (req, res, next) => {
		wg = new WorkingGroup()
		wg.getAllCoalitions(function(err){
			console.log()
			next(err)
		}, function(success){
			console.log(success)
			res.send(success)
		})
})

app.get('/person', (req, res, next) => {
		console.log("Called person API")
		newPerson = new person()
		newPerson.getAllPeople(function(err){
			console.log()
			next(err)
		}, function(success){
			console.log(success)
			res.send(success.rows)
		})
})
 var db = require("./middleware/connectdb.js")

app.get('/helper', (req,res,next) => {
	db.query(`DROP TABLE workingroup`, (err, rows) => {
		if(err)
			console.log(err)

		console.log(rows)
	})
	
	
})


app.get('/create', (req,res,next) => {
})

// Start the server running on port 3000 locally
server.listen(PORT, function(){
	console.log('Server running at port %d', PORT);
});



