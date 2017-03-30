#!/usr/bin/env node
'use strict'

const examples = require('../lib/examples')
const reduce = require('../lib/reduce.js')

// const workingArray = examples.numbers.whole

const loadCities = examples.cities.loadCities

loadCities((cities) => {
  const city = reduce(cities, (p, c) => {
    if (+p.population > +c.population) return p
    return c
  })
  console.log(city)
})

// const result = reduce(workingArray, (p, c, i, a) => p > c ? p : c)

// console.log('reduce result', result)
