#!/usr/bin/env node
'use strict'

const examples = require('../lib/examples')
const findIndex = require('../lib/find-index.js')

const loadCities = examples.cities.loadCities

loadCities((cities) => {
  const cityIndex = findIndex(cities, (e, i, a) => e.country === 'BR')
  console.log(cities[cityIndex])
})
