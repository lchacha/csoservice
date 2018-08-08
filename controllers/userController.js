
/////////////////////////////////////////////////////////////////////
// Name: user Controller
// Purpose: Handles all the information about new users
// Create by rmwatima@andrew.cmu.edu
////////////////////////////////////////////////////////////////////
// applicationController


//var db = require("./helpers/applicationController.js")
var userModel= require("../models/userModel.js")

function userController()
{

}; 

userController.prototype.createUser = function (data, callback){
	// handles the business logic of the the pi data 
	// The callback returns the error or success from db
	// data is teh data you want to save
	user_model = new userModel();

	user_model.addNewUser(data, function(response){
		console.log(response)
		callback(response);
	})
}



module.exports = userController;