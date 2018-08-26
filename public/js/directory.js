var persons 


	
function loadOrganizations(){
	

	var requestOrganizations = $.ajax({
		url:'/organization',
		type: "GET",
		dataType: 'json',
		contentType: "application/json; charset=utf-8",
		success: function (data) {
			persons = data;
			alert(persons)
		}

	}) 
	$.get('/person', function(data) {
		alert("yeey adding data")
		table.clear()
		table.rows.add(data)
		table.draw()
	})
		
	$('#addPerson').click(function(){
        	$('#dynamic_content').load('/addperson')
    	});

	$('#contactservice').click(function(){
        	$('#dynamic_content').load('/contactservice')
    	});
}

$(document).ready(function() {
	

	
});

	
