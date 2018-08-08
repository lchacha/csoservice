//pi model 
/////////////////////////////////////////////////////////////////////
// Name: pi model
// Purpose: Handles all properties and ehavior of a raasp berry pi
// Create by rmwatima@andrew.cmu.edu
////////////////////////////////////////////////////////////////////
// app Model

var db = require("../helpers/dbHelpers.js")


function piModel()
{

}; 


piModel.prototype.addNewPi = function(data,response) {

	var dbConnect = new db();
   dbConnect.addNewPi(data,function(callback){
  	response(callback)
  })
};


piModel.prototype.listAllPis = function(response) {
var dbConnect = new db();
  dbConnect.listAllPis(function(callback){
  	response(callback)

  })
};

module.exports = piModel;
