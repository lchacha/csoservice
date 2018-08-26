/* 
Class provides a template to a person
Author: Lenah Chacha
e-mail: lenah.chacha@gmail.com
*/
// import dependency classes
var db = require("../middleware/connectdb.js")

	 var coalitionName, convener, profile, members
class Coalition {


	constructor(name, convener, profile, members)
	{
		this.name =name	
		this.convener = convener
		this.profile = profile
		this.members = members
	}	

	
	toString() {
		return console.info('%s\t%s\t%s\t%s\t',  this.name, this.convener, this.profile, this.members) 
	}
	
	// Gets all records of organizations from DB
	getAllCoalition(error, success){
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
	saveCoalition(error, success){
			db.query(`INSERT INTO workingroup(workingGroupName, convener, wgProfile, memberOrganization) VALUES('${this.name}', '${this.convener}', '${this.profile}', '${this.members}')`, (err, res) =>     {
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
		db.query(`DELETE FROM coalition where wg_id='$id'`, (err, res) => {

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

	// TODO: Getters and Setters
	// TODO: Getters

}
module.exports=Coalition
