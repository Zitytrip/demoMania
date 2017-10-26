var Promise = require("bluebird");

var fs = require("fs");

var fE = Promise.promisify(fs.access);


async function test () {
    var b = await fE ("db.js33");
    console.log(b);
}

test();
