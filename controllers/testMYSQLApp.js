	var mysql = require ('mysql') 

	var connection = mysql.createConnection({
		
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'testdb'

	});


	connection.connect(function(err){
	if(!err) {
	    console.log("Database is connected ... nn");    
	} else {
	    console.log("Error connecting database ... nn");    
	}
	});


	connection.query('SELECT * FROM employees',function(err,rows){
	  if(err) throw err;

	  console.log('Data received from Db:\n');
	  console.log(rows);
	});

	connection.end(function(err) {
	  // The connection is terminated gracefully
	  // Ensures all previously enqueued queries are still
	  // before sending a COM_QUIT packet to the MySQL server.
	});
