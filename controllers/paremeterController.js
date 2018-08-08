/////////////////////////////////////////////////////////////////////
// Name: arduino Controller
// Purpose: Handles all the messages that the arduino receives
// Create by rmwatima@andrew.cmu.edu
////////////////////////////////////////////////////////////////////
// applicationController


//var db = require("./helpers/applicationController.js")
var paramModel= require("../models/paremeterModel.js")

function paremeterController()
{

}; 

paremeterController.prototype.insertNewParameter = function (data, callback){
	newParam = new paramModel();

	newParam.addNewParameter(data, function(response){
		console.log(response)
		callback(response);
	})
}


module.exports = paremeterController;