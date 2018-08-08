var db = require("../helpers/dbHelpers.js")
var dbConnect = new db();

function applicationModel()
{

}; 


applicationModel.prototype.getAllApplications = function(response) {

  dbNew = new db();
  console.log("DATABASE connector");

  dbNew.getAllApplications(function(callback){
  	console.log("I got data from the DB")
  	response(callback)

  });
};

applicationModel.prototype.getGeneralData = function (application, response) {
  dbNew = new db();
  console.log("DATABASE connector");

  dbNew.allParkingLots(application, function(callback){
  	
  	response(callback)
  })
};

applicationModel.prototype.updateApplicationData = function(appID, data, callback) {

  
};

applicationModel.prototype.addNewApplication = function(data,response) {

  var dbConnect = new db();
   dbConnect.addNewApplication(data,function(callback){
    response(callback)
  })
};

applicationModel.prototype.getAllActiveSystemEvents = function(response) {

  var dbConnect = new db();
   dbConnect.getAllActiveSystemEvents(function(callback){
    response(callback)
  })
};



module.exports = applicationModel;