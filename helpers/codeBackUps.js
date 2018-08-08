require('./connection.js');


var districtList = allDistrict(querryString);

var querryString = 'SELECT * FROM district';


function allDistrict(selectionQury) {
	var querryStatement = selectionQury;

conn.query(querryString, function(err, rows) {

	if (err) throw err;

	console.log('The districts are: \n');

	var jsonObj = JSON.stringify(rows, null, 2);
	//console.log(jsonObj);

	return jsonObj;

});

}


//terminate connection
require('./endconnection.js');



///////////////////////////////////////////////////////////
		//initiate the connection to a database
		require('./connection.js');


		//console.log(districtList);
			 var json;

		function allDistrict(queryStatement, callback) {

		conn.query(queryStatement, function(err, rows) {
			if (err) 

			{
				callback (err, null);

			}
			
			else
			{
				callback(null, rows);
			}
			
		});

		}


	querryString = 'SELECT * FROM district';

		allDistrict(querryString, function(err, data) {

			if (err)
			 {
			 	console.log('Error');
			 } 

			else
			 {

			 	json = JSON.stringify(data, null, 2);
			 	//console.log(json);
			 }

			 console.log(json);

			 //return json;
		});




		//console.log(newVar);


		//terminate connection
		require('./endconnection.js');
		//////////////////////////////////////////////////////////////////////////