require('./connection.js');


var districtList = allDistrict(querryString);

var querryString = 'SELECT * FROM district';


function allDistrict(selectionQury) {
    var querryStatement = selectionQury;

conn.query(querryString, function(err, rows) {

    if (err) throw err;

    console.log('The districts are: \n');

    var jsonObj = JSON.stringify(rows, null, 2);
    console.log(jsonObj);

});

}
