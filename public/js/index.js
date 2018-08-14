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

	$('#datatable-example').DataTable({
		"dataType": 'json',
		responsive: true,
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
			  text: "Add New",
			  className: "btn-sm btn-primary",
			  action: function(e, dt, node, config){
				 $('.modal-body').load('/addperson')
				$('#exampleModal').modal('show')
			  }
			},
			{
			  extend: "copy",
			  className: "btn-sm"
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
		select: true,
		hash: true
	
	});
	
	
});


$(document).ready(function() {

	var table = $('#datatable-example').DataTable();
	$('#datatable-example tbody').on('dblclick', 'tr', function(){
		var data = table.row(this).data()
			$('.modal-body').load('/addperson')
			$('.modal-title').text('Edit Contact')
			$('#exampleModal').modal('show')
		$('#titleText').text("Edit")
		
		$('#title').text(data.title)
		
	})
	
})	

