



/* DO NOT TOUCH BELOW THIS */
const db = require('./connectdb.js');

db.query(`CREATE TABLE IF NOT EXISTS person(person_id serial unique not null, 
	  title VARCHAR(100) not null, 
          firstName  VARCHAR(100) not null,
	  secondName VARCHAR(100) not null,
	  gender  VARCHAR(10) not null,
	  organization  VARCHAR(200) not null,
	  department  VARCHAR(200) not null,
	  jobTitle  VARCHAR(200) not null,
	  email VARCHAR(200) not null,
   	  phonenumber VARCHAR(100) not null,
	  primary key(email))`, (err, res) => {
    if (err) {
      console.log(err)
    }
    console.log(res)
  })	


// Add organization relation
//db.query(`CREATE TABLE IF NOT EXISTS Organization(organization_id serial unique not null, 
//	  name VARCHAR(40) not null, 
//          nature  VARCHAR(40) not null,
//	  nickname VARCHAR(40) not null,
//	  organizationEmail  VARCHAR(40) not null,
//	  ExecutiveEmail  VARCHAR(40) not null,
//	  CommunicationEmail  VARCHAR(40) not null,
//	  landlineNumber  VARCHAR(40) not null,
//	  mobileNumber VARCHAR(40) [] not null,
//   	  streetAddress VARCHAR(40) not null,
//	  BuildingAddress VARCHAR(200),
//	  websiteAddress VARCHAR(40),
//	  twitterAddress VARCHAR(40),
//	  facebook VARCHAR(40),
//	  instagram VARCHAR(40),
//	  flickr VARCHAR(40),
//	  pinterest VARCHAR(40),
//	  whatsapp VARCHAr(40),
//	  primary key(organization_id))`, (err, res) => {
//    if (err) {
//     console.log(err)
//    }
//    console.log(res)
//  })	
//
//// Create WorkingGroups Realtion
//db.query(`CREATE TABLE IF NOT EXISTS workingroup(wg_id serial unique not null, 
//	  workingGroupName VARCHAR(40) not null, 
//          convener  VARCHAR(40) not null,
//	  wgProfile text not null,
//	  memberOrganization varchar(100) [][] not null,
//	  primary key(wg_id))`, (err, res) => {
//    if (err) {
//	    console.log(err)
//    }
//    console.log(res)
//  })	
