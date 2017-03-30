'use strict'

const map = function (array, callback) {
  const result = new Array(array.length)
  array.forEach((e, i, a) => { result[i] = callback(e, i, a) })
  return result
}

module.exports = map
