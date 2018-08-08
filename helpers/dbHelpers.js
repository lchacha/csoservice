require('./connection.js');

//getting all the registared parking lots

//parkingList = allParkingLots(queryParkingLots);


function dbHelpers()
{
    
}; 


//create new system users

dbHelpers.prototype.addNewUser = function(data, response)

{
var querString = 'INSERT INTO  user SET ?';

conn.query( querString,data, function(err, rows){

if (err) 
  {
    throw err;
    
} 
else 
{
var respond = "Successifully added a new User";
response(respond);

}
});

};
//end user insert
//list all the pis for the combo box to select the arduino
dbHelpers.prototype.listAllPis = function(response){

  var queryString = 'SELECT piID,appName,location,ipaddress FROM raspberrypi,application WHERE raspberrypi.appID=application.appID';

  conn.query(queryString, function(err, rows){
if (err)
 {
    throw err;

 }
  else
   {
    var jsonObj = JSON.stringify(rows, null, 2); 
    console.log(jsonObj);
    response(jsonObj);
   }


});
};

//list all the arduinos in the system
dbHelpers.prototype.listAllArduinos= function(response){

  var queryString = ' SELECT arduinoID,appName,ipaddress,arduino.location FROM arduino,application,raspberrypi WHERE arduino.piID=raspberrypi.piID  AND arduino.appID=application.appID';

  conn.query(queryString, function(err, rows){
if (err)
 {
    throw err;

 }
  else
   {
    var jsonObj = JSON.stringify(rows, null, 2); 
    console.log(jsonObj);
    response(jsonObj);
   }


});
};

//list all sensors
dbHelpers.prototype.listAllSensors= function(response){

  var queryString = 'SELECT sensorID,appName,sensor.arduinoID,ipaddress,arduino.location FROM arduino,application,raspberrypi,sensor WHERE arduino.piID=raspberrypi.piID  AND sensor.appID=application.appID AND arduino.arduinoID=sensor.arduinoID';

  conn.query(queryString, function(err, rows){
if (err)
 {
    throw err;

 }
  else
   {
    var jsonObj = JSON.stringify(rows, null, 2); 
    console.log(jsonObj);
    response(jsonObj);
   }


});
};
//list all roles
dbHelpers.prototype.listAllRoles= function(response){

  var queryString = 'SELECT * FROM userrole';

  conn.query(queryString, function(err, rows){
if (err)
 {
    throw err;

 }
  else
   {
    var jsonObj = JSON.stringify(rows, null, 2); 
    console.log(jsonObj);
    response(jsonObj);
   }


});
};

//get the parking lots from the database

dbHelpers.prototype.allParkingLots = function(application, response){

  var queryParkingLots = 'SELECT * FROM parkinglot where appID="' + application + '"';

  console.log(queryParkingLots)

  conn.query(queryParkingLots, function(err, rows){
if (err)
 {
    throw err;

 }
  else
   {

    response(JSON.stringify(rows, null, 2)); 
    // console.log("DATABASE HELPER");
    //console.log(rows);
    // response(rows);
   }


});
};



//get all the applications
dbHelpers.prototype.getAllApplications = function(response)
{
  var querString = 'SELECT * FROM application';

conn.query( querString, function(err, rows){

if (err) 
  {
    throw err;

  } 

else 
{

var jsonObj = JSON.stringify(rows, null, 2);
console.log(jsonObj); 
response(jsonObj);
}

});

};



//getting devices per application (sensors, arduino, pi)
//sensors

dbHelpers.prototype.getAllSensors = function(app_ID, response)

{

    var querString = "SELECT * FROM sensor WHERE appID = '"+ app_ID +"' ";

conn.query( querString, function(err, rows){

if (err) 
  {
    throw err;

  } 

else 
{

var jsonObj = JSON.stringify(rows, null, 2);
console.log(jsonObj); 
response(jsonObj);
}

});

};

//list all arduinos per application

dbHelpers.prototype.getAllArduino = function(app_ID, response)

{

    var querString = "SELECT * FROM arduino WHERE appID = '"+ app_ID +"' ";

conn.query( querString, function(err, rows){

if (err) 
  {
    throw err;

  } 

else 
{

var jsonObj = JSON.stringify(rows, null, 2);
console.log(jsonObj); 
response(jsonObj);
}

});

};


// list all sensors per application
dbHelpers.prototype.getAllPis = function(app_ID, response)

{
  console.log("DB  " + app_ID)

    var querString = "SELECT * FROM raspberrypi WHERE appID = '"+ app_ID +"' ";

conn.query( querString, function(err, rows){

if (err) 
  {
    throw err;

  } 

else 
{

var jsonObj = JSON.stringify(rows, null, 2);
console.log(jsonObj); 
response(jsonObj);
}

});

};


