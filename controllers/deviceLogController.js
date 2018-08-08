/////////////////////////////////////////////////////////////////////
// Name: devicelogController
// Purpose: Handles all the messages or status from the devices to the database
// Create by rmwatima@andrew.cmu.edu
////////////////////////////////////////////////////////////////////

var devlogModel = require("../models/deviceLogModel.js");

function deviceLogController()
{

}; 

deviceLogController.prototype.createLog = function (data, callback){
	// handles the business logic of the the pi data 
	// The callback returns the error or success from db
	// data is teh data you want to save
	newLog = new devlogModel();

	newLog.addNewLog(data, function(response){
		console.log(response)
		callback(response);
	})
}


deviceLogController.prototype.getEventCount = function (arduino, callback) {
eventCount = new devlogModel();
eventCount.getEventCount(function(response){
        console.log(response)
        callback(response);
    })
}

module.exports = deviceLogController;
