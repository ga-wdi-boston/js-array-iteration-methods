'use strict';

const examples = require('../lib/examples');
const reduce = require('../lib/reduce.js');

let workingArray = examples.numbers.whole;

let result = reduce(workingArray, (p, c /*, i, a */) => p + c);

console.log('reduce result', result);
