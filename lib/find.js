'use strict'

const find = function (array, callback) {
  const index = array.findIndex(callback)
  const element = array[index]
  return element
  // for (let i = 0; i < array.length; i++) {
  //   if (callback(array[i], i, array)) {
  //     return array[i]
  //   }
  // }
}

module.exports = find
