var _ = require  ("lodash"),
    $ = require ("jquery");


console.log("x.js starting..");

var d = [1,2,3,4,4,4,5,4,2,3,4,6,4,7,8,8,4,4,7,7,3,1,2,1,1,1,9,4,3,2];

_(d)
   .uniq()
   .each(function (i) {
      console.log("ElementNo:" + i);
      $("#testitems").append("<li>" + i + "</li>");
   });


function x() {
   console.log("greetings from the X-Men");
}

// This is one way to export  functions into the browser
window.z = x;


// the second way to do it is to define module.exprots and call
// browserify index.js --s module > dist/module.js
// the function is now available as module.y();
module.exports.y = x;
