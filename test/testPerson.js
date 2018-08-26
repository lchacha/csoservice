/* 
Class tests all functions in the Person Model
Author: Lenah Chacha
email: lenah.chacha@gmail.com
*/
var person = require("../models/person.js")

newPerson = new person("Mr", "Lenah", "Chacha", " Female", "blablabla", "Eating", "coodinator", "lenah.chacha@gmail.com", "+254 123456789")

console.log("testing")
// Call the methods now
console.log(newPerson.toString())
console.log(newPerson.savePerson())
console.log(newPerson.deletePerson())

