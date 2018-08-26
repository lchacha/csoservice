
/* 
Class tests all functions in the Person Model
Author: Lenah Chacha
email: lenah.chacha@gmail.com
*/
var organization= require("../models/organization.js")

newOrg = new organization("1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17", "18")

console.log("testing Organization")
// Call the methods now
console.log(newOrg.toString())
console.log(newOrg.saveOrganization())

