'use strict'

const map = function (array, callback) {
  const result = new Array(array.length)
  array.forEach(function (element, index, callbackArray) {
    result[index] = callback(element, index, callbackArray)
  })

  return result
}

module.exports = map
