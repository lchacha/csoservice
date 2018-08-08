/////////////////////////////////////////////////////////////////////
// Name: raspberry PiController
// Purpose: Handles all the messages that the bot receives
// Create by lchacha@andrew.cmu.edu
////////////////////////////////////////////////////////////////////
// applicationController

var piModel= require("../models/raspberryPiModel.js");


//var db = require("./helpers/applicationController.js")

function raspberryPiController()
{

}; 

raspberryPiController.prototype.getPis = function(appName, callback){
	var newPi = new piModel();
	console.log(appName)
	newPi.getAppPis(appName, function(response){
		callback(response)
	});

}


raspberryPiController.prototype.insertPi = function (data, callback){
	// handles the business logic of the the pi data 
	// The callback returns the error or success from db
	// data is teh data you want to save
	newPi = new piModel();

	newPi.addNewPi(data, function(response){
		console.log(response)
		callback(response);
	})
}


raspberryPiController.prototype.getPiData = function (application, callback) {
allPis = new piModel();
allPis.listAllPis(function(response){
        console.log(response)
        callback(response);
    });
}

//status
raspberryPiController.prototype.getPiStatus = function (application, callback) {
allStatus = new piModel();
allStatus.getPiStatus(function(response){
        console.log(response)
        callback(response);
    });
}


module.exports = raspberryPiController; 