'use strict';

var forEach = require('../lib/for-each.js');

xdescribe('forEach', function() {

  xdescribe('check callback arguments', function() {

    var array = [1, 2, 3];

    xit('passes only numbers as first argument', function() {
      var success;

      var callback = function callback(currentValue, index, array) {
        success = typeof currentValue === 'number';
      };

      forEach(array, callback);

      expect(success).toBe(true);
    });

  });

});
