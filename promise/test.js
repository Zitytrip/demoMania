var Promise = require("bluebird");

var fs = require("fs");

var fE = Promise.promisify(fs.access);


async function test () {
    try {
        var b = await fE ("db.js33");
        console.log(b);
    }
    catch (err) {
        console.log("Error: " + JSON.stringify(err))
    }
}

test();
