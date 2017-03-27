#!/usr/bin/env node
'use strict'

const examples = require('../lib/examples')
const count = require('../lib/count.js')

const workingArray = examples.numbers.whole

const result = count(workingArray, (e, i, a) => e > 0)

console.log('count result', result)
