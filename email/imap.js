var imaps = require('imap-simple');
var R = require("ramda");
var mimelib = require("mimelib");
var simpleParser = require('mailparser').simpleParser;
var libmime = require('libmime');
var MimeParser = require('emailjs-mime-parser');


var config = {
    imap: {
        user: 'citi.trip.vienna@gmail.com',
        password: 'regenschirm13',
        host: 'imap.gmail.com',
        port: 993,
        tls: true,
        authTimeout: 3000
    }
};


var filterHeader = function (part) {
    return part.which === 'HEADER';
};

var filterBody = function (part) {
    return part.which === 'TEXT';
};

function getResult (result) {
    //console.log("result:" + JSON.stringify(result));
    var header = R.filter (filterHeader, result.parts) [0] ;
    //console.log("Header:" + JSON.stringify(header));

    var body = R.filter (filterBody, result.parts) [0] ;
    //console.log("body:" + JSON.stringify(body));

    return {
        date: result.attributes.date,
        flags: result.attributes.flags,
        xgmmsgid: result.attributes["x-gm-msgid"],

        subject: header.body.subject[0],
        from: header.body.from[0],
        msgid: header.body["message-id"],

        body: body.body
    };
}

async function demo () {
    imaps.connect(config).then(function (connection) {
 
    return connection.openBox('INBOX').then(function () {

        var searchCriteria = [
            //'UNSEEN'
            '1:10'
        ];
 
        var fetchOptions = {
            bodies: ['HEADER', 'TEXT'],
            markSeen: false,
            struct: true
        };
        
       

        return connection.search(searchCriteria, fetchOptions).then( async function (results) {

            console.log (JSON.stringify(results[0]));

            var subjects = results.map( function (res) {
                return res.parts.filter( filterHeader ) [0].body.subject[0];
            });

           console.log(subjects);

           var m = getResult(results[0]);
           var b = mimelib.parseMimeWords(m.body); // readable multipart mime.
           
           //var b= await simpleParser(m.body);
           delete m.body;
           console.log(`EMAIL: ${JSON.stringify(m)}` );
           
           b = b.replace ("This is a multi-part message in MIME format.", "");

           var d = libmime.decodeWords(b);
           console.log("DECODED: " + d)
            console.log("MIME: " + b); // JSON.stringify(b));

            var parser = new MimeParser ();
            parser.onbodystructure = function(chunk){
                console.log("CHUNK: " + chunk);
            };
            parser.write(b);
            parser.end();

           connection.end();
        });
       
 
       // =>
       //   [ 'Hey Chad, long time no see!',
       //     'Your amazon.com monthly statement',
       //     'Hacker Newsletter Issue #445' ]
       });

   });
}

demo();