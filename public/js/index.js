var contactEditor;
var appname = "";
var appName = ""
$(document).ready(function() {

	  $('#addPerson').click(function(){
        	$('#dynamic_content').load('/addperson')
    	  });

	  $('#contactservice').click(function(){
        	$('#dynamic_content').load('/contactservice')
    	  });

	
});

	
$(document).ready(function() {

	$(document).ready(function(){
		$('#datatable-example').DataTable({
			"dataType": 'json',
			 dom: 'Bfrtip',
			"ajax":{
			 url: '/person',
			dataSrc: ''
			},
			columns:[
			  { data:"title"},
			  { data:"firstname"},
			  { data:"secondnamename"},
			  { data: "gender"},
			  { data: "organization"},
			  { data: "jobtitle"},
			  { data: "email"},
			  { data: "phonenumber"}
			],
			buttons: [
				{
				  extend: "copy",
				  className: "btn-sm btn-primary"
				},
				{
				  extend: "print",
				  className: "btn-sm"
				},
				{
				  text: "Delete",
				  className: "btn-sm btn-danger"
				}
			],
			select: true
		
		});
		
	});
	
});

$('#datatable-example tbody').on('select', function(){
	alert("I am selected")
})	
