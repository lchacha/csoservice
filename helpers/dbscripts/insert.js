//initiate the database connection
require('./connection.js');

var district = {districtID:'DIS00002', name: 'Kicukiro'};

var queryString = 'INSERT INTO district SET ?';

conn.query( queryString, district ,function(err) {

	if (err) {

		console.log('Failure in creating new district ');
	}

	 else 

	 {

	 	console.log('Successiful create a district');
	 }

});

//terminate the database connection
require('./endconnection.js');