'use strict'

const forEach = function (array, callback) {
  let element
  for (let i = 0; i < array.length; i++) {
    element = array[i]
    callback(element, i, array)
  }
}

module.exports = forEach
