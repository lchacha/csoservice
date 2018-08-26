$(document).ready(function() {

	// Updates the tabs for organizations 
	var jqXHR = $.ajax({
		 url:'/organization',
		 type: "GET",
		 dataType: 'json',
		 contentType: "application/json; charset=utf-8",
		 success: function (data, status, jqXHR) {
			 $.each(data, function (key, value){
	                        var elem = createOrganization(value)
				$("#organizations").append(elem)
				
			});
		 },
		 error: function(jqXHR, status, err){
			alert("local error callback")
		
		 },
		 complete: function (jqXHR, status){
			console.log("local completeion callback")
		 }
 
 })

	$("#confused").click(function(){
		alert("yep yep")
	})

})


function createOrganization( organization ){
	// 
	var elem = ' <div class="col-md-4 col-sm-4 col-xs-12 profile_details">'
                        + '<div class="well profile_view">'
                          + '<div class="col-sm-12">'
                           
                            + '<h4 class="brief"><a data-toggle="tooltip"  title="Click to View Details"> ' + organization.name + '</a></h4>'
		            + '<div class="left col-xs-8">'
                               
                              + '<p><strong>Mandate: </strong>' + organization.nature + '</p>'
			    + '<ul class="list-unstyled">'
                               + '<li><i class="fa fa-building"></i> Address: ' +organization.streetaddress + ', ' + organization.buildingaddress + ' </li>'
                               +'  <li><i class="fa fa-phone-square"></i> Landline #: '+ organization.landlinenumber+' </li>'
                              +'   <li><i class="fa fa-phone"></i> Phone #: '+ organization.mobilenumber+' </li>'
                              +'   <li><i class="fa fa-envelope"></i> E-mail: '+ organization.organizationemail+' </li>'
                             +'   </ul>'
                            +'</div>'
                            +'<div class="right col-xs-4 text-center">'
                           +'      <img src="images/icj-kenya.png" alt="" class="img-square img-responsive">'
                          +'  </div>'
                         +'</div>'
                        
                          + '<div class="col-xs-12 bottom text-left">'
                           +' <div class="col-xs-12 col-sm-9 emphasis"> '
                              +'<button type="button" class="btn btn-success btn-xs"> <i class="fa fa-user">'
                              +'  </i> <i class="fa fa-comments-o"></i> </button>'
                              +'<button type="button" class="btn btn-primary btn-xs">'
                              +'  <i class="fa fa-eye"> </i> Details '
                             +' </button>'
                             +' <button type="button" class="btn btn-primary btn-xs">'
                             +'   <i class="fa fa-user"> </i> View People'
                            +'  </button>'
                           +' </div>'
                            +'<div class="col-xs-12 col-sm-3 emphasis">'
                              +'<button type="button" class="btn btn-primary btn-xs">'
                               +' <i class="fa fa-pen"> </i> Edit'
                              +'</button>'
                              +'<button type="button" class="btn btn-danger btn-xs">'
                              +'  <i class="fa fa-cancel"> </i> Delete'
                             +' </button>'
                          +'  </div>'
                         +' </div>'
                       +' </div>'
                      +'</div>'


		return elem
}
