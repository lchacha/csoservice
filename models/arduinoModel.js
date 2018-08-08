

/////////////////////////////////////////////////////////////////////
// Name: Arduino Model
// Purpose: Handles all the messages that the arduino is suppposed to handle
// Create by lchacha@andrew.cmu.edu
////////////////////////////////////////////////////////////////////
// applicationController

var db = require("../helpers/dbHelpers.js")

var dbConnect = new db();

function arduinoModel()
{

}; 

arduinoModel.prototype.getAppArduino = function (application, callback) {
	var newDb = new db();

	newDb.getAllArduino(application, function(response){
			callback(response)
	})
  
};


arduinoModel.prototype.addNewArduino = function(data,response) {

	var dbConnect = new db();
   dbConnect.addNewArduino(data,function(callback){
  	response(callback)
  })
};

arduinoModel.prototype.listAllArduinos = function(response) {
var dbConnect = new db();
  dbConnect.listAllArduinos(function(callback){
  	response(callback)

  })
};

arduinoModel.prototype.getArduinoStatus = function(response) {
var dbConnect = new db();
  dbConnect.getArduinoStatus(function(callback){
    response(callback)

  })
};

arduinoModel.prototype.raspberryPiModel = function(appID, callback) {
  
};

arduinoModel.prototype.raspberryPiModel = function(appID, piID, callback) {
 
};

arduinoModel.prototype.raspberryPiModel = function(messageData) {
 
};



module.exports = arduinoModel;