#!/usr/bin/env node
'use strict'

const examples = require('../lib/examples')
const filter = require('../lib/filter.js')

const loadCities = examples.cities.loadCities

loadCities((cities) => {
  const filteredCities = filter(cities, (city) => city.country === 'UK')
  console.log(filteredCities)
})
