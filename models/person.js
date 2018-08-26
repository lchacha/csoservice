/* 
Class provides a template to a person
Author: Lenah Chacha
e-mail: lenah.chacha@gmail.com
*/
// import dependency classes
var db = require("../middleware/connectdb.js")

	var title, firstName , secondName , gender , organization , department , jobTitle , email , phoneNumber 
class Person {


	constructor(title, firstName, secondName, gender, organization, department, jobTitle, email, phoneNumber)
	{	
		this.title = title
		this.firstName = firstName
		this.secondName = secondName
		this.gender = gender
		this.organization = organization
		this.department = department
		this.jobTitle = jobTitle
		this.email = email
		this.phoneNumber = phoneNumber
	}	
	
	// TO-DO: Use prepared Statements
	toString() {
		return "My details Title: ${this.title}  FirstName: ${this.firstName} Second Name: ${this.secondName} Gender: ${this.gender} Organization ${this.organization} Department: ${this.department} JOb Title: ${this.jobTitle} ${this.email} Phone Number: ${this.phoneNumber} " 
	}
		
	// get all persons in db
	getAllPeople(error, success){
		db.query(`SELECT * from person`, (err, res) => {
			if(err){
				console.info("error in person model")
				error(err)
				return
			}
			success(res)
		})
	}
	
	// Class methods
	savePerson(error, success) {
		db.query(`INSERT INTO person (title, firstname, secondname, gender, organization, department, jobTitle, Email    , phoneNumber)  VALUES ('${this.title}', '${this.firstName}', '${this.secondName}', '${this.gender}', '${this.organization}', '${this.department}', '${this.jobTitle}', '${this.email}','${this.phoneNumber}')`, (err, res) => {
		if (err) {
			error(err)
			return 
		}
		console.log("Saved:  " + toString() )
			success(res)
		})
	}

	deletePerson(email){
		db.query(`DELETE FROM person where email='${email}'`, (err, res) => {

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
	setTitle(title){
		this.title = title
	}
	setFirstName (firstName){
		this.firstName = firstName
	}
	setSecondName (secondName){
		this.secondName = secondName
	}
	setGender(gender){
		this.gender = gender
	}
	setOrganization(organization){
		this.organization = organization
	}
	setDepartment(department){
		this.department = department
	}
	setJobTitle(jobTitle){
		this.jobTitle = jobTitle
	}
	setEmail(email){
		this.email = email
	}
	setPhoneNumber(phoneNumber){
		this.phoneNumber = phoneNumber
	}

	// Getters
	getTitle(){
		return this.title
	}	

	getFirstName(){
		return firstName
	}

	getSecondName(){
		return this.secondName
	}
	
	getGender(){
		return this.gender
	}

	getOrganization(){
	
		return this.organization
	}	
	
	getDepartment(){
		return this.department
	}
	
	getJobTitle(){
		return this.jobTitle
	}
		
	getEmail(){
		return this.email
	}
		
	getPhoneNumber(){
		return this.phoneNumber
	}

}
module.exports=Person
