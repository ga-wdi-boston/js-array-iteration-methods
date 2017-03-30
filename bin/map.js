#!/usr/bin/env node
'use strict'

const examples = require('../lib/examples')
// const map = require('../lib/map.js')

const workingArray = examples.numbers.fibonacci

const transform = function (e, i, a) {
  return e * 2
}

// const result = map(workingArray, transform)
const result = workingArray.map(transform)

console.log('map input', workingArray)
console.log('map result', result)
