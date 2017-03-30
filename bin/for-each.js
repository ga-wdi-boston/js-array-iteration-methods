#!/usr/bin/env node
'use strict'

const examples = require('../lib/examples')
// const forEach = require('../lib/for-each.js')

const workingArray = examples.numbers.fibonacci

// forEach(workingArray, (e, i, a) => console.log(e, i))
workingArray.forEach((e, i, a) => console.log(e, i))
