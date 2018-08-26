/*
This scripts handles all the logic of the person including all the processing 
Author: Lenah Chacha
email: lenah.chacha@gmail.com
*/
var Person = require("../models/person.js")

class personController{
	

	 // get all people in db
          getAllPeople(error, successMessage){                                                                          
                  var newPerson = new Person()
                  newPerson.getAllPeople(function(err){
                          error(err)
  
                 }, function(success){
                          successMessage(success)
	 	 })
	}

	savePerson(title, firstName, secondName, gender, organization, department, jobtitle, email, phoneNumber, error, successMessage){
		// TO_DO
		// check that all required variables are given
		// do all sql/code filtering on the variables
		
		// Send to model perosn to save details to db
		var newPerson = new Person(title, firstName, secondName, gender, organization, department, jobtitle, email, phoneNumber)
		
		newPerson.savePerson(function(err){
			error(err)
	
		}, function(success)  {
			successMessage(success)
		})	

	}
	
	deletePerson(email)
	{
		var removePerson = new Person()

		removePerson.deletePerson(email)
	}
} 

module.exports = personController
