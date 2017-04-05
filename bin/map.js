#!/usr/bin/env node
'use strict'

const examples = require('../lib/examples')
const map = require('../lib/map.js')

// const workingArray = examples.numbers.whole

const loadCities = examples.cities.loadCities

loadCities((cities) => {
  const names = map(cities, (e, i, a) => e.name)
  console.log(names)
})
