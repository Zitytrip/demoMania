

var parseString = require ('xml2js').parseString;

//var xml = "<root>Hello xml2js!</root>"


var xml = '<rooms> <room id="1000202"> <rates>';
xml = xml + '<rate id="12345" leading_occupancy="2">';
xml = xml + '<occupancy persons="3" percentage="25" round="1" /> ';
xml = xml + '<occupancy persons="4" additional="10" />';
xml = xml + '<occupancy persons="5" percentage="-15" />';
xml = xml + '<occupancy persons="6" additional="-5" round="0" /> ';
xml = xml + '</rate>';
xml = xml + '</rates>';
xml = xml + '</room>';
xml = xml + '</rooms>';


parseString ( xml, (err, result) => {
    console.dir (JSON.stringify(result));
});