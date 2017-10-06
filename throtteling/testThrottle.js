var RateLimiter = require('limiter').RateLimiter;
// Limit understands 'second', 'minute', 'day', or a number of milliseconds
var limiter2 = new RateLimiter(1, '8000');

function ping (i) {
  limiter2.removeTokens(1, (err, remainingRequests) => {
      console.log("ping.. " + i);
  })
}

for (var i=0;i<100;i++) {
    ping (i)
}
