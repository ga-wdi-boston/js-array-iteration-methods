'use strict'

const count = function (array, callback) {
  return array.filter(callback).length
}

module.exports = count
