'use strict'

const find = function (array, callback) {
  const index = array.findIndex(callback)
  return array[index]
}

module.exports = find
