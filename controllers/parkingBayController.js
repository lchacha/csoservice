/////////////////////////////////////////////////////////////////////
// Name: parking lot Controller
// Purpose: Handles all the messages that the arduino receives
// Create by rmwatima@andrew.cmu.edu
////////////////////////////////////////////////////////////////////



//var db = require("./helpers/applicationController.js")
var parkingBayModel= require("../models/parkingBayModel.js")

function parkingBayController()
{

}; 

parkingBayController.prototype.addNewParkingBay = function (data, callback){
	newBay = new parkingBayModel();
	newBay.addNewParkingBay(data, function(response){
		console.log(response)
		callback(response);
	})
}

//parking bay update
parkingBayController.prototype.updateParkingBay = function (data, callback){
	updateBay = new parkingBayModel();
	updateBay.updateParkingBay(data, function(response){
		console.log(response)
		callback(response);
	})
}

//arduino status
parkingBayController.prototype.getBayStatus = function (application, callback) {
allBayStatus = new parkingBayModel();
allBayStatus.getBayStatus(function(response){
        console.log(response)
        callback(response);
    });
}



module.exports = parkingBayController;