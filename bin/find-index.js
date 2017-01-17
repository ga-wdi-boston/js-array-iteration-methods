'use strict';

const examples = require('../lib/examples');
const findIndex = require('../lib/find-index.js');

let workingArray = examples.numbers.whole;

let result = findIndex(workingArray, (e /*, i, a */) => e === 7);

console.log('findIndex result', result);
