$(document).ready(function() {
	
//	window.init_parsley(); 	
	
	// get all variables
	
})

$('#demo-form').submit(function(e){
	e.preventDefault()
	var title = $('#inputSuccess1').val().trim()
	var fName = $('#inputSuccess2').val()
	var gender = $('input[name=gender]:checked', '#demo-form').val()
	var sName = $('#inputSuccess3').val().trim()
	var orgEmail = $('#inputSuccess4').val().trim()
	var phone = $('#inputSuccess5').val().trim()
	var org = $('#inputSuccess6').val().trim()
	var dept = $('#inputSuccess7').val().trim()
	var jTitle = $('#inputSuccess8').val().trim()

	// alert all values
	alert(title +" " + fName + " " + sName + " " + gender + " " + orgEmail + " " + phone + " " + org + " " + dept + " " + jTitle)
	var messageData={"title": title, "fname": fName, "sname": sName, "gender": gender, "orgemail": orgEmail, "phone": phone, "org": org, "dept": dept, "jtitle": jTitle}
	var r = JSON.stringify(messageData)
	alert(messageData)
	// using ajax save the values to the database
	var jqXHR = $.ajax({
		type: "POST",
		url: "/entity/person",
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
