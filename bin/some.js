'use strict';

const examples = require('../lib/examples');
const some = require('../lib/some.js');

let workingArray = examples.numbers.whole;

let result = some(workingArray, (e /*, i, a */) => e > 0);

console.log('some result', result);
