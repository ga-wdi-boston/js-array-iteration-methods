'use strict'

const find = function (array, callback) {
  const index = array.findIndex(callback)
  return index < 0 ? undefined : array[index]
}

module.exports = find
