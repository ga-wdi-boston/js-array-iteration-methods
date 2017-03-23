'use strict'

const City = require('./city.js')

const loadCities = (callback) =>
  new Promise((resolve, reject) => {
    const cities = []
    const fs = require('fs')
    const parse = require('csv').parse
    const parser = parse({ columns: true })

    const input = fs.createReadStream('data/cities.csv')
    input.on('error', e => reject(e))

    parser.on('readable', function () {
      let record
      while ((record = parser.read())) {
        cities.push(new City(record))
      }
    })

    parser.on('error', e => reject(e))
    parser.on('finish', () => resolve(cities))
    input.pipe(parser)
  }).then(callback).catch(console.error)

module.exports = loadCities
