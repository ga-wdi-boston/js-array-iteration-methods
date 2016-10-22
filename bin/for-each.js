'use strict';

const forEach = require('../lib/for-each.js');

const array = [];

forEach(array, (e, i, a) => console.log(a === array));
