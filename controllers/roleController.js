/////////////////////////////////////////////////////////////////////
// Name: arduino Controller
// Purpose: Handles all the messages that the arduino receives
// Create by rmwatima@andrew.cmu.edu
////////////////////////////////////////////////////////////////////
// roleController


//var db = require("./helpers/applicationController.js")
var roleModel= require("../models/roleModel.js")

function roleController()
{

}; 


roleController.prototype.getRoleData = function (arduino, callback) {
allrole = new roleModel();
allrole.listAllRoles(function(response){
        console.log(response)
        callback(response);
    });
}

roleController.prototype.insertRole = function (data, callback){
	newRole = new roleModel();

	newRole.addNewRole(data, function(response){
		console.log(response)
		callback(response);
	})
}


module.exports = roleController;