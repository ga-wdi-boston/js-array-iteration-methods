'use strict';

let every = function (array, callback) {
  return !array.some((e, i, a) => !callback(e, i, a));
};

module.exports = every;
