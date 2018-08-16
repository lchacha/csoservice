var contactEditor;
var table
var appName = ""
// Functions


function getPage(pageReference){
	$.ajax({
	url: pageReference,
	type: "GET",
	dataType: "html",
	success: function( response ){
			 $('#dynamic_content').html(response)
	},
	error: function (xhr, status, errorThrown){
		alert("Page not Found")
		alert(status + "  Something went wrong")
		
	}
     })
}
// this function handles all SPA calls
$(document).ready(function() {


	  // This function handles each anchor on the page
	  $('a').on('click', function(e){
			$('#dynamic_content').html("")
		e.preventDefault()
		var pageRef = $(this).attr('href')
        
		if( pageRef != "/" )
		{
			if(pageRef)
			{
				var targetRef = "/app/"+ pageRef
				getPage(targetRef)
			}
		}
		
    	  });

});

	


