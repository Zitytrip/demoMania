"use strict;";

var sleep = require('sleep-promise');

const sayHello = async function () {
  try {
    console.log("sleeping...");
    await sleep(3000);
    console.log('Hallo Welt!');
  } catch (err) {
     console.log("error!");
     console.log(err);
  }
};

sayHello();
