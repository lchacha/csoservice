/*
This scripts handles all the logic of the person including all the processing 
Author: Lenah Chacha
email: lenah.chacha@gmail.com
*/
require('dotenv').config();
var axios = require('axios')

var config = {
	headers: {
		'content-type': 'application/json'
	}
}

var contacts = {
	"phone1": "+2541111111",
	"phone2": "+245000000000",
}
var location = {
	"GPS_location": "",
	"Street": "", 
	"Building": "",
	"country":"",
	"city":""
}

var social_media = {
	"Facebook": "",
	"Twitter": "",
	"Instagram": "",
	"Flickr": "",
	"Pinterest": "",
	"Website": "",
	"Whatsapp": ""

}

var departments = ["HR", "Finance"]
var params = {
	"organization_name": "Kenyan Section of the ICJ",
	"organization_email": "compsafrica@gmail.com" ,
	"contacts": contacts,
	"organization_departments": departments,
	"organization_mandate": "Human rights, the rule of Law and Democracy",
	"organisation_acronym": "ICJ Kenya",
	"social_media": social_media,
	"address": location

}


class organizationController{

	 
	
	 all(error, successMessage){
		return new Promise( ( resolve, reject) => {
			axios.get(process.env.BKEND_server_url +'/organisations')
				.then(response => {
					resolve(response)
				})
				.catch( error => {
					reject( new Error(error))
				})	
		})
	}	

	getOne(id, req){
		return new Promise( ( resolve, reject) => {
			axios.get(process.env.BKEND_server_url +'/organisations/' + id)
				.then(response => {
					
					resolve(response)
				})
				.catch( error => {
					reject( new Error(error))
				})	
		})
	}	

	notpall(){
		return new Promise( (resolve, reject) => {
			axios.get(process.env.BKEND_server_url +'/organisations')
				.then( resp1 => {
					return resp1
				})
				.then (resp2 =>  {
					resp2.data.forEach( (value, i) =>{
						console.log(value.id)
						resolve(value)
					})
				
				})
				.catch ( error =>  {
					console.log("error occured")
					reject( new Error("error"))
				
				})
		})
	}

	createOne(req){
		
		return new Promise( (resolve, reject) => {
			try{
				
				axios.post(process.env.BKEND_server_url +'/organisations', 	compileOrganization(req.body), config)
					.then( resp1 => {
						console.log(resp1)
						resolve(resp1)
					})
					.catch ( error =>  {
						console.log("ERROR FROM STRAPI", error)
						reject( error)
				
					})
			}
			catch( error)
			{
				reject(error)
			}
			
		})
	}

	search(req){
		return new Promise((resolve, reject)=>{
			axios.get(process.env.BKEND_server_url +'/organisations?' + 'organizationname_contains=' + req.body.search)
				.then( resp => {
					resolve(resp)
				})
				.catch( error =>{
					reject( new Error(error))
				})
		})
	}

	updateOne(id, req){
		try{
			return new Promise( (resolve, reject) => {
			axios.put(process.env.BKEND_server_url +'/organisations/' + id, compileOrganization(req.body))
				.then( resp1 => {
					resolve(resp1)
				})
				.catch ( error =>  {
					console.log("error occured", error)
					reject( new Error(error))
				
				})
			})
		}
		catch ( error){
			console.log(error)
			let errors = [{message: "Error occured when processing your request"}]
			
			reject(new Error({errors: errors}))
		}
		
	}

	deleteOne(id){
		return new Promise( (resolve, reject) => {
			axios.delete(process.env.BKEND_server_url +'/organisations/' + id)
				.then( resp1 => {
					resolve(resp1)
				})
				.catch ( error =>  {
					console.log("error occured")
					reject( new Error("error creating"))
				
				})
		})
	}
} 

function compileOrganization(org){
	
	 contacts = {
		"phone1": org.phone_number1,
		"phone2": org.phone_number2
	}
	 location = {
		"GPS_location": org.gps,
		"Street": org.street, 
		"Building": org.building,
		"country":org.GPS_location,
		"city":org.City
	}

	 social_media = {
		"Facebook": org.facebook,
		"Twitter": org.twitter,
		"Instagram": org.instagram,
		"Flickr": org.flickr,
		"Pinterest": org.pinterest,
		"Website": org.website_url,
		"Whatsapp": org.whatsapp

	}

	departments = org.GPS_location
	params = {
		"organizationname": org.organization,
		"organization_email": org.email ,
		"communicationdept_email": org.commdept_email,
		"contacts": contacts,
		"organization_departments":org.organization_departments,
		"organization_mandate": org.nature,
		"organisation_acronym": org.acronym,
		"social_media": social_media,
		"address": location

	}

	return params;
}
module.exports = organizationController;
