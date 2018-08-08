    //create new system users
      $('#submit_user').click(function(){
       
           var first_name = $('#first_name').val()
            var last_name = $('#last_name').val()
            var middle_name = $('#middle_name').val() 
            var email = $('#email').val()
            var phone = $('#phone').val()
            var car_plate = $('#car_plate').val() 
            var car_model = $('#car_model').val()
            var gender = $('#gender').val() 
            var birthday = $('#birthday').val()
            var pass = $('#pass').val()
            var confirmpass = $('#confirmpass').val() 
            var role = $('#role').val() 


            var userData= {"first_name":first_name, "last_name":last_name,"role":role, "middle_name":middle_name, "email":email,"phone":phone,"car_plate":car_plate,"car_model":car_model,"gender":gender,"birthday":birthday,"pass":pass,"confirmpass":confirmpass}

            alert(userData.first_name)
            //alert(appData.appDesc)
            var request = $.ajax({
                url: "/submitUserData",
                type: "POST",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(userData),
                dataType: "json",
                success: function(data) {
                    alert(data.responseText)
                   $('#output').innerHTML(data.responseText);
              },
                error: function(data){
                    alert(data.responseText)
                }
            });
        });

      //add new user role in the system
        $('#submit_role').click(function(){
            var role_name = $('#role_name').val()
            var roleDesc = $('#roleDesc').val() 

            var roleData= {"role_name":role_name, "roleDesc":roleDesc}

            //alert(appData.appDesc)
            var request = $.ajax({
                url: "/submitRole",
                type: "POST",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(roleData),
                dataType: "json",
                success: function(data) {
                    alert(data.responseText)
                   $('#output').innerHTML(data.responseText);
              },
                error: function(data){
                    alert(data.responseText)
                }
            });
        });

     //new application registration
     $('#submit_app').click(function(){
           // alert("mwatima")
           var appname = $('#appname').val()
            var appstatus = $('#appstatus').val()
            var appDesc = $('#appDesc').val() 

            var appData= {"appname":appname, "appstatus":appstatus, "appDesc":appDesc }

            //alert("mwatima")
            //alert(appData.appDesc)
            var request = $.ajax({
                url: "/submitAppData",
                type: "POST",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(appData),
                dataType: "json",
                success: function(data) {
                    alert(data.responseText)
                   $('#output').innerHTML(data.responseText);
              },
                error: function(data){
                    alert(data.responseText)
                }
            });
        });

     //new raspberry registration
      $('#submit_pi').click(function(){
     
            var ipaddress = $('#ipaddress').val() 
           var application = $('#application').val()
            var pistatus = $('#pistatus').val()
            var pidesc = $('#pidesc').val() 
            var specs = $('#specs').val() 
            var piLocation = $('#piLocation').val() 
            var piData= {"ipaddress":ipaddress,"specs":specs,"piLocation":piLocation,"application":application,"pistatus":pistatus,"pidesc":pidesc }
            var request = $.ajax({
                url: "/submitPi",
                type: "POST",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(piData),
                dataType: "json",
                success: function(data) {
                    alert(data.responseText)
                   $('#output').innerHTML(data.responseText);
              },
                error: function(data){
                    alert(data.responseText)
                }
            });
        });

    //add new arduino
     $('#submit_arduino').click(function(){

           var application = $('#application').val()
            var pi = $('#pi').val()
            var ardstatus = $('#ardstatus').val()
            var arduinodesc = $('#arduinodesc').val()  
            var arduinoLocation = $('#arduinoLocation').val() 

            var ardData= {"application":application,"pi":pi,"arduinoLocation":arduinoLocation,"ardstatus":ardstatus,"arduinodesc":arduinodesc }
            var request = $.ajax({
                url: "/submitArduinoData",
                type: "POST",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(ardData),
                dataType: "json",
                success: function(data) {
                    alert(data.responseText)
                   $('#output').innerHTML(data.responseText);
              },
                error: function(data){
                    alert(data.responseText)
                }
            });
        });

    //new sensor registration
    $('#submit_sensor').click(function(){
            
           var application = $('#application').val()
            var arduino = $('#arduino').val()
            var sensorstatus = $('#sensorstatus').val()
            var sensorType = $('#sensorType').val()
            var sensordesc = $('#sensordesc').val()
            var arduinoPin = $('#arduinoPin').val()
            var sensorData= {"application":application,"arduino":arduino,"arduinoPin":arduinoPin, "sensorstatus":sensorstatus,"sensorType":sensorType,"sensordesc":sensordesc}
     
            var request = $.ajax({
                url: "/submitsensorData",
                type: "POST",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(sensorData),
                dataType: "json",
                success: function(data) {
                    alert(data.responseText)
                   //$('#output').html(data.responseText);
              },
               error: function(data){
                    alert(data.responseText)
                }
            });
        });

    //submit parking lot
    $('#submit_lot').click(function(){
            
           var lotname = $('#lotname').val()
            var streetadd = $('#streetadd').val()
            var numbays = $('#numbays').val()
            var nearestPopBldg = $('#nearestPopBldg').val()
            var openTime = $('#openTime').val()
            var closeTime = $('#closeTime').val()
            var ParkingType = $('#ParkingType').val()
            var location = $('#location').val()
            var cost = $('#cost').val()
            var lotData= {"lotname":lotname,"streetadd":streetadd,"cost":cost,"ParkingType":ParkingType,"location":location,"numbays":numbays,"nearestPopBldg":nearestPopBldg,"openTime":openTime,"closeTime":closeTime}
     
            var request = $.ajax({
                url: "/submitLotData",
                type: "POST",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(lotData),
                dataType: "json",
                success: function(data) {
                    alert(data.responseText)
                   //$('#output').html(data.responseText);
              },
               error: function(data){
                    alert(data.responseText)
                }
            });
        });


    //submit parking bay

    $('#submit_bay').click(function(){
            
           var parkingLot = $('#parkingLot').val()
            var bayNum = $('#bayNum').val()
            var roofing = $('#roofing').val()
            var owner = $('#owner').val()
            var baySize = $('#baySize').val()
            var sensorid = $('#sensorid').val()
            var bayData= {"parkingLot":parkingLot,"bayNum":bayNum,"roofing":roofing,"owner":owner,"baySize":baySize,"sensorid":sensorid}
     
            var request = $.ajax({
                url: "/submitBayData",
                type: "POST",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(bayData),
                dataType: "json",
                success: function(data) {
                    alert(data.responseText)
                   //$('#output').html(data.responseText);
              },
               error: function(data){
                    alert(data.responseText)
                }
            });
        });


    //list of all the applications
    $(document).ready(function(){

        var request = $.ajax({
           url: "applications",
           type: "GET",
           dataType: "json",
           contentType: "application/json; charset=utf-8",
           success: function(data) {
                       //alert(JSON.stringify(data))
                       $.each(data, function (index, value) {

                     //appName = value.appName
                     $('#application').append( "<option value='"+value.appID+"'>"+ value.appName+"</option>");

                   });
           }
         });


    });
     
    //list of all the pis in the combo box
    $(document).ready(function(){

        var request = $.ajax({
           url: "pis",
           type: "GET",
           dataType: "json",
           contentType: "application/json; charset=utf-8",
           success: function(data) {
                       //alert(JSON.stringify(data))
                       $.each(data, function (index, value) {
                     var name = value.ipaddress + '/' + value.appName + '/' + value.location;
                     $('#pi').append( "<option value='"+value.piID+"'>"+ name+"</option>");

                   });
           }
         });


    });

    //list all arduino in combo box
    //list of all the pis in the combo box
    $(document).ready(function(){

        var request = $.ajax({
           url: "arduinos",
           type: "GET",
           dataType: "json",
           contentType: "application/json; charset=utf-8",
           success: function(data) {
                       //alert(JSON.stringify(data))
                       $.each(data, function (index, value) {
                     var name = value.arduinoID + '/'+ value.appName + '/PI-' + value.ipaddress + '/' + value.location;
                     $('#arduino').append( "<option value='"+value.arduinoID +"'>"+ name +"</option>");

                   });
           }
         });


    });

    //list all sensors for bay registration
    $(document).ready(function(){

        var request = $.ajax({
           url: "senseDat",
           type: "GET",
           dataType: "json",
           contentType: "application/json; charset=utf-8",
           success: function(data) {
                       //alert(JSON.stringify(data))
                       $.each(data, function (index, value) {
                     var name = value.sensorID + '/'+ value.appName + '/PI-' + value.ipaddress + '/' + value.location;
                     $('#sensorid').append( "<option value='"+value.sensorID +"'>"+ name +"</option>");

                   });
           }
         });


    });
    //user role combo box
    $(document).ready(function(){

        var request = $.ajax({
           url: "role",
           type: "GET",
           dataType: "json",
           contentType: "application/json; charset=utf-8",
           success: function(data) {
                       //alert(JSON.stringify(data))
                       $.each(data, function (index, value) {
                     //appName = value.appName
                     $('#role').append( "<option value='"+value.roleID  +"'>"+ value.roleName +"</option>");

                   });
           }
         });


    });

    //list all lots
    $(document).ready(function(){

        var request = $.ajax({
           url: "lots",
           type: "GET",
           dataType: "json",
           contentType: "application/json; charset=utf-8",
           success: function(data) {
                       //alert(JSON.stringify(data))
                       $.each(data, function (index, value) {

                     //appName = value.appName
                     $('#parkingLot').append( "<option value='"+value.lotID +"'>"+ value.name +"</option>");

                   });
           }
         });


    });
        

    //pi status, number of pi in total
    $(document).ready(function(){

        var request = $.ajax({
           url: "piStatus",
           type: "GET",
           dataType: "json",
           contentType: "application/json; charset=utf-8",
           success: function(data) {
                       
                       $.each(data, function (index, value) {
                      //for reachable pi
                      var percentUp = ( value.rechablePis / value.totalPi ) * 100;
                      percentUp = Math.round(percentUp);
                      percentUp = percentUp + " %";
                    document.getElementById("total_pis").innerHTML = value.totalPi;
                     document.getElementById("up_pis").innerHTML = value.rechablePis;
                    document.getElementById("percentUp_pis").innerHTML = percentUp;


                     //for unreachable pis
                     var unreachPi = value.totalPi - value.rechablePis;
                     var percentDown = (unreachPi / value.totalPi ) * 100;
                      percentDown = Math.round(percentDown);
                      percentDown = percentDown + " %";
                       document.getElementById("unreachable_pis").innerHTML = unreachPi;
                    document.getElementById("unreachablePiPercent").innerHTML = percentDown;

                                    //status graphically
    var ctx = document.getElementById("pis");
    var myData = [value.rechablePis ,unreachPi];
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Reachable","Unreachable"],
            datasets: [{
                label: 'Number of Pis',
                title: 'Test',
                data: myData,

                backgroundColor: [
                'rgba(0,255,0,0.3)',
                    'rgba(255, 0, 0, 1)'
                ],
                borderColor: [
                 'rgba(0,255,0,0.3)',
                    'rgba(255, 0, 0, 1)'
                   
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            legends:{
              position: 'bottom',
              display : true,
            },
             title: {
              display: true,
              text: 'Raspberry Pis'
             },

            scales: {
               xAxes: [{
            scaleLabel: {
            display: true,
            labelString: 'Status'
          },
                barPercentage: 0.4
            }],
                yAxes: [{
                                      scaleLabel: {
            display: true,
            labelString: 'Number of Raspberry Pis'
          },
                    ticks: {
                        beginAtZero:true,
                        stepSize: 1
                    }
                }]
            }
        }
    });
                    //end of graphical status

                   });
                   
           }
         });


    });

    //arduino
    $(document).ready(function(){

        var request = $.ajax({
           url: "arduinoStatus",
           type: "GET",
           dataType: "json",
           contentType: "application/json; charset=utf-8",
           success: function(data) {
                       //alert(JSON.stringify(data))
                       $.each(data, function (index, value) {

                      //for reachable pi
                      var percentUp = ( value.rechableArduino / value.totalArduino ) * 100;
                      percentUp = Math.round(percentUp);
                      percentUp = percentUp + " %";
                      document.getElementById("total_ard").innerHTML = value.totalArduino;
                     document.getElementById("up_ards").innerHTML = value.rechableArduino;
                    document.getElementById("percentUp_ards").innerHTML = percentUp;

                     //for unreachable pis
                     var unreachArds = value.totalArduino - value.rechableArduino;
                     var percentDown = (unreachArds / value.totalArduino ) * 100;
                      percentDown = Math.round(percentDown);
                      percentDown = percentDown + " %";
                    document.getElementById("unreachable_ards").innerHTML = unreachArds;
                    document.getElementById("unreachableArdPercent").innerHTML = percentDown;

                    //status graphically
    var ctx = document.getElementById("arduino");
    var myData = [value.rechableArduino,unreachArds];
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Reachable","Unreachable"],
            datasets: [{
                label: 'Number of Arduino',
                title: 'Test',
                data: myData,

                backgroundColor: [
                'rgba(0,255,0,0.3)',
                    'rgba(255, 0, 0, 1)'
                ],
                borderColor: [
                 'rgba(0,255,0,0.3)',
                    'rgba(255, 0, 0, 1)'
                   
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            legends:{
              position: 'bottom',
              display : true,
            },
             title: {
              display: true,
              text: 'arduinos'
             },

            scales: {
               xAxes: [{
                                    scaleLabel: {
            display: true,
            labelString: 'Status'
          },
                barPercentage: 0.4
            }],
                yAxes: [{
            scaleLabel: {
            display: true,
            labelString: 'Number of ArduinoO'
          },
                    ticks: {
                        beginAtZero:true,
                        stepSize: 1
                    }
                }]
            }
        }
    });
                    //end of graphical status

                   });
           }
         });


    });


    //sensor statusinfo
    $(document).ready(function(){

        var request = $.ajax({
           url: "sensorStatus",
           type: "GET",
           dataType: "json",
           contentType: "application/json; charset=utf-8",
           success: function(data) {
                       //alert(JSON.stringify(data))
                       $.each(data, function (index, value) {

                      //for reachable pi
                      var percentUp = ( value.rechableSensor / value.totalSensor ) * 100;
                      percentUp = Math.round(percentUp);
                      percentUp = percentUp + " %";
                      document.getElementById("total_sense").innerHTML = value.totalSensor;
                     document.getElementById("up_sense").innerHTML = value.rechableSensor;
                    document.getElementById("percentUp_sense").innerHTML = percentUp;

                     //for unreachable pis
                     var unreachSensor = value.totalSensor - value.rechableSensor;
                     var percentDown = (unreachSensor / value.totalSensor ) * 100;
                      percentDown = Math.round(percentDown);
                      percentDown = percentDown + " %";
                    document.getElementById("unreachable_sense").innerHTML = unreachSensor;
                    document.getElementById("unreachableSensePercent").innerHTML = percentDown;

                    //deisplaying graphically

    var ctx = document.getElementById("sensor");
    var myData = [value.rechableSensor ,unreachSensor];
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Reachable","Unreachable"],
            datasets: [{
                label: 'Number of Sensors',
                title: 'Test',
                data: myData,

                backgroundColor: [
                'rgba(0,255,0,0.3)',
                    'rgba(255, 0, 0, 1)'
                ],
                borderColor: [
                 'rgba(0,255,0,0.3)',
                    'rgba(255, 0, 0, 1)'
                   
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            legends:{
              position:'top',
              display : true,
            },
             title: {
              display: true,
              text: 'Sensors'
             },

            scales: {
               xAxes: [{
              scaleLabel: {
            display: true,
            labelString: 'Status'
          },
                barPercentage: 0.4
            }],
                yAxes: [{
                        scaleLabel: {
            display: true,
            labelString: 'Number of Sensors'
          },
                    ticks: {
                        beginAtZero:true,
                        stepSize: 1
                    }
                }]
            }
        }
    });

                    //end of graphical display
                   });
           }
         });


    });


    //get the systems alerts ready on the interface
    $(document).ready(function(){

        var request = $.ajax({
           url: "eventCounts",
           type: "GET",
           dataType: "json",
           contentType: "application/json; charset=utf-8",
           success: function(data) {
                       //alert(JSON.stringify(data))
                       $.each(data, function (index, value) {

                      document.getElementById("system_count").innerHTML = value.totalEvent;
                      document.getElementById("app_count").innerHTML = value.totalEvent;

                   });
           }
         });


    });


    //list of sectors
    $(document).ready(function(){

        var request = $.ajax({
           url: "sect",
           type: "GET",
           dataType: "json",
           contentType: "application/json; charset=utf-8",
           success: function(data) {
                       //alert(JSON.stringify(data))
                       $.each(data, function (index, value) {

                     //appName = value.appName
                     $('#location').append( "<option value='"+value.sectorID+"'>"+ value.sectorName+"</option>");

                   });
           }
         });


    });

    //parking lot/bay status for occupation and available
    $(document).ready(function(){

        var request = $.ajax({
           url: "parking_tatus",
           type: "GET",
           dataType: "json",
           contentType: "application/json; charset=utf-8",
           success: function(data) {
                       //alert(JSON.stringify(data))
                       var parkingName =[];
                       var occupiedBays =[];
                       var availableBays =[];
                       var backgroundRed=[];
                       var backgroundGreen =[];
                       $.each(data, function (index, value) {
                        occupiedBays.push(value.OcuppiedBay);
                        availableBays.push(value.FreeBay);
                        parkingName.push(value.Parking);
                        backgroundRed.push('rgba(255, 0, 0, 1)');
                        backgroundGreen.push('rgba(0,255,0,0.3)');

                   });
                //Graphical settings starts here
     var ctx = document.getElementById("bayStat");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: parkingName,
            datasets: [{
                label: 'Parking Bay Occupied',
                data: occupiedBays,
                 backgroundColor:backgroundRed,
                borderColor:backgroundRed,
                 hoverBorderWidth: 3,
            hoverBorderColor: 'lightblue',
                borderWidth: 1
            },
        {
                label: 'Parking Bay Available',
                data: availableBays,
                backgroundColor: backgroundGreen,
                borderColor:backgroundGreen,
                hoverBorderWidth: 3,
            hoverBorderColor: 'lightblue',
                borderWidth: 1
            }]
        },
        options: {
          legends:{
            display: true,
            position: 'right'
          },
              title: {
              display: true,
              text: 'The parking bays availability status per parking lot'
             },
            scales: {
                yAxes: [{
                  scaleLabel: {
            display: true,
            labelString: 'Number of Bays'
          },
            stacked: true,
                    ticks: {
                        beginAtZero:true,
                         stepSize: 1
                    }
                }],
                xAxes: [{
                  scaleLabel: {
            display: true,
            labelString: 'Parking'
          },
            stacked: true,
                    ticks: {
                        beginAtZero:true,
                         stepSize: 1
                    }
                }]
          
            }

        }//options
    });

    //end of the graphical representation


           }
         });


    });
