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
	
	res.sendfile("./views/production/contactcsos.html")
});


app.get('/addperson', function(req, res, next){
	res.sendfile("./views/production/addpersons.html")
});
//Template for adding a html page

//  app.get('/the_name_of_the_page', function(req,re,next){
//      	res.sednfile("./views/production/the_name_of_html_file")
//  });



/* DO NOT TOUCH BELOW THIS */

// Start the database, confirm that it is up and then start the server for the application
const db = require('./middleware/connectdb.js');

app.get('/contacts', (req,res,next) => {
	db.query(`INSERT INTO person (title, firstName, secondnamename, gender, organization, jobTitle, Email, phoneNumber)  VALUES ('Mr', 'Silas', 'Kamanza', 'Male', 'International Criminal Justice', 'Program Officer', 'silas.kamanza@gmail.com', '+254123456789')`, (err, res) => {
	    if (err) {
	      return next(err)
	    }
	    console.log(res)
	    console.log('success')
	  })	
	res.send("Successful")
})


app.get('/person', (req,res,next) => {
//	db.query(`DROP TABLE person`, (err, rows) => {
	db.query(`SELECT * FROM person`, (err, result) => {
	    if (err) {
	      return next(err)
	    }
	    res.send(result.rows)
	    console.log('success')
	  })	
})


app.get('/create', (req,res,next) => {
	db.query(`CREATE TABLE IF NOT EXISTS person(person_id serial unique not null, 
		  title VARCHAR(40) not null, 
                  firstName  VARCHAR(40) not null,
		  secondNameName  VARCHAR(40) not null,
		  gender  VARCHAR(10) not null,
		  organization  VARCHAR(40) not null,
		  jobTitle  VARCHAR(40) not null,
		  email VARCHAR(80) not null,
   		  phonenumber VARCHAR(40) not null,
		  primary key(email))`, (err, res) => {
	    if (err) {
	      return next(err)
	    }
	    console.log(res)
	  })	
})
// Start the server running on port 3000 locally
server.listen(PORT, function(){
	console.log('Server running at port %d', PORT);
});



