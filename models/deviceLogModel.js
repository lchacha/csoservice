//device Log
var db = require("../helpers/dbHelpers.js")


function deviceLogModel()
{

}; 


deviceLogModel.prototype.addNewLog = function(data,response) {

  var dbConnect = new db();
   dbConnect.addNewLog(data,function(callback){
    response(callback)
  })
};


deviceLogModel.prototype.getEventCount = function(response) {
var dbConnect = new db();
  dbConnect.getEventCount(function(callback){
  	response(callback)
  })
};


module.exports = deviceLogModel;