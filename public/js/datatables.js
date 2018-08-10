
$(document).ready(function() {
	//alert("dataTables egin " + appname)
	document.getElementsByName("appliType")[0].innerHTML = appName
	//document.getElementsByName("appliType")[1].innerHTML = appName
		// Load the home tab in the application

		// Load the raspbeery Pis

	   var request = $.ajax({
	  		url: "raspBerryPis/" + appname,
	  		type: "GET",
	  		dataType: "json",
	 		contentType: "application/json; charset=utf-8",
	     	success: function(PIdata) { 
	     		//alert(JSON.stringify(PIdata))
	      		var tableNamePi = "#datatable-pis";
	      		loadPis(PIdata, tableNamePi);
	     
	     	}, // endd of success ajax function

	     }); // end of ajax call
	  var request2 = $.ajax({
		  url: "application/" + appname,
		  type: "GET",
		  dataType: "json",
		  contentType: "application/json; charset=utf-8",
	      success: function(data) { 
	      		//alert(JSON.stringify(data))
	      		var tableName = "#datatable-general";
	      		loadData(data, tableName);
	     
	     	}, // endof success ajax function
	     }); // end of ajax call

	  

	   // Load the Arduinos
	   var request3 = $.ajax({
		  url: "arduinos/" + appname,
		  type: "GET",
		  dataType: "json",
		  contentType: "application/json; charset=utf-8",
	      success: function(data) { 
	      		//alert(JSON.stringify(data))
	      		var tableName = "#datatable-arduinos";
	      		loadArduinos(data, tableName);
	     
	     	}, // endd of success ajax function
	     	
		}); // end of ajax call

	   var request4 = $.ajax({
		  url: "sensors/" + appname,
		  type: "GET",
		  dataType: "json",
		  contentType: "application/json; charset=utf-8",
	      success: function(data) { 
	      		var tableName = "#datatable-sensors";
	      		loadSensors(data, tableName);
	     
	     	}, // endd of success ajax function
	     	
		}); // end of ajax call



} );// end of document.ready