//get raspberry pi status
dbHelpers.prototype.getPiStatus = function(response)
{
  var querString = "SELECT COUNT(piID) as totalPi,(SELECT Count(piID) FROM raspberrypi WHERE status = 'reachable') as rechablePis FROM raspberrypi";

conn.query( querString, function(err, rows){

if (err) 
  {
    throw err;

  } 

else 
{

var jsonObj = JSON.stringify(rows, null, 2);
console.log(jsonObj); 
response(jsonObj);
}

});

};

//get arduino status
dbHelpers.prototype.getArduinoStatus = function(response)
{
  var querString = "SELECT COUNT(arduinoID) as totalArduino,(SELECT Count(arduinoID) FROM arduino WHERE status = 'reachable') as rechableArduino FROM arduino";

conn.query( querString, function(err, rows){

if (err) 
  {
    throw err;

  } 

else 
{

var jsonObj = JSON.stringify(rows, null, 2);
console.log(jsonObj); 
response(jsonObj);
}

});

};

//get sensor status
dbHelpers.prototype.getSensorStatus = function(response)
{
  var querString = "SELECT COUNT(sensorID) as totalSensor,(SELECT Count(sensorID) FROM sensor WHERE status = 'reachable') as rechableSensor FROM sensor";

conn.query( querString, function(err, rows){

if (err) 
  {
    throw err;

  } 

else 
{

var jsonObj = JSON.stringify(rows, null, 2);
console.log(jsonObj); 
response(jsonObj);
}

});

};
//get the list of all sensors and arduinos belonging to a particular arduino or pi
//get the arduinos per the arduino they are connected
dbHelpers.prototype.getAllSensorsPerArduino = function(ardID,app_ID, response)

{

    var querString = "SELECT * FROM sensor WHERE arduinoID = '"+ ardID +"' AND appID = '"+ app_ID + "'   ";

conn.query( querString, function(err, rows){

if (err) 
  {
    throw err;

  } 

else 
{

var jsonObj = JSON.stringify(rows, null, 2);
console.log(jsonObj); 
response(jsonObj);
}

});

};



dbHelpers.prototype.getAllSensors = function(app_ID, response)

{

    var querString = "SELECT * FROM sensor WHERE appID = '"+ app_ID + "'   ";

conn.query( querString, function(err, rows){

if (err) 
  {
    throw err;

  } 

else 
{

var jsonObj = JSON.stringify(rows, null, 2);
console.log(jsonObj); 
response(jsonObj);
}

});

};
//get all the arduinos which are connected to the specific raspberry pi
dbHelpers.prototype.getAllArduinoPerPI = function(pi_ID,app_ID, response)

{

    var querString = "SELECT * FROM arduino WHERE piID = '"+ pi_ID +"' AND appID = '"+ app_ID + "'   ";

conn.query( querString, function(err, rows){

if (err) 
  {
    throw err;

  } 

else 
{

var jsonObj = JSON.stringify(rows, null, 2);
console.log(jsonObj); 
response(jsonObj);
}

});

};

//All the methods fro data insert goes in this section
//new application, sensor,arduino,pi,user etc
//new app
dbHelpers.prototype.addNewApplication = function(data, response)
{
var querString = 'INSERT INTO  application SET ?';

conn.query( querString,data, function(err, rows){

if (err) 
  {
    throw err;
} 
else 
{
var respond = "Successifully added a new application";
response(respond);
}
});
};

//adding new raspberry pi
dbHelpers.prototype.addNewPi = function(data, response)

{
var querString = 'INSERT INTO  raspberrypi SET ?';

conn.query( querString,data, function(err, rows){

if (err) 
  {
    throw err;
} 
else 
{
var respond = "Successifully added a new Raspberry Pi";
response(respond);
}
});

};

//adding new arduino to a system
dbHelpers.prototype.addNewArduino = function(data, response)

{
var querString = 'INSERT INTO arduino SET ?';

conn.query( querString,data, function(err, rows){

if (err) 
  {
    throw err;
} 
else 
{
var respond = "Successifully added a new Arduino";
response(respond);
}
});

};

//adding new sensor to a system
dbHelpers.prototype.addNewSensor = function(data, response)

{
var querString = 'INSERT INTO sensor SET ?';

conn.query( querString,data, function(err, rows){

if (err) 
  {
    throw err;
} 
else 
{
var respond = "Successifully added a new Sensor";
response(respond);
}
});

};

