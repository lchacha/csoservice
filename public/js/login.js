
$(document).ready(function() {

	$('.loginButton').click(function(){
        
        // get the username
        var username = $('#appUsername').val()

        var password = $('#appPassword').val()

        // test the strength of the password
        // @2strengthofthePassword
       var results = window.owaspPasswordStrengthTest.test(password);
       alert(JSON.stringify(results.errors))
       if(results.strong == false){
       		alert(results.isPassPhrase)
       		$('#errors').html(results.errors)
       		
       }//else{

        console.log("sening")
        var request = $.ajax({
		  url: "login",
		  type: "POST",
		  dataType: "html",
		  data: JSON.stringify({username: username, password: password}),
		  contentType: "application/json; charset=utf-8",
		      success: function(data) { 
		      	//if(data.redirect == "/home")
		      		// window.location = "/home"
		      		// location.reload()
		      		// alert(JSON.stringify(data))
		      		// console.log("received")
		      		gethome();
		    
		     	},
		       error: function(xhr, textStatus, errorThrown){
       				alert('request failed');
       				alert(textStatus)
       				alert(JSON.stringify(xhr))
       				alert(errorThrown)
   				}
		     	
		});
   // }
    });

});

function gethome(){
	//alert("gethome")
	window.location = "/home";
	// var request = $.ajax({
	// 	  url: "/home",
	// 	  type: "GET",
	// 	  dataType: "html",
	// 	 // data: JSON.stringify({username: username, password: password}),
	// 	  contentType: "application/json; charset=utf-8",
	// 	      success: function(data) { 
		      	
		    
	// 	     	},
	// 	       error: function(xhr, textStatus, errorThrown){
       				
 //   				}
		     	
	// 	});
}