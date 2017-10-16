var log4js = require('log4js')
    var sleep = require("sleep-promise");


var configure = require("./config.js").configure;

configure();


async function demo() {

    var logger1 = log4js.getLogger("payment.ccWorkflow");
    logger1.level = 'debug';
    logger1.info("bongo trott");
    logger1.info("bongo trott ... tom tom..");
   
    var logger2 = log4js.getLogger("payment.ccApiDirect");
    logger2.level = 'debug';
    await sleep (5000);
    logger2.info("bongo trott");
    await sleep (5000);
    logger2.error("error 1 asdlfkj asdlfk j");

    var logger3 = log4js.getLogger("payment.ccDB");
    logger3.level = 'debug';
    await sleep (5000);
    logger3.info("bongo trott");
    await sleep (5000);
    logger3.debug("bongo trott");

    console.log("FINISHED! (The SMTP appender is only sending every 60 seconds, so this app will run until the email is sent.)");
}

demo();