'use strict';

let filter = function (array, callback) {
  let result = [];
  array.forEach(function (e, i, a) {
    if (callback(e, i, a)) {
      result.push(e);
    }
  });

  return result;
};

module.exports = filter;
