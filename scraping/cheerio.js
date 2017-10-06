
var cheerio = require("cheerio");


var html = 'Rufen Sie einfach an: <a href="tel:+491778615898" class=" CT_hidden rtl_fix_phone info-booking-phone">+49 177 8615898</a>. ' +
           'Sie können auch eine <a data-track-ga="Guest Communication,click-send-email" href="mailto:nkunat.621402@guest.booking.com">E-Mail</a> ' +
           'oder eine <a href="#hotel_guest_communication">Sofortnachricht</a> senden.' +
           'Falls Sie Ihr eigenes E-Mail-Programm verwenden möchten, ' +
           " <a href='mailto:nkunat.621402@guest.booking.com' class='js-pop-email-link' data-track-ga='Guest Communication,to-email-from-send-popup'>klicken Sie hier</a>.";


console.log(html);

function getEMailV2 ($) {
    var email = $("span[class=js-guest-email]");
    if (email.length >0) {
        var sEMail = email.text();
        console.log("EMail v2 format: " + sEMail);
        return sEMail;
    }
    return undefined;
}


function getEMailV3 ($) {
    var emailSelectorV2 = "a.js-pop-email-link";
    var email_v2 = $(emailSelectorV2);
    //console.log ("length ", email_v2.length);
    if (email_v2.length > 0) // if element was found.
    {
       var sMailTo = "mailto:";
       var myEMail = email_v2.attr("href");
       myEMail = myEMail.toLowerCase();
       if (myEMail.startsWith(sMailTo)) {
           myEMail = myEMail.substring(sMailTo.length, myEMail.length);
       }
       myEMail = myEMail.trim();
       console.log ("EMail v3: " + myEMail );
       return myEMail;
    } 
    return undefined;
}



 $ = cheerio.load(html);


    var email = getEMailV2 ($);
    if(email === undefined) {
        console.log("No V2 EMail found. Trying V3 email");
        email = getEMailV3 ($);
        console.log("EMail is: " , email);
    }



   $('a').each(function(index, elem) {
       console.log( "found a with href: " +  $(this).attr('href') );
   });



