/* 
Class provides a template to a person
Author: Lenah Chacha
e-mail: lenah.chacha@gmail.com
*/
// import dependency classes
var db = require("../middleware/connectdb.js")

	 var orgName, orgDetails, shortName, orgEmail, ceoEmail, commDeptEmail, landline, mobile1, mobile2 , addressStreet, addressBuilding, addressGPS, website, twitter, facebook, instagram, flickr, pinterest, whatsapp
class Organization {


	constructor(orgName, orgDetails, shortName, orgEmail, ceoEmail, commDeptEmail, landline, mobile1, mobile2 , addressStreet, addressBuilding, addressGPS, website, twitter, facebook, instagram, flickr, pinterest, whatsapp)
	{
		this.orgName = orgName	
		this.orgDetails = orgDetails
		this.shortName = shortName
		this.orgEmail = orgEmail
		this.ceoEmail = ceoEmail
		this.commDeptEmail = commDeptEmail
		this.landline = landline
		this.mobile1 = mobile1
		this.mobile2 = mobile2
		this.addressStreet = addressStreet
		this.addressBuilding = addressBuilding
		this.addressGPS = addressGPS
		this.website = website
		this.twitter = twitter
		this.facebook = facebook
		this.instagram = instagram
		this.flickr = flickr
		this.whatsapp = whatsapp	
	}	

	
	toString() {
		return console.info('%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t',  this.orgName, this.orgDetails , this.shortName , this.orgEmail, this.ceoEmail , this.commDeptEmail , this.landline , this.mobile1 , this.mobile2 , this.addressStreet , this.addressBuilding ,  this.addressGPS , this.website , this.twitter , this.facebook, this.instagram , this.flickr , this.whatsapp) 
	}
	
	// Gets all records of organizations from DB
	getAllOrganization(error, success){
		db.query(`SELECT * from organization`, (err, res) => {
			if(err)
			{	
				error(err)
				return
			}
			success(res)
		})

	}

	// Adds an Organization to the database
	// TO-DO: Use prepared Statements
	saveOrganization(error, success){
			db.query(`INSERT INTO Organization(name, nature, nickname, organizationEmail, ExecutiveEmail, CommunicationEmail, landlineNumber, mobileNumber, streetAddress, BuildingAddress, websiteAddress, twitterAddress,  facebook, instagram, flickr, pinterest, whatsapp) VALUES('${this.orgName}', '${this.orgDetails}', '${this.shortName}', '${this.orgEmail}', '${this.ceoEmail}', '${this.commDeptEmail}', '${this.landline}', '{${this.mobile1} , ${this.mobile2}}' , '${this.addressStreet}' , '${this.addressBuilding}', '${this.website}' , '${this.twitter}',  '${this.facebook}' , '${this.instagram}',  '${this.flickr}','$this.pinterest}', '${this.whatsapp}')`, (err, res) =>     {
 		if (err) {
			console.log("error in model")
			 error(err)
 			return 
 		}
 		console.log("Saved:  " + toString() )
 		success(res)
		}
	)
	}

	deleteOrganization(id){
		db.query(`DELETE FROM organization where email='$id'`, (err, res) => {

		if (err) {
			console.log(err)
			return err

		}
		// send results if successful	
		console.log(res)
		console.log("Delete:  " + toString() )
		return res
		})
	}

	// Getters and Setters
	setOrgName(orgName){
		this.orgName = orgName
	}
	setOrgDetails (orgDetails){
		this.orgDetails = orgDetails
	}
	setShortName (shortName){
		this.shortName = shortName
	}
	setCeoEmail(ceoEmail){
		this.ceoEmail = ceoEmail
	}
	setCommDeptEmail(commDeptEmail){
		this.commDeptEmail = commDeptEmail
	}
	setLandlIne(landline){
		this.landline = landline
	}
	setMobile1(mobile1){
		this.mobile1=mobile1
	}
	setMobile2(mobile2){
		this.mobile2 = mobile2
	}
	setAddressStreet(addressStreet){
		this.addressStreet = addressStreet
	}
	setAddressBuilding(addressBuilding){
		this.addressBuilding = addressBuilding 
	}
	setAddressGPS(addressGPS){
		this.addressGPS = addressGPS
	}
	setWebsite(website){
		this.website = website
	}
	setTwitter(twitter){
		this.Twitter = twitter
	}
	setFacebook(facebook){
		this.facebook = facebook
	}
	setInstagram(instagram){
		this.instagram = instagram
	}
	setFlickr(flickr){
		this.flickr = flickr
	}
	setWhatsapp(whatsapp){
		this.whatsapp = whatsapp
	}
	// TODO: Getters

}
module.exports=Organization
