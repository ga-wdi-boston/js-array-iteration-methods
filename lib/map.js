'use strict'

const map = function (array, callback) {
  const result = new Array(array.length)
  array.forEach((element, index, theArray) => {
    result[index] = callback(element, index, theArray)
  })
  return result
}

module.exports = map
