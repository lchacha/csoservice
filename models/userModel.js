/////////////////////////////////////////////////////////////////////
// Name: user model
// Purpose: Handles all properties and ehavior of a raasp berry pi
// Create by rmwatima@andrew.cmu.edu
////////////////////////////////////////////////////////////////////
// app Model

var db = require("../helpers/dbHelpers.js")


function userModel()
{

}; 


userModel.prototype.addNewUser = function(data,response) {

  var dbConnect = new db();
   dbConnect.addNewUser(data,function(callback){
    response(callback)
  })
};


module.exports = userModel;