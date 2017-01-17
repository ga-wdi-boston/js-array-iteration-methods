'use strict';

const examples = require('../lib/examples');
const forEach = require('../lib/for-each.js');

let workingArray = examples.numbers.whole;

forEach(workingArray, (e, i, a) => {
  console.log(e, i, a === workingArray);
});