function loadPis(data, tableName){
	//alert(data)
    var cost = "USD";
	$(tableName).dataTable({
		//"Columns": JSON.stringify(Object.keys(obj.data[1])),
		select: true,
	responsive: true,
	// colReorder: {
// 				 order: [ 0, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
	// },
	"columnDefs": [ 
	{"title": "Pi ID", "targets": 0},
	{"title": "APPLICATION ID", "targets": 1},
	{"title": "STATUS", "targets": 2},
	{"title": "IP Address", "targets": 3},
	{"title": "LOCATION " + cost , "targets": 5},
	{"title": "MORE INFO " + cost , "targets": 4},
	{"title": "SPECIFICATION " + cost , "targets": 5},
	{ targets: 2,
		   "createdCell": function (td, cellData, rowData, row, cell){
		   	if (cellData.toLowerCase() == "reachable"  || cellData == 1 ){
		   		$(td).css('color', 'green')
		   	}
		   	if (cellData.toLowerCase() == "unreachable" || cellData == 0 ){
		   		$(td).css('color', 'red')
		   	}
		   }}
	//{"title": "NO OF BAYS", "targets": 5},
	//{"title": "OPENS", "targets": 6},
	//{"title": "CLOSES", "targets": 7},
	//{"title": "PARKING TYPE", "targets": 8},
	//{"title": "SECTOR ID", "targets": 9},
	//{"title": "APP ID", "targets": 10}
	
	],
	"data": data,
		"columns": [
		 { data: "piID"},
		 { data: "appID"},
		 { data: "status"},
		 { data: "ipaddress"},
		 { data: "location"},
		 { data: "moreInfo"},
		 { data: "specs"},
		 
		// { data: "numOfBays"},
		// { data: "openingTime"},
		// { data: "closingTime"},
		// { data: "parkingType"},
		// { data: "sectorID"},
		// { data: "appID"},

		],
	
	
	//"ScrollX": true,
	dom: 'Bfrtip',

		buttons: [ 'copy', 'excel', 'csv', 'pdf', 'print'],
	
	
	});
	}

	function loadData(data, tableName){
	//alert(tableName)
    var cost = "USD";
	$(tableName).dataTable({
		//"Columns": JSON.stringify(Object.keys(obj.data[1])),
		select: true,
	responsive: true,
	// colReorder: {
// 				 order: [ 0, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
	// },
	"columnDefs": [ 
	{"title": "LOT ID", "targets": 0},
	{"title": "NAME", "targets": 1},
	{"title": "COST " + cost , "targets": 2},
	{"title": "NEAREST BUILDING", "targets": 3},
	{"title": "STREET ADDRESS", "targets": 4},
	{"title": "NO OF BAYS", "targets": 5},
	{"title": "OPENS", "targets": 6},
	{"title": "CLOSES", "targets": 7},
	{"title": "PARKING TYPE", "targets": 8},
	{"title": "SECTOR ID", "targets": 9},
	{"title": "APP ID", "targets": 10},

	
	],
	"data": data,
		"columns": [
		 { data: "lotID"},
		 { data: "name"},
		 { data: "cost"},
		 { data: "nearestpopBuilding"},
		 { data: "streetAddress"},
		 { data: "numOfBays"},
		 { data: "openingTime"},
		 { data: "closingTime"},
		 { data: "parkingType"},
		 { data: "sectorID"},
		 { data: "appID"},

		],
	
	
	//"ScrollX": true,
	dom: 'Bfrtip',

		buttons: [ 'copy', 'excel', 'csv', 'pdf', 'print'],
	
	
	});
	}

	function loadArduinos(data, tableName){
	// alert("called function load arduinos")
    
	$(tableName).dataTable({
		//"Columns": JSON.stringify(Object.keys(obj.data[1])),
		select: true,
	responsive: true,
	// colReorder: {
// 				 order: [ 0, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
	// },
	"columnDefs": [ 
	{"title": "ARDUINO ID", "targets": 0},
	{"title": "STATUS", "targets": 4},
	{"title": "APP ID", "targets": 1},
	{"title": "IP ID", "targets": 2},
	{"title": "DESCRIPTION" , "targets": 3},
	
	{ targets: 1,
		   "createdCell": function (td, cellData, rowData, row, cell){
		   	if (cellData.toLowerCase() == "reachable" || cellData == 1 ){
		   		$(td).css('color', 'green')
		   	}
		   	if (cellData.toLowerCase() == "unreachable" || cellData == 0 ){
		   		$(td).css('color', 'red')
		   	}
		   }}
	//{"title": "STREET ADDRESS", "targets": 4},
	//{"title": "NO OF BAYS", "targets": 5},
	//{"title": "OPENS", "targets": 6},
	//{"title": "CLOSES", "targets": 7},
	//{"title": "PARKING TYPE", "targets": 8},
	//{"title": "SECTOR ID", "targets": 9},
	//{"title": "APP ID", "targets": 10}
	
	],
	"data": data,
		"columns": [
		 { data: "arduinoID"},
		 { data: "status"},
		 { data: "appID"},
		 { data: "piID"},
		 { data: "arduinoDescription"},
		 
		// { data: "streetAddress"},
		// { data: "numOfBays"},
		// { data: "openingTime"},
		// { data: "closingTime"},
		// { data: "parkingType"},
		// { data: "sectorID"},
		// { data: "appID"},

		],
	
	
	//"ScrollX": true,
	dom: 'Bfrtip',

		buttons: [ 'copy', 'excel', 'csv', 'pdf', 'print'],
	
	
	});
	}

	function loadSensors(data, tableName){
	// alert("called function")
    var cost = "USD";
	$(tableName).dataTable({
		//"Columns": JSON.stringify(Object.keys(obj.data[1])),
		select: true,
	responsive: true,
	// colReorder: {
// 				 order: [ 0, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
	// },
	"columnDefs": [ 
	{"title": "SENSOR ID", "targets": 0},
	{"title": "STATUS", "targets": 4},
	{"title": "APP ID", "targets": 1},
	{"title": "ARDUINO ID", "targets": 3},
	{"title": "SENSOR TYPE" , "targets": 2},
	{"title": "SENSOR DESCRIPTION", "targets": 5},
	{ targets: 1,
		   "createdCell": function (td, cellData, rowData, row, cell){
		   	if (cellData.toLowerCase() == "reachable" || cellData == 1){
		   		$(td).css('color', 'green')
		   	}
		   	if (cellData.toLowerCase() == "unreachable" || cellData == 0 ){
		   		$(td).css('color', 'red')
		   	}
		   }}
	//{"title": "OPENS", "targets": 6},
	//{"title": "CLOSES", "targets": 7},
	//{"title": "PARKING TYPE", "targets": 8},
	//{"title": "SECTOR ID", "targets": 9},
	//{"title": "APP ID", "targets": 10}
	
	],
	"data": data,
		"columns": [
		 { data: "sensorID"},
		 { data: "status"},
		 { data: "appID"},
		 { data: "arduinoID"},
		 { data: "sensorType"},
		 { data: "sensorDesc"},

		// { data: "openingTime"},
		 //{ data: "closingTime"},
		 //{ data: "parkingType"},
		// { data: "sectorID"},
		// { data: "appID"},

		],
	
	
	//"ScrollX": true,
	dom: 'Bfrtip',

		buttons: [ 'copy', 'excel', 'csv', 'pdf', 'print'],
	
	
	});
	}