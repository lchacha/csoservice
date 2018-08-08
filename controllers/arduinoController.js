/////////////////////////////////////////////////////////////////////
// Name: arduino Controller
// Purpose: Handles all the messages that the arduino receives
// Create by rmwatima@andrew.cmu.edu
////////////////////////////////////////////////////////////////////
// applicationController


//var db = require("./helpers/applicationController.js")
var arduinoModel= require("../models/arduinoModel.js")

function arduinoController()
{

}; 

arduinoController.prototype.insertArduino = function (data, callback){
	// handles the business logic of the the pi data 
	// The callback returns the error or success from db
	// data is teh data you want to save
	newArduino = new arduinoModel();

	newArduino.addNewArduino(data, function(response){
		console.log(response)
		callback(response);
	})
}

arduinoController.prototype.getArduinoData = function (arduino, callback) {
allArduino = new arduinoModel();
allArduino.listAllArduinos(function(response){
        console.log(response)
        callback(response);
    });
}

//adrduino per application
arduinoController.prototype.getAppArduino = function(appName, callback){
	var newArduino = new arduinoModel();
	console.log(appName)
	newArduino.getAppArduino(appName, function(response){
		callback(response)
	});

}

//status
arduinoController.prototype.getArduinoStatus = function (application, callback) {
allStatus = new arduinoModel();
allStatus.getArduinoStatus(function(response){
        console.log(response)
        callback(response);
    });
}


module.exports = arduinoController;