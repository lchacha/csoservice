

/////////////////////////////////////////////////////////////////////
// Name: parameter Model
// Purpose: Handles all the messages that the arduino is suppposed to handle
// Create by rmwatima@andrew.cmu.edu
////////////////////////////////////////////////////////////////////

var db = require("../helpers/dbHelpers.js")

var dbConnect = new db();

function paremeterModel()
{

}; 


paremeterModel.prototype.addNewParameter = function(data,response) {

	var dbConnect = new db();
   dbConnect.addNewParameter(data,function(callback){
  	response(callback)
  })
};


module.exports = paremeterModel;