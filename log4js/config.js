var log4js = require('log4js');


var logSetting =  {
 appenders: { 

    console: { 
        type: "console" 
    },

    smtp:
    {
        "type": "smtp",
        "recipients": "hoertlehner@gmail.com",
        "sendInterval": 60,
        "SMTP": {
            "host": "smtp.gmail.com",
            "secure": true,
            "port": 465,
            "auth": {
                "user": "citi.trip.vienna@gmail.com",
                "pass": "regenschirm13"
            }
        }
    },
    // loggly website
    /*loggly: {
      type: 'loggly',
      token: '5de1b547-107c-4b7d-99de-60220ba366df',
      subdomain: 'cititrip',
      tags: [ 'tagPayment' ]
    },*/

    // logger for errors
    //errfile: { type: 'file', "filename": "log/errors.log"  , layout: { type: 'coloured' } },
    //err: {  "type": "logLevelFilter", "level": "ERROR",  "appender": "errfile"   },

    // file loggers
    bongo: { 
        type: 'file', 
        filename: 'log/bongo.log', 
        layout: {type: 'coloured'} 
    }
    //payment: { type: 'file', filename: 'log/payment.log', layout: {type: 'coloured'} },
    //bookingWeb: { type: 'file', filename: 'log/bookingWeb.log',layout: { type: 'coloured' } },
    //bookingApi: { type: 'file', filename: 'log/bookingApi.log', layout: { type: 'coloured' } },
    ///arrival: { type: 'file', filename: 'log/arrival.log' , layout: { type: 'coloured' } },
    
 },
  categories: { 
       default: { appenders: ['console', 'bongo', 'smtp' ], level: 'info' }, 
       //payment: { appenders: ['c', 'payment', 'err' ], level: 'debug' },  
       //bookingWeb: { appenders: ['c', 'bookingWeb', 'err' ], level: 'debug' } ,
       //bookingApi: { appenders: ['c', 'bookingApi', 'err', ], level: 'debug' } ,
       //arrival: { appenders: ['c', 'arrival', 'err',], level: 'debug' } ,
  }
};


function configure (name, loglevel) {
    console.log(JSON.stringify(logSetting))
    log4js.configure(logSetting);
}

module.exports.configure = configure;

