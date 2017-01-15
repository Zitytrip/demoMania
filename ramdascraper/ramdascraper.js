var Promise = require('promise') //clean asynchronous code
var request = Promise.denodeify(require('request')) //talking to the web

var R = require('ramda') //reduce complexity
var cheerio = require('cheerio') //DOM traversal
var _ = require ('lodash');



/*request('http://en.wikipedia.org/wiki/George_Washington')
  .then(R.prop('body'))
  .then(cheerio.load) //<-- create a query function: $
.then(function($){
  return {
    names: $('.firstHeading').text().split(' '),
    born: $('.bday').text(),
    died: $('.dday').text(),
    birthplace: $('th:contains("Died")').next().text().split('\n').slice(-1)[0],
    religion: $('th:contains("Religion")').next().find('a').first().text(),
    party: $('th:contains("Political party")').next().text(),
    profession: $('th:contains("Profession")').next().text(),
    graduated: $('th:contains("Alma mater")').next().text()
  }
})*/
// .then(console.log)




var parsePresidentsList = R.pipe(
  R.prop('body'),
  console.log,
  cheerio.load,
  function($){
    var f = $('.field-item').text();
    console.log("F:" + f);
    return f;
  },
  R.replace(/\d*\./g,''),//remove list numbering
  R.split('\n'), //split on new line
  R.map(R.match(/[A-z]+/g)), //remove anything that isn't a letter
  _.compact, //remove any failed matches
  R.map(R.join(' ')) //join the surviving names with a space
)

request('https://www.whitehouse.gov/1600/presidents')
  .then(console.log)
//  .then(parsePresidentsList)
//  .then(console.log)

