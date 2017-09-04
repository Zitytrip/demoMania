var log4js = require('log4js');


var logSetting =  {
 appenders: { 
    c: { type: "console" },
    payment: { type: 'file', filename: 'log/payment.log', layout: {type: 'coloured'} },
    bookingScraper: { type: 'file', filename: 'log/bookingScraper.log',layout: { type: 'coloured' } },
    bookingApi: { type: 'file', filename: 'log/bookingApi.log', layout: { type: 'coloured' } },
    arrival: { type: 'file', filename: 'log/arrival.log' , layout: { type: 'coloured' } },

    errfile: { type: 'file', "filename": "log/errors.log"  , layout: { type: 'coloured' } },
    err: {  "type": "logLevelFilter", "level": "ERROR",  "appender": "errfile"   }
 },
  categories: { 
       default: { appenders: ['c', 'payment', 'err' ], level: 'error' }, 
       payment: { appenders: ['c', 'payment', 'err' ], level: 'error' },  
       bookingScraper: { appenders: ['c', 'bookingScraper', 'err' ], level: 'error' } ,
       bookingApi: { appenders: ['c', 'bookingApi', 'err' ], level: 'error' } ,
       arrival: { appenders: ['c', 'arrival', 'err' ], level: 'error' } ,
  }
};


log4js.configure(logSetting);



var logger1 = log4js.getLogger("payment.ccWorkflow");
logger1.level = 'debug';
logger1.debug("bongo trott");

var logger2 = log4js.getLogger("payment.ccApiDirect");
logger2.level = 'debug';
logger2.debug("bongo trott");
logger2.error("error 1 asdlfkj asdlfk j");

var logger3 = log4js.getLogger("payment.ccDB");
logger3.level = 'debug';
logger3.debug("bongo trott");

