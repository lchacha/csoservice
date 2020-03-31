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
            //$('#organization')
            
            $('#error-bar').html("")
            startP()
			axios.post("/organizations", cvb)
                .then( response => {
                    alert(response.data.message)
                    success()
			    })
                .catch( error =>{
                    
                    // get all inputs
                    //var inputs =  var element = document.getElementsByClassName('form-control');
                    stopP()
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

$(document).ready(function() {

    // Get the organization details 

})