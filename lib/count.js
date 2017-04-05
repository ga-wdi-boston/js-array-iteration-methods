'use strict'

const count = function (array, callback) {
  return array.filter(callback).length
  // let result = 0
  // array.forEach((e, i, a) => {
  //   if (callback(e, i, a)) {
  //     result++
  //   }
  // })
  // return result
}

module.exports = count
