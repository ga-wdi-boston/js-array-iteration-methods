#!/usr/bin/env node
'use strict'

const examples = require('../lib/examples')
const count = require('../lib/count.js')

const loadCities = examples.cities.loadCities

loadCities((cities) => {
  const result = count(cities, (city) => city.country === 'UK')
  console.log(result)
})
