		//initiate the connection to a database
		require('./connection.js');

var app_id = "AP001" ;
var arduino_id = "AD001";
var sense = { appID: app_id, arduinoID: arduino_id};
var querString = "SELECT * FROM sensor WHERE appID = '"+app_id+"' AND arduinoID = '"+arduino_id+"' " ;

conn.query( querString,sense, function(err, rows){

if (err) 
  {
    throw err;

  } 

else 
{

var jsonObj = JSON.stringify(rows, null, 2);
console.log(jsonObj); 

}

});



	

		//terminate connection
		require('./endconnection.js');