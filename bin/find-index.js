#!/usr/bin/env node
'use strict'

const examples = require('../lib/examples')
const findIndex = require('../lib/find-index.js')

const workingArray = examples.numbers.fibonacci

const result = findIndex(workingArray, (e, i, a) => e === 13)

console.log('findIndex result', result)
