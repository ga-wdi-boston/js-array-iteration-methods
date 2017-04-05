#!/usr/bin/env node
'use strict'

const examples = require('../lib/examples')
const count = require('../lib/count.js')

const loadCities = examples.cities.loadCities

loadCities((cities) => {
  const countOfCities = count(cities, (e, i, a) => e.country === 'BR')
  console.log(countOfCities)
})
