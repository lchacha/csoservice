/*
This scripts handles all the logic of the person including all the processing 
Author: Lenah Chacha
email: lenah.chacha@gmail.com
*/
var Coalition = require("../models/coalition.js")

class coalitionController{
	
	getAllCoalitions(error, successMessage){
			var coal = new Coalition()
			coal.getAllCoalition(function(err){
				console.log("error coal controller")
				error(err)
			}, function(success){
				console.log("sucess in coal controller")
				successMessage(success)
			})		
		}


	// saves a new record
	saveCoalition(coalitionName, convener, profile, memberOrganization, error, successMessage){
		// TODO
		// check that all required variables are given
		// do all sql/code filtering on the variables
		
		// Send to model perosn to save details to db
		var coal = new Coalition(coalitionName, convener, profile, memberOrganization, error, successMessage )
		
		coal.saveCoalition(function(err){
			console.log("error in controller")
			error(err)
	
		}, function(success)  {
			console.log("success in controller")
			successMessage(success)
		})	

	}
	
	deleteCoalition(email)
	{
		var removePerson = new Person()

		removePerson.deletePerson(email)
	}
} 

module.exports = coalitionController
