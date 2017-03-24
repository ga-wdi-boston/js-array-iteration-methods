'use strict'

const examples = require('../lib/examples')
const some = require('../lib/some.js')

const workingArray = examples.numbers.whole

const result = some(workingArray, (e, i, a) => e > 0)

console.log('some result', result)
