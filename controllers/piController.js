/////////////////////////////////////////////////////////////////////
// Name: Pi Controller
// Purpose: Hanles all the messages that the bot receives
// Create by rmwatima@andrew.cmu.edu
////////////////////////////////////////////////////////////////////
// applicationController


//var db = require("./helpers/applicationController.js")
var piModel= require("../models/raspberryPiModel.js")

function piController()
{

}; 

piController.prototype.insertPi = function (data, callback){
	// handles the business logic of the the pi data 
	// The callback returns the error or success from db
	// data is teh data you want to save
	newPi = new piModel();

	newPi.addNewPi(data, function(response){
		console.log(response)
		callback(response);
	})
}


piController.prototype.getPiData = function (application, callback) {
allPis = new piModel();
allPis.listAllPis(function(response){
        console.log(response)
        callback(response);
    });
}


module.exports = piController;