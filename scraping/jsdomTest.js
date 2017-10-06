// Count all of the links from the io.js build page
var jsdom = require("jsdom");
var fs = require ("fs");

var jquery = fs.readFileSync("./jquery-1.4.1.min.js", "utf-8").toString();
console.log(jquery);
var html = "<html> <p>asdfasdf</p>  <form name='logUserInForm' action='willybilly'>  </form> </html>";


var cheerio = require('cheerio')
var $ = cheerio.load(html)
$('h2.title').text('Hello there!')
console.log("there have been", $("p").length, "io.js releases!");
var action = $("form[name='logUserInForm']").first().attr("action"); 
console.log("action: " + action);


  jsdom.env( {  html: html ,  src: [jquery] , done: function (err, window) {

      console.log ("window body: " + window.body);

      //var $ = window.jQuery;
      //var $ = window.$;
      console.log("there have been", $("p").length, "io.js releases!");
      // var action = $("form[name='logUserInForm']").first().attr("action");  // get the first element of type form with attribute "name=logUserInForm"; return attribute 'action'
   }});

