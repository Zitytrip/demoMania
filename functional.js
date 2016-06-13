// To play around with this code, copy and paste the contents of this gist
// into the javascript pane of http://jsbin.com/umoK/1/edit or go to 
// http://jsbin.com/uZAfIqA/2/edit

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
