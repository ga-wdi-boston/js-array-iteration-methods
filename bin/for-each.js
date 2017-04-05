#!/usr/bin/env node
'use strict'

const examples = require('../lib/examples')
const forEach = require('../lib/for-each.js')

// const workingArray = examples.numbers.fibonacci

const loadCities = examples.cities.loadCities

loadCities((cities) => {
  forEach(cities, (e, i, a) => {
    console.log(e, i, a === cities)
  })
})
