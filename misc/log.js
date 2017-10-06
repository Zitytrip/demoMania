var log4js = require('log4js');

log4js.configure({
  appenders: [
    { type: 'console' },
    { type: 'file', filename: 'logs/cheese.log', category: 'cheese',  "pattern":".yyyy-MM.log" },
    { type: 'file', filename: 'logs/banana.log', category: 'banana',  "pattern":".yyyy-MM.log" }
  ],
   "levels": {
      "[all]": "INFO",
      "cheese": "ERROR",
      "banana": "DEBUG"
  }
});


var clogger = log4js.getLogger("cheese");
clogger.error ("cheese - error ");
clogger.info ("cheese - info ");
clogger.debug ("cheese - debug ");

var blogger = log4js.getLogger("banana");
blogger.error ("banana - error ");
blogger.info ("banana - info ");
blogger.debug ("banana - debug ");




