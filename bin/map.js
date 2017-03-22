'use strict'

const examples = require('../lib/examples')
const map = require('../lib/map.js')

const workingArray = examples.numbers.whole

const result = map(workingArray, (e /*, i, a */) => e + 1)

console.log('map result', result)
