var editor;

$(document).ready(function() {
alert("here")
	 editor = new $.fn.dataTable.Editor( {
		ajax: '/contact',
		table: '#peopleDatatable',
		fields: [
			{
				"label": "Title:",
				"name": "title"
			},
			{
				"label": "First Name:",
				"name": "firstname"
			},
			{
				"label": "Second Name:",
				"name": "secondname"
			},
			{
				"label": "Organization:",
				"name": "organization"
			},
			{
				"label": "Job Title:",
				"name": "jobtitle"
			},
			{
				"label": "E-mail:",
				"name": "email"
			},
			{
				"label": "Phone Number:",
				"name": "phonenumber"
			}
		]
	} );
	$('#peopleDatatable').on( 'click', 'tbody td:not(:first-child)', function (e) {
        editor.inline( this, {
            submit: 'allIfChanged'
        	} );
    	} );

	var table = $('#peopleDatatable').DataTable( {
		dom: 'Bfrtip',
		ajax: '/contact',
		columns: [
			{
				"data": "title"
			},
			{
				"data": "firstName"
			},
			{
				"data": "secondName"
			},
			{
				"data": "organization"
			},
			{
				"data": "jobTitle"
			},
			{
				"data": "email"
			},
			{
				"data": "phoneNumber"
			}
		],
		select: true,
		lengthChange: false,
		buttons: [
			{ extend: 'create', editor: editor },
			{ extend: 'edit',   editor: editor },
			{ extend: 'remove', editor: editor }
		]
	} );
} );


