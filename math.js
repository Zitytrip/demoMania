var math = require("mathjs");

var print = console.log;

var m1 = math.matrix ( [1,2,3] );
var m2 = math.matrix ( [4,5,6] );

var m = math.matrix([ m1, m2]);
print(m);                      

print ( math.sum(m) );

print ( math.transpose(m) );
