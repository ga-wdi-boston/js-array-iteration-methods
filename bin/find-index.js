'use strict'

const examples = require('../lib/examples')
const findIndex = require('../lib/find-index.js')

const workingArray = examples.numbers.whole

const result = findIndex(workingArray, (e /*, i, a */) => e === 7)

console.log('findIndex result', result)
