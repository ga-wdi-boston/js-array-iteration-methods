'use strict';

const examples = require('../lib/examples');
const find = require('../lib/find.js');

let workingArray = examples.numbers.whole;

let result = find(workingArray, (e /*, i, a */) => e === 7);

console.log('find result', result);
