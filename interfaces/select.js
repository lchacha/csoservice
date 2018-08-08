		//initiate the connection to a database
		require('./connection.js');

var querString = "SELECT * FROM parkinglot" ;
jsonObj = [];

conn.query( querString, function(err, rows){

if (err) 
  {
    throw err;

  } 

else 
{

jsonObj = JSON.stringify(rows, null, 2);
console.log(jsonObj); 

}

});



	

		//terminate connection
		require('./endconnection.js');