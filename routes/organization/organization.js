const org = require('express').Router()

const organization = require("../../controllers/organizationController")
const multer = require("multer")

upload = multer()

const { searchSanitizer, organizationValidationRules, validate }= require('../../middleware/inputValidator.js')


/*
Data Routes 

*/

org.get('/', (req, res) => {
	orga = new lmlm()

	orga.all()
		.then(response => {
			console.log(response.data)
			res.status(200).send(response.data)
		})
		.catch( error => {
			console.log(error)
			res.status(401).send(error)
		})
	

})


org.post('/',  upload.none(), organizationValidationRules(), validate , (req, res, next) => {
	
	var org = new organization()
	org.createOne(req)
		.then( response =>{
			
			res.status(201).json({data: response.data, message: "Organization has been Saved"})
		})
		.catch( error => {
			
			let errors = [{message: "Internal Server Error"}]
			
			res.status(500).json({errors: errors})
		})
		

})

org.put('/:organization_id',  upload.none(), organizationValidationRules(), validate , (req, res, next) => {
	
	var org = new organization()
	
	org.updateOne(req.params.organization_id, req, )
		.then( response =>{
			
			res.status(201).json({data: response.data, message: "Organization has been updated"})
		})
		.catch( error => {
			
			let errors = [{message: "Internal Server Error"}]
			
			res.status(500).json(error)
		})
		

})

org.delete("/:id", (req, res) => {
	orga = new lmlm()
	orga.deleteOne()
		.then(response => {
			res.status(200).json({data: response.data, message: "Organization has been Deleted"})
		})
		.catch( error => {
			console.log(error)
			res.status(400).send(error)
		})
})

org.post("/data/search", upload.none(), searchSanitizer(), validate, (req, res, next) =>{
	
	var org = new organization()
	org.search(req)
		.then( response =>{
			console.log(response.data.length)
			res.status(200).json({data: response.data, message: "Organization found"})
		})
		.catch( error => {
			
			let errors = [{message: "Internal Server Error"}]
			
			res.status(422).json({errors: errors})
		})
})
/*---------------------------------------------------------------------

serve html pages

-----------------------------------------------------------------------*/
org.get('/search', ( req, res) =>
{
	res.render("allorganizations", {
			username: "Org_x",
			title : "Organizations - CSO Service"
	})
})
org.get('/new', (req, res) =>
{
	res.render("addOrganization",{
		username: "Org_x",
		title : "Profile - CSO Service",
		page_title: "Add New Organization"
	})
})

org.get('/:nickname/:id', (req, res) =>{
	
	var org = new organization()
	org.getOne(req.params.id, req)
	.then(response => {
		res.render("editOrganization", {
			username: "Org_x",
			title : response.data.Organisation_acronym +  " - CSO Service",
			page_title: response.data.organizationname,
			organization: response.data
		})
	})
	.catch(error =>{
		let errors = [{message: "Internal Server Error"}]
			
		res.status(422).json({errors: errors})
	})
	
})


module.exports = org
	