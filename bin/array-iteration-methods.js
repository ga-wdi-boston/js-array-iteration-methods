'use strict';

const forEach = require('../lib/for-each.js');

const array = new Array(10).fill(1).map((e, i) => e * i);

forEach(array, (e, i, a) => console.log(a === array));
