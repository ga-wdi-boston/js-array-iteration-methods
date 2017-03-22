'use strict'

const examples = require('../lib/examples')
const find = require('../lib/find.js')

const workingArray = examples.numbers.whole

const result = find(workingArray, (e /*, i, a */) => e === 7)

console.log('find result', result)
