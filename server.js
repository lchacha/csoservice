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
var uuid = require("uuid/v4")
var session = require('express-session')
const FileStore = require('session-file-store')(session)

//const { body, validationResult } = require ( 'express-validator/check')


app.use(session({
  genid: (req) => {
    console.log('Inside the session middleware')
    console.log(req.sessionID)
    return uuid() // use UUIDs for session IDs
  },
  store: new FileStore(),
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

var axios  = require('axios')

//const flash = require('connect-flash')

//var owasp = require('owasp-password-strength-test')
// ALL GET routes go here
PORT = process.env.PORT || 8000

//var router = express.Router();


app.set('views', __dirname + '/views');

app.set('view engine', 'pug');

// Backend Server address
//var server = process.env.BKEND_server_url


app.use(express.static(path.join(__dirname, './public')));


var organization = require('./routes/organization/organization')


app.use('/organizations', organization)


app.get("/", (req, res) => {
    res.render("home")
})
// error handlers

// development error handler
/* will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});*/

// route to Get all persons from DB
// Enties in back end
// 1. organizations
// 2. persons 
// 3. organizationcategory
// 4. coalitionworkinggroups
// Strapi API documentation: https://strapi.io/documentation/3.0.0-beta.x/content-api/api-endpoints.html#endpoints


app.get('/persons', (req, res) =>{
	console.log(server+'/persons')
	axios.get(server +'/persons')
		.then(response => {
			console.log(response.data)
			res.status(200).send(response.data)
		})
		.catch( error => {
			res.status(400).send({"message": "Server Error"})
		})
})


// Start the server running on port 3000 locally
app.listen(PORT, () => console.log(`Frontend application listening on port ${PORT}!`))
