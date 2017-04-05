'use strict'

const reduce = function (originalArray, callback, initialValue) {
  // make a shallow copy of originalArray
  const workingArray = originalArray.slice()
  // store initialValue in accumulator
  let accumulator = initialValue
  // set offset to 0
  let offset = 0
  // if initialValue not set when reduce invoked
  if (arguments.length < 3) {
    // then use the first value of the array as
    // the initial value for the accumulator
    accumulator = workingArray.shift()
    // set offset to account for element removed from array
    offset = 1
  }

  workingArray.forEach((element, index, workingArray) => {
    // make sure the callback gets the originalArray
    // whether or not an initialValue was provided
    accumulator = callback(accumulator, element, index + offset, originalArray)
  })

  return accumulator
}

module.exports = reduce
