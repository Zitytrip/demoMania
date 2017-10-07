var axios = require("axios");

axios.get("http://citi.hoertlehner.com:8821/api/apartements")
    .then(function(data) {
        console.log("YEAH via port correct v2");
    })
    .catch(function(err) {
        console.log("ERR");
        console.log(err);
        console.log("ERR2")
    })