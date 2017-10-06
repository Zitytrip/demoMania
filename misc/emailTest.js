
// https://github.com/nodemailer/nodemailer
//   https://github.com/niftylettuce/node-email-templates
//     https://github.com/mailchimp/Email-Blueprints
//     https://github.com/mailgun/transactional-email-templates

var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://citi.trip.vienna%40gmail.com:regenschirm13@smtp.gmail.com');

// setup e-mail data with unicode symbols
var mailOptions = {
    from: '"Cititrip Vienna" <citi.trip.vienna@gmail.com>', // sender address
    to: 'hoertlehner@gmail.com, florian@hoertlehner.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world 🐴', // plaintext body
    html: '<b>👥" Hello world 🐴</b>' // html body

};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});
