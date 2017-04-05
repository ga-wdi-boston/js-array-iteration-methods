#!/usr/bin/env node
'use strict'

const examples = require('../lib/examples')
const reduce = require('../lib/reduce.js')

const loadCities = examples.cities.loadCities

loadCities((cities) => {
  const city = reduce(cities,
    (a, e, i, array) => +a.population > +e.population ? a : e)
  console.log(city === cities[cities.length - 1])
})
