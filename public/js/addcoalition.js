$(document).ready(function() {
	
	

$('#neworg').submit(function(e){
	e.preventDefault()

	var messageData={}
	
	messageData.name = $('#inputSuccess1').val().trim()
	messageData.nature = $('#inputSuccess2').val().trim()
	messageData.nickname = $('#inputSuccess3').val().trim()
	messageData.orgEmail = $('#inputSuccess4').val().trim()
	messageData.ceoDirEmail = $('#inputSuccess5').val().trim()
	messageData.commdeptEmail = $('#inputSuccess6').val().trim()
	messageData.landline= $('#inputSuccess7').val().trim()
	messageData.mobile1 = $('#inputSuccess8').val().trim()
	messageData.mobile2 = $('#inputSuccess9').val().trim()
	messageData.street = $('#inputSuccess10').val().trim()
	messageData.building = $('#inputSuccess11').val().trim()
	messageData.gps = $('#inputSuccess12').val().trim()
	messageData.website = $('#inputSuccess13').val().trim()
	messageData.twitter = $('#inputSuccess14').val().trim()
	messageData.facebook = $('#inputSuccess15').val().trim()
	messageData.instagram = $('#inputSuccess16').val().trim()
	messageData.flickr = $('#inputSuccess17').val().trim()
	messageData.pinterest = $('#inputSuccess18').val().trim()
	messageData.whatsapp = $('#inputSuccess19').val().trim()
	// alert all values
	alert(JSON.stringify(messageData))

	// using ajax save the values to the database
	var jqXHR = $.ajax({
		type: "POST",
		url: "/entity/organization",
		data: JSON.stringify(messageData),
		contentType: 'application/json',
		dataType: "json",
		success: function (data){
			alert(data)
		},
		error:  function(jqXHR, textStatus, err){
			console.log('text status '+textStatus+', err '+err)
		}
	})
})
})
