#!/usr/bin/env node
'use strict'

const examples = require('../lib/examples')
const filter = require('../lib/filter.js')

const loadCities = examples.cities.loadCities

loadCities((cities) => {
  const citySubset = filter(cities, (e, i, a) => e.country === 'BR')
  console.log(citySubset)
})
