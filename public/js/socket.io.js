var info = " alert-info ";

var danger = " alert-danger ";

var success = " alert-success ";

var status = 'Unreachable';

var image = ""

 var exp1  = '<li><a><span class="image"><img src="images/'

 var imagetag = '" alt="Profile Image" /></span><span><span><div class="alert ' 

 var exp2 =  '  alert-dismissible fade in text-center">' 

 var exp3 =  '</div></span><span class="time"><button class="btn-link"> Resolve </button></span></span>' 

 var exp4 = '<span class="message"> DETAILS:  ' 


$(document).ready(function() {
	 var socket= io.connect("http://127.0.0.1:3000")

    var request = $.ajax({
	  url: "systemEvents",
	  type: "GET",
	  dataType: "json",
	  contentType: "application/json; charset=utf-8",
	  success: function(data) { 
	  			

              	$.each(data, function (index, value) {
              		 var type = info;
              		image = "favicon.png"
					if(String(value.message).split('/')[4] == 'unreachable'){
					status = "Unreachable"
					type = danger;
					}
					if(String(value.message).split('/')[4] == 'reachable'){
					status = "Reachable"
					type = success;
					}
					if(String(value.message).split('/')[1] == 'RaspberryPI'){

					image = "pi.png"
					
					}
					if(String(value.message).split('/')[1] == 'Arduino'){

					image = "arduino.jpg"
					
					}
					if(String(value.message).split('/')[0] == 'Application'){

					image = "sensor.png"
					
					}
				
					$('.msg_list').append(
                        exp1 + image + imagetag + type + exp2+ status +  exp3 + exp4 + String(value.message) + '</span></a></li>'
					)
				$(document).scrollTop($(document).height());
			
		  	});
	  } 
	});  

	socket.on('connect', function(){
			
			
			socket.on('mqtt', function(msg){
				 var type = info;
				
				if(msg.eventType == 'unreachable'){
					status = "Unreachable"
					type = danger;
				}
				if(msg.eventType == 'reachable'){
					status = "Unreachable"
					type = success;
				}
				if(msg.device == 'RaspberryPI'){

					image = "pi.png"
					
				}
				if(msg.device == 'Arduino'){

					image = "arduino.jpg"
					
				}
				
				$('.msg_list').prepend(
                        
                        exp1 + image + imagetag + type + exp2 + status +  exp3 + exp4 + msg.payload  + '</span></a></li>'
					)
			})


		})
})

