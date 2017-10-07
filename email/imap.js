var imaps = require('imap-simple');
 
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
 
imaps.connect(config).then(function (connection) {
 
    return connection.openBox('INBOX').then(function () {

        var searchCriteria = [
            //'UNSEEN'
            '1:10'
        ];
 
        var fetchOptions = {
            bodies: ['HEADER', 'TEXT'],
            markSeen: false
        };
        
        var filterHeader = function (part) {
           return part.which === 'HEADER';
        };

        return connection.search(searchCriteria, fetchOptions).then(function (results) {

            console.log (JSON.stringify(results[0]));

            var subjects = results.map( function (res) {
                return res.parts.filter( filterHeader ) [0].body.subject[0];
            });

           console.log(subjects);
           connection.end();
        });
       
 
       // =>
       //   [ 'Hey Chad, long time no see!',
       //     'Your amazon.com monthly statement',
       //     'Hacker Newsletter Issue #445' ]
       });

});