
var R = require ("ramda");

var bookings = [
  { hotel: 1, Book_nr: 1, pname: "willibald brand" },
  { hotel: 1, Book_nr: 2, pname: "anthony garnett" },
  { hotel: 2, Book_nr: 3, pname: "christian mcCloud" },
  { hotel: 2, Book_nr: 4, pname: "willibald brand" },
  { hotel: 3, Book_nr: 5, pname: "anthony garnett" },
  { hotel: 3, Book_nr: 6, pname: "christian mcCloud" },
  { hotel: 4, Book_nr: 7, pname: "willibald brand" },
  { hotel: 4, Book_nr: 8, pname: "anthony garnett" },
  { hotel: 4, Book_nr: 9, pname: "christian mcCloud" }
]

var hotels = [
   { hotel: 1, pname: 1},
   { hotel: 2, pname: 2},
   { hotel: 3, pname: 3},
   { hotel: 4, pname: 4},
   { hotel: 5, pname: 5}

];

var mergedData = R.unionWith(R.eqBy(R.prop('hotel')), bookings, hotels);

mergedData.map ( d => console.log(JSON.stringify (d)) );  
