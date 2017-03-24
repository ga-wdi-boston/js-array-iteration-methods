'use strict'

const forEach = function (array, callback) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index]
    callback(element, index, array)
  }
}

module.exports = forEach
