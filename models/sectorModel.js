

/////////////////////////////////////////////////////////////////////
// Name: Arduino Model
// Purpose: Handles all the messages that the arduino is suppposed to handle
// Create by lchacha@andrew.cmu.edu
////////////////////////////////////////////////////////////////////
// applicationController

var db = require("../helpers/dbHelpers.js")

var dbConnect = new db();

function sectorModel()
{

}; 


sectorModel.prototype.listAllSectors = function(response) {
var dbConnect = new db();
  dbConnect.listAllSectors(function(callback){
  	response(callback)

  })
};


module.exports = sectorModel;