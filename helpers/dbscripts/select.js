		//initiate the connection to a database
		require('./connection.js');


		//console.log(districtList);
			 var json;
			 var someVar =  [];

		querryString = 'SELECT * FROM district';

	conn.query(querryString, function(err, rows) {
			if (err) 

			{
				throw err;

			}
			
			else
			{
				setValue(rows);
			}
			
		});


		function setValue(x) 
		{

			someVar = x;
			json = JSON.stringify(someVar, null, 2);
			console.log(json);

		}

		//console.log(json);


	

		//terminate connection
		require('./endconnection.js');