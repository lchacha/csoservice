


/////////////////////////////////////////////////////////////////////
// Name: Bay Model
// Purpose: Handles all the messages that the arduino is suppposed to handle
// Create by rmwatima@andrew.cmu.edu
////////////////////////////////////////////////////////////////////
// applicationController

var db = require("../helpers/dbHelpers.js")

var dbConnect = new db();

function parkingBayModel()
{

}; 


parkingBayModel.prototype.addNewParkingBay = function(data,response) {

	var dbConnect = new db();
   dbConnect.addNewParkingBay(data,function(callback){
  	response(callback)
  })
};

//update the parking bay on car presence
parkingBayModel.prototype.updateParkingBay = function(data,response) {

	var dbConnect = new db();
   dbConnect.updateParkingBay(data,function(callback){
  	response(callback)
  })
};

parkingBayModel.prototype.getBayStatus = function(response) {
var dbConnect = new db();
  dbConnect.getBayStatus(function(callback){
    response(callback)

  })
};




module.exports = parkingBayModel;