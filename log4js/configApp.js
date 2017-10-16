


function configure (name, loglevel) {

  if (loglevel==undefined) loglevel = "info";

  var logSetting =  {
    appenders: { 
        console: { type: "console" },
        bongo: { type: 'file', filename: `log/${name}.log` , layout: {type: 'coloured'} }
     },
    categories: { 
       default: { appenders: ['console', 'bongo' ], level: loglevel }
    }
  }
  //logSetting.appenders.bongo.filename=`log/${name}.log`;
  console.log(JSON.stringify(logSetting))
  log4js.configure(logSetting);
     
}

module.exports.configure = configure;
