var db = require("../helpers/dbHelpers.js")
var dbConnect = new db();

function raspberryPiModel()
{

}; 

applicationController.prototype.getAppPis = function (application, callback) {
	var newDb = new db();

	newDb.getAllPis(function(application, response){
			callback(response)
	})
  
};

applicationController.prototype.raspberryPiModel = function(appID, callback) {
  
};

applicationController.prototype.raspberryPiModel = function(appID, piID, callback) {
 
};

applicationController.prototype.raspberryPiModel = function(messageData) {
 
};



module.exports = raspberryPiModel;