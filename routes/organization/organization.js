const org = require('express').Router()

require('dotenv').config();
var axios = require('axios')

var config = {
	headers: {
		'content-type': 'application/json'
	}
}

var params = {
	"Full_Name_Of_Organization": "Kenyan Section of the ICJ",
	"organization_email": "compsafrica@gmail.com" ,
	"phone_number_1": "+245000000000",
	"mandate_of_organization": "Human rights, the rule of Law and Democracy",
	"organisation_acronym": "ICJ Kenya",
	"phone_number_2": "+2541111111",
	"Organization_Location": {"street": "Laikipia Rd"},
	"organization_social_media_details": [{ "Facebook": "@ICJ.Kenya"}]

}

/*
Data Routes 

*/

org.get('/', (req, res) => {
	axios.get(process.env.BKEND_server_url +'/organisations')
		.then(response => {
			console.log(response.data)
			res.status(200).send(response.data)
		})
		.catch( error => {
			res.status(400).send({"message": "Server Error"})
		})
})


org.post('/', (req, res) => {
	axios.post(process.env.BKEND_server_url +'/organisations', params, config)
		.then(response => {
			console.log(response.data)
			res.status(200).send(response.data)
		})
		.catch( error => {
			console.log(error)
			res.status(400).send({"message": "Server Error"})
		})
})

// serve html pages
org.get('/all', ( req, res) =>
{
	res.send("On organzations home page")
})

org.get('/new_organization', (req, res) =>
{
	res.send(" age to add a new organization")
})


module.exports = org
	