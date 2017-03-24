'use strict'

const filter = function (array, callback) {
  const result = []  // equivalent to `const result = new Array();`
  array.forEach(function (e, i, a) {
    if (callback(e, i, a)) {
      result.push(e)
    }
  })

  return result
}

module.exports = filter
