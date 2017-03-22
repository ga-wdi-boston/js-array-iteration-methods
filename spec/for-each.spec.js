'use strict'

// Allow chai syntax like `expect(foo).to.be.ok;`
// jshint -W030

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const expect = chai.expect

const forEach = require('../lib/for-each')

describe('forEach', function () {
  describe('check callback arguments', function () {
    const array = [1, 2, 3]

    it('passes only numbers as first argument', function () {
      let success = true
      let index = 0

      const callback = function (e, i, a) {
        success = success &&
          typeof currentValue === 'number' &&
          index++ === i &&
          array === a
      }

      forEach(array, callback)

      expect(success).to.be.true
      expect(index).to.be.above(0)
    })
  })
})
