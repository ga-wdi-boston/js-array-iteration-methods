#!/usr/bin/env node
'use strict'

const examples = require('../lib/examples')
const some = require('../lib/some.js')

const loadCities = examples.cities.loadCities

loadCities((cities) => {
  const matches = some(cities, (e, i, a) => e.country === 'JO')
  console.log(matches)
})
