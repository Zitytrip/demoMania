// http://kaw2k.github.io/posts/meetup-post/

// To play around with this code, copy and paste the contents of this gist
// into the javascript pane of http://jsbin.com/umoK/1/edit or go to 
// http://jsbin.com/uZAfIqA/2/edit

require('lambdajs').expose(global);

var _ = require('lodash');
var partial = require('lodash.partial');

under = require ("scoreunder");

//Function.prototype.autoCurry = function(n) {
//    return under.autoCurry(this, n);
//            
//};

//.expose(global);


// =============================================================================
// Generic API
// =============================================================================

//+ words :: string -> array
var words = split(' ');

//+ not :: _ -> boolean
var not = function (x) { return !x; };

//+ uniqBy :: array -> array
var uniqBy = function (param, arr) {
  return reduce(function (memo, item) {
    var items = pluck(param, memo);
    return (_.indexOf(item[param], items) > -1) ? memo : push(item, memo);
  }, [], arr);
}.autoCurry();

//+ arrayToTuples :: array -> array
var arrayToTuples = reduce(function(memo, item, index, list) {
  return push([item, list[index+1]], memo);
}, []);



// =============================================================================
// Application API
// =============================================================================

//+ isVoteString :: string -> boolean
var isVoteString = test(/^[\+|\-]\d+$/);
