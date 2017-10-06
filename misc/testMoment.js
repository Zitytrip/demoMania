var moment = require("moment");
var tz = require("moment-timezone");

var year = 2015;

var dstart = moment({ year: year, month: 0, day: 1 }).format("YYYY-MM-DD"); // "2016-01-01");
var dend = moment({ year: 2015, month: 11, day: 31 }).format("YYYY-MM-DD"); // "2016-12-31");


console.log(dstart);
console.log(dend);




var d = "2017-04-06 19:10:00";
console.log(`CET to GMT: ${convertDateToISO(d)}.`);


// The timestamp in Excel of the booking date is interpreted as string
// The timezone is Europe/Amsterdam. We want to convet it to ISO date
// which is GMT. (so ignores summertime)
function convertDateToISO(date) {
    // date example: "2016-12-13 09:45:46"
    var m = moment.tz(date, "Europe/Amsterdam"); // 'US/Eastern'
    // var m = moment(date);
    var iso = m.toISOString();
    console.log(`date:${date} iso:${iso}`);
    return iso;
}