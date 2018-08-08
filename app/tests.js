var mqtt = require('mqtt')

var client = mqtt.connect('mqtt://127.0.0.1:1883')


client.on('connect', function(){
	client.subscribe('hello')
	console.log("please print this")
	// client.publish('presence', "This is Lenah's message")
})

// Function that listens to Message and prints
client.on('message', function(topic, message){
	console.log(message.toString())
	alert(message.toString())
	//client.end()
})