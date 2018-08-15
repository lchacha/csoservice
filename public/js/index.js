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
		 $('#dynamic_content').empty()
		 $('#dynamic_content').html(response)
	},
	error: function (xhr, status, errorThrown){
		alert(errorThrown)
		alert(status + "  Something went wrong")
		
	}
     })
}
// this function handles all SPA calls
$(document).ready(function() {


	  // This function handles each anchor on the page
	  $('a').on('click', function(e){
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

	
$(document).ready(function() {

	var table = $('#datatable-example').DataTable({
		"dataType": 'json',
		responsive:true,
		dom: 'Bfrtip',
		"ajax":{
		 url: '/person',
		dataSrc: ''
		},
		columns:[
		  { data:"title"},
		  { data:"firstname"},
		  { data:"secondname"},
		  { data: "gender"},
		  { data: "organization"},
		  { data: "department"},
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
	new $.fn.dataTable.FixedHeader( table );	
	
});


$(document).ready(function() {
	var table = $('#datatable-example').DataTable()
	$('#datatable-example tbody').on('dblclick', 'tr', function(){
		var data = table.row(this).data()
			$('.modal-body').load('/addperson')
			$('.modal-title').text('Edit Contact')
			$('#exampleModal').modal('show')
		$('#titleText').text("Edit")
		
		$('#title').text(data.title)
		
	})
	
	$('#saveContact').click(function(){
		// get the values from the form
		  var datastring = $('#newPerson').serialize();
		 alert(datastring)
		// save the record to database
		// on success -> save to table
	})
	
})	

