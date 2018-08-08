/////////////////////////////////////////////////////////////////////
// Name: parking lot Controller
// Purpose: Handles all the messages that the arduino receives
// Create by rmwatima@andrew.cmu.edu
////////////////////////////////////////////////////////////////////



//var db = require("./helpers/applicationController.js")
var sectModel= require("../models/sectorModel.js")

function sectorController()
{

}; 

sectorController.prototype.listAllSectors = function (arduino, callback) {
allSector = new sectModel();
allSector.listAllSectors(function(response){
        console.log(response)
        callback(response);
    });
}



module.exports = sectorController;