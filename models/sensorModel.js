

/////////////////////////////////////////////////////////////////////
// Name: Arduino sensorController
// Purpose: Handles all the messages that the sensor is suppposed to handle
// Create by lchacha@andrew.cmu.edu
////////////////////////////////////////////////////////////////////
// applicationController

var db = require("../helpers/dbHelpers.js")

var dbConnect = new db();

function sensorModel()
{

}; 

sensorModel.prototype.getAppSensor = function (application, callback) {
	var newDb = new db();

	newDb.getAllSensors(application, function(response){
			callback(response)
	})
  
};

sensorModel.prototype.addNewSensor = function(data,response) {

	var dbConnect = new db();
   dbConnect.addNewSensor(data,function(callback){
  	response(callback)
  })
};

sensorModel.prototype.getSensorStatus = function(response) {
var dbConnect = new db();
  dbConnect.getSensorStatus(function(callback){
    response(callback)

  })
};



sensorModel.prototype.listAllSensors = function(response) {
var dbConnect = new db();
  dbConnect.listAllSensors(function(callback){
    response(callback)

  })
};
sensorModel.prototype.raspberryPiModel = function(appID, callback) {
  
};

sensorModel.prototype.raspberryPiModel = function(appID, piID, callback) {
 
};

sensorModel.prototype.raspberryPiModel = function(messageData) {
 
};



module.exports = sensorModel;