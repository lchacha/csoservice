/////////////////////////////////////////////////////////////////////
// Name: App model
// Purpose: Handles all properties and ehavior of a raasp berry pi
// Create by rmwatima@andrew.cmu.edu
////////////////////////////////////////////////////////////////////
// app Model

var db = require("../helpers/dbHelpers.js")


function appModel()
{

}; 


appModel.prototype.addNewApplication = function(data,response) {

	var dbConnect = new db();
   dbConnect.addNewApplication(data,function(callback){
  	response(callback)
  })
};

module.exports = appModel;