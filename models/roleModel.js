

/////////////////////////////////////////////////////////////////////
// Name: Arduino PiController
// Purpose: Handles all the messages that the arduino is suppposed to handle
// Create by lchacha@andrew.cmu.edu
////////////////////////////////////////////////////////////////////
// applicationController

var db = require("../helpers/dbHelpers.js")

var dbConnect = new db();

function roleModel()
{

}; 


roleModel.prototype.listAllRoles = function(response) {
var dbConnect = new db();
  dbConnect.listAllRoles(function(callback){
  	response(callback)

  })
};


roleModel.prototype.addNewRole= function(data,response) {

	var dbConnect = new db();
   dbConnect.addNewRole(data,function(callback){
  	response(callback)
  })
};


module.exports = roleModel;