/////////////////////////////////////////////////////////////////////
// Name: Sensor Controller
// Purpose: Handles all the messages that the bot receives
// Create by lchacha@andrew.cmu.edu
////////////////////////////////////////////////////////////////////
// applicationController

var sensorModel = require("../models/sensorModel.js");


//var db = require("./helpers/applicationController.js")

function sensorController()
{

}; 

sensorController.prototype.getSensor = function(appName, callback){
	var newSensor = new sensorModel();
	console.log(appName)
	newSensor.getAppSensor(appName, function(response){
		callback(response)
	});

}

sensorController.prototype.insertSensor = function (data, callback){
	// handles the business logic of the the pi data 
	// The callback returns the error or success from db
	// data is teh data you want to save
	newSensorModel = new sensorModel();

	newSensorModel.addNewSensor(data, function(response){
		console.log(response)
		callback(response);
	})
}

sensorController.prototype.getSensorStatus = function (application, callback) {
allStatus = new sensorModel();
allStatus.getSensorStatus(function(response){
        console.log(response)
        callback(response);
    });
}

sensorController.prototype.listAllSensors = function (arduino, callback) {
allSensors = new sensorModel();
allSensors.listAllSensors(function(response){
        console.log(response)
        callback(response);
    });
}


module.exports = sensorController; 