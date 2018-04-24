var Promise = require('bluebird');

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
    	console.log(milliseconds)
    	return milliseconds
      break;
    }
  }
}

console.log("bongo");
Promise.all([sleep(1000), sleep(500)]).then(function(res){
	console.log(res)
});