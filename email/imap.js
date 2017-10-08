var imaps = require('imap-simple');
var R = require("ramda");
 
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
        
       

        return connection.search(searchCriteria, fetchOptions).then(function (results) {

            console.log (JSON.stringify(results[0]));

            var subjects = results.map( function (res) {
                return res.parts.filter( filterHeader ) [0].body.subject[0];
            });

           console.log(subjects);

           var m = getResult(results[0]);
           delete m.body;
           console.log(`EMAIL: ${JSON.stringify(m)}` );

           connection.end();
        });
       
 
       // =>
       //   [ 'Hey Chad, long time no see!',
       //     'Your amazon.com monthly statement',
       //     'Hacker Newsletter Issue #445' ]
       });

});