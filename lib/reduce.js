'use strict'

const reduce = function (originalArray, callback, initialValue) {
  // make a shallow copy of the entire originalArray
  const workingArray = originalArray.slice()
  // save initialValue as previous
  let previous = initialValue
  // if initialValue not passed as an argument
  if (arguments.length < 3) {
    // make the first element take its place
    previous = workingArray.shift()
  }
  // for every element
  workingArray.forEach(function (element, index, workingArray) {
    // call the callback, setting previous to its return value
    previous = callback(previous, element, index, originalArray)
  })

  return previous
}

module.exports = reduce
