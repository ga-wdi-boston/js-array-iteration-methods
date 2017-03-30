#!/usr/bin/env node
'use strict'

const examples = require('../lib/examples')
const find = require('../lib/find.js')

const workingArray = examples.numbers.fibonacci

const result = find(workingArray, (e, i, a) => e > 5 && e < 10)

console.log('find result', result)
