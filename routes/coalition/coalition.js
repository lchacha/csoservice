const coalition = require('express').Router()

const coaliton = require("../../controllers/organizationController")
const multer = require("multer")

upload = multer()

const { searchSanitizer, organizationValidationRules, coalitionSanitizer, validate }= require('../../middleware/inputValidator.js')


/*
Data Routes 

*/

coalition.post('/', coalitionSanitizer(), validate, (req, res) => {
	coali = new coaliton()

	coali.createCoalition()
		.then(response => {
			console.log(response.data)
			res.status(200).send(response.data)
		})
		.catch( error => {
			console.log(error)
			res.status(401).send(error)
		})
	

})

module.exports= coalition;
