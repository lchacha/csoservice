

/////////////////////////////////////////////////////////////////////
// Name: Arduino Model
// Purpose: Handles all the messages that the arduino is suppposed to handle
// Create by lchacha@andrew.cmu.edu
////////////////////////////////////////////////////////////////////
// applicationController

var db = require("../helpers/dbHelpers.js")

var dbConnect = new db();

function parkingLotModel()
{

}; 


parkingLotModel.prototype.addNewParkingLot = function(data,response) {

	var dbConnect = new db();
   dbConnect.addNewParkingLot(data,function(callback){
  	response(callback)
  })
};

parkingLotModel.prototype.listAllLots = function(response) {
var dbConnect = new db();
  dbConnect.listAllLots(function(callback){
  	response(callback)

  })
};



module.exports = parkingLotModel;