'use strict'

const examples = require('../lib/examples')
const filter = require('../lib/filter.js')

const workingArray = examples.numbers.whole

const result = filter(workingArray, (e, i, a) => e > 7)

console.log('filter result', result)
