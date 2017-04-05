#!/usr/bin/env node
'use strict'

const examples = require('../lib/examples')
const find = require('../lib/find.js')

const loadCities = examples.cities.loadCities

loadCities((cities) => {
  const city = find(cities, (e, i, a) => e.name === 'New York')
  console.log(city)
})
