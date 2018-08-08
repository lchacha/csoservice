
/////////////////////////////////////////////////////////////////////
// Name: Message Controller
// Purpose: Hanles all the messages that the bot receives
// Create by lchacha@andrew.cmu.edu
////////////////////////////////////////////////////////////////////
// applicationController

var app = require("../models/applicationModel.js");


//var db = require("./helpers/applicationController.js")

function applicationController()
{

}; 

applicationController.prototype.getApplicationData = function (application, callback) {
      app_ = new app();

      app_.getGeneralData(application, function(response){
        console.log("I got data from the models     " )
        callback(response)
      });

  
};
// Gets all the applications from the Database
applicationController.prototype.getAllApps = function(callback) {
       app_ = new app();

      app_.getAllApplications(function(response){
        console.log("I got data from the models     " )
        callback(response)
      });
  
};

applicationController.prototype.saveAppData = function(var1, var2, a) {
  
};

applicationController.prototype.sendGenericMessage = function(recipientId) {
 
};

applicationController.prototype.getallActiveEvents = function(callback) {
 
  newApp = new app();

  newApp.getAllActiveSystemEvents(function(response){
    console.log(response)
    callback(response);
  })
};
  // Code to subscibe to a certain service
applicationController.prototype.insertApp = function (data, callback){
  // handles the business logic of the the pi data 
  // The callback returns the error or success from db
  // data is teh data you want to save
  newApp = new app();

  newApp.addNewApplication(data, function(response){
    console.log(response)
    callback(response);
  })
}



module.exports = applicationController;
