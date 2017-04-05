'use strict'

const forEach = function (array, callback) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    callback(element, i, array)
  }
}

module.exports = forEach
