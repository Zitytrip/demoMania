var fs = require ("fs");
var MimeParser = require('emailjs-mime-parser');
var ImapClient = require('emailjs-imap-client')
var TextDecoder = require("text-encoding").TextDecoder;
var htmlToText = require('html-to-text');
var colors = require('colors');

var client = new ImapClient('imap.gmail.com', 993, {
    auth: {
        user: 'citi.trip.vienna@gmail.com',
        pass: 'regenschirm13'
    }
});


function parseMessage (message) {

    console.log(message.envelope);
     var data = {
            date: message.envelope.date,
            from: message.envelope.from[0].address,
            to: message.envelope.to[0].address,
            id: message.envelope["message-id"]
     };

     var parser = new MimeParser ();

     parser.onbodystructure = function(chunk){
           console.log("BODY STRUCTURE");
           console.log(chunk);
     };

     parser.onbody = function(node, chunk){
           console.log("BODY");
           var s = `Received ${chunk.byteLength} bytes for ${node.path.join('.')}`;
           console.log(s);           
              
           var string = new TextDecoder().decode(chunk);
           //console.log(string);
            fs.writeFile("/tmp/test.html", string, function(err) {
                    if(err) {
                        return console.log(err);
                    }
                    console.log("The file was saved!");
            }); 
               
            var text = htmlToText.fromString(string, { wordwrap: 130 });
            console.log(text);
            data.text = text;
      };

      parser.onheader = function(node){
            console.log("HEADER");
            console.log((node.header.join('\n')).green); // List all headers
            console.log(node.headers['content-type']); // List value for Content-Type
      };

      var body = message["body[]"];
      parser.write(body);
      parser.end();
      return data;
}

async function demo () {

    await client.connect();
    
    //var mailboxes = await client.listMailboxes();
    //console.log(mailboxes);

    var messages = await client.listMessages('INBOX', '1:1', ['uid', 'flags', 'envelope','bodystructure', 'body[]']);

    messages.forEach( message => {
        console.log('Flags for ' + message.uid + ': ' + message.flags.join(', '));
        
        //delete message["body[]"];
        //console.log("MESSAGE: " + JSON.stringify(message));
      
        var data = parseMessage (message);
        console.log(data);
    });

    await client.logout();


}

demo();