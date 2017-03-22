'use strict'

const loadCities = require('./load-cities')

const whole = new Array(11).fill(1).map((e, i /*, a */) => e * i)
const even = new Array(11).fill(2).map((e, i /*, a */) => e * i)
const odd = new Array(11).fill(2).map((e, i /*, a */) => (e * i) + 1)
const fibonacci = ((f0, f1, count) => {
  const fibs = [f0, f1]
  for (let i = 2; i < count; i++) {
    fibs[i] = fibs[i - 1] + fibs[i - 2]
  }

  return fibs
})(0, 1, 11)

module.exports = {
  numbers: {
    whole,
    even,
    odd,
    fibonacci
  },
  cities: {
    loadCities
  }
}
