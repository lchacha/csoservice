$(document).ready(function() {

	$(document).ready(function(){
		$('#datatable-example').DataTable({
			"processing":true,
			"serverSide": true",
			"ajax":'/persons'
			"columns":[
			  {"rows":"title"},
			  {"rows":"firstname"},
			  {"rows":"secondnamename"},
			  {"rows": "gender"},
			  {"rows": "organization"},
			  {"rows": "jobtitle"},
			  {"rows": "email"},
			  {"rows": "phonenumber"},
			  {
			]
		
		});
		
	});
	
});

	
