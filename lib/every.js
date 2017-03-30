'use strict'

const every = function (array, callback) {
  // using some
  // return !array.some((e, i, a) => !callback(e, i, a))

  // using findIndex
  // return array.findIndex((e, i, a) => !callback(e, i, a)) < 0

  // direct iteration
  // for (let i = 0; i < array.length; i++) {
  //   if (!callback(array[i], i, array)) return false
  // }
  // return true
}

module.exports = every
