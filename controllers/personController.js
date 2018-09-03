/*
This scripts handles all the logic of the person including all the processing 
Author: Lenah Chacha
email: lenah.chacha@gmail.com
*/
var Person = require("../models/person.js")
var csv = require('node-csv').createParser()



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
			console.log("error in contoller")
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

	// bulk uploads
	bulkUpload(path, error, successMessage)
	{
		
		console.log("PATH:  " + path)
		var indices ={}
		csv.parseFile(path, function(err, data){
			var d = data[0]
			console.log(typeof d)
			indices.tIndex = d.findIndex('Title')		
			console.log(data[0].indexOf('Title'))
			indices.fNIndex  = data[0].indexOf('First Name')
			indices.sNIndex  = data[0].indexOf('Second Name')
			indices.gIndex  = data[0].indexOf('Gender')
			indices.Index = data[0].indexOf('Organization')
			indices.dIndex  = data[0].indexOf('Department')
			indices.jTIndex = data[0].indexOf('Job Title')
			indices.eIndex = data[0].indexOf('E-mail')
			indices.pnIndex  = data[0].indexOf('Phone Number')

			// now go through the records while saving 
			for (index = 1; index <= data.length -1; index++)
			{
				savePerson(data[index][indices.tIndex], data[index][indices.fNIndex],data[index][indices.sNIndex],data[index][indices.gIndex], data[index][indices.Index], data[index][indices.dIndex],data[index][indices.jTIndex], data[index][indices.eIndex], data[index][indices.pnIndex], function(err){
					error(err)	
				}, 
				function(success){
					successMessage(success)
				}) 
			}
 
		})
	}
} 

module.exports = personController
