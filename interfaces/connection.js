//opening databse connection

var mysqlconn = require("mysql");
var dbname='iotachitecture';

conn = mysqlconn.createConnection({
	
	host: 'localhost',
	password: '',
	database: 'iotachitecture',
	user: 'root'

});

conn.connect(function(err){

if (err) {
	console.log("Error in connection to DB" + " " + dbname);
	return;
} 
else
 {
 	console.log("Successful connection to database" + " " + dbname);
 }
});

///console.log(conn.host);


