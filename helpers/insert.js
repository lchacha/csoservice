//initiate the database connection
require('connection.js');

var record = {name: 'Jenny'};

var queryString = 'INSERT INTO testinsert SET ?';

conn.query( queryString, record ,function(err) {

	if (err) {

		console.log('Failure in creating new record ');
	}

	 else 

	 {

	 	console.log('Successiful create a new record');
	 }

});

//terminate the database connection
require('endconnection.js');