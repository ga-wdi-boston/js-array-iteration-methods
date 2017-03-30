'use strict'

const some = function (array, callback) {
  const index = array.findIndex(callback)
  return index >= 0
}

module.exports = some
