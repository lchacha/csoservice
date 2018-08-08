var nodeMaria = require('node-mariadb');
 
//hs readable configuration. 
var connection = nodeMaria.createConnection({
  host:'localhost',
  password:'iotdb',
  database: 'testMariaDB',
  port:3306
});
 
connection.on('erorr', function(err){
  console.log(err);
  process.exit(1);
});