//adding new log to a system
dbHelpers.prototype.addNewLog = function(data, response)

{
var querString = 'INSERT INTO devicelog SET ?';

conn.query( querString,data, function(err, rows){

if (err) 
  {
    throw err;
} 
else 
{
var respond = "Successifully added a new Log";
response(respond);
}
});

};

//get all the arduinos which are connected to the specific raspberry pi
dbHelpers.prototype.getAllActiveSystemEvents = function(response)

{

    var querString = "SELECT message FROM devicelog WHERE Resolved='NO' ";

conn.query( querString, function(err, rows){

if (err) 
  {
    throw err;

  } 

else 
{

var jsonObj = JSON.stringify(rows, null, 2);
console.log(jsonObj); 
response(jsonObj);
}

});

};

//event counts notification
dbHelpers.prototype.getEventCount = function(response)

{

var querString = "SELECT COUNT(logID) as totalEvent FROM devicelog WHERE Resolved='NO'";

conn.query( querString, function(err, rows){

if (err) 
  {
    throw err;

  } 

else 
{

var jsonObj = JSON.stringify(rows, null, 2);
console.log(jsonObj); 
response(jsonObj);
}

});

};

//innsert parameters into application parameters
dbHelpers.prototype.addNewParameter = function(data, response)

{
var querString = 'INSERT INTO appparameters SET ?';

conn.query( querString,data, function(err, rows){

if (err) 
  {
    throw err;
} 
else 
{
var respond = "Successifully added a new Parameter";
response(respond);
}
});

};
//defining new user role in the system
dbHelpers.prototype.addNewRole = function(data, response)

{
var querString = 'INSERT INTO userrole SET ?';

conn.query( querString,data, function(err, rows){

if (err) 
  {
    throw err;
} 
else 
{
var respond = "Successifully added a new Role";
response(respond);
}
});

};

//application update
//insert new lot
dbHelpers.prototype.addNewParkingLot = function(data, response)

{
var querString = 'INSERT INTO parkinglot SET ?';

conn.query( querString,data, function(err, rows){

if (err) 
  {
    throw err;
} 
else 
{
var respond = "Successifully added a new Lots";
response(respond);
}
});

};
//get all the parking lots
dbHelpers.prototype.listAllLots = function(response)
{
  var querString = 'SELECT DISTINCT lotID,name FROM parkinglot';

conn.query( querString, function(err, rows){

if (err) 
  {
    throw err;

  } 

else 
{

var jsonObj = JSON.stringify(rows, null, 2);
console.log(jsonObj); 
response(jsonObj);
}

});

};

//LIST ALL SECTORS
dbHelpers.prototype.listAllSectors = function(response)
{
  var querString = 'SELECT * FROM sector';

conn.query( querString, function(err, rows){

if (err) 
  {
    throw err;

  } 

else 
{

var jsonObj = JSON.stringify(rows, null, 2);
console.log(jsonObj); 
response(jsonObj);
}

});

};

//add new parking bay
dbHelpers.prototype.addNewParkingBay = function(data, response)

{
var querString = 'INSERT INTO parkingbay SET ?';

conn.query( querString,data, function(err, rows){

if (err) 
  {
    throw err;
} 
else 
{
var respond = "Successifully added a new bay";
response(respond);
}
});

};

//update parking bay when the sensors is occupied
dbHelpers.prototype.updateParkingBay = function(data, response)

{
var presence = data.carpresence;
var senID = data.sensorID;

console.log(senID);

var querString = 'UPDATE parkingbay SET carpresence = ? WHERE sensorID = ?';

conn.query( querString,[presence,senID], function(err, rows){

if(err) 
  {
throw err;
} 
else 
{
var respond = "Successifully updated the parking bay";
response(respond);
}
});

};

//Parking bay status
dbHelpers.prototype.getBayStatus = function(response)
{
  var querString = "SELECT parkinglot.name AS Parking,(SELECT COUNT(bayID) FROM parkingbay WHERE carpresence='0' AND parkingbay.lotID=parkinglot.lotID) AS FreeBay,(SELECT COUNT(bayID) FROM parkingbay WHERE carpresence='1' AND parkingbay.lotID=parkinglot.lotID) AS OcuppiedBay FROM parkinglot,parkingbay WHERE parkingbay.lotID=parkinglot.lotID GROUP BY Parking";

conn.query( querString, function(err, rows){

if (err) 
  {
    throw err;

  } 

else 
{

var jsonObj = JSON.stringify(rows, null, 2);
console.log(jsonObj); 
response(jsonObj);
}

});

};

//terminate connection
module.exports = dbHelpers;