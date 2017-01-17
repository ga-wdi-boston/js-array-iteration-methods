'use strict';

const examples = require('../lib/examples');
const every = require('../lib/every.js');

let workingArray = examples.numbers.whole;

let result = every(workingArray, (e /*, i, a */) => e > 0);

console.log('every result', result);
