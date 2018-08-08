
 var editor
var appname = "";
var appName = ""
$(document).ready(function() {
	var probePis = setInterval(probePi, 10000);
	var update = setInterval(updatePis, 15000);
	var request = $.ajax({
	  url: "applications",
	  type: "GET",
	  dataType: "json",
	  contentType: "application/json; charset=utf-8",
	  success: function(data) { 
	  			//alert(JSON.stringify(data))
              	$.each(data, function (index, value) {
					
				
					$('#applications').append(
							
									'<li><a id="' + value.appID + '" name="' +value.appName + '" href="#" onclick=func(' + value.appID + ');>' + value.appName+ '</a></li>'
								
					);
				$(document).scrollTop($(document).height());
			
		  	});
	  } 
	});  

	


	  $('#app_registration').click(function(){
        
        $('#dynamic_content').load('/app_registration')
    });

	  $('#pi_registration').click(function(){
        
        $('#dynamic_content').load('/pi_registration')
    });

	   $('#sensor_registration').click(function(){
        
        $('#dynamic_content').load('/sensor_registration')
    });

	  $('#arduino_registration').click(function(){
        $('#dynamic_content').load('/arduino_registration')
    });

	  $('#user_profile').click(function(){
        $('#dynamic_content').load('/user_profile')
    });

		  $('#status_visual').click(function(){
        $('#dynamic_content').load('/status_visual')
    });

		  $('#role_registration').click(function(){
        $('#dynamic_content').load('/role_registration')
    });

	  $('#parkingbay_registration').click(function(){
        $('#dynamic_content').load('/parkingbay_registration')
    });

	  	  $('#parkinglot_registration').click(function(){
        $('#dynamic_content').load('/parkinglot_registration')
    });

		  	  $('#bay_status_visual').click(function(){
        $('#dynamic_content').load('/bay_status_visual')
    });
		
});
function func(param){

		console.log(param)
		var object = param.getAttribute('id')
		appName = param.getAttribute('name')
		//alert(object);
		appname = object
		$('#dynamic_content').load('/datatables')
		
		//getData(object)
	}
function probePi(){
			
		var request = $.ajax({
	  url: "/probePi",
	  type: "GET",
	  dataType: "json",
	  contentType: "application/json; charset=utf-8",
	      success: function(data) { 

	      		//updatePis()

	     	
	   }
	});
	
}

function updatePis(){
				console.log("updatePis")
		var request = $.ajax({
	  url: "piStatus",
	  type: "GET",
	  dataType: "json",
	  contentType: "application/json; charset=utf-8",
	      success: function(data) { 
	      	
	      	
	      	$.each(data, function (index, value) {
	      		var total =  value.totalPi;
	      		var reachable =  value.rechablePis;
	      		var unreach = total - reachable;
	      	 document.getElementById("total_pis").innerHTML = total;
             document.getElementById("up_pis").innerHTML = reachable;
             document.getElementById("percentUp_pis").innerHTML = Math.round((reachable/total) * 100) + "%";
	      	 document.getElementById("unreachable_pis").innerHTML = total - reachable;
                    document.getElementById("unreachablePiPercent").innerHTML = Math.round((unreach/ total ) * 100) + "%";	
	      		})
	     	
	   },
	   error: function(xhr, a , b)
	   {
	   	alert("error")
	   }

	});
	
}

function getData(appName){
	var dataCopy = []
	 table = document.getElementById("table-buttons");
	
	var request = $.ajax({
	  url: "application/" + appName,
	  type: "GET",
	  dataType: "json",
	  contentType: "application/json; charset=utf-8",
	      success: function(data) { 

	      		//$("#tablediv").empty();
	     		var tableHeaders ="";
	     		var tablerows ="";
	     		//alert(JSON.stringify(data))
	     		$.each(data, function (i, val){
	     			if(i == 0){
	     				$.each(val, function (col, c){
	     					tableHeaders += "<th>" + col+ "</th>";
	     				});
	     			
	     			}
	     			
	     		});
	     	
	     	},
	     	
	});
}
	
	// }
$(".tableCheck").change(function(){
	alert("I am seleted")
})


function createEditor()
{
editor = new $.fn.dataTable.Editor( {
        ajax: "",
        table: "#table-buttons",
        fields: [ {
                label: "First name:",
                name: "first_name"
            }, {
                label: "Last name:",
                name: "last_name"
            }, {
                label: "Position:",
                name: "position"
            }, {
                label: "Office:",
                name: "office"
            }, {
                label: "Extension:",
                name: "extn"
            }, {
                label: "Start date:",
                name: "start_date",
                type: "datetime"
            }, {
                label: "Salary:",
                name: "salary"
            }
        ]
    } );
}
	