/*
This scripts handles all the logic of the person including all the processing 
Author: Lenah Chacha
email: lenah.chacha@gmail.com
*/
var Organization = require("../models/organization.js")

class organizationController{
	
	getAllOrganization(error, successMessage){
			var org = new Organization()
			org.getAllOrganization(function(err){
				console.log("error in org controller")
				error(err)
			}, function(success){
				console.log("sucess in org controller")
				successMessage(success)
			})		
		}
	

	saveOrganization(orgName, orgDetails, shortName, orgEmail, ceoEmail, commDeptEmail, landline, mobile1, mobile2 , addressStreet, addressBuilding, addressGPS, website, twitter, facebook, instagram, flickr, pinterest, whatsapp, error, successMessage){
		// TO_DO
		// check that all required variables are given
		// do all sql/code filtering on the variables
		
		// Send to model perosn to save details to db
		var newOrg = new Organization( orgName, orgDetails, shortName, orgEmail, ceoEmail, commDeptEmail, landline, mobile1, mobile2 , addressStreet, addressBuilding, addressGPS, website, twitter, facebook, instagram, flickr, pinterest, whatsapp, error, successMessage )
		
		newOrg.saveOrganization(function(err){
			console.log("error in controller")
			error(err)
	
		}, function(success)  {
			console.log("success in controller")
			successMessage(success)
		})	

	}
	
	deletePerson(email)
	{
		var removePerson = new Person()

		removePerson.deletePerson(email)
	}
} 

module.exports = organizationController
