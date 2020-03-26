(function() {
  'use strict';
  // Saves a Data field
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
	//var form = $(document).getElementById('previewer-form'')


    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
		
		var cvb = new FormData(form)
		
        if (form.checkValidity() === false ) {
	
          event.preventDefault();
          event.stopPropagation();
         
        }else{
            event.preventDefault();
            console.log(cvb.get('search'))
            axios.post("/organizations/data/search", cvb)
                .then( response => {
                    console.log(response.data)
                    renderTable(response.data)
                    // Render the data into a table
                   
			    })
                .catch( error =>{
                    
                    // get all inputs
                    //var inputs =  var element = document.getElementsByClassName('form-control');
                    $('input').removeClass('is-invalid')
                    let errors = error.response.data.errors
                    for ( var err in errors){
                        console.log(errors[err])
                            for ( var key in errors[err])
                            {
                                console.log('#'+key)
                                var element = document.getElementById(key);
                                console.log(key, element)
                                let feed =  $(element).closest('div').find('div.invalid-feedback')
                                element.classList.remove('is-invalid')
                             
                                console.log(feed)
                                feed.text(errors[err][key])
                                element.classList.add('is-invalid')
                             
                                //$('#error-bar').append("<div class='alert alert-danger' role='alert'>" + errors[err][key] + "</div>");
					        }
                    }
                })
          
			
		}
         //form.classList.add('was-validated');

      }, false);
    });
  }, false); 

  
})();

function getField (sample){
	let dt = []

	$.each(sample, ( r) => {
		
		dt.push({
			"data": r,
			"title": r
		})
	})
	
	return dt
}

function renderTable(data){
   
    try{
          $('#organizationstable').DataTable( {
          
        
          //dom: 'Bfrtip',
          /*buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print', 
            ],*/
          // "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
          "data": data.data,
          "columns":[
            {"data" : "organizationname",
                "fnCreatedCell": function(nTd, sData, oData, iRow, iCol){
					$(nTd).html("<a data-toggle='tooltip' title='View organization ' href='/organizations/"+ oData.Organisation_acronym+"/"+ oData.id +"'>"+oData.organizationname+"</a>")
				}},
			{"data": "organization_mandate"},
			{"data": "created_at"}
		  ]
          
            
        } );
        $('input').classList.add('form-control')
	}
    catch( error){
        console.log(error)
	}
}

$(document).ready(function() {

    // Get the organization details 
    
})