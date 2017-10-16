

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