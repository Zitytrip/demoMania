const EasySoap = require('easysoap');
var R = require("ramda");
    table = require("text-table");


// the data is the last column, so printTable can be curried easily
// Example console.log(printTable(["FirstName", "LastName", "Age"], people));
function printTable(columns, list) {
  var gt = list.map(row => R.props(columns, row), list);
  gt.unshift(columns); // Add columns as first row to the property matrix

  // replace undefined cells with ""
  var noUndefined = x => (x == undefined ? "" : x);
  var sanitizeCells = row => R.map(cell => noUndefined(cell), row);
  var sanitizeArray = gt => R.map(row => sanitizeCells(row), gt);
  gt = sanitizeArray(gt);

  //console.log("table has rows: " + gt.length);
  var t = table(gt);
  return t;
}



var params = {
    host               : 'www.alphaflash.com',
    path               : '/calendarservice/soap',
    wsdl               : '/calendarservice/soap?wsdl',
    //headers            : {}, // Array or Object,
    rejectUnauthorized : false
}

var opts = {
    secure : false //is https or http
}

const soapClient = EasySoap(params, opts);


soapClient.getAllFunctions()
   .then((functionArray) => { console.log(functionArray); })
   .catch((err) => { throw new Error(err); });


function ConvertEvent (event) {
    var row = R.mergeAll(event.return);
    row.date = R.mergeAll(row.date);
    row.dateOnly = row.date.date;
    return row;
}

soapClient.call ({
    method    : "getEvents",
    attributes: {},
    params	: { start: "2018-04-01T09:30:00+0100", // format: yyyy­MM­dd'T'HH:mm:ssZ 
                end:   "2018-05-01T09:30:00+0100",   // format: yyyy­MM­dd'T'HH:mm:ssZ
                type: "ESTIMATE" // Values can be RELEASE or ESTIMATE
    }})
.then((callResponse) => {
    console.log(callResponse.data);	// response data as json
    console.log(callResponse.body);	// response body
    console.log(callResponse.header);  //response header

    //var data = callResponse.data[0];
    //console.log(data)
    //console.log(JSON.stringify(data.return))
    //var row = R.mergeAll(data.return);
    //console.log(row)

    var events = R.map (ConvertEvent, callResponse.data);
    console.log(JSON.stringify(events[33]));

    console.log(printTable(["categoryId", "dateOnly", "title", "country", "uid", "addedBy"], events))
    
})
.catch((err) => { throw new Error(err); });