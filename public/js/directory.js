var persons 

$(document).ready(function() {

	var table = $('#datatable-buttons').DataTable();

	var requestPersons = $.ajax({
		url:'/person',
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

	
});

	
