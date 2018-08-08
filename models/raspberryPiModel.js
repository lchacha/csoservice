var db = require("../helpers/dbHelpers.js")
var dbConnect = new db();

function raspberryPiModel()
{

}; 

raspberryPiModel.prototype.getAppPis = function (application, callback) {
	var newDb = new db();

	newDb.getAllPis(application, function(response){
			callback(response)
	})
  
};

raspberryPiModel.prototype.addNewPi = function(data,response) {

	var dbConnect = new db();
   dbConnect.addNewPi(data,function(callback){
  	response(callback)
  })
};


raspberryPiModel.prototype.listAllPis = function(response) {
var dbConnect = new db();
  dbConnect.listAllPis(function(callback){
  	response(callback)

  })
};

raspberryPiModel.prototype.getPiStatus = function(response) {
var dbConnect = new db();
  dbConnect.getPiStatus(function(callback){
  	response(callback)

  })
};

raspberryPiModel.prototype.raspberryPiModel = function(appID, callback) {
  
};

raspberryPiModel.prototype.raspberryPiModel = function(appID, piID, callback) {
 
};

raspberryPiModel.prototype.raspberryPiModel = function(messageData) {
 
};



module.exports = raspberryPiModel;