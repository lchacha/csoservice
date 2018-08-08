//opening databse connection

var mysqlconn = require("mysql");
var dbname='CSOs';

conn = mysqlconn.createConnection({
	
	host: 'http://csoservice.kwaleparalegals.org',
	password: 'Admin12345',
	database: 'CSOs',
	user: 'admin'

});

conn.connect(function(err){

if (err) {
	console.log("Error in connection to DB....." + " " + dbname);
	return;
} 
else
 {
 	console.log("Successful connection to database" + " " + dbname);
 }
});

///console.log(conn.host);


