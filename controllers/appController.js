/////////////////////////////////////////////////////////////////////
// Name: Message Controller
// Purpose: Hanles all the messages that the bot receives
// Create by rmwatima@andrew.cmu.edu
////////////////////////////////////////////////////////////////////
// applicationController


//var db = require("./helpers/applicationController.js")
var appModel= require("../models/appModel.js")

function appController()
{

}; 

appController.prototype.insertApp = function (data, callback){
	// handles the business logic of the the pi data 
	// The callback returns the error or success from db
	// data is teh data you want to save
	newApp = new appModel();

	newApp.addNewApplication(data, function(response){
		console.log(response)
		callback(response);
	})
}

module.exports = appController;