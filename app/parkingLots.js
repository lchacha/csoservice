parkingLots = [
						{"parkingLotID":"123",
						 "Name":"Parking 1", 
						 "parkingFees":"2", 
						 "nearestBuilding":"KCT", 
						 "adreesstaddress": "45 Kigali Street",
						 "nobays": "30",
						 "open": "7 am",
						 "Close": "5 am",
						 "parkingType": "OutDoor",
						 "sectorID": "45",
						 "roadNumber": "45"}
						 ]
						

function returnParkinglots(callback){
	callback(parkingLots);
}


			success: function(data) { 
	  			alert(JSON.stringify(data))
             	$.each(data, function (index, value) {
             		
				$('#datatable-buttons').append(
						
								'<tr>' + 
								'<td' + value.parkingLotID +
								'<td' + value.parkingLotID +
								'<td' + value.parkingLotID +
								'<td' + value.parkingLotID +
								'<td' + value.parkingLotID +
								'<td' + value.parkingLotID +
								'<td' + value.parkingLotID +
								'<td' + value.parkingLotID +
								'<td' + value.parkingLotID 
								
				);
				$(document).scrollTop($(document).height());
			})
          }

 $.each(r, function(colIndex, c) { 
			        	if (rowIndex == 0){
			        		alert(rowIndex)
	     					var row = $("<thead/> <tr/>");
	     					row.append($("<t"+(rowIndex == 0 ?  "h" : "d")+"/>").text(c));
	     					row.append("<tbody/>")
	     					 $('#datatable-buttons').append(row);
	     				}else{

        			var row = $("<tr/>");
			            row.append($("<t"+(rowIndex == 0 ?  "h" : "d")+"/>").text(c));
			        }
			        });
			        $('#datatable-buttons').append(row);

// 	$.each(data.results, function(rowIndex, r) {
	     			
       //  			var row = $("<tr/>");
			    //     $.each(r, function(colIndex, c) { 
			    //         row.append($("<t"+(rowIndex == 0 ?  "h" : "d")+"/>").text(c));
			    //     });
			    //     $('#datatable-buttons').append(row);
  			  // });
	     		
              	//$('#datatable-buttons').load("/ #tbody tr td" , JSON.stringify(data))

              	.table.table-striped.table-bordered

 if(rowIndex === 0 ){
	     				var row = header.insertRow(rowIndex);
	     			}
	     			else {
	     				var row = tBody.insertRow(rowIndex);
	     				table.append("<tbody id=\"contact\">...</tbody>");
	     				x =0;
	     			}
	     			
			        $.each(r, function(colIndex, c) { 
			        		if(x==1)
			        		{
			        		var cell = row.insertCell(colIndex);
			        		cell.innerHTML = c;
			        		}else
			        		{
			        			//var cell = row.insertCell(colIndex);
			        		//cell.innerHTML = c;
			        		row.append($("<t"+(rowIndex == 0 ? "h" : "d")+"/>").text(c));
			        		$("datatable-buttons").append(row);
			        		}
			        	 });

			        // $('#datatable-buttons').empty();
	//  $("#datatable-buttons").DataTable({
	// 	"ajax":{
	// 		"url":"application/" + appName,
	// 		"type":"GET",
	// 		"datatype":"application/json"
	// 		},
 //        "buttons": [ 'pdfHtml5'],
 //        "select": true,
	//     "dataSrc": function(json){
	//  	     return json.data;		
	//  		},
	// });

	table#datatable-buttons.table.table-striped.table-bordered