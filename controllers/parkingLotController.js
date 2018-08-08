/////////////////////////////////////////////////////////////////////
// Name: parking lot Controller
// Purpose: Handles all the messages that the arduino receives
// Create by rmwatima@andrew.cmu.edu
////////////////////////////////////////////////////////////////////



//var db = require("./helpers/applicationController.js")
var parkingLotModel= require("../models/parkingLotModel.js")

function parkingLotController()
{

}; 

parkingLotController.prototype.addNewParkingLot = function (data, callback){
	newLot = new parkingLotModel();
	newLot.addNewParkingLot(data, function(response){
		console.log(response)
		callback(response);
	})
}

parkingLotController.prototype.getParkingLotData = function (arduino, callback) {
allLot = new parkingLotModel();
allLot.listAllLots(function(response){
        console.log(response)
        callback(response);
    });
}



module.exports = parkingLotController;