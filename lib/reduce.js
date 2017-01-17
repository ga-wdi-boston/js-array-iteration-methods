'use strict';

const reduce = function (originalArray, callback, initialValue) {
  const workingArray = originalArray.slice();
  let previous = initialValue;
  if (typeof initialValue === 'undefined') {
    previous = workingArray.shift();
  }

  workingArray.forEach(function (element, index /*, workingArray  */) {
    previous = callback(previous, element, index, originalArray);
  });

  return previous;
};

module.exports = reduce;
