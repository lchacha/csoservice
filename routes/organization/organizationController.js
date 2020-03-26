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

var params = {
	"Full_Name_Of_Organization": "Kenyan Section of the ICJ",
	"Organization_Email": "compsafrica@gmail.com" ,
	"Phone_Number_1": "+245000000000",
	"mandate_of_organization": "Human rights, the rule of Law and Democracy",
	"organisation_acronym": "ICJ Kenya",
	"phone_number_2": "+2541111111",
	"Organization_Location": {"street": "Laikipia Rd"},
	"organization_social_media_details": null

}

var location = {
	"GPS_location": "",
	"Street": "", 
	"Building": ""
}

var social_media_ = {
	"Facebook": "",
	"Twitter": "",
	"Instagram": "",
	"Flickr": "",
	"Pinterest": "",
	"Website": "",
	"Whatsapp": ""

}


class orgi{

	 
	
	 all(error, successMessage){
		axios.get(process.env.BKEND_server_url +'/organisations')
			.then(response => {
				console.log(response.data)
				successMessage(response.data)
			})
			.catch( error => {
				error(error)
			})	
	}	

	notallP(){
		return "huhu"
	}
} 

module.exports = orgi;
