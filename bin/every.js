#!/usr/bin/env node
'use strict'

const examples = require('../lib/examples')
const every = require('../lib/every.js')

const workingArray = examples.numbers.fibonacci

const result = every(workingArray, (e, i, a) => e < 55)

console.log('every result', result)
