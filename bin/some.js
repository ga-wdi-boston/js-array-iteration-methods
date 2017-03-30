#!/usr/bin/env node
'use strict'

const examples = require('../lib/examples')
const some = require('../lib/some.js')

const workingArray = examples.numbers.fibonacci

const result = some(workingArray, (e, i, a) => e === 10)

console.log('some result', result)
