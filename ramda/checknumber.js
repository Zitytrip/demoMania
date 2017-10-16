var R = require ("ramda");

var checkNumber = R.cond([
  [R.is(Number), R.identity],
  [R.is(String), parseInt],
  [R.is(Boolean), Number],
  [R.isEmpty, R.always(0)],
  [R.T, R.always(NaN)]
]);

console.log ( checkNumber ("13.34"));
console.log ( checkNumber (13.34));
console.log ( checkNumber ("bongo"));