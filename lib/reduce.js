'use strict';

let reduce = function (array, callback, init) {
  let previous;
  if (typeof init !== 'undefined') {
    previous = init;
    array.forEach(function (e, i, a) {
      previous = callback(previous, e, i, a);
    });
  } else {
    let slice = array.slice(1);
    previous = array[0];
    slice.forEach(function (e, i) {
      previous = callback(previous, e, i + 1, array);
    });
  }

  return previous;
};

module.exports = reduce;
