'use strict'

const filter = function (array, callback) {
  const result = []
  array.forEach((e, i, a) => {
    if (callback(e, i, a)) result.push(e)
  })
  return result
}

module.exports = filter